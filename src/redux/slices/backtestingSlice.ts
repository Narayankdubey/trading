import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import API from "../../services/axios";
import API_PATHS from "@/services/apiPaths";
import {
  historyDataMock,
  runDataMock,
  strategiesListMock,
  strategiesMock,
} from "@/common/mock";
import { notification } from "antd";

interface backtestingState {
  status: "idle" | "loading" | "failed";
  error: string | null;
  strategiesList: any;

  strategiesStatus: "idle" | "loading" | "failed";
  strategiesError: string | null;
  strategies: any;

  deleteStatus: "idle" | "loading" | "failed";

  runData: any;
  runStatus: "idle" | "loading" | "failed";
  startRunStatus: "idle" | "loading" | "failed";

  historyData: any;
  historyStatus: "idle" | "loading" | "failed";
}

const initialState: backtestingState = {
  status: "idle",
  error: null,
  strategiesList: [],
  strategiesStatus: "idle",
  strategiesError: null,
  strategies: [],
  deleteStatus: "idle",
  runData: {},
  runStatus: "idle",
  startRunStatus: "idle",
  historyData: {},
  historyStatus: "idle",
};

export const getStrategiesListdata = createAsyncThunk(
  "getStrategiesData/backtesing",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await API.get(API_PATHS.STRATEGIES, {
        params: payload,
      });
      const { data } = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getStrategies = createAsyncThunk(
  "getStrategies/backtesing",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await API.get(API_PATHS.STRATEGIES + `/${payload}`);
      const { data } = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const addStrategies = createAsyncThunk(
  "addStrategies/backtesing",
  async (payload: any, { dispatch, rejectWithValue }) => {
    try {
      const { formedData, filterDetails } = payload;
      const response = await API.post(API_PATHS.STRATEGIES, formedData);
      notification.success({ message: "Strategy Added Successfully" });
      await dispatch(getStrategiesListdata(filterDetails));
      const { data } = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const updateStrategies = createAsyncThunk(
  "updateStrategies/backtesing",
  async (payload: any, { rejectWithValue, dispatch }) => {
    try {
      const { formedData, strategyId, filterDetails } = payload;
      const response = await API.patch(
        API_PATHS.STRATEGIES + `/${strategyId}`,
        formedData
      );
      const { data } = response.data;
      notification.success({ message: "Strategy Updated Successfully" });
      await dispatch(getStrategiesListdata(filterDetails));
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const deleteStrategies = createAsyncThunk(
  "deleteStrategies/backtesing",
  async (payload: any, { dispatch, rejectWithValue }) => {
    try {
      const {id, filterDetails} = payload;
      const response = await API.delete(
        API_PATHS.STRATEGIES + `/${id}`,
        payload
      );
      const { data } = response.data;
      notification.success({ message: "Strategy Deleted Successfully" });
      await dispatch(getStrategiesListdata(filterDetails));
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getRunData = createAsyncThunk(
  "getRunData/backtesing",
  async (payload: any = {}, { rejectWithValue }) => {
    try {
      const response = await API.get(API_PATHS.TRADING + `/${payload}`);
      const { data } = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const runStrategy = createAsyncThunk(
  "runStrategy/backtesing",
  async (payload: any = {}, { rejectWithValue }) => {
    try {
      const response = await API.post(API_PATHS.RUNSTRATEGY, payload);
      notification.success({ message: "Started" });
      const { data } = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getHistoryData = createAsyncThunk(
  "getHistoryData/backtesing",
  async (payload: any = {}, { rejectWithValue }) => {
    try {
      const response = await API.get(API_PATHS.TRADING, {
        params: payload,
      });
      const { data } = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const backtesingSlice = createSlice({
  name: "backtesting",
  initialState,
  reducers: {
    resetHistoryData: (state) => {
      state.historyData = {};
    },
    resetStratergyData: (state) => {
      state.strategies = [];
    },
  },
  extraReducers: (builder) => {
    //Get strategies list
    builder
      .addCase(getStrategiesListdata.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStrategiesListdata.fulfilled, (state, action) => {
        state.status = "idle";
        state.strategiesList = action.payload;
      })
      .addCase(getStrategiesListdata.rejected, (state) => {
        state.status = "failed";

        //setting dummy data just for testing purpose
        state.strategiesList = strategiesListMock;
      });

    //Get strategies
    builder
      .addCase(getStrategies.pending, (state) => {
        state.strategiesStatus = "loading";
      })
      .addCase(getStrategies.fulfilled, (state, action) => {
        state.strategiesStatus = "idle";
        state.strategies = action.payload;
      })
      .addCase(getStrategies.rejected, (state) => {
        state.strategiesStatus = "failed";

        //setting dummy data just for testing purpose
        state.strategies = strategiesMock;
      });

    //Add strategies
    builder
      .addCase(addStrategies.pending, (state) => {
        state.strategiesStatus = "loading";
      })
      .addCase(addStrategies.fulfilled, (state, action) => {
        state.strategiesStatus = "idle";
        // state.strategies = action.payload;
      })
      .addCase(addStrategies.rejected, (state) => {
        state.strategiesStatus = "failed";
      });

    //Update strategies
    builder
      .addCase(updateStrategies.pending, (state) => {
        state.strategiesStatus = "loading";
      })
      .addCase(updateStrategies.fulfilled, (state, action) => {
        state.strategiesStatus = "idle";
        // state.strategies = action.payload;
      })
      .addCase(updateStrategies.rejected, (state) => {
        state.strategiesStatus = "failed";
      });

    //Delete strategies
    builder
      .addCase(deleteStrategies.pending, (state) => {
        state.deleteStatus = "loading";
      })
      .addCase(deleteStrategies.fulfilled, (state, action) => {
        state.deleteStatus = "idle";
        // state.strategies = action.payload;
      })
      .addCase(deleteStrategies.rejected, (state) => {
        state.deleteStatus = "failed";
      });

    //Get run data
    builder
      .addCase(getRunData.pending, (state) => {
        state.runStatus = "loading";
      })
      .addCase(getRunData.fulfilled, (state, action) => {
        state.runStatus = "idle";
        // state.strategies = action.payload;
        state.runData = action.payload;
      })
      .addCase(getRunData.rejected, (state) => {
        state.runStatus = "failed";
        // state.runData = runDataMock;
      });

    //run strategy
    builder
      .addCase(runStrategy.pending, (state) => {
        state.startRunStatus = "loading";
      })
      .addCase(runStrategy.fulfilled, (state, action) => {
        state.startRunStatus = "idle";
        // state.strategies = action.payload;
      })
      .addCase(runStrategy.rejected, (state) => {
        state.startRunStatus = "failed";
      });

    //get history data
    builder
      .addCase(getHistoryData.pending, (state) => {
        state.historyStatus = "loading";
      })
      .addCase(getHistoryData.fulfilled, (state, action) => {
        state.historyStatus = "idle";
        state.historyData = action.payload;
      })
      .addCase(getHistoryData.rejected, (state) => {
        state.historyStatus = "failed";

        //setting dummy data just for testing purpose
        // state.historyData = historyDataMock;
      });
  },
});

export const backtesingSelector = (state: RootState) => state.backtestingSlice;
export default backtesingSlice.reducer;
