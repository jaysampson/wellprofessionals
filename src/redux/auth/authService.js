import axios from "axios";
import { toast } from "react-toastify";

const user_id = JSON.parse(localStorage.getItem("id"));
const user_token = JSON.parse(localStorage.getItem("token"));

const REGISTER_API = "https://wellpro-server.onrender.com/api/user/register";
const LOGIN_API = "https://wellpro-server.onrender.com/api/user/login";
const UPDATE_API = `https://wellpro-server.onrender.com/api/user/${user_id}`;

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
    localStorage.setItem("id", JSON.stringify(response.data.data._id));
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response.data;
};

// Update user
const updateUser = async (userData) => {
  try {
    // Check if user_id and token are available before making the API call
    if (!user_id || !user_token) {
      throw new Error("User data not available");
    }

    const response = await axios.patch(UPDATE_API, userData, {
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    });

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

//logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
  updateUser,
  // courses,
};

export default authService;
