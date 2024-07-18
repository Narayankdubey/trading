import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import API from "../../services/axios";
import API_PATHS from "@/services/apiPaths";
import {
  blendsMock,
  historyDataMock,
  runDataMock,
  strategiesListMock,
  strategiesMock,
} from "@/common/mock";
import { notification } from "antd";

interface portfolioState {
    status: "idle" | "loading" | "failed";
    error: string | null;
    portfolioList: any;
  
   createStatus : "idle" | "loading" | "failed";

  }
  
  const initialState: portfolioState = {
    status: "idle",
    error: null,
    portfolioList: [],

    createStatus: "idle"
  };

  export const getPortfolioListdata = createAsyncThunk(
    "getPortfolioData/backtesing",
    async (payload: any, { rejectWithValue }) => {
      try {
        const response = await API.get(API_PATHS.PORTFOLIO, {
          params: payload,
        });
        const { data } = response.data;
        return data;
      } catch (error: any) {
        return rejectWithValue(error?.response?.data?.message);
      }
    }
  );

  export const addPortfolio = createAsyncThunk(
    "addPortfolio/backtesing",
    async (payload: any, { dispatch, rejectWithValue }) => {
      try {
        const { formedData, filterDetails={} } = payload;
        console.log(formedData,'formedData')
        const response = await API.post(API_PATHS.PORTFOLIO, formedData);
        notification.success({ message: "Portfoli Added Successfully" });
        await dispatch(getPortfolioListdata(filterDetails));
        const { data } = response.data;
        return data;
      } catch (error: any) {
        return rejectWithValue(error?.response?.data?.message);
      }
    }
  );

  export const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      //Get portfolio list
      builder
        .addCase(getPortfolioListdata.pending, (state) => {
          state.status = "loading";
        })
        .addCase(getPortfolioListdata.fulfilled, (state, action) => {
          state.status = "idle";
          console.log(action.payload,'action.apye')
          state.portfolioList = action.payload?.data;
        })
        .addCase(getPortfolioListdata.rejected, (state) => {
          state.status = "failed";
  
          //setting dummy data just for testing purpose
          state.portfolioList = blendsMock.data;
        });
  
      //Add strategies
      builder
        .addCase(addPortfolio.pending, (state) => {
          state.createStatus = "loading";
        })
        .addCase(addPortfolio.fulfilled, (state, action) => {
          state.createStatus = "idle";
          // state.strategies = action.payload;
        })
        .addCase(addPortfolio.rejected, (state) => {
          state.createStatus = "failed";
        });

    },
  });
  
  export const backtesingSelector = (state: RootState) => state.backtestingSlice;
  export default portfolioSlice.reducer;