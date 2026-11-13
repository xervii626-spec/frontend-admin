"use client";

import { useMemo, useState } from "react";
import type { PaymentRow } from "./payments-data";

type PaymentsTableProps = {
  payments: PaymentRow[];
  loading?: boolean;
  actionId?: number | null;
  error?: string | null;
  statusTab?: "pending" | "approved" | "all";
  onRefresh?: () => void;
  onApprove?: (id: number) => void;
  onReject?: (id: number) => void;
};

function formatMmk(n: number) {
  return n.toLocaleString("en-US");
}

function formatUsd(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function PaymentsTable({
  payments,
  loading,
  actionId,
  error,
  statusTab = "pending",
  onRefresh,
  onApprove,
  onReject,
}: PaymentsTableProps) {
  const [selected, setSelected] = useState<number[]>([]);

  const allIds = useMemo(() => payments.map((p) => p.id), [payments]);
  const allSelected =
    payments.length > 0 && selected.length === payments.length;

  function toggleAll() {
    setSelected(allSelected ? [] : allIds);
  }

  function toggleOne(id: number) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  const countLabel =
    statusTab === "approved"
      ? "APPROVED"
      : statusTab === "all"
        ? "REQUESTS"
        : "PENDING";

  return (
    <div className="overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c]">
      {error ? (
        <div className="border-b border-[#e74c3c]/35 bg-[rgba(120,30,30,0.25)] px-4 py-2.5 text-[0.82rem] text-[#ff8f8f]">
          {error}
        </div>
      ) : null}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1180px] border-collapse text-left">
          <thead>
            <tr className="bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1204]">
              <th className="w-12 px-3 py-3">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  aria-label="Select all payments"
                  className="size-3.5 accent-[#1a1204]"
                />
              </th>
              <th className="px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]">
                PLAYER
              </th>
              <th className="px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]">
                TYPE
              </th>
              <th className="px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]">
                STATUS
              </th>
              <th className="px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]">
                AMOUNT MMK
              </th>
              <th className="px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]">
                AMOUNT USD
              </th>
              <th className="px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]">
                METHOD
              </th>
              <th className="px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]">
                PAYOUT / REF
              </th>
              <th className="px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]">
                REQUESTED AT
              </th>
              <th className="px-3 py-3 text-center text-[0.65rem] font-extrabold tracking-[0.14em]">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={10}
                  className="px-4 py-10 text-center text-sm text-[#8a8070]"
                >
                  Loading payments…
                </td>
              </tr>
            ) : payments.length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  className="px-4 py-10 text-center text-sm text-[#8a8070]"
                >
                  No payment requests in this list.
                </td>
              </tr>
            ) : (
              payments.map((p) => {
                const busy = actionId === p.id;
                const canReview = p.status === "pending";
                return (
                  <tr
                    key={p.id}
                    className="border-t border-[#2a2418] transition hover:bg-white/[0.02]"
                  >
                    <td className="px-3 py-3.5">
                      <input
                        type="checkbox"
                        checked={selected.includes(p.id)}
                        onChange={() => toggleOne(p.id)}
                        aria-label={`Select ${p.player}`}
                        className="size-3.5 accent-[#d4af37]"
                      />
                    </td>
                    <td className="px-3 py-3.5">
                      <p className="text-sm font-semibold text-[#f5efe0]">
                        {p.player}
                      </p>
                      <span
                        className={`mt-1 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.58rem] font-semibold ${
                          p.tier === "VIP"
                            ? "border-[#d4af37]/50 bg-[rgba(120,90,20,0.35)] text-[#e8c547]"
                            : "border-[#2ecc71]/30 bg-[rgba(22,90,50,0.25)] text-[#9ad9b0]"
                        }`}
                      >
                        {p.tier === "VIP" ? <CrownIcon /> : null}
                        {p.tier}
                      </span>
                    </td>
                    <td className="px-3 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1 text-[0.78rem] font-bold tracking-wide ${
                          p.type === "DEPOSIT"
                            ? "text-[#7dffa3]"
                            : "text-[#ff8f8f]"
                        }`}
                      >
                        {p.type === "DEPOSIT" ? <UpIcon /> : <DownIcon />}
                        {p.type === "WITHDRAW" ? "CASHOUT" : p.type}
                      </span>
                    </td>
                    <td className="px-3 py-3.5">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-wide text-[#c5bba3]">
                        {p.status}
                      </span>
                    </td>
                    <td className="px-3 py-3.5">
                      <p className="text-sm font-semibold tabular-nums text-[#f5efe0]">
                        {formatMmk(p.amountMmk)}
                      </p>
                      <p className="text-[0.62rem] text-[#8a8070]">MMK</p>
                    </td>
                    <td className="px-3 py-3.5">
                      <p className="text-sm font-semibold tabular-nums text-[#f5efe0]">
                        {formatUsd(p.amountUsd)}
                      </p>
                      <p className="text-[0.62rem] text-[#8a8070]">USD</p>
                    </td>
                    <td className="px-3 py-3.5">
                      <span className="inline-flex items-center gap-2">
                        <MethodBadge method={p.method} />
                        <span className="text-sm text-[#e8e0d0]">{p.method}</span>
                      </span>
                    </td>
                    <td className="px-3 py-3.5 text-[0.78rem] text-[#c5bba3]">
                      {p.type === "WITHDRAW" ? (
                        <div className="space-y-0.5">
                          <p>
                            <span className="text-[#8a8070]">Name:</span>{" "}
                            {p.accountName}
                          </p>
                          <p className="font-mono">
                            <span className="text-[#8a8070]">Phone:</span>{" "}
                            {p.reference}
                          </p>
                        </div>
                      ) : (
                        <p className="font-mono">{p.reference}</p>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3.5 text-[0.78rem] text-[#a89a78]">
                      {p.requestedAt}
                    </td>
                    <td className="px-3 py-3.5">
                      {canReview ? (
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            disabled={busy || actionId != null}
                            onClick={() => onApprove?.(p.id)}
                            className="sd-gold-btn inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[0.65rem] font-extrabold tracking-[0.12em] text-[#1a1204] disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <CheckIcon />
                            {busy ? "…" : "APPROVE"}
                          </button>
                          <button
                            type="button"
                            disabled={busy || actionId != null}
                            onClick={() => onReject?.(p.id)}
                            className="inline-flex items-center gap-1.5 rounded-md border border-[#e74c3c]/45 bg-[rgba(90,20,20,0.55)] px-3 py-1.5 text-[0.65rem] font-extrabold tracking-[0.12em] text-[#ffb0b0] transition hover:border-[#e74c3c]/80 hover:bg-[rgba(120,30,30,0.65)] disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <XIcon />
                            REJECT
                          </button>
                        </div>
                      ) : (
                        <p className="text-center text-[0.72rem] uppercase tracking-wide text-[#8a8070]">
                          {p.status}
                        </p>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-[#2a2418] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-[0.72rem] leading-relaxed text-[#8a8070]">
          <ChipIcon />
          For cashout (withdraw), pay to the Name + Phone shown, then Approve.
        </p>
        <div className="flex items-center gap-3">
          <p className="text-[0.72rem] font-semibold tracking-[0.1em] text-[#e8c547]">
            {payments.length} {countLabel}
          </p>
          <button
            type="button"
            onClick={onRefresh}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#d4af37]/45 bg-[#121212] px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.12em] text-[#e8c547] transition hover:border-[#d4af37]/75"
          >
            <RefreshIcon />
            REFRESH
          </button>
        </div>
      </div>
    </div>
  );
}

function MethodBadge({ method }: { method: string }) {
  const m = method.toLowerCase();
  if (m.includes("kbz")) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#00a651] text-[0.5rem] font-black text-white">
        KBZ
      </span>
    );
  }
  if (m.includes("wave")) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[0.65rem] font-black text-[#1e88e5]">
        W
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#d4af37]/45 bg-[#1a160c] text-[0.55rem] font-black text-[#e8c547]">
      PAY
    </span>
  );
}

function CrownIcon() {
  return (
    <svg width="10" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 18.2h18V20H3v-1.8Zm1-3.4 2.7-7.2L9.8 12l2.2-7 2.2 7 3.1-4.4 2.7 7.2H4Z" />
    </svg>
  );
}

function UpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  );
}

function DownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M12 5v14" />
      <path d="m18 13-6 6-6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M21 12a9 9 0 1 1-2.6-6.3" />
      <path d="M21 4v6h-6" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.6"
      className="mt-0.5 shrink-0"
      aria-hidden
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2" />
    </svg>
  );
}
