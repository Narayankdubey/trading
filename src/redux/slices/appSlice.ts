import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AppState {
  status: "idle" | "loading" | "failed";
  error: string | null;
  userDetails: any;
  darkTheme: Boolean;
}

const initialState: AppState = {
  status: "idle",
  error: null,
  userDetails: {},
  darkTheme:
    JSON.parse(
      typeof localStorage !== "undefined"
        ? localStorage.getItem("theme") || "{}"
        : "{}"
    ) || false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toogleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem("theme", JSON.stringify(!state.darkTheme));
    },
  },
});

export const selectApp = (state: RootState) => state.appSlice;

export default appSlice.reducer;
