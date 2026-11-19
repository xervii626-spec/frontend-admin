"use client";

import { FormEvent, useState } from "react";
import {
  useActivateAdminQuestMutation,
  useCreateAdminQuestMutation,
  useDeactivateAdminQuestMutation,
  useGetAdminQuestsQuery,
} from "@/store/api/questsApi";

export default function QuestsPage() {
  const { data, isFetching, refetch } = useGetAdminQuestsQuery();
  const [createQuest, { isLoading: creating }] = useCreateAdminQuestMutation();
  const [activate, { isLoading: activating }] = useActivateAdminQuestMutation();
  const [deactivate, { isLoading: deactivating }] =
    useDeactivateAdminQuestMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goalType, setGoalType] = useState<"bet_count" | "bet_amount_usd">(
    "bet_count",
  );
  const [targetValue, setTargetValue] = useState("10");
  const [rewardUsd, setRewardUsd] = useState("1");
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  async function onCreate(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setMsg(null);
    try {
      await createQuest({
        title: title.trim(),
        description: description.trim() || undefined,
        goalType,
        targetValue,
        rewardUsd,
      }).unwrap();
      setTitle("");
      setDescription("");
      setMsg("Quest created.");
    } catch (err) {
      setError(extractError(err));
    }
  }

  async function onToggle(id: number, isActive: boolean) {
    setError(null);
    try {
      if (isActive) await deactivate(id).unwrap();
      else await activate(id).unwrap();
    } catch (err) {
      setError(extractError(err));
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-[family-name:var(--font-cinzel)] text-[1.5rem] font-semibold tracking-[0.14em] text-[#e8c547]">
            QUESTS
          </h2>
          <p className="mt-1 text-sm text-[#9a9280]">
            Dynamic play goals · rewards go to play-only bonusMoney
            {isFetching ? " · refreshing…" : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={() => refetch()}
          className="rounded-md border border-[#d4af37]/35 px-3 py-2 text-[0.7rem] font-semibold tracking-[0.1em] text-[#e8c547]"
        >
          REFRESH
        </button>
      </div>

      <form
        onSubmit={onCreate}
        className="grid gap-3 rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c] p-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2 text-sm text-[#f5efe0] lg:col-span-2"
          required
          minLength={3}
        />
        <input
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2 text-sm text-[#f5efe0] lg:col-span-2"
        />
        <select
          value={goalType}
          onChange={(e) =>
            setGoalType(e.target.value as "bet_count" | "bet_amount_usd")
          }
          className="rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2 text-sm text-[#f5efe0]"
        >
          <option value="bet_count">Bet count</option>
          <option value="bet_amount_usd">Bet amount (USD)</option>
        </select>
        <input
          placeholder="Target"
          value={targetValue}
          onChange={(e) => setTargetValue(e.target.value.replace(/[^\d.]/g, ""))}
          className="rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2 text-sm tabular-nums text-[#f5efe0]"
          required
        />
        <input
          placeholder="Reward USD"
          value={rewardUsd}
          onChange={(e) => setRewardUsd(e.target.value.replace(/[^\d.]/g, ""))}
          className="rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2 text-sm tabular-nums text-[#f5efe0]"
          required
        />
        <button
          type="submit"
          disabled={creating}
          className="rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-3 py-2 text-sm font-extrabold text-[#1a1205] disabled:opacity-50 sm:col-span-2 lg:col-span-1"
        >
          {creating ? "…" : "CREATE"}
        </button>
      </form>

      {error ? <p className="text-sm text-[#ff8f8f]">{error}</p> : null}
      {msg ? <p className="text-sm text-[#7dffa3]">{msg}</p> : null}

      <div className="overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c]">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1204]">
              <th className="px-4 py-3 text-[0.68rem] font-extrabold">QUEST</th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold">GOAL</th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold">REWARD</th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold">PLAYERS</th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold">STATUS</th>
              <th className="px-4 py-3 text-center text-[0.68rem] font-extrabold">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {(data?.items ?? []).length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-sm text-[#8a8070]"
                >
                  No quests yet.
                </td>
              </tr>
            ) : (
              data!.items.map((q) => (
                <tr key={q.id} className="border-t border-[#2a2418]">
                  <td className="px-4 py-3 text-sm text-[#f5efe0]">
                    {q.title}
                    <span className="ml-2 text-[0.65rem] text-[#8a8070]">
                      #{q.id}
                    </span>
                    {q.description ? (
                      <p className="mt-0.5 text-[0.72rem] text-[#8a8070]">
                        {q.description}
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#c5bba3]">
                    {q.goalLabel}: {q.targetValue}
                  </td>
                  <td className="px-4 py-3 text-sm tabular-nums">
                    {q.rewardUsd} USD
                  </td>
                  <td className="px-4 py-3 text-sm tabular-nums">
                    {q.playerCount}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {q.isActive ? (
                      <span className="text-[#7dffa3]">Active</span>
                    ) : (
                      <span className="text-[#ff8f8f]">Off</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      type="button"
                      disabled={activating || deactivating}
                      onClick={() => onToggle(q.id, q.isActive)}
                      className={`rounded border px-2.5 py-1 text-[0.65rem] font-semibold ${
                        q.isActive
                          ? "border-[#e74c3c]/40 text-[#ff8f8f]"
                          : "border-[#2ecc71]/40 text-[#7dffa3]"
                      }`}
                    >
                      {q.isActive ? "DEACTIVATE" : "ACTIVATE"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function extractError(err: unknown): string {
  if (err && typeof err === "object" && "data" in err) {
    const data = (err as { data?: { message?: unknown } }).data;
    const message = data?.message;
    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string") return message;
  }
  return "Request failed";
}
