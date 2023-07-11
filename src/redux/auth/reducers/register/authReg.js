import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("api/registerUser", async (regobj) => {
  const response = await fetch("https://wellpro-server.onrender.com/api/user/register", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(regobj),
  });
  const data = await response.json();

  if (response.status === 201) {
    return data;
  } else {
    throw new Error(data.message);
  }
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed: " + action.error.message;
      });
  },
});

export const selectLoading = (state) => state.api.loading;
export const selectError = (state) => state.api.error;

export default apiSlice.reducer;
