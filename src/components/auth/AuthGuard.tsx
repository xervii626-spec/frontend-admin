"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCredentials } from "@/store/features/auth/authSlice";
import { clearAuthSession } from "@/lib/auth-storage";
import { useAdminMeQuery } from "@/store/api/authApi";

/** Protect admin routes — token + /me revalidation */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { accessToken, hydrated } = useAppSelector((s) => s.auth);

  const { isError, isFetching, data } = useAdminMeQuery(undefined, {
    skip: !hydrated || !accessToken,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (!hydrated) return;
    if (!accessToken) {
      router.replace("/login");
    }
  }, [hydrated, accessToken, router]);

  useEffect(() => {
    if (!hydrated || !accessToken) return;
    if (isFetching) return;
    if (isError || (data && data.isActive === false)) {
      dispatch(clearCredentials());
      clearAuthSession();
      router.replace("/login");
    }
  }, [hydrated, accessToken, isFetching, isError, data, dispatch, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-[#d4af37]">
        Loading…
      </div>
    );
  }

  if (!accessToken) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-[#d4af37]">
        Redirecting to login…
      </div>
    );
  }

  if (isFetching && !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-[#d4af37]">
        Checking session…
      </div>
    );
  }

  return <>{children}</>;
}
