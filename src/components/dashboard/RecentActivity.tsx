"use client";

import { useState } from "react";
import { useGetAdminActivityQuery } from "@/store/api/activityApi";

const PAGE_SIZE = 20;

const STATUS_CLASS: Record<string, string> = {
  Settled: "bg-[rgba(22,90,50,0.55)] text-[#7dffa3] border-[#2ecc71]/35",
  Win: "bg-[rgba(22,90,50,0.35)] text-[#7dffa3] border-[#2ecc71]/50",
  "Rolled back": "bg-[rgba(90,40,40,0.45)] text-[#ffb4b4] border-[#e74c3c]/40",
};

function formatTime(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function formatUsd(value: string) {
  const n = Number(value);
  if (Number.isNaN(n)) return value;
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatMmk(value: string) {
  const n = Number(value);
  if (Number.isNaN(n)) return value;
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function RecentActivity() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching, refetch } =
    useGetAdminActivityQuery(
      { page, limit: PAGE_SIZE },
      { refetchOnMountOrArgChange: true },
    );

  const rows = data?.items ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <section className="sd-dash-card flex min-h-[70vh] w-full flex-col rounded-xl border border-[#2f291c] bg-[#101010]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2a2418] px-4 py-3">
        <h2 className="text-[0.72rem] font-bold tracking-[0.18em] text-[#e8c547]">
          RECENT ACTIVITY
        </h2>
        <button
          type="button"
          onClick={() => refetch()}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#3a3220] bg-[#161616] px-2.5 py-1 text-[0.65rem] text-[#c5bba3] hover:border-[#d4af37]/50"
        >
          {isFetching ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead className="sticky top-0 z-10 bg-[#101010]">
            <tr className="text-[0.58rem] tracking-[0.14em] text-[#8a8070]">
              <th className="px-4 py-2.5 font-semibold">TIME</th>
              <th className="px-3 py-2.5 font-semibold">PLAYER</th>
              <th className="px-3 py-2.5 font-semibold">ACTIVITY</th>
              <th className="px-3 py-2.5 font-semibold">GAME</th>
              <th className="px-3 py-2.5 font-semibold">AMOUNT</th>
              <th className="px-4 py-2.5 font-semibold">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-[0.8rem] text-[#8a8070]"
                >
                  Loading activity…
                </td>
              </tr>
            )}
            {!isLoading && isError && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-[0.8rem] text-[#ffb4b4]"
                >
                  Could not load activity. Check admin login / API.
                </td>
              </tr>
            )}
            {!isLoading && !isError && rows.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-[0.8rem] text-[#8a8070]"
                >
                  No bet / win activity yet.
                </td>
              </tr>
            )}
            {!isLoading &&
              !isError &&
              rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-t border-[#1f1a12] text-[0.78rem] text-[#e8e0d0]"
                >
                  <td className="whitespace-nowrap px-4 py-2.5 tabular-nums text-[#a89a78]">
                    {formatTime(row.createdAt)}
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center gap-2">
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#1a160c] text-[0.55rem] font-bold text-[#d4af37]">
                        {row.username.slice(-2).toUpperCase()}
                      </span>
                      {row.username}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-[#d4af37]">{row.activity}</td>
                  <td className="px-3 py-2.5 text-[#c5bba3]">
                    {row.gameId != null ? String(row.gameId) : "—"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5 font-semibold tabular-nums">
                    <span>${formatUsd(row.amountUsd)}</span>
                    <span className="ml-1.5 text-[0.68rem] font-normal text-[#8a8070]">
                      ({formatMmk(row.amountMmk)} MMK)
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <span
                      className={`inline-flex rounded-md border px-2 py-0.5 text-[0.62rem] font-semibold tracking-wide ${
                        STATUS_CLASS[row.statusLabel] ??
                        "bg-[#1a160c] text-[#c5bba3] border-[#3a3220]"
                      }`}
                    >
                      {row.statusLabel}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#2a2418] px-4 py-3">
        <p className="text-[0.65rem] text-[#8a8070]">
          Page {page} of {totalPages} · {total} total
          {isFetching ? " · updating…" : ""}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={page <= 1 || isFetching}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-md border border-[#3a3220] bg-[#161616] px-3 py-1.5 text-[0.7rem] text-[#c5bba3] disabled:opacity-40"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={page >= totalPages || isFetching}
            onClick={() => setPage((p) => p + 1)}
            className="rounded-md border border-[#3a3220] bg-[#161616] px-3 py-1.5 text-[0.7rem] text-[#c5bba3] disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
