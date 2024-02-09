import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

const {
  fetchSignUp,
  fetchSignIn,
  fetchLogout,
  fetchRefresh,
  fetchUpdateProfile,
  fetchUpdateAvatar,
  fetchDeleteUser,
} = api.authApi;

export const signUpThunk = createAsyncThunk(
  "auth/signup",
  async (body, { rejectWithValue }) => {
    try {
      return await fetchSignUp(body);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signin",
  async (body, { rejectWithValue }) => {
    try {
      return await fetchSignIn(body);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchLogout();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (!persistedToken) {
        return thunkAPI.rejectWithValue("Unable to fetch user");
      }
      return await fetchRefresh(persistedToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProfileThunk = createAsyncThunk(
  "auth/updateProfile",
  async (body, { rejectWithValue }) => {
    try {
      return await fetchUpdateProfile(body);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "auth/updateProfile",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      return await fetchUpdateAvatar(formData);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  "auth/deleteUser",
  async (_, { rejectWithValue }) => {
    try {
      await fetchDeleteUser();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
