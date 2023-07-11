import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/reducers/register/userSlice";
import apiReducer from "./auth/reducers/register/authReg";
import authReducer from "./auth/reducers/login/authSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    api: apiReducer,
    auth: authReducer,
  },
});

export default store;
