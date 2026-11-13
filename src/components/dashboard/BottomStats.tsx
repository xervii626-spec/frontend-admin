export function BottomStats() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <article className="sd-dash-card rounded-xl border border-[#2f291c] bg-[#101010] px-4 py-3.5">
        <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-[#8a8070]">
          ACTIVE TABLES
        </p>
        <p className="mt-2 font-[family-name:var(--font-cinzel)] text-[1.45rem] font-semibold text-[#7dffa3]">
          27{" "}
          <span className="text-[0.85rem] font-medium text-[#8a8070]">
            / 45 Total
          </span>
        </p>
      </article>

      <article className="sd-dash-card rounded-xl border border-[#2f291c] bg-[#101010] px-4 py-3.5">
        <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-[#8a8070]">
          OCCUPANCY
        </p>
        <p className="mt-2 font-[family-name:var(--font-cinzel)] text-[1.45rem] font-semibold text-[#7dffa3]">
          60%
        </p>
        <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-[#1a1a1a]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#1e8f4a] to-[#2ecc71]"
            style={{ width: "60%" }}
          />
        </div>
      </article>

      <article className="sd-dash-card rounded-xl border border-[#2f291c] bg-[#101010] px-4 py-3.5">
        <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-[#8a8070]">
          AVERAGE BET
        </p>
        <p className="mt-2 font-[family-name:var(--font-cinzel)] text-[1.45rem] font-semibold text-[#7dffa3]">
          $145.60
        </p>
        <p className="mt-1 text-[0.68rem] font-semibold text-[#2ecc71]">
          +7% vs yesterday
        </p>
      </article>

      <article className="sd-dash-card rounded-xl border border-[#2f291c] bg-[#101010] px-4 py-3.5">
        <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-[#8a8070]">
          TOP GAME
        </p>
        <p className="mt-2 font-[family-name:var(--font-cinzel)] text-[1.45rem] font-semibold text-[#f5efe0]">
          Baccarat
        </p>
        <p className="mt-1 text-[0.68rem] font-semibold text-[#2ecc71]">
          42% of Handle
        </p>
      </article>
    </div>
  );
}
