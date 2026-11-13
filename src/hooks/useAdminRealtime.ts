"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { baseApi, resolveApiBase } from "@/store/api/baseApi";

type AdminSsePayload = {
  type?: "activity" | "payment" | "rate" | string;
  action?: string;
  at?: string;
};

/**
 * Admin-only SSE via short ticket (access JWT never in EventSource URL).
 */
export function useAdminRealtime() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((s) => s.auth.accessToken);
  const esRef = useRef<EventSource | null>(null);

  useEffect(() => {
    if (!token) {
      esRef.current?.close();
      esRef.current = null;
      return;
    }

    let cancelled = false;
    let es: EventSource | null = null;
    let renewTimer: ReturnType<typeof setTimeout> | null = null;

    async function connect() {
      try {
        const base = resolveApiBase();
        const res = await fetch(`${base}/admin/events/ticket`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) return;
        const body = (await res.json()) as { ticket?: string; expiresAt?: string };
        if (!body.ticket || cancelled) return;

        es = new EventSource(
          `${base}/admin/events?ticket=${encodeURIComponent(body.ticket)}`,
        );
        esRef.current = es;

        es.onmessage = (msg) => {
          let payload: AdminSsePayload = {};
          try {
            payload = JSON.parse(msg.data) as AdminSsePayload;
          } catch {
            return;
          }
          if (payload.type === "activity") {
            dispatch(baseApi.util.invalidateTags(["Activity", "Dashboard"]));
            return;
          }
          if (payload.type === "payment") {
            dispatch(
              baseApi.util.invalidateTags(["Payments", "Dashboard", "Players"]),
            );
            return;
          }
          if (payload.type === "rate") {
            dispatch(
              baseApi.util.invalidateTags(["Payments", "Dashboard", "Activity"]),
            );
          }
        };

        // Renew ticket before expiry (~50s) so stream stays alive
        renewTimer = setTimeout(() => {
          es?.close();
          if (!cancelled) void connect();
        }, 50_000);
      } catch {
        // ignore; will retry on next token/effect
      }
    }

    void connect();

    return () => {
      cancelled = true;
      if (renewTimer) clearTimeout(renewTimer);
      es?.close();
      if (esRef.current === es) esRef.current = null;
    };
  }, [token, dispatch]);
}
