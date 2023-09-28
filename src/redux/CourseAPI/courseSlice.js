import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "./courseService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  data: [],
  courseArray: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//Create Course

export const createCourse = createAsyncThunk(
  "course/create",
  async (course, thunkApi) => {
    try {
      return await courseService.createCourse(course);
    } catch (error) {
      const defaultMessage = "An error occurred. Please try again.";
      let message = defaultMessage;

      if (error.response && error.response.data && error.response.data.msg) {
        message = error.response.data.msg; // Use the 'msg' property from the response
      }
      return thunkApi.rejectWithValue(message);
    }
  }
);

//GetAllCourses
export const getCourse = createAsyncThunk("course/get", async (_, thunkApi) => {
  try {
    return await courseService.getCourse();
  } catch (error) {
    const defaultMessage = "An error occurred. Please try again.";
    let message = defaultMessage;

    if (error.response && error.response.data && error.response.data.msg) {
      message = error.response.data.msg; // Use the 'msg' property from the response
    }
    return thunkApi.rejectWithValue(message);
  }
});

//Get a single course

export const fetchACourse = createAsyncThunk(
  "course/fetchCourse",
  async (courseId) => {
    const response = await courseService.getACourse.get(
      `/api/course/${courseId}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCourse.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(getCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchACourse.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchACourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courseArray = action.payload;
      })
      .addCase(fetchACourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = courseSlice.actions;
export default courseSlice.reducer;
