import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  addImagesAdvertThunk,
  createAdvertThunk,
  getAdvertsThunk,
  getFilterAdvertsThunk,
} from "./advertsThunk";
import {
  fetchAddImageAdvertFulfilled,
  fetchCreateAdvertsFulfilled,
  fetchGetAdvertsFulfilled,
  fetchGetFilterAdvertsFulfilled,
  resetAdvertsState,
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
      .addCase(getAdvertsThunk.fulfilled, fetchGetAdvertsFulfilled)
      .addCase(addImagesAdvertThunk.fulfilled, fetchAddImageAdvertFulfilled)
      .addCase(createAdvertThunk.fulfilled, fetchCreateAdvertsFulfilled)
      .addMatcher(({ type }) => type.includes("logout"), resetAdvertsState);
  },
});

export const { handleUpdateFilters } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
