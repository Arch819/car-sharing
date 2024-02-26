import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { fetchAddImagesAdvert, fetchCreateAdverts } from "api/advertsApi";

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

export const createAdvertThunk = createAsyncThunk(
  "adverts/create",
  async (bodyData, { rejectWithValue }) => {
    try {
      const data = await fetchCreateAdverts(bodyData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addImagesAdvertThunk = createAsyncThunk(
  "adverts/addImages",
  async ({ file, idAdvert }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("advert", file);
      return await fetchAddImagesAdvert(formData, idAdvert);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
