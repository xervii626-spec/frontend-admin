import { baseApi } from "./baseApi";
import type { StoredAdmin } from "@/lib/auth-storage";

export type AdminLoginRequest = {
  username: string;
  password: string;
};

export type AdminLoginResponse = {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  refreshExpiresAt?: string;
  admin: StoredAdmin;
};

export type AdminMeResponse = {
  id: number;
  username: string;
  displayName: string;
  role: string;
  isActive: boolean;
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    adminLogin: build.mutation<AdminLoginResponse, AdminLoginRequest>({
      query: (body) => ({
        url: "/admin/auth/login",
        method: "POST",
        body,
      }),
    }),
    adminMe: build.query<AdminMeResponse, void>({
      query: () => "/admin/auth/me",
      providesTags: ["AdminMe"],
    }),
    adminLogout: build.mutation<{ success: boolean }, void>({
      query: () => ({
        url: "/admin/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["AdminMe"],
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useAdminMeQuery,
  useLazyAdminMeQuery,
  useAdminLogoutMutation,
} = authApi;
