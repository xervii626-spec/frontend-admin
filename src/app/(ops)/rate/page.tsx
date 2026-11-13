"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  useGetAdminRateQuery,
  useSetAdminRateMutation,
} from "@/store/api/paymentsApi";

export default function RatePage() {
  const { data, isFetching, isError, error, refetch } = useGetAdminRateQuery(
    undefined,
    { refetchOnMountOrArgChange: true },
  );
  const [setRate, { isLoading: saving }] = useSetAdminRateMutation();

  const current = data?.mmkPerUsd ?? "";
  const [value, setValue] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    if (current) setValue(current);
  }, [current]);

  const previewUsd = useMemo(() => {
    const rate = Number(value || current || 0);
    if (!rate || !Number.isFinite(rate) || rate <= 0) return null;
    return (45_000 / rate).toFixed(4);
  }, [value, current]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);
    setSavedFlash(false);
    if (!/^\d+(\.\d{1,4})?$/.test(value) || Number(value) <= 0) {
      setFormError("Enter a positive MMK amount (max 4 decimals).");
      return;
    }
    try {
      await setRate({ mmkPerUsd: value }).unwrap();
      setSavedFlash(true);
    } catch (err) {
      setFormError(extractError(err));
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[1.75rem] font-semibold tracking-[0.14em] text-[#e8c547]">
          RATE
        </h2>
        <div className="mt-2 h-px max-w-[140px] bg-gradient-to-r from-[#d4af37] via-[#d4af37]/70 to-transparent" />
        <p className="mt-2 text-sm text-[#9a9280]">
          MMK per 1 USD for display &amp; new deposits/withdrawals
          {isFetching ? " · refreshing…" : ""}
        </p>
      </div>

      {isError ? (
        <div className="rounded-xl border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.2)] px-4 py-6 text-center">
          <p className="text-sm text-[#ff8f8f]">{extractError(error)}</p>
          <button
            type="button"
            onClick={() => refetch()}
            className="mt-3 rounded-md border border-[#d4af37]/50 px-3 py-1.5 text-xs font-semibold text-[#e8c547]"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c] p-5">
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-[#8a8070]">
              CURRENT FX
            </p>
            <p className="mt-3 font-[family-name:var(--font-cinzel)] text-2xl tracking-[0.08em] text-[#e8c547]">
              1 USD ={" "}
              <span className="tabular-nums">
                {current
                  ? Number(current).toLocaleString("en-US", {
                      maximumFractionDigits: 4,
                    })
                  : "—"}
              </span>{" "}
              MMK
            </p>
            <p className="mt-2 text-sm text-[#9a9280]">
              Wallet stays USD · display currency{" "}
              {data?.displayCurrency ?? "MMK"}
            </p>

            {previewUsd ? (
              <p className="mt-4 rounded-lg border border-[#2a2418] bg-[#101010] px-3 py-2.5 text-sm text-[#c5bba3]">
                Example: 45,000 MMK ≈{" "}
                <span className="font-semibold text-[#f5efe0]">
                  {previewUsd} USD
                </span>
              </p>
            ) : null}
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c] p-5"
          >
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-[#8a8070]">
              UPDATE RATE
            </p>
            <label className="mt-4 block">
              <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.12em] text-[#d4af37]">
                MMK PER 1 USD
              </span>
              <input
                value={value}
                onChange={(e) =>
                  setValue(e.target.value.replace(/[^\d.]/g, ""))
                }
                inputMode="decimal"
                disabled={saving || isFetching}
                className="w-full rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2.5 text-sm tabular-nums text-[#f5efe0]"
              />
            </label>

            {formError ? (
              <p className="mt-3 rounded-md border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.25)] px-3 py-2 text-sm text-[#ff8f8f]">
                {formError}
              </p>
            ) : null}
            {savedFlash ? (
              <p className="mt-3 rounded-md border border-[#2ecc71]/40 bg-[rgba(22,90,50,0.25)] px-3 py-2 text-sm text-[#7dffa3]">
                Rate saved. Admin screens update via live events.
              </p>
            ) : null}

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                disabled={saving || !current}
                onClick={() => {
                  setValue(current);
                  setFormError(null);
                  setSavedFlash(false);
                }}
                className="flex-1 rounded-md border border-[#3a3220] px-3 py-2.5 text-sm text-[#c5bba3] disabled:opacity-50"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={saving || value === current}
                className="flex-1 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-3 py-2.5 text-sm font-extrabold tracking-[0.1em] text-[#1a1205] disabled:opacity-60"
              >
                {saving ? "SAVING…" : "SAVE"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

function extractError(err: unknown): string {
  if (err && typeof err === "object" && "data" in err) {
    const data = (err as { data?: { message?: unknown } }).data;
    const message = data?.message;
    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string" && message.trim()) return message;
  }
  if (err && typeof err === "object" && "status" in err) {
    const status = (err as { status?: number | string }).status;
    if (status === 401) return "Admin session expired. Please log in again.";
    if (status === "FETCH_ERROR") {
      return "Cannot reach API. Is the backend running?";
    }
  }
  return "Could not load or save rate.";
}
