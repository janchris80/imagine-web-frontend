import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1/";

const register = (name, email, role, password, password_confirmation) => {
  return axios.post(API_URL + "auth/register", {
    name,
    email,
    role,
    password,
    password_confirmation
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
