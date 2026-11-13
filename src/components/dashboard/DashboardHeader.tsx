"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCredentials } from "@/store/features/auth/authSlice";
import { clearAuthSession } from "@/lib/auth-storage";
import { useAdminLogoutMutation } from "@/store/api/authApi";
import { useGetDashboardSummaryQuery } from "@/store/api/dashboardApi";

export function DashboardHeader() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const admin = useAppSelector((s) => s.auth.admin);
  const [logout, { isLoading }] = useAdminLogoutMutation();
  const { data: summary, isFetching } = useGetDashboardSummaryQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  async function onLogout() {
    try {
      await logout().unwrap();
    } catch {
      // clear local even if API fails
    }
    dispatch(clearCredentials());
    clearAuthSession();
    router.replace("/login");
  }

  const label = (admin?.username || "admin").toUpperCase();
  const role =
    admin?.displayName ||
    (admin?.role ? admin.role.replace(/^\w/, (c) => c.toUpperCase()) : "Supervisor");

  const rate = summary?.mmkPerUsd
    ? Number(summary.mmkPerUsd).toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    : "—";

  return (
    <header className="sticky top-0 z-20 shrink-0 border-b border-[#2a2418] bg-[#070707] px-6 py-4 md:px-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="flex items-center gap-2 font-[family-name:var(--font-cinzel)] text-[1.15rem] font-semibold tracking-[0.08em] text-[#e8c547] md:text-[1.35rem]">
              <CrownIcon />
              SHWE DUNN CASINO OPERATIONS
            </h1>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2ecc71]/35 bg-[rgba(22,90,50,0.35)] px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-[#7dffa3]">
              <span className="sd-live-dot" aria-hidden />
              LIVE
            </span>
          </div>
          <p className="mt-1 text-[0.72rem] font-semibold tracking-[0.2em] text-[#8a8070]">
            CONTROL ROOM DASHBOARD
            {isFetching ? (
              <span className="ml-2 font-normal tracking-normal text-[#5c5344]">
                updating…
              </span>
            ) : null}
          </p>
        </div>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2.5 rounded-lg border border-[#3a3220] bg-[#121212] px-3 py-2 text-left transition hover:border-[#d4af37]/45"
          >
            <span className="flex size-8 items-center justify-center rounded-full border border-[#d4af37]/45 bg-[#1a160c] text-[#e8c547]">
              <UserIcon />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[0.78rem] font-semibold tracking-wide text-[#f5efe0]">
                {label}
              </span>
              <span className="block text-[0.62rem] tracking-[0.12em] text-[#8a8070]">
                {role}
              </span>
            </span>
            <ChevronIcon />
          </button>

          {open ? (
            <div className="absolute right-0 z-20 mt-2 min-w-[160px] overflow-hidden rounded-lg border border-[#3a3220] bg-[#121212] shadow-xl">
              <button
                type="button"
                onClick={onLogout}
                disabled={isLoading}
                className="block w-full px-4 py-2.5 text-left text-sm text-[#f5efe0] transition hover:bg-[#1a160c] hover:text-[#e8c547] disabled:opacity-60"
              >
                {isLoading ? "Logging out…" : "Log out"}
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
        <StatChip
          label="LIVE USERS"
          value={summary ? String(summary.liveUsers) : "—"}
          hint="Active logins"
        />
        <Link href="/payments?status=pending&type=deposit" className="block">
          <StatChip
            label="PENDING DEPOSIT"
            value={summary ? String(summary.pendingDeposits) : "—"}
            hint="Awaiting review"
            accent="gold"
          />
        </Link>
        <Link href="/payments?status=pending&type=withdraw" className="block">
          <StatChip
            label="PENDING WITHDRAW"
            value={summary ? String(summary.pendingWithdrawals) : "—"}
            hint="Awaiting review"
            accent="gold"
          />
        </Link>
        <Link href="/rate" className="block">
          <StatChip
            label="RATE"
            value={rate === "—" ? "—" : `1 USD = ${rate} MMK`}
            hint="FX setting"
          />
        </Link>
      </div>
    </header>
  );
}

function StatChip({
  label,
  value,
  hint,
  accent,
}: {
  label: string;
  value: string;
  hint: string;
  accent?: "gold";
}) {
  return (
    <div className="rounded-lg border border-[#2f291c] bg-[#101010] px-3 py-2.5 transition hover:border-[#d4af37]/35">
      <p className="text-[0.55rem] font-semibold tracking-[0.14em] text-[#8a8070]">
        {label}
      </p>
      <p
        className={`mt-1 truncate font-[family-name:var(--font-cinzel)] text-[1.05rem] font-semibold tabular-nums ${
          accent === "gold" ? "text-[#e8c547]" : "text-[#f5efe0]"
        }`}
      >
        {value}
      </p>
      <p className="mt-0.5 text-[0.62rem] text-[#5c5344]">{hint}</p>
    </div>
  );
}

function CrownIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 24 24" fill="#e8c547" aria-hidden>
      <path d="M3 18.2h18V20H3v-1.8Zm1-3.4 2.7-7.2L9.8 12l2.2-7 2.2 7 3.1-4.4 2.7 7.2H4Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19c1.4-3.2 3.8-4.8 7-4.8s5.6 1.6 7 4.8" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8a8070" strokeWidth="2" aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
