import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (values) => {
  try {
    const response = await fetch("https://wellpro-server.onrender.com/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status === 201) {
      const result = await response.json();
      return result;
    } else {
      const errorResponse = await response.json();
      throw new Error(`Login failed: ${errorResponse.message}`);
    }
  } catch (error) {
    throw new Error(`An error occurred during login ${error.message}`);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
