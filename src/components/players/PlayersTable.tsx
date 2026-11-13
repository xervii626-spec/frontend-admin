"use client";

import type { PlayerRow, PlayerStatus } from "./players-data";

type PlayersTableProps = {
  players: PlayerRow[];
  loading?: boolean;
  actionBusy?: boolean;
  onToggleBlock?: (id: number, currentlyBlocked: boolean) => void;
  onAdjust?: (player: PlayerRow) => void;
  onEdit?: (player: PlayerRow) => void;
  onDelete?: (player: PlayerRow) => void;
};

const STATUS_CLASS: Record<PlayerStatus, string> = {
  Active:
    "border-[#2ecc71]/40 bg-[rgba(22,90,50,0.4)] text-[#7dffa3]",
  Blocked:
    "border-[#e74c3c]/45 bg-[rgba(120,30,30,0.4)] text-[#ff8f8f]",
};

function formatUsd(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function PlayersTable({
  players,
  loading,
  actionBusy,
  onToggleBlock,
  onAdjust,
  onEdit,
  onDelete,
}: PlayersTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1204]">
              <th className="px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]">
                USER
              </th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]">
                NICK
              </th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]">
                BALANCE USD
              </th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]">
                STATUS
              </th>
              <th className="px-4 py-3 text-center text-[0.68rem] font-extrabold tracking-[0.16em]">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-10 text-center text-sm text-[#8a8070]"
                >
                  Loading players…
                </td>
              </tr>
            ) : players.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-10 text-center text-sm text-[#8a8070]"
                >
                  No players match your filters.
                </td>
              </tr>
            ) : (
              players.map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-[#2a2418] transition hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#1a160c] text-[0.7rem] font-bold text-[#e8c547]">
                        {p.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#f5efe0]">
                          {p.username}
                        </p>
                        <p className="mt-0.5 text-[0.68rem] text-[#8a8070]">
                          ID {p.id} · Registered: {p.registered}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-[#e8e0d0]">{p.nick}</td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex items-center gap-2">
                      <span className="text-sm font-semibold tabular-nums text-[#f5efe0]">
                        {formatUsd(p.balanceUsd)}
                      </span>
                      <span className="rounded-md border border-[#2ecc71]/35 bg-[rgba(22,90,50,0.3)] px-1.5 py-0.5 text-[0.58rem] font-bold tracking-wide text-[#7dffa3]">
                        USD
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold ${STATUS_CLASS[p.status]}`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${
                          p.status === "Active" ? "bg-[#2ecc71]" : "bg-[#e74c3c]"
                        }`}
                        aria-hidden
                      />
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center justify-center gap-1.5">
                      <ActionBtn
                        label="Edit player"
                        disabled={actionBusy}
                        onClick={() => onEdit?.(p)}
                      >
                        <EditIcon />
                      </ActionBtn>
                      <ActionBtn
                        label="Adjust balance"
                        disabled={actionBusy}
                        onClick={() => onAdjust?.(p)}
                      >
                        <AdjustIcon />
                      </ActionBtn>
                      <ActionBtn
                        label={p.isBlocked ? "Unblock player" : "Block player"}
                        danger={!p.isBlocked}
                        disabled={actionBusy}
                        onClick={() => onToggleBlock?.(p.id, p.isBlocked)}
                      >
                        <BlockIcon />
                      </ActionBtn>
                      <ActionBtn
                        label="Delete player"
                        danger
                        disabled={actionBusy}
                        onClick={() => onDelete?.(p)}
                      >
                        <DeleteIcon />
                      </ActionBtn>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ActionBtn({
  children,
  label,
  danger = false,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex size-8 items-center justify-center rounded-md border transition disabled:cursor-not-allowed disabled:opacity-50 ${
        danger
          ? "border-[#e74c3c]/35 text-[#ff8f8f] hover:border-[#e74c3c]/7 hover:bg-[rgba(120,30,30,0.25)]"
          : "border-[#d4af37]/35 text-[#e8c547] hover:border-[#d4af37]/7 hover:bg-[rgba(120,90,20,0.25)]"
      }`}
    >
      {children}
    </button>
  );
}

function AdjustIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}

function BlockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <circle cx="10" cy="8" r="3" />
      <path d="M3.5 19c1.1-3.2 3.2-4.8 6.5-4.8 1.2 0 2.3.2 3.2.7" />
      <circle cx="18" cy="16.5" r="3.2" />
      <path d="M16.2 16.5h3.6" />
    </svg>
  );
}
