import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import purchaseCourseService from "./purchaseCourseService";

const initialState = {
  data: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const createOrder = createAsyncThunk(
  "create/order",
  async (orderData, thunkApi) => {
    try {
      return await purchaseCourseService.createOrder(orderData);
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

export const purchaseCourseSlice = createSlice({
  name: "order",
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
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = purchaseCourseSlice.actions;
export default purchaseCourseSlice.reducer;
