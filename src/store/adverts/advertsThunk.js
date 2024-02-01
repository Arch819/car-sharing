import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetAllAdverts } from "../../api";

export const getAllAdvertsThunk = createAsyncThunk(
  "adverts/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchGetAllAdverts();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
