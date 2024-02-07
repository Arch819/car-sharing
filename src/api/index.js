import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export const fetchGetAdverts = async (params) => {
  const { data } = await axios("adverts", {
    params: {
      ...params,
      page: params.page || 1,
    },
  });
  return data;
};
