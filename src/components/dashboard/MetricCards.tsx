const METRICS = [
  {
    title: "PENDING DEPOSITS",
    value: "128",
    sub: "Awaiting review",
    delta: "+12% vs last hour",
    deltaTone: "up" as const,
    icon: "coins" as const,
    iconTone: "gold" as const,
    spark: "gold" as const,
    points: "2,18 10,14 18,15 26,10 34,12 42,7 50,9",
  },
  {
    title: "LIVE PLAYERS",
    value: "342",
    sub: "Online now",
    delta: "+8% vs last 15 min",
    deltaTone: "up" as const,
    icon: "users" as const,
    iconTone: "green" as const,
    spark: "green" as const,
    points: "2,16 10,13 18,14 26,9 34,11 42,6 50,8",
  },
  {
    title: "TODAY HANDLE",
    value: "$2,845,760",
    sub: "Total wagered",
    delta: "+18% vs yesterday",
    deltaTone: "up" as const,
    icon: "chart" as const,
    iconTone: "gold" as const,
    spark: "gold" as const,
    points: "2,17 10,15 18,12 26,13 34,8 42,9 50,5",
  },
  {
    title: "TODAY WIN / LOSS",
    value: "$186,540",
    sub: "House result",
    delta: "6.55% Win Rate",
    deltaTone: "neutral" as const,
    icon: "scales" as const,
    iconTone: "gold" as const,
    spark: "gold" as const,
    points: "2,14 10,15 18,11 26,12 34,9 42,10 50,7",
  },
  {
    title: "RISK FLAGS",
    value: "23",
    sub: "Open alerts",
    delta: "+5 since last hour",
    deltaTone: "down" as const,
    icon: "warning" as const,
    iconTone: "gold" as const,
    spark: "red" as const,
    points: "2,8 10,10 18,9 26,13 34,12 42,16 50,14",
  },
  {
    title: "USD BALANCE",
    value: "$1,234,567",
    sub: "Treasury",
    delta: "+2.3% vs yesterday",
    deltaTone: "up" as const,
    icon: "dollar" as const,
    iconTone: "gold" as const,
    spark: "gold" as const,
    points: "2,15 10,14 18,12 26,11 34,10 42,8 50,7",
  },
] as const;

const SPARK_COLOR = {
  gold: "#d4af37",
  green: "#2ecc71",
  red: "#e74c3c",
} as const;

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      {METRICS.map((m) => (
        <article
          key={m.title}
          className="sd-dash-card rounded-xl border border-[#2f291c] bg-[#101010] p-3.5"
        >
          <div className="mb-2.5 flex items-start gap-3">
            <span
              className={`flex size-12 shrink-0 items-center justify-center rounded-full border ${
                m.iconTone === "green"
                  ? "border-[#2ecc71]/40 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]"
                  : "border-[#d4af37]/45 bg-[#1a160c] text-[#e8c547]"
              }`}
            >
              <MetricIcon name={m.icon} />
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-[#8a8070]">
                {m.title}
              </p>
              <p className="mt-1.5 font-[family-name:var(--font-cinzel)] text-[1.3rem] font-semibold leading-none tracking-wide text-[#f5efe0]">
                {m.value}
              </p>
            </div>
          </div>
          <p className="text-[0.68rem] text-[#8a8070]">{m.sub}</p>
          <p
            className={`mt-1 text-[0.68rem] font-semibold ${
              m.deltaTone === "down"
                ? "text-[#e74c3c]"
                : m.deltaTone === "up"
                  ? "text-[#2ecc71]"
                  : "text-[#d4af37]"
            }`}
          >
            {m.delta}
          </p>
          <svg
            className="mt-2 w-full"
            viewBox="0 0 52 20"
            height="28"
            preserveAspectRatio="none"
            aria-hidden
          >
            <polyline
              fill="none"
              stroke={SPARK_COLOR[m.spark]}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={m.points}
              opacity="0.9"
            />
          </svg>
        </article>
      ))}
    </div>
  );
}

function MetricIcon({ name }: { name: (typeof METRICS)[number]["icon"] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "coins") {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="6.5" rx="7" ry="3" />
        <path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
        <path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.2 19.5c1.2-3.3 3.4-5 5.8-5s4.6 1.7 5.8 5" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M14.8 14.8c2.1.5 3.7 2 4.6 4.7" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...common}>
        <path d="M4 19V10" />
        <path d="M10 19V6" />
        <path d="M16 19v-7" />
        <path d="M20 19V4" />
      </svg>
    );
  }

  if (name === "scales") {
    return (
      <svg {...common}>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M7 7 4.5 14h5L7 7Z" />
        <path d="m17 7 2.5 7h-5L17 7Z" />
      </svg>
    );
  }

  if (name === "warning") {
    return (
      <svg {...common}>
        <path d="M12 4 21 19H3L12 4Z" />
        <path d="M12 10v4" />
        <path d="M12 16.5h.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9" />
      <path d="M9.5 9.2c.7-1 1.8-1.5 2.8-1.5 1.5 0 2.5.8 2.5 2.1 0 2.2-4.8 1.4-4.8 4" />
    </svg>
  );
}
