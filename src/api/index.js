import axios from "axios";

axios.defaults.baseURL = "https://6527e6dc931d71583df191c3.mockapi.io/adverts";

export const fetchGetAllAdverts = async (params) => {
  const { data } = await axios("", {
    params: {
      ...params,
      page: params.page || 1,
      limit: 12,
    },
  });
  return data;
};
