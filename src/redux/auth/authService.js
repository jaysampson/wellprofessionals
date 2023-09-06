import axios from "axios";

// Retrieve user details from local storage
// const user_details = JSON.parse(localStorage.getItem("user"));
const user_id = JSON.parse(localStorage.getItem("id"));
const user_token = JSON.parse(localStorage.getItem("token"));

// Initialize user_id and token based on user_details, if available
// const user_id = user_details && user_details.data && user_details.data._id;
// const token = user_details && user_details.token;

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
    console.log(user_token, user_id);
    return response.data;
  } catch (error) {
    console.error("Update user error:", error, user_id, user_token);
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
};

export default authService;
