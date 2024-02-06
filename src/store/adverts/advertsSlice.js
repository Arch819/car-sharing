import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  getAdvertsThunk,
  getAllAdvertsThunk,
  getFilterAdvertsThunk,
} from "./advertsThunk";
import {
  fetchGetAdvertsFulfilled,
  fetchGetAllAdvertsFulfilled,
  fetchGetFilterAdvertsFulfilled,
} from "./advertsHelpers";

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    handleUpdateFilters(state, { payload }) {
      state.filter = { ...state.filter, ...payload };
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getAllAdvertsThunk.fulfilled, fetchGetAllAdvertsFulfilled)
      .addCase(getFilterAdvertsThunk.fulfilled, fetchGetFilterAdvertsFulfilled)
      .addCase(getAdvertsThunk.fulfilled, fetchGetAdvertsFulfilled);
  },
});

export const { handleUpdateFilters } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
