import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetAllAdverts } from "../../api";

export const getAllAdvertsThunk = createAsyncThunk(
  "adverts/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const data = await fetchGetAllAdverts(params);
      if (!data.length) {
        throw rejectWithValue("Sorry, but that's it.");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.payload || error.response.data);
    }
  }
);

export const getFilterAdvertsThunk = createAsyncThunk(
  "filterAdverts/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const transformParams = {
        make: params.make === "all" ? null : params.make,
        rentalPrice: params.rentalPrice === "all" ? null : params.rentalPrice,
      };
      const data = await fetchGetAllAdverts(transformParams);
      if (!data.length) {
        throw rejectWithValue("Sorry, not found.");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.payload || error.response.data);
    }
  }
);
