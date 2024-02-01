export const addFavoriteHelper = (state, { payload }) => {
  state.favorites.push(payload);
};

export const deleteFavoritesHelper = (state, { payload }) => {
  state.favorites = state.favorites.filter(
    (advert) => advert.id !== payload.id
  );
};
