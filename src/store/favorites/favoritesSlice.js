import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addFavoriteHelper, deleteFavoritesHelper } from "./favoritesHelpers";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: addFavoriteHelper,
    deleteFavorites: deleteFavoritesHelper,
  },
});

export const { addFavorites, deleteFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
