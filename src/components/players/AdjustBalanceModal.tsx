"use client";

import { FormEvent, useState } from "react";
import type { PlayerRow } from "./players-data";

type Props = {
  player: PlayerRow;
  busy?: boolean;
  onClose: () => void;
  onSubmit: (input: {
    direction: "credit" | "debit";
    amount: string;
    note?: string;
  }) => Promise<void>;
};

export function AdjustBalanceModal({
  player,
  busy,
  onClose,
  onSubmit,
}: Props) {
  const [direction, setDirection] = useState<"credit" | "debit">("credit");
  const [amount, setAmount] = useState("10");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!/^\d+(\.\d{1,4})?$/.test(amount) || Number(amount) <= 0) {
      setError("Enter a valid USD amount (max 4 decimals).");
      return;
    }
    try {
      await onSubmit({
        direction,
        amount,
        note: note.trim() || undefined,
      });
      onClose();
    } catch (err) {
      setError(extractError(err));
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="adjust-balance-title"
        className="w-full max-w-md rounded-xl border border-[#d4af37]/45 bg-[#0c0c0c] p-5 shadow-xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              id="adjust-balance-title"
              className="font-[family-name:var(--font-cinzel)] text-lg tracking-[0.12em] text-[#e8c547]"
            >
              ADJUST BALANCE
            </h3>
            <p className="mt-1 text-sm text-[#9a9280]">
              {player.username} · wallet ${player.balanceUsd.toFixed(2)} USD
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#9a9280] hover:text-[#e8c547]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
          <div className="flex gap-2">
            {(["credit", "debit"] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDirection(d)}
                className={`flex-1 rounded-md border px-3 py-2 text-sm font-semibold capitalize ${
                  direction === d
                    ? d === "credit"
                      ? "border-[#2ecc71]/55 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]"
                      : "border-[#e74c3c]/55 bg-[rgba(120,30,30,0.35)] text-[#ff8f8f]"
                    : "border-[#3a3220] text-[#c5bba3]"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <label className="block">
            <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.12em] text-[#d4af37]">
              AMOUNT (USD)
            </span>
            <input
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value.replace(/[^\d.]/g, ""))
              }
              inputMode="decimal"
              className="w-full rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2.5 text-sm text-[#f5efe0]"
              disabled={busy}
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.12em] text-[#d4af37]">
              NOTE (OPTIONAL)
            </span>
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Reason for adjustment"
              className="w-full rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2.5 text-sm text-[#f5efe0] placeholder:text-[#6b6560]"
              disabled={busy}
            />
          </label>

          {error ? (
            <p className="rounded-md border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.25)] px-3 py-2 text-sm text-[#ff8f8f]">
              {error}
            </p>
          ) : null}

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-md border border-[#3a3220] px-3 py-2.5 text-sm text-[#c5bba3]"
              disabled={busy}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={busy}
              className="flex-1 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-3 py-2.5 text-sm font-extrabold tracking-[0.1em] text-[#1a1205] disabled:opacity-60"
            >
              {busy ? "SAVING…" : "CONFIRM"}
            </button>
          </div>
        </form>
      </div>
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
  return "Could not adjust balance.";
}
