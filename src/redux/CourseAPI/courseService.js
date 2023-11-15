import axios from "axios";

const COURSE_API = "https://wellpro-server.onrender.com/api/course";
const GET_COURSE_API = "https://wellpro-server.onrender.com/api/course";
const user_token = JSON.parse(localStorage.getItem("token"));

const createCourse = async (courseData) => {
  try {
    const response = await axios.post(COURSE_API, courseData, {
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    });
    if (response.data && response.data.course) {
      console.log("Successful");
      //   localStorage.setItem(
      //     "course_id",
      //     JSON.stringify(response.data.course[0]._id)
      //   );
      return response.data;
    } else {
      // Handle unexpected response structure
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

//Get all courses
const getCourse = async () => {
  try {
    const response = await axios.get(
      GET_COURSE_API
      //   , {
      //   headers: {
      //     Authorization: `Bearer ${user_token}`,
      //   },
      // }
    );
    if (response.data) {
      console.log(response.data);
      //   localStorage.setItem(
      //     "course_id",
      //     JSON.stringify(response.data.course[0]._id)
      //   );
      return response.data;
    } else {
      // Handle unexpected response structure
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error getting course:", error);
    throw error;
  }
};

//get a single course
const getACourse = axios.create({
  baseURL: "https://wellpro-server.onrender.com",
});

const courseService = {
  createCourse,
  getCourse,
  getACourse,
};

export default courseService;
