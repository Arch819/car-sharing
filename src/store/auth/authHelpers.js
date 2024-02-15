import { initialState } from "./initialState";

export const signUpThunkFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.profile;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const signInThunkFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.profile;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const logoutThunkPending = () => {
  return initialState;
};
export const logoutThunkFulfilled = () => {
  return initialState;
};

export const refreshThunkPending = (state, { payload }) => {
  state.isRefreshing = true;
};

export const refreshThunkFulfilled = (state, { payload }) => {
  state.profile = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const updateProfileThunkFulfilled = (state, { payload }) => {
  state.profile = payload.profile;
  state.isRefreshing = false;
};
export const updateAvatarThunkFulfilled = (state, { payload }) => {
  state.profile.avatar = payload;
  state.isRefreshing = false;
};

export const deleteUserThunkFulfilled = (state, { payload }) => {
  state = initialState;
};
