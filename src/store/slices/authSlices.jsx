import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authDetails",
  initialState: {
    currentUser: null,
    isError: false,
    isLoading: false,
  },
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
    setError(state, action) {
      state.isError = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});
export default authSlice.reducer;
export const { setUser, setError, setLoading } = authSlice.actions;
