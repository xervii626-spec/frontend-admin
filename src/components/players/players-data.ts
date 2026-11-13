import type { AdminPlayerItem } from "@/store/api/playersApi";

export type PlayerStatus = "Active" | "Blocked";

export type PlayerRow = {
  id: number;
  username: string;
  nick: string;
  country: string | null;
  registered: string;
  balanceUsd: number;
  status: PlayerStatus;
  initials: string;
  isBlocked: boolean;
};

export function mapAdminPlayerToRow(p: AdminPlayerItem): PlayerRow {
  const balanceUsd = Number(p.wallet?.realBalance ?? 0);
  const initials = (p.username || p.nickname || "?")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase() || "?";

  return {
    id: p.id,
    username: p.username,
    nick: p.nickname,
    country: p.country,
    registered: formatRegistered(p.createdAt),
    balanceUsd: Number.isFinite(balanceUsd) ? balanceUsd : 0,
    status: p.isBlocked ? "Blocked" : "Active",
    initials,
    isBlocked: p.isBlocked,
  };
}

function formatRegistered(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
