import axios from "axios";

const REGISTER_API = "https://wellpro-server.onrender.com/api/user/register";
const LOGIN_API = "https://wellpro-server.onrender.com/api/user/login";

//Register user

const register = async (userData) => {
  const response = await axios.post(REGISTER_API, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login User
const login = async (userData) => {
  const response = await axios.post(LOGIN_API, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
