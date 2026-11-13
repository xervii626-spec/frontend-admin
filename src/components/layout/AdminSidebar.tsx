"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SdLogo } from "@/components/brand/SdLogo";

const NAV = [
  { href: "/dashboard", label: "DASHBOARD", icon: "grid" as const },
  { href: "/players", label: "PLAYERS", icon: "players" as const },
  { href: "/payments", label: "PAYMENTS", icon: "card" as const },
  { href: "/rate", label: "RATE", icon: "trend" as const },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

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

  return (
    <aside className="sticky top-0 flex h-screen w-[240px] shrink-0 flex-col border-r border-[#2a2418] bg-[#0a0a0a]">
      <div className="flex shrink-0 items-center gap-2.5 border-b border-[#2a2418] px-4 py-4">
        <SdLogo size={36} />
        <div className="min-w-0 leading-tight">
          <p className="font-[family-name:var(--font-cinzel)] text-[0.72rem] font-semibold tracking-[0.08em] text-[#e8c547]">
            SHWE DUNN
          </p>
          <p className="text-[0.58rem] font-semibold tracking-[0.18em] text-[#d4af37]/85">
            CASINO OPS
          </p>
        </div>
      </div>

      <nav className="flex shrink-0 flex-col gap-1.5 px-3 py-4">
        {NAV.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3.5 rounded-lg px-3 py-3 text-[0.75rem] font-semibold tracking-[0.14em] transition ${
                active
                  ? "border border-[#2ecc71]/45 bg-[linear-gradient(90deg,rgba(22,90,50,0.5)_0%,rgba(22,90,50,0.16)_100%)] text-[#7dffa3] shadow-[inset_3px_0_0_#2ecc71,0_0_20px_rgba(46,204,113,0.15)]"
                  : "border border-transparent text-[#c4b48a] hover:bg-white/[0.03] hover:text-[#e8c547]"
              }`}
            >
              <span
                className={
                  active
                    ? "text-[#7dffa3] drop-shadow-[0_0_8px_rgba(46,204,113,0.65)]"
                    : "text-[#c4b48a] group-hover:text-[#e8c547]"
                }
              >
                <NavIcon name={item.icon} />
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto shrink-0 px-3 pb-5 pt-2">
        <div className="space-y-4 rounded-xl border border-[#3a3220] bg-[#0f0f0f] px-3.5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-[#9a9080]">
              CASINO CONTROL ROOM
            </p>
            <p className="mt-2 flex items-center gap-2 text-[0.88rem] font-semibold text-[#7dffa3]">
              <span className="sd-live-dot" aria-hidden />
              LIVE
            </p>
          </div>

          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-[#9a9080]">
              SYSTEM STATUS
            </p>
            <p className="mt-2 text-[0.86rem] font-medium leading-snug text-[#7dffa3]">
              All Systems Operational
            </p>
          </div>

          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-[#9a9080]">
              LOCAL TIME
            </p>
            <p className="mt-2 text-[1.05rem] font-semibold tracking-wide text-[#f5efe0]">
              {dateLabel}
            </p>
            <p className="mt-0.5 text-[0.95rem] font-medium text-[#e8c547]">
              {timeLabel}{" "}
              <span className="text-[0.72rem] text-[#8a8070]">MYT</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavIcon({ name }: { name: (typeof NAV)[number]["icon"] }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "grid") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.4" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4" />
      </svg>
    );
  }

  if (name === "players") {
    return (
      <svg {...common}>
        <circle cx="9" cy="7.5" r="3.2" />
        <path d="M3.2 19.5c1.1-3.3 3.3-5 5.8-5s4.7 1.7 5.8 5" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M14.8 14.8c2.1.5 3.7 2 4.6 4.7" />
      </svg>
    );
  }

  if (name === "card") {
    return (
      <svg {...common}>
        <rect x="2" y="5" width="20" height="14" rx="2.2" />
        <path d="M2 10h20" />
        <path d="M6.5 15h4" />
        <path d="M15.5 15h2.5" />
      </svg>
    );
  }

  // Rate — rising trend line with arrow (mockup)
  return (
    <svg {...common}>
      <path d="M3.5 16.5 9 11l3.5 3.5L20 7" />
      <path d="M14.5 7H20v5.5" />
    </svg>
  );
}
