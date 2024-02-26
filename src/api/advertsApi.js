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

export const fetchCreateAdverts = async (bodyData) => {
  const { data } = await axios.post("adverts", bodyData);
  return data;
};

export const fetchAddImagesAdvert = async (formData, idAdvert) => {
  const { date } = await axios.post(`adverts/img/${idAdvert}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return date;
};
