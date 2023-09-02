import axios from "axios";

const user_details = JSON.parse(localStorage.getItem("user"));
const user_id = user_details && user_details.data._id;

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
  }
  return response.data;
};

// Update user

const updateUser = async (userData) => {
  // const user = JSON.parse(localStorage.getItem("user"));
  const token = user_details && user_details.token;
  try {
    const response = await axios.patch(UPDATE_API, userData, {
      headers: {
        Authorization: `Bearer ${token}`, // Included the JWT token in the Authorization header
      },
    });

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(user_id, token);
    }

    return response.data;
  } catch (error) {
    console.error("Update user error:", error, user_id, token);
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
