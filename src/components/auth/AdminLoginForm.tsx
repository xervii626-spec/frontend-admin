"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SdLogo } from "@/components/brand/SdLogo";
import { useAdminLoginMutation } from "@/store/api/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/features/auth/authSlice";
import { saveAuthSession } from "@/lib/auth-storage";

function parseApiError(err: unknown): string {
  if (!err || typeof err !== "object") return "Login failed. Please try again.";
  const e = err as {
    status?: number | string;
    data?: { message?: string | string[] };
  };
  const msg = e.data?.message;
  if (Array.isArray(msg)) return msg.join(", ");
  if (typeof msg === "string") return msg;
  if (e.status === "FETCH_ERROR") {
    return "Cannot reach API. Is the backend running on port 5000?";
  }
  return "Invalid admin credentials";
}

export function AdminLoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useAdminLoginMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(
    () => username.trim().length >= 3 && password.length >= 6 && !isLoading,
    [username, password, isLoading],
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!canSubmit) return;

    try {
      const res = await login({
        username: username.trim(),
        password,
      }).unwrap();

      const admin = {
        id: res.admin.id,
        username: res.admin.username,
        displayName: res.admin.displayName,
        role: res.admin.role,
      };

      if (!res.refreshToken) {
        setError("Login response missing refresh token. Update the API.");
        return;
      }
      dispatch(
        setCredentials({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
          admin,
          remember,
        }),
      );
      saveAuthSession({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        admin,
        remember,
      });

      router.replace("/dashboard");
    } catch (err) {
      setError(parseApiError(err));
    }
  }

  return (
    <div className="sd-admin-card sd-animate-in relative w-full max-w-[520px] rounded-[20px] border border-[#d4af37]/80 bg-[rgba(8,8,8,0.4)] px-8 py-9 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-[30px] md:px-11 md:py-10">
      <div
        className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-[#d4af37]/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px] bg-[linear-gradient(180deg,rgba(212,175,55,0.1)_0%,transparent_30%,transparent_100%)]"
        aria-hidden
      />

      <Image
        src="/brand/filigree-tl-alpha.png"
        alt=""
        width={72}
        height={72}
        className="sd-filigree sd-filigree--tl"
        aria-hidden
        unoptimized
      />
      <Image
        src="/brand/filigree-tr-alpha.png"
        alt=""
        width={72}
        height={72}
        className="sd-filigree sd-filigree--tr"
        aria-hidden
        unoptimized
      />
      <Image
        src="/brand/filigree-bl-alpha.png"
        alt=""
        width={72}
        height={72}
        className="sd-filigree sd-filigree--bl"
        aria-hidden
        unoptimized
      />
      <Image
        src="/brand/filigree-br-alpha.png"
        alt=""
        width={72}
        height={72}
        className="sd-filigree sd-filigree--br"
        aria-hidden
        unoptimized
      />

      <div className="relative z-10 flex flex-col items-center">
        <SdLogo size={92} className="mb-5" />

        <h1 className="font-[family-name:var(--font-cinzel)] text-[1.65rem] font-semibold tracking-[0.14em] text-[#e8c547] md:text-[1.85rem]">
          STAFF ACCESS
        </h1>

        <div className="mt-3 mb-7 flex w-full max-w-[280px] items-center gap-3 text-[#d4af37]">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/80 to-[#d4af37]/50" />
          <span className="text-[0.68rem] font-medium tracking-[0.28em] text-[#e0c56a]">
            ADMIN PORTAL
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d4af37]/80 to-[#d4af37]/50" />
        </div>

        {error ? (
          <div
            role="alert"
            className="mb-4 w-full rounded-lg border border-red-500/45 bg-red-950/55 px-3 py-2.5 text-center text-sm text-red-200"
          >
            {error}
          </div>
        ) : null}

        <form className="w-full space-y-4" onSubmit={onSubmit}>
          <label className="block">
            <span className="mb-1.5 block text-[0.65rem] font-semibold tracking-[0.2em] text-[#d4af37]">
              USERNAME
            </span>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]">
                <UserIcon />
              </span>
              <input
                type="text"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                disabled={isLoading}
                className="sd-input w-full rounded-lg border border-[#d4af37]/40 bg-[rgba(8,8,8,0.45)] py-[0.78rem] pl-11 pr-3 text-sm text-[#f5efe0] placeholder:text-[#8a8070]/85 disabled:opacity-60"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[0.65rem] font-semibold tracking-[0.2em] text-[#d4af37]">
              PASSWORD
            </span>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]">
                <LockIcon />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                disabled={isLoading}
                className="sd-input w-full rounded-lg border border-[#d4af37]/40 bg-[rgba(8,8,8,0.45)] py-[0.78rem] pl-11 pr-11 text-sm text-[#f5efe0] placeholder:text-[#8a8070]/85 disabled:opacity-60"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#d4af37] transition hover:text-[#f0d78c]"
              >
                <EyeIcon open={showPassword} />
              </button>
            </div>
          </label>

          <label className="flex cursor-pointer items-center gap-2 pt-0.5 text-[0.8rem] text-[#c5bba3]">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-3.5 rounded-sm accent-[#d4af37]"
            />
            Remember me
          </label>

          <button
            type="submit"
            disabled={!canSubmit}
            className="sd-gold-btn mt-2 flex w-full items-center justify-center gap-2.5 rounded-lg py-3.5 font-[family-name:var(--font-cinzel)] text-[0.92rem] font-bold tracking-[0.2em] text-[#1a1204] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <CrownIcon />
            {isLoading ? "SIGNING IN…" : "SIGN IN"}
          </button>
        </form>

        <p className="mt-7 flex items-center gap-2 text-[0.72rem] tracking-[0.06em] text-[#8a8070]">
          <LockIconSmall />
          Secure Admin Access
        </p>
      </div>
    </div>
  );
}

function CrownIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 18.2h18V20H3v-1.8Zm1-3.4 2.7-7.2L9.8 12l2.2-7 2.2 7 3.1-4.4 2.7 7.2H4Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function LockIconSmall() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
      <path d="M4 4l16 16" />
    </svg>
  );
}
