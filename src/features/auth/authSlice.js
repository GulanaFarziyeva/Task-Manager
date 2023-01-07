import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const result = await axios
    .get("/db/users.json")
    .then((response) => response.data);
  return result.users;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default authSlice.reducer;

