import type { AdminPaymentItem } from "@/store/api/paymentsApi";

export type PaymentType = "DEPOSIT" | "WITHDRAW";
export type PlayerTier = "VIP" | "REGULAR";

export type PaymentRow = {
  id: number;
  player: string;
  tier: PlayerTier;
  type: PaymentType;
  status: string;
  amountMmk: number;
  amountUsd: number;
  method: string;
  /** Deposit slip / withdraw phone */
  reference: string;
  /** Withdraw account holder name (or deposit note) */
  accountName: string;
  requestedAt: string;
};

export function mapAdminPaymentToRow(item: AdminPaymentItem): PaymentRow {
  const isWithdraw = item.type === "withdraw";
  return {
    id: item.id,
    player: item.player?.username ?? `player#${item.playerId}`,
    tier: "REGULAR",
    type: isWithdraw ? "WITHDRAW" : "DEPOSIT",
    status: item.status,
    amountMmk: Number(item.amountMmk) || 0,
    amountUsd: Number(item.amountUsd) || 0,
    method: item.method?.trim() || "—",
    reference: item.reference?.trim() || "—",
    accountName: item.playerNote?.trim() || "—",
    requestedAt: formatRequestedAt(item.createdAt),
  };
}

function formatRequestedAt(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  const date = d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const time = d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  return `${date} · ${time}`;
}
