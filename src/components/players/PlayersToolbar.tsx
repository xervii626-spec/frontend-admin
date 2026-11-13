"use client";

export type StatusFilter = "all" | "Active" | "Blocked";

type PlayersToolbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (value: StatusFilter) => void;
  onCreate?: () => void;
};

export function PlayersToolbar({
  query,
  onQueryChange,
  statusFilter,
  onStatusFilterChange,
  onCreate,
}: PlayersToolbarProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative min-w-0 flex-1">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search users, nick or ID..."
          className="sd-input w-full rounded-lg border border-[#3a3220] bg-[#101010] py-2.5 pl-11 pr-3 text-sm text-[#f5efe0] placeholder:text-[#8a8070]"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <FilterChip
          active={statusFilter === "Active"}
          onClick={() =>
            onStatusFilterChange(statusFilter === "Active" ? "all" : "Active")
          }
          tone="green"
        >
          <span className="size-1.5 rounded-full bg-[#2ecc71]" aria-hidden />
          ACTIVE
        </FilterChip>
        <FilterChip
          active={statusFilter === "Blocked"}
          onClick={() =>
            onStatusFilterChange(
              statusFilter === "Blocked" ? "all" : "Blocked",
            )
          }
          tone="red"
        >
          <span className="size-1.5 rounded-full bg-[#e74c3c]" aria-hidden />
          BLOCKED
        </FilterChip>

        <button
          type="button"
          onClick={onCreate}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#d4af37]/45 bg-[#121212] px-3 py-2 text-[0.72rem] font-semibold tracking-[0.12em] text-[#e8c547] transition hover:border-[#d4af37]/75"
        >
          <PlusIcon />
          CREATE
        </button>
      </div>
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
  tone,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  tone: "green" | "red";
}) {
  const activeClass =
    tone === "green"
      ? "border-[#2ecc71]/55 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]"
      : "border-[#e74c3c]/55 bg-[rgba(120,30,30,0.35)] text-[#ff8f8f]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[0.68rem] font-semibold tracking-[0.12em] transition ${
        active
          ? activeClass
          : "border-[#3a3220] bg-[#121212] text-[#c5bba3] hover:border-[#d4af37]/40"
      }`}
    >
      {children}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16.5 16.5 4 4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
