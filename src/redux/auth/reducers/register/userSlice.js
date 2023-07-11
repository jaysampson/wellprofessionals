import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    error: "",
    phoneError: "",
    emailError: "",
    valError: "",
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPhoneError: (state, action) => {
      state.phoneError = action.payload;
      state.error = "";
    },
    setEmailError: (state, action) => {
      state.emailError = action.payload;
      state.error = "";
    },
    setValError: (state, action) => {
      state.valError = action.payload;
      state.error = "";
    },
  },
});

export const { setError, setPhoneError, setEmailError, setValError } = userSlice.actions;

export default userSlice.reducer;
