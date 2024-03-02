import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

const {
  fetchGetAdverts,
  fetchCreateAdverts,
  fetchAddImagesAdvert,
  fetchDeleteAdvert,
} = api.advertsApi;

export const getAdvertsThunk = createAsyncThunk(
  "adverts/getAll",
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
  "adverts/getByFilter",
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
  "adverts/createAd",
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

export const deleteAdvertThunk = createAsyncThunk(
  "adverts/deleteAd",
  async (idAdvert, { rejectWithValue }) => {
    try {
      await fetchDeleteAdvert(idAdvert);
      return idAdvert;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
