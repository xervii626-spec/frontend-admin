import { baseApi } from "./baseApi";

export type AdminQuestItem = {
  id: number;
  title: string;
  description: string | null;
  goalType: "bet_count" | "bet_amount_usd" | string;
  goalLabel: string;
  targetValue: string;
  rewardUsd: string;
  isActive: boolean;
  createdAt: string;
  playerCount: number;
};

export const questsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAdminQuests: build.query<{ items: AdminQuestItem[] }, void>({
      query: () => "/admin/quests",
      providesTags: ["Quests"],
    }),
    createAdminQuest: build.mutation<
      AdminQuestItem,
      {
        title: string;
        description?: string;
        goalType: "bet_count" | "bet_amount_usd";
        targetValue: string;
        rewardUsd: string;
      }
    >({
      query: (body) => ({
        url: "/admin/quests",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Quests"],
    }),
    activateAdminQuest: build.mutation<AdminQuestItem, number>({
      query: (id) => ({
        url: `/admin/quests/${id}/activate`,
        method: "PATCH",
      }),
      invalidatesTags: ["Quests"],
    }),
    deactivateAdminQuest: build.mutation<AdminQuestItem, number>({
      query: (id) => ({
        url: `/admin/quests/${id}/deactivate`,
        method: "PATCH",
      }),
      invalidatesTags: ["Quests"],
    }),
  }),
});

export const {
  useGetAdminQuestsQuery,
  useCreateAdminQuestMutation,
  useActivateAdminQuestMutation,
  useDeactivateAdminQuestMutation,
} = questsApi;
