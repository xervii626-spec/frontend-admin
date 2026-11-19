"use client";

import { FormEvent, useState } from "react";
import {
  useActivateMasterAgentMutation,
  useCreateMasterAgentMutation,
  useDeactivateMasterAgentMutation,
  useGetMasterAgentsQuery,
} from "@/store/api/agentsApi";

export default function AgentsPage() {
  const { data, isFetching, isError, error, refetch } = useGetMasterAgentsQuery();
  const [createMaster, { isLoading: creating }] = useCreateMasterAgentMutation();
  const [activate, { isLoading: activating }] = useActivateMasterAgentMutation();
  const [deactivate, { isLoading: deactivating }] =
    useDeactivateMasterAgentMutation();

  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [formMsg, setFormMsg] = useState<string | null>(null);

  async function onCreate(e: FormEvent) {
    e.preventDefault();
    setFormError(null);
    setFormMsg(null);
    try {
      await createMaster({
        username: username.trim(),
        displayName: displayName.trim(),
        password,
      }).unwrap();
      setUsername("");
      setDisplayName("");
      setPassword("");
      setFormMsg("Master agent created.");
    } catch (err) {
      setFormError(extractError(err));
    }
  }

  async function onToggle(id: number, isActive: boolean) {
    setFormError(null);
    try {
      if (isActive) {
        await deactivate(id).unwrap();
      } else {
        await activate(id).unwrap();
      }
    } catch (err) {
      setFormError(extractError(err));
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-[family-name:var(--font-cinzel)] text-[1.5rem] font-semibold tracking-[0.14em] text-[#e8c547]">
            MASTER AGENTS
          </h2>
          <p className="mt-1 text-sm text-[#9a9280]">
            Create tops of agent trees · they create Sub-Agents & Players
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
        className="grid gap-3 rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c] p-4 sm:grid-cols-4"
      >
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2 text-sm text-[#f5efe0]"
          required
          minLength={3}
        />
        <input
          placeholder="Display name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2 text-sm text-[#f5efe0]"
          required
          minLength={3}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2 text-sm text-[#f5efe0]"
          required
          minLength={6}
        />
        <button
          type="submit"
          disabled={creating}
          className="rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-3 py-2 text-sm font-extrabold tracking-[0.1em] text-[#1a1205] disabled:opacity-50"
        >
          {creating ? "…" : "CREATE MASTER"}
        </button>
      </form>

      {formError ? (
        <p className="text-sm text-[#ff8f8f]">{formError}</p>
      ) : null}
      {formMsg ? <p className="text-sm text-[#7dffa3]">{formMsg}</p> : null}
      {isError ? (
        <p className="text-sm text-[#ff8f8f]">{extractError(error)}</p>
      ) : null}

      <div className="overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c]">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1204]">
              <th className="px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.14em]">
                USER
              </th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.14em]">
                NAME
              </th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.14em]">
                SUBS
              </th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.14em]">
                PLAYERS
              </th>
              <th className="px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.14em]">
                STATUS
              </th>
              <th className="px-4 py-3 text-center text-[0.68rem] font-extrabold tracking-[0.14em]">
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
                  No master agents yet.
                </td>
              </tr>
            ) : (
              data!.items.map((row) => (
                <tr key={row.id} className="border-t border-[#2a2418]">
                  <td className="px-4 py-3 text-sm text-[#f5efe0]">
                    {row.username}
                    <span className="ml-2 text-[0.65rem] text-[#8a8070]">
                      #{row.id}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#c5bba3]">
                    {row.displayName}
                  </td>
                  <td className="px-4 py-3 text-sm tabular-nums text-[#f5efe0]">
                    {row.subAgentCount}
                  </td>
                  <td className="px-4 py-3 text-sm tabular-nums text-[#f5efe0]">
                    {row.directPlayerCount}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {row.isActive ? (
                      <span className="text-[#7dffa3]">Active</span>
                    ) : (
                      <span className="text-[#ff8f8f]">Blocked</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      type="button"
                      disabled={activating || deactivating}
                      onClick={() => onToggle(row.id, row.isActive)}
                      className={`rounded border px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.08em] ${
                        row.isActive
                          ? "border-[#e74c3c]/40 text-[#ff8f8f]"
                          : "border-[#2ecc71]/40 text-[#7dffa3]"
                      }`}
                    >
                      {row.isActive ? "DEACTIVATE" : "ACTIVATE"}
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
  if (err && typeof err === "object" && "message" in err) {
    const msg = (err as { message?: unknown }).message;
    if (typeof msg === "string") return msg;
  }
  return "Request failed";
}
