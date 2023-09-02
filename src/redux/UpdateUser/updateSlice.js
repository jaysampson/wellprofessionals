// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import userUpdate from "./updateService";

// // Get user from localStorage
// const user = JSON.parse(localStorage.getItem("user"));

// const initialState = {
//   user: user ? user : null,
//   isError: false,
//   isLoading: false,
//   isSuccess: false,
//   message: "",
// };

// // Update user
// export const updateUser = createAsyncThunk(
//   "update/user",
//   async (user, thunkApi) => {
//     try {
//       return await userUpdate.updateUser(user);
//     } catch (error) {
//       const defaultMessage = "An error occurred. Please try again.";
//       let message = defaultMessage;

//       if (error.response && error.response.data && error.response.data.msg) {
//         message = error.response.data.msg; // Use the 'msg' property from the response
//       }
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );

// export const updateSlice = createSlice({
//   name: "update",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//       state.isError = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(updateUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//       })
//       .addCase(updateUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.user = null;
//       });
//   },
// });
// export const { reset } = updateSlice.actions;
// export default updateSlice.reducer;
