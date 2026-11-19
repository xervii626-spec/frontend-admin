import { baseApi } from "./baseApi";

export const settingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTelegramRegister: build.query<{ telegramRegisterUrl: string }, void>({
      query: () => "/admin/settings/telegram-register",
      providesTags: ["Settings"],
    }),
    setTelegramRegister: build.mutation<
      { key: string; telegramRegisterUrl: string },
      { telegramRegisterUrl: string }
    >({
      query: (body) => ({
        url: "/admin/settings/telegram-register",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Settings"],
    }),
    getDailyLoginBonus: build.query<{ dailyLoginBonusUsd: string }, void>({
      query: () => "/admin/settings/daily-login-bonus",
      providesTags: ["Settings"],
    }),
    setDailyLoginBonus: build.mutation<
      { key: string; dailyLoginBonusUsd: string },
      { dailyLoginBonusUsd: string }
    >({
      query: (body) => ({
        url: "/admin/settings/daily-login-bonus",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Settings"],
    }),
  }),
});

export const {
  useGetTelegramRegisterQuery,
  useSetTelegramRegisterMutation,
  useGetDailyLoginBonusQuery,
  useSetDailyLoginBonusMutation,
} = settingsApi;
