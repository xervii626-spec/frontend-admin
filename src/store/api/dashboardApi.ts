import { baseApi } from "./baseApi";

export type AdminDashboardSummary = {
  liveUsers: number;
  pendingDeposits: number;
  pendingWithdrawals: number;
  mmkPerUsd: string;
  walletCurrency: string;
  displayCurrency: string;
};

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDashboardSummary: build.query<AdminDashboardSummary, void>({
      query: () => "/admin/dashboard/summary",
      providesTags: ["Dashboard"],
      keepUnusedDataFor: 30,
    }),
  }),
});

export const { useGetDashboardSummaryQuery } = dashboardApi;
