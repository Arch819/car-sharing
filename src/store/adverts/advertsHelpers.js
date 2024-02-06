export const fetchGetAdvertsFulfilled = (state, { payload }) => {
  state.adverts.push(...payload);
};
export const fetchGetFilterAdvertsFulfilled = (state, { payload }) => {
  state.adverts = payload;
};

export const fetchGetAllAdvertsFulfilled = (state, { payload }) => {
  state.totalPage = payload;
};
