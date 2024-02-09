import axios from "axios";

export const fetchGetAdverts = async (params) => {
  const { data } = await axios("adverts", {
    params: {
      ...params,
      page: params.page || 1,
    },
  });
  return data;
};
