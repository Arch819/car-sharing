import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetAdverts, fetchGetAllAdverts } from "../../api";

export const getAllAdvertsThunk = createAsyncThunk(
  " adverts/fetch/all",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchGetAllAdverts();
      if (!data.length) {
        throw rejectWithValue("Sorry, not found.");
      }
      return Math.ceil(data.length / 12);
    } catch (error) {
      return rejectWithValue(error.payload || error.response.data);
    }
  }
);

export const getAdvertsThunk = createAsyncThunk(
  "adverts/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const data = await fetchGetAdverts(params);
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
      const data = await fetchGetAdverts(transformParams);
      if (!data.length) {
        throw rejectWithValue("Sorry, not found.");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.payload || error.response.data);
    }
  }
);
