import axios from "axios";

const setToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const deleteToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const fetchSignUp = async (body) => {
  const { data } = await axios.post("user/signup", body);
  setToken(data.token);
  return data;
};

export const fetchSignIn = async (body) => {
  const { data } = await axios.post("user/signin", body);
  setToken(data.token);
  return data;
};

export const fetchRefresh = async (token) => {
  setToken(token);
  const { data } = await axios("user/current");
  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post("user/logout");
  deleteToken();
  return data;
};

export const fetchUpdateProfile = async (body) => {
  const { data } = await axios.patch("user/profile", body);
  return data;
};

export const fetchUpdateAvatar = async (formData) => {
  const { data } = await axios.patch("user/avatar", formData, {
    headers: { "content-type": "multipart/form-data" },
  });
  return data;
};

export const fetchDeleteUser = async () => {
  await axios.delete("user");
};
