import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { advertsReducer } from "./adverts/advertsSlice";
import { appReducer } from "./appState/appStateSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";
import { authReducer } from "./auth/authSlice";

const persistConfig = {
  key: "favorites",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);
const favoritesPersistReducer = persistReducer(persistConfig, favoritesReducer);

export const reducer = {
  appState: appReducer,
  auth: authPersistReducer,
  adverts: advertsReducer,
  favorites: favoritesPersistReducer,
};
