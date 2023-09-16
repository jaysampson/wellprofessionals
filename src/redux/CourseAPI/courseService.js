import axios from "axios";

const COURSE_API = "https://wellpro-server.onrender.com/api/course";
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

const courseService = {
  createCourse,
};

export default courseService;
