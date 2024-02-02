import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { advertsReducer } from "./adverts/advertsSlice";
import { appReducer } from "./appState/appStateSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";
// import { filterReducer } from "./filter/filterSlice";

const persistConfig = {
  key: "favorites",
  storage,
};

const favoritesPersistReducer = persistReducer(persistConfig, favoritesReducer);

export const reducer = {
  appState: appReducer,
  adverts: advertsReducer,
  favorites: favoritesPersistReducer,
  // filter: filterReducer,
};
