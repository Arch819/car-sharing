import axios from "axios";
import * as authApi from "./authApi";
import * as advertsApi from "./advertsApi";
axios.defaults.baseURL = "https://car-sharing-api.onrender.com";
// axios.defaults.baseURL = "http://localhost:8000";

const api = { authApi, advertsApi };
export default api;
