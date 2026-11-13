const ALERTS = [
  {
    title: "High Risk Deposit",
    detail: "player_9x7q · $1,000 USD",
    level: "HIGH" as const,
    note: "Large first-time deposit flagged for review",
  },
  {
    title: "Multiple Accounts",
    detail: "linked_device_44",
    level: "MEDIUM" as const,
    note: "Shared device fingerprint across 3 accounts",
  },
  {
    title: "Unusual Bet Pattern",
    detail: "player_2f1a",
    level: "MEDIUM" as const,
    note: "Rapid stake escalation on Baccarat tables",
  },
];

export function RiskSummary() {
  return (
    <section className="sd-dash-card flex flex-col rounded-xl border border-[#2f291c] bg-[#101010]">
      <div className="flex items-center gap-2 border-b border-[#2a2418] px-4 py-3">
        <ShieldIcon />
        <h2 className="text-[0.72rem] font-bold tracking-[0.18em] text-[#e8c547]">
          RISK SUMMARY
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        {ALERTS.map((a) => (
          <article
            key={a.title}
            className={`rounded-lg border bg-[#0c0c0c] p-3 ${
              a.level === "HIGH"
                ? "border-[#e74c3c]/55"
                : "border-[#d4af37]/45"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[0.82rem] font-semibold text-[#f5efe0]">
                  {a.title}
                </p>
                <p className="mt-0.5 text-[0.72rem] text-[#a89a78]">{a.detail}</p>
              </div>
              <span
                className={`rounded-md px-2 py-0.5 text-[0.58rem] font-bold tracking-[0.12em] ${
                  a.level === "HIGH"
                    ? "bg-[rgba(180,40,40,0.45)] text-[#ff8f8f]"
                    : "bg-[rgba(120,90,20,0.45)] text-[#f0d78c]"
                }`}
              >
                {a.level}
              </span>
            </div>
            <p className="mt-2 text-[0.7rem] leading-snug text-[#8a8070]">
              {a.note}
            </p>
          </article>
        ))}
      </div>

      <div className="border-t border-[#2a2418] px-4 py-3">
        <button
          type="button"
          className="text-[0.72rem] font-semibold tracking-wide text-[#e8c547] transition hover:text-[#f0d78c]"
        >
          View All Risk Alerts →
        </button>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e8c547"
      strokeWidth="1.7"
      aria-hidden
    >
      <path d="M12 3 20 6.5v5.2c0 4.6-3.2 8.1-8 9.3-4.8-1.2-8-4.7-8-9.3V6.5L12 3Z" />
      <path d="m9 12 2.1 2.1L15.5 9.8" />
    </svg>
  );
}
