import axios from "axios";

axios.defaults.baseURL = "https://6527e6dc931d71583df191c3.mockapi.io/adverts";

export const fetchGetAllAdverts = async () => {
  const { data } = await axios("");
  return data;
};
