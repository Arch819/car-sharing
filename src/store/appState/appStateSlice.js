import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const appSlice = createSlice({
  name: "app",
  initialState,
});

export const appReducer = appSlice.reducer;
