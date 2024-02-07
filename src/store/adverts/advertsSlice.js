import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getAdvertsThunk, getFilterAdvertsThunk } from "./advertsThunk";
import {
  fetchGetAdvertsFulfilled,
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
      .addCase(getFilterAdvertsThunk.fulfilled, fetchGetFilterAdvertsFulfilled)
      .addCase(getAdvertsThunk.fulfilled, fetchGetAdvertsFulfilled);
  },
});

export const { handleUpdateFilters } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
