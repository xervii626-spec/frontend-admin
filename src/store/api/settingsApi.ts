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
  }),
});

export const {
  useGetTelegramRegisterQuery,
  useSetTelegramRegisterMutation,
} = settingsApi;
