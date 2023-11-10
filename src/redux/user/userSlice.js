import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  data: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getUser = createAsyncThunk(
  "details/course",
  async (_, thunkApi) => {
    try {
      return await userService.getUser();
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

export const userSlice = createSlice({
  name: "details",
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
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
