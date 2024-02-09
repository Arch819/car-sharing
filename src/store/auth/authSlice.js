import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  logoutThunk,
  refreshThunk,
  signInThunk,
  signUpThunk,
} from "./authThunk";
import {
  logoutThunkFulfilled,
  logoutThunkPending,
  refreshThunkFulfilled,
  refreshThunkPending,
  signInThunkFulfilled,
  signUpThunkFulfilled,
} from "./authHelpers";

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(signUpThunk.fulfilled, signUpThunkFulfilled)
      .addCase(signInThunk.fulfilled, signInThunkFulfilled)
      .addCase(logoutThunk.pending, logoutThunkPending)
      .addCase(logoutThunk.fulfilled, logoutThunkFulfilled)
      .addCase(refreshThunk.pending, refreshThunkPending)
      .addCase(refreshThunk.fulfilled, refreshThunkFulfilled);
  },
});

export const authReducer = authSlice.reducer;
