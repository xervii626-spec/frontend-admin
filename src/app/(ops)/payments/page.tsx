"use client";

import { useEffect, useMemo, useState } from "react";
import { PaymentsTable } from "@/components/payments/PaymentsTable";
import { mapAdminPaymentToRow } from "@/components/payments/payments-data";
import {
  useApprovePaymentMutation,
  useGetAdminPaymentsQuery,
  useGetAdminRateQuery,
  useRejectPaymentMutation,
} from "@/store/api/paymentsApi";

type StatusTab = "pending" | "approved" | "all";

export default function PaymentsPage() {
  const [now, setNow] = useState(() => new Date());
  const [statusTab, setStatusTab] = useState<StatusTab>("pending");
  const [actionId, setActionId] = useState<number | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const {
    data: rateData,
    isFetching: rateLoading,
  } = useGetAdminRateQuery(undefined, { refetchOnMountOrArgChange: true });
  const {
    data: paymentsData,
    isFetching: paymentsFetching,
    refetch,
  } = useGetAdminPaymentsQuery(
    {
      status: statusTab === "all" ? undefined : statusTab,
      page: 1,
      limit: 50,
    },
    { refetchOnMountOrArgChange: true },
  );

  const [approvePayment] = useApprovePaymentMutation();
  const [rejectPayment] = useRejectPaymentMutation();

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const payments = useMemo(
    () => (paymentsData?.items ?? []).map(mapAdminPaymentToRow),
    [paymentsData],
  );

  const rate = Number(rateData?.mmkPerUsd ?? 0);

  const dateLabel = now
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Yangon",
    })
    .toUpperCase();

  const timeLabel = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Yangon",
  });

  async function onApprove(id: number) {
    setActionError(null);
    setActionId(id);
    try {
      await approvePayment({ id }).unwrap();
    } catch (err) {
      setActionError(extractApiError(err, "Approve failed."));
    } finally {
      setActionId(null);
    }
  }

  async function onReject(id: number) {
    setActionError(null);
    setActionId(id);
    try {
      await rejectPayment({ id }).unwrap();
    } catch (err) {
      setActionError(extractApiError(err, "Reject failed."));
    } finally {
      setActionId(null);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-[family-name:var(--font-cinzel)] text-[1.75rem] font-semibold tracking-[0.12em] text-[#e8c547]">
            CASHIER DESK
          </h2>
          <div className="mt-2 mb-2 flex max-w-[220px] items-center gap-2 text-[#d4af37]">
            <span className="h-px flex-1 bg-gradient-to-r from-[#d4af37] to-[#d4af37]/30" />
            <span className="text-[0.45rem]">◆</span>
            <span className="h-px flex-1 bg-gradient-to-l from-[#d4af37] to-[#d4af37]/30" />
          </div>
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#8a8070]">
            DEPOSIT &amp; CASHOUT REQUESTS
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <p className="text-[0.85rem] font-medium tabular-nums text-[#e8e0d0]">
            {timeLabel}{" "}
            <span className="text-[#8a8070]">|</span> {dateLabel}
          </p>
          <span className="inline-flex items-center rounded-full border border-[#d4af37]/50 bg-[rgba(120,90,20,0.25)] px-3 py-1.5 text-[0.72rem] font-semibold tracking-wide text-[#e8c547]">
            1 USD ={" "}
            {rateLoading && !rateData
              ? "…"
              : (rate || 0).toLocaleString("en-US")}{" "}
            MMK
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["pending", "Pending"],
            ["approved", "Approved"],
            ["all", "All"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setStatusTab(key)}
            className={`rounded-full border px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.12em] transition ${
              statusTab === key
                ? "border-[#d4af37] bg-[rgba(120,90,20,0.35)] text-[#e8c547]"
                : "border-[#3a3220] bg-[#121212] text-[#c5bba3] hover:border-[#d4af37]/45"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <PaymentsTable
        payments={payments}
        loading={paymentsFetching && !paymentsData}
        actionId={actionId}
        error={actionError}
        statusTab={statusTab}
        onRefresh={() => {
          setActionError(null);
          void refetch();
        }}
        onApprove={onApprove}
        onReject={onReject}
      />
    </div>
  );
}

function extractApiError(err: unknown, fallback: string): string {
  if (err && typeof err === "object" && "data" in err) {
    const data = (err as { data?: { message?: unknown } }).data;
    const message = data?.message;
    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string" && message.trim()) return message;
  }
  return fallback;
}
