import { initialState } from "./initialState";

export const fetchGetAdvertsFulfilled = (state, { payload }) => {
  state.adverts.push(...payload.data);
  state.totalPage = payload.totalPage;
  state.total = payload.total;
};
export const fetchGetFilterAdvertsFulfilled = (state, { payload }) => {
  state.adverts = payload.data;
  state.totalPage = payload.totalPage;
  state.total = payload.total;
};

export const resetAdvertsState = () => {
  return initialState;
};

export const fetchAddImageAdvertFulfilled = (state, { payload }) => {
  console.log(payload);
};

export const fetchCreateAdvertsFulfilled = (state, { payload }) => {
  console.log(payload);
};
