import { baseApi } from "./baseApi";

export type MasterAgentItem = {
  id: number;
  username: string;
  displayName: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  subAgentCount: number;
  directPlayerCount: number;
};

export const agentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMasterAgents: build.query<{ items: MasterAgentItem[] }, void>({
      query: () => "/admin/agents",
      providesTags: ["Agents"],
    }),
    createMasterAgent: build.mutation<
      MasterAgentItem,
      { username: string; displayName: string; password: string }
    >({
      query: (body) => ({
        url: "/admin/agents",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Agents"],
    }),
    activateMasterAgent: build.mutation<{ id: number; isActive: boolean }, number>({
      query: (id) => ({
        url: `/admin/agents/${id}/activate`,
        method: "PATCH",
      }),
      invalidatesTags: ["Agents"],
    }),
    deactivateMasterAgent: build.mutation<{ id: number; isActive: boolean }, number>({
      query: (id) => ({
        url: `/admin/agents/${id}/deactivate`,
        method: "PATCH",
      }),
      invalidatesTags: ["Agents"],
    }),
  }),
});

export const {
  useGetMasterAgentsQuery,
  useCreateMasterAgentMutation,
  useActivateMasterAgentMutation,
  useDeactivateMasterAgentMutation,
} = agentsApi;
