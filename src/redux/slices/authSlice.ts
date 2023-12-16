import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import API from "../../services/axios";
import {
  REFRESH_KEY_CONSTANT,
  ROUTES,
  STORAGE_KEY_CONSTANT,
  TOKEN_EXPIRE,
  USER_INFO,
} from "../../common/constants";
import API_PATHS from "@/services/apiPaths";
import { getUserInfo } from "@/utils/helper";
const env = process.env.REACT_APP_ENV;
// const { config } = require(`../../config/${env}.config`);

export interface LoginState {
  status: "idle" | "loading" | "failed";
  error: string | null;
  userDetails: any;
}

const initialState: LoginState = {
  status: "idle",
  error: null,
  userDetails: {},
};

export const signupAsync = createAsyncThunk(
  "auth/signup",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await API.post(API_PATHS.SIGNUP, payload, {
        params: { domain: "tcs" },
      });
      return {
        accessToken: response.data.data.accessToken,
      };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await API.post(API_PATHS.LOGIN, payload, {
        params: { domain: "tcs" },
      });
      const { data } = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const logOutAsync = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      const userId = getUserInfo().userId;
      const realmId = 1;
      const response = await API.post(API_PATHS.SIGNOUT, {
        auth: { userId, realmId },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = null;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = String(action.payload);
      });
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const data = action.payload;

        state.status = "idle";
        state.error = null;

        localStorage.setItem(
          STORAGE_KEY_CONSTANT,
          data?.authToken?.accessToken
        );
        localStorage.setItem(TOKEN_EXPIRE, data?.authToken?.expiresIn);
        localStorage.setItem(
          REFRESH_KEY_CONSTANT,
          data?.authToken?.refreshToken
        );
        delete data.token;
        localStorage.setItem(USER_INFO, JSON.stringify(data));

        window.location.replace(ROUTES.HOME);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = String(action.payload);
      });

    builder
      .addCase(logOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = null;
        // localStorage.removeItem(STORAGE_KEY_CONSTANT);
        // localStorage.removeItem(USER_KEY_CONSTANT);
        localStorage.clear();
        window.location.replace(ROUTES.LOGIN);
      })
      .addCase(logOutAsync.rejected, (state, action) => {
        if (action.payload === "User Not Found! Invalid Token") {
          localStorage.clear();
          window.location.replace(ROUTES.LOGIN);
        }
        state.status = "failed";
      });
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default loginSlice.reducer;
