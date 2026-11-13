import { baseApi } from "./baseApi";

export type AdminActivityItem = {
  id: number;
  createdAt: string;
  playerId: number;
  username: string;
  nickname: string;
  activity: "Bet" | "Win" | string;
  direction: string;
  gameId: number | null;
  amountUsd: string;
  amountMmk: string;
  currency: string;
  status: string;
  statusLabel: string;
  rgsTransactionId: string;
};

export type AdminActivityListResponse = {
  page: number;
  limit: number;
  total: number;
  mmkPerUsd: string;
  items: AdminActivityItem[];
};

export const activityApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAdminActivity: build.query<
      AdminActivityListResponse,
      { page?: number; limit?: number; direction?: string } | void
    >({
      query: (params) => ({
        url: "/admin/transactions",
        params: {
          page: params?.page ?? 1,
          limit: params?.limit ?? 20,
          ...(params?.direction ? { direction: params.direction } : {}),
        },
      }),
      providesTags: ["Activity"],
      keepUnusedDataFor: 30,
    }),
  }),
});

export const { useGetAdminActivityQuery } = activityApi;
