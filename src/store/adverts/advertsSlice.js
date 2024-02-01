import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getAllAdvertsThunk } from "./advertsThunk";
import { fetchGetAllAdvertsFulfilled } from "./advertsHelpers";

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (build) => {
    build.addCase(getAllAdvertsThunk.fulfilled, fetchGetAllAdvertsFulfilled);
  },
});

export const advertsReducer = advertsSlice.reducer;
