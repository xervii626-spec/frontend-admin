import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { StoredAdmin } from "@/lib/auth-storage";

export type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  admin: StoredAdmin | null;
  remember: boolean;
  hydrated: boolean;
};

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  admin: null,
  remember: true,
  hydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
        admin: StoredAdmin;
        remember: boolean;
      }>,
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.admin = action.payload.admin;
      state.remember = action.payload.remember;
      state.hydrated = true;
    },
    setTokens(
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>,
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    hydrateAuth(
      state,
      action: PayloadAction<{
        accessToken: string | null;
        refreshToken: string | null;
        admin: StoredAdmin | null;
        remember: boolean;
      }>,
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.admin = action.payload.admin;
      state.remember = action.payload.remember;
      state.hydrated = true;
    },
    clearCredentials(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.admin = null;
      state.hydrated = true;
    },
  },
});

export const { setCredentials, setTokens, hydrateAuth, clearCredentials } =
  authSlice.actions;
export default authSlice.reducer;
