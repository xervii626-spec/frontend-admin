"use client";

import { useMemo, useState } from "react";
import {
  PlayersToolbar,
  type StatusFilter,
} from "@/components/players/PlayersToolbar";
import { PlayersTable } from "@/components/players/PlayersTable";
import { AdjustBalanceModal } from "@/components/players/AdjustBalanceModal";
import {
  PlayerFormModal,
  type PlayerFormValues,
} from "@/components/players/PlayerFormModal";
import {
  mapAdminPlayerToRow,
  type PlayerRow,
} from "@/components/players/players-data";
import {
  useAdjustPlayerBalanceMutation,
  useBlockPlayerMutation,
  useCreatePlayerMutation,
  useDeletePlayerMutation,
  useGetAdminPlayersQuery,
  useUnblockPlayerMutation,
  useUpdatePlayerMutation,
} from "@/store/api/playersApi";

export default function PlayersPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [adjustTarget, setAdjustTarget] = useState<PlayerRow | null>(null);
  const [formMode, setFormMode] = useState<"create" | "edit" | null>(null);
  const [editTarget, setEditTarget] = useState<PlayerRow | null>(null);

  const blockedParam =
    statusFilter === "Blocked"
      ? ("true" as const)
      : statusFilter === "Active"
        ? ("false" as const)
        : undefined;

  const { data, isFetching, isError, error, refetch } = useGetAdminPlayersQuery({
    search: query.trim() || undefined,
    blocked: blockedParam,
    page: 1,
    limit: 100,
  });

  const [blockPlayer, { isLoading: blocking }] = useBlockPlayerMutation();
  const [unblockPlayer, { isLoading: unblocking }] = useUnblockPlayerMutation();
  const [adjustBalance, { isLoading: adjusting }] =
    useAdjustPlayerBalanceMutation();
  const [createPlayer, { isLoading: creating }] = useCreatePlayerMutation();
  const [updatePlayer, { isLoading: updating }] = useUpdatePlayerMutation();
  const [deletePlayer, { isLoading: deleting }] = useDeletePlayerMutation();
  const [actionError, setActionError] = useState<string | null>(null);

  const players = useMemo(
    () => (data?.items ?? []).map(mapAdminPlayerToRow),
    [data],
  );

  async function onToggleBlock(id: number, currentlyBlocked: boolean) {
    setActionError(null);
    try {
      if (currentlyBlocked) {
        await unblockPlayer({ id }).unwrap();
      } else {
        await blockPlayer({ id }).unwrap();
      }
    } catch (err) {
      setActionError(extractError(err));
    }
  }

  async function onAdjustSubmit(input: {
    direction: "credit" | "debit";
    amount: string;
    note?: string;
  }) {
    if (!adjustTarget) return;
    setActionError(null);
    await adjustBalance({
      id: adjustTarget.id,
      direction: input.direction,
      amount: input.amount,
      note: input.note,
    }).unwrap();
  }

  async function onFormSubmit(values: PlayerFormValues) {
    setActionError(null);
    if (formMode === "create") {
      await createPlayer({
        username: values.username!,
        nickname: values.nickname,
        password: values.password!,
        country: values.country,
      }).unwrap();
      return;
    }
    if (formMode === "edit" && editTarget) {
      await updatePlayer({
        id: editTarget.id,
        body: {
          nickname: values.nickname,
          password: values.password,
          country: values.country ?? null,
        },
      }).unwrap();
    }
  }

  async function onDelete(player: PlayerRow) {
    const ok = window.confirm(
      `Delete player "${player.username}"?\nOnly allowed if they have no bet/win or payment history.`,
    );
    if (!ok) return;
    setActionError(null);
    try {
      await deletePlayer({ id: player.id }).unwrap();
    } catch (err) {
      setActionError(extractError(err));
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[1.75rem] font-semibold tracking-[0.14em] text-[#e8c547]">
          PLAYERS
        </h2>
        <div className="mt-2 h-px max-w-[140px] bg-gradient-to-r from-[#d4af37] via-[#d4af37]/70 to-transparent" />
        <p className="mt-2 text-sm text-[#9a9280]">
          Live list from API
          {typeof data?.total === "number" ? ` · ${data.total} total` : ""}
          {isFetching ? " · refreshing…" : ""}
        </p>
      </div>

      <PlayersToolbar
        query={query}
        onQueryChange={setQuery}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        onCreate={() => {
          setEditTarget(null);
          setFormMode("create");
        }}
      />

      {actionError ? (
        <p className="rounded-lg border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.25)] px-3 py-2 text-sm text-[#ff8f8f]">
          {actionError}
        </p>
      ) : null}

      {isError ? (
        <div className="rounded-xl border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.2)] px-4 py-6 text-center">
          <p className="text-sm text-[#ff8f8f]">{extractError(error)}</p>
          <button
            type="button"
            onClick={() => refetch()}
            className="mt-3 rounded-md border border-[#d4af37]/50 px-3 py-1.5 text-xs font-semibold text-[#e8c547]"
          >
            Retry
          </button>
        </div>
      ) : (
        <PlayersTable
          players={players}
          loading={isFetching && !data}
          actionBusy={
            blocking || unblocking || adjusting || creating || updating || deleting
          }
          onToggleBlock={onToggleBlock}
          onAdjust={setAdjustTarget}
          onEdit={(p) => {
            setEditTarget(p);
            setFormMode("edit");
          }}
          onDelete={onDelete}
        />
      )}

      {adjustTarget ? (
        <AdjustBalanceModal
          player={adjustTarget}
          busy={adjusting}
          onClose={() => setAdjustTarget(null)}
          onSubmit={onAdjustSubmit}
        />
      ) : null}

      {formMode ? (
        <PlayerFormModal
          key={`${formMode}-${editTarget?.id ?? "new"}`}
          mode={formMode}
          player={editTarget}
          busy={creating || updating}
          onClose={() => {
            setFormMode(null);
            setEditTarget(null);
          }}
          onSubmit={onFormSubmit}
        />
      ) : null}
    </div>
  );
}

function extractError(err: unknown): string {
  if (err && typeof err === "object" && "data" in err) {
    const data = (err as { data?: { message?: unknown } }).data;
    const message = data?.message;
    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string" && message.trim()) return message;
  }
  if (err && typeof err === "object" && "status" in err) {
    const status = (err as { status?: number | string }).status;
    if (status === 401) return "Admin session expired. Please log in again.";
    if (status === "FETCH_ERROR") {
      return "Cannot reach API. Is the backend running?";
    }
  }
  return "Could not load players.";
}
