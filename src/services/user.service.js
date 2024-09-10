import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/api/v1/";

const getUserInfo = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const userService = {
  getUserInfo,
};

export default userService