import { baseApi } from "./baseApi";

export type AdminRateResponse = {
  mmkPerUsd: string;
  walletCurrency: string;
  displayCurrency: string;
};

export type AdminPaymentPlayer = {
  id: number;
  username: string;
  nickname: string;
};

export type AdminPaymentItem = {
  id: number;
  playerId: number;
  type: "deposit" | "withdraw" | string;
  status: "pending" | "approved" | "rejected" | "cancelled" | string;
  amountMmk: string;
  amountUsd: string;
  rateUsed: string;
  method: string | null;
  reference: string | null;
  playerNote: string | null;
  adminNote: string | null;
  createdAt: string;
  reviewedAt: string | null;
  player?: AdminPaymentPlayer;
};

export type AdminPaymentListResponse = {
  page: number;
  limit: number;
  total: number;
  items: AdminPaymentItem[];
};

export const paymentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAdminRate: build.query<AdminRateResponse, void>({
      query: () => "/admin/payments/rate",
      providesTags: ["Payments"],
      keepUnusedDataFor: 30,
    }),
    setAdminRate: build.mutation<
      { key: string; mmkPerUsd: string },
      { mmkPerUsd: string }
    >({
      query: (body) => ({
        url: "/admin/payments/rate",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Payments", "Dashboard", "Activity"],
    }),
    getAdminPayments: build.query<
      AdminPaymentListResponse,
      { status?: string; type?: string; page?: number; limit?: number } | void
    >({
      query: (params) => ({
        url: "/admin/payments",
        params: {
          page: params?.page ?? 1,
          limit: params?.limit ?? 50,
          // omit status => all; pass "pending" | "approved" | ... to filter
          ...(params?.status ? { status: params.status } : {}),
          ...(params?.type ? { type: params.type } : {}),
        },
      }),
      providesTags: ["Payments"],
      keepUnusedDataFor: 30,
    }),
    approvePayment: build.mutation<
      unknown,
      { id: number; adminNote?: string }
    >({
      query: ({ id, adminNote }) => ({
        url: `/admin/payments/${id}/approve`,
        method: "POST",
        body: adminNote ? { adminNote } : {},
      }),
      invalidatesTags: ["Payments", "Dashboard"],
    }),
    rejectPayment: build.mutation<
      unknown,
      { id: number; adminNote?: string }
    >({
      query: ({ id, adminNote }) => ({
        url: `/admin/payments/${id}/reject`,
        method: "POST",
        body: adminNote ? { adminNote } : {},
      }),
      invalidatesTags: ["Payments", "Dashboard"],
    }),
  }),
});

export const {
  useGetAdminRateQuery,
  useSetAdminRateMutation,
  useGetAdminPaymentsQuery,
  useApprovePaymentMutation,
  useRejectPaymentMutation,
} = paymentsApi;
