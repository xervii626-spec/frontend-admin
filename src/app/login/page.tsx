import { AdminLoginForm } from "@/components/auth/AdminLoginForm";
import { GuestOnly } from "@/components/auth/GuestOnly";

export default function AdminLoginPage() {
  return (
    <GuestOnly>
      <div className="relative min-h-screen overflow-x-hidden overflow-y-auto text-[#f5efe0]">
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/brand/admin-login-bg.jpg?v=11')" }}
          aria-hidden
        />
        <div
          className="fixed inset-0 bg-[linear-gradient(165deg,rgba(0,0,0,0.42)_0%,rgba(5,10,6,0.28)_45%,rgba(0,0,0,0.5)_100%)]"
          aria-hidden
        />
        <div
          className="fixed inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(212,175,55,0.07),transparent_55%)]"
          aria-hidden
        />

        <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-10">
          <AdminLoginForm />
        </main>
      </div>
    </GuestOnly>
  );
}
