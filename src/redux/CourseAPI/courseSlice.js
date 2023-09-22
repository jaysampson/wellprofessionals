import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "./courseService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  data: [],
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
        state.user = action.payload;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.user = null;
      })
      .addCase(getCourse.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(getCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
        // state.user = action.payload;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        // state.user = null;
      });
  },
});

export const { reset } = courseSlice.actions;
export default courseSlice.reducer;
