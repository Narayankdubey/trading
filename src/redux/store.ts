import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import auth from "../pages/auth/authSlice";
import appSlice from "./appSlice";
import backtestingSlice from "@/pages/backtesting/backtestingSlice";

export const store = configureStore({
  reducer: {
    auth,
    appSlice,
    backtestingSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
