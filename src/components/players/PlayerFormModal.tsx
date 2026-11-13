"use client";

import { FormEvent, useState } from "react";
import type { PlayerRow } from "./players-data";

export type PlayerFormValues = {
  username?: string;
  nickname: string;
  password?: string;
  country?: string;
};

type Props = {
  mode: "create" | "edit";
  player?: PlayerRow | null;
  busy?: boolean;
  onClose: () => void;
  onSubmit: (values: PlayerFormValues) => Promise<void>;
};

export function PlayerFormModal({
  mode,
  player,
  busy,
  onClose,
  onSubmit,
}: Props) {
  const [username, setUsername] = useState(player?.username ?? "");
  const [nickname, setNickname] = useState(player?.nick ?? "");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState(player?.country ?? "");
  const [error, setError] = useState<string | null>(null);

  const title = mode === "create" ? "CREATE PLAYER" : "EDIT PLAYER";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const nick = nickname.trim();
    if (nick.length < 3) {
      setError("Nickname must be at least 3 characters.");
      return;
    }

    if (mode === "create") {
      const user = username.trim();
      if (user.length < 3) {
        setError("Username must be at least 3 characters.");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
    } else if (password && password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const countryCode = country.trim().toUpperCase();
    if (countryCode && countryCode.length !== 2) {
      setError("Country must be a 2-letter code (e.g. MM).");
      return;
    }

    try {
      await onSubmit({
        username: mode === "create" ? username.trim() : undefined,
        nickname: nick,
        password: password || undefined,
        country: countryCode || undefined,
      });
      onClose();
    } catch (err) {
      setError(extractError(err, mode));
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="player-form-title"
        className="w-full max-w-md rounded-xl border border-[#d4af37]/45 bg-[#0c0c0c] p-5 shadow-xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              id="player-form-title"
              className="font-[family-name:var(--font-cinzel)] text-lg tracking-[0.12em] text-[#e8c547]"
            >
              {title}
            </h3>
            {mode === "edit" && player ? (
              <p className="mt-1 text-sm text-[#9a9280]">
                {player.username} · ID {player.id}
              </p>
            ) : (
              <p className="mt-1 text-sm text-[#9a9280]">
                New account with $0.00 wallet
              </p>
            )}
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
          {mode === "create" ? (
            <label className="block">
              <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.12em] text-[#d4af37]">
                USERNAME
              </span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2.5 text-sm text-[#f5efe0]"
                disabled={busy}
                autoComplete="off"
              />
            </label>
          ) : null}

          <label className="block">
            <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.12em] text-[#d4af37]">
              NICKNAME
            </span>
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2.5 text-sm text-[#f5efe0]"
              disabled={busy}
              autoComplete="off"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.12em] text-[#d4af37]">
              {mode === "create" ? "PASSWORD" : "PASSWORD (OPTIONAL)"}
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === "edit" ? "Leave blank to keep" : undefined}
              className="w-full rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2.5 text-sm text-[#f5efe0] placeholder:text-[#6b6560]"
              disabled={busy}
              autoComplete="new-password"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.12em] text-[#d4af37]">
              COUNTRY (OPTIONAL)
            </span>
            <input
              value={country}
              onChange={(e) =>
                setCountry(e.target.value.replace(/[^a-zA-Z]/g, "").slice(0, 2))
              }
              placeholder="MM"
              className="w-full rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2.5 text-sm uppercase text-[#f5efe0] placeholder:text-[#6b6560]"
              disabled={busy}
              maxLength={2}
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
              {busy ? "SAVING…" : mode === "create" ? "CREATE" : "SAVE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function extractError(err: unknown, mode: "create" | "edit"): string {
  if (err && typeof err === "object" && "data" in err) {
    const data = (err as { data?: { message?: unknown } }).data;
    const message = data?.message;
    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string" && message.trim()) return message;
  }
  return mode === "create" ? "Could not create player." : "Could not update player.";
}
