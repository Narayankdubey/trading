import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

import API from "../../services/axios";
import API_PATHS from "@/services/apiPaths";
import { strategiesListMock, strategiesMock } from "@/common/mock";

interface backtestingState {
  status: "idle" | "loading" | "failed";
  error: string | null;
  strategiesList: any;

  strategiesStatus: "idle" | "loading" | "failed";
  strategiesError: string | null;
  strategies: any;

  deleteStatus: "idle" | "loading" | "failed";
}

const initialState: backtestingState = {
  status: "idle",
  error: null,
  strategiesList: [],
  strategiesStatus: "idle",
  strategiesError: null,
  strategies: [],
  deleteStatus: "idle",
};

export const getStrategiesListdata = createAsyncThunk(
  "getStrategiesData/backtesing",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await API.get(API_PATHS.STRATEGIESLIST, {
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
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await API.post(API_PATHS.STRATEGIES, payload);
      const { data } = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const updateStrategies = createAsyncThunk(
  "updateStrategies/backtesing",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { formedData, strategyId } = payload;
      const response = await API.patch(
        API_PATHS.STRATEGIES + `/${strategyId}`,
        formedData
      );
      const { data } = response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const deleteStrategies = createAsyncThunk(
  "deleteStrategies/backtesing",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await API.delete(
        API_PATHS.STRATEGIES + `/${payload}`,
        payload
      );
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
  reducers: {},
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
  },
});

export const backtesingSelector = (state: RootState) => state.backtestingSlice;
export default backtesingSlice.reducer;
