import axios from "axios";

const user_id = JSON.parse(localStorage.getItem("id"));
const user_token = JSON.parse(localStorage.getItem("token"));
const GetUser_API = `https://wellpro-server.onrender.com/api/user/${user_id}`;

const getUser = async () => {
  try {
    const response = await axios.get(GetUser_API, {
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    });
    if (response.data) {
      console.log("fetched user details");
      console.log(response.data, "User Details");
      return response.data;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.log("Error geting user details:", error);
    console.log(user_token);
    throw error;
  }
};

const userService = {
  getUser,
};

export default userService;
