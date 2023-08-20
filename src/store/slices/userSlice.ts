import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  validEmail: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    setValidEmail(state, { payload }) {
      state.validEmail = payload;
    },
  },
});

export const { setUser, setValidEmail } = userSlice.actions;

export default userSlice.reducer;
