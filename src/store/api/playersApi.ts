import { baseApi } from "./baseApi";

export type AdminPlayerWallet = {
  realBalance: string;
  bonusMoney: string;
  frozenMoney: string;
  bonusWin: string;
};

export type AdminPlayerItem = {
  id: number;
  username: string;
  nickname: string;
  currency: string;
  country: string | null;
  isBlocked: boolean;
  createdAt: string;
  wallet: AdminPlayerWallet | null;
};

export type AdminPlayersListResponse = {
  page: number;
  limit: number;
  total: number;
  items: AdminPlayerItem[];
};

export type CreatePlayerBody = {
  username: string;
  nickname: string;
  password: string;
  currency?: string;
  country?: string;
};

export type UpdatePlayerBody = {
  nickname?: string;
  password?: string;
  country?: string | null;
};

export const playersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAdminPlayers: build.query<
      AdminPlayersListResponse,
      {
        search?: string;
        blocked?: "true" | "false";
        page?: number;
        limit?: number;
      } | void
    >({
      query: (params) => ({
        url: "/admin/players",
        params: {
          search: params?.search || undefined,
          blocked: params?.blocked,
          page: params?.page ?? 1,
          limit: params?.limit ?? 50,
        },
      }),
      providesTags: ["Players"],
    }),
    createPlayer: build.mutation<AdminPlayerItem, CreatePlayerBody>({
      query: (body) => ({
        url: "/admin/players",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Players"],
    }),
    updatePlayer: build.mutation<
      AdminPlayerItem,
      { id: number; body: UpdatePlayerBody }
    >({
      query: ({ id, body }) => ({
        url: `/admin/players/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Players"],
    }),
    deletePlayer: build.mutation<{ ok: boolean; id: number }, { id: number }>({
      query: ({ id }) => ({
        url: `/admin/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Players"],
    }),
    blockPlayer: build.mutation<AdminPlayerItem, { id: number }>({
      query: ({ id }) => ({
        url: `/admin/players/${id}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["Players"],
    }),
    unblockPlayer: build.mutation<AdminPlayerItem, { id: number }>({
      query: ({ id }) => ({
        url: `/admin/players/${id}/unblock`,
        method: "PATCH",
      }),
      invalidatesTags: ["Players"],
    }),
    adjustPlayerBalance: build.mutation<
      unknown,
      { id: number; direction: "credit" | "debit"; amount: string; note?: string }
    >({
      query: ({ id, ...body }) => ({
        url: `/admin/players/${id}/adjust-balance`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Players"],
    }),
  }),
});

export const {
  useGetAdminPlayersQuery,
  useCreatePlayerMutation,
  useUpdatePlayerMutation,
  useDeletePlayerMutation,
  useBlockPlayerMutation,
  useUnblockPlayerMutation,
  useAdjustPlayerBalanceMutation,
} = playersApi;
