import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import courseReducer from "./CourseAPI/courseSlice.js";
import cartReducer from "./addToCart/cartSlice.js";
import userReducer from "./user/userSlice.js";
import purchaseCourseReducer from "./purchaseCourse/purchaseCourseSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    cart: cartReducer,
    details: userReducer,
    order: purchaseCourseReducer,
  },
});
