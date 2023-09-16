import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import courseReducer from "./CourseAPI/courseSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
});
