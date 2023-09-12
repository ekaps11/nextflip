import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: Object
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    setError(state, {payload}) {
      state.error = payload
    }
  },
});

export const { setUser, setError } = userSlice.actions;

export default userSlice.reducer;
