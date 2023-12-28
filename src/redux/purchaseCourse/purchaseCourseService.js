import axios from "axios";

const COURSE_ORDER_API =
  "https://wellpro-server.onrender.com/api/order/create-order";
const user_token = JSON.parse(localStorage.getItem("token"));

const createOrder = async (orderData) => {
  try {
    const response = await axios.post(COURSE_ORDER_API, orderData, {
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    });
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    throw error;
  }
};

const purchaseCourseService = {
  createOrder,
};

export default purchaseCourseService;
