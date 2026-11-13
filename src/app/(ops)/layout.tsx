"use client";

import { usePathname } from "next/navigation";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { AdminShell } from "@/components/layout/AdminShell";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { useAdminRealtime } from "@/hooks/useAdminRealtime";

function OpsRealtimeBridge({ children }: { children: React.ReactNode }) {
  useAdminRealtime();
  return <>{children}</>;
}

export default function OpsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AuthGuard>
      <OpsRealtimeBridge>
        <AdminShell>
          <DashboardHeader />
          <main
            key={pathname}
            className="flex-1 px-5 py-5 md:px-7 md:py-6"
          >
            {children}
          </main>
        </AdminShell>
      </OpsRealtimeBridge>
    </AuthGuard>
  );
}
