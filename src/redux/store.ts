import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import auth from "./slices/authSlice";
import appSlice from "./slices/appSlice";
import backtestingSlice from "@/redux/slices/backtestingSlice";

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
