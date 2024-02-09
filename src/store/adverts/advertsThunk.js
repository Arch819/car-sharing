import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

const { fetchGetAdverts } = api.advertsApi;

export const getAdvertsThunk = createAsyncThunk(
  "adverts/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const data = await fetchGetAdverts(params);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getFilterAdvertsThunk = createAsyncThunk(
  "filterAdverts/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const transformParams = {
        ...params,
        make: params.make === "all" ? null : params.make,
        rentalPrice: params.rentalPrice === "all" ? null : params.rentalPrice,
      };
      const data = await fetchGetAdverts(transformParams);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
