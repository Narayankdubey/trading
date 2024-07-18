import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import API from "../../services/axios";
import API_PATHS from "@/services/apiPaths";

export interface AppState {
  status: "idle" | "loading" | "failed";
  error: string | null;
  userDetails: any;
  darkTheme: Boolean;
  connAcc: any[]
}

const initialState: AppState = {
  status: "idle",
  error: null,
  userDetails: {},
  darkTheme:
      Boolean(typeof localStorage !== "undefined"
        ? localStorage.getItem("theme") || false
        : false),
  connAcc: []
};

export const getConnectedAcc = createAsyncThunk(
  "getConnectedAcc",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get(API_PATHS.CONN_ACC_LIST);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const connectAcc = createAsyncThunk(
  "connectAcc",
  async (props, { rejectWithValue }) => {

    try {
      const response = await API.post("icici_direct" + API_PATHS.AUTH_ACC, props, {});

      return response;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toogleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem("theme", JSON.stringify(!state.darkTheme));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConnectedAcc.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getConnectedAcc.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = null;
        state.connAcc = action?.payload?.data
      })
      .addCase(getConnectedAcc.rejected, (state, action) => {
        state.status = "failed";
        state.error = String(action.payload);
      });
  },
});


export const selectApp = (state: RootState) => state.appSlice;

export default appSlice.reducer;
