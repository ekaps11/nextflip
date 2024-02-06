import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passwordIcon: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setPasswordIcon(state, {payload}) {
      state.passwordIcon = payload;
    },
  },
});

export const { setPasswordIcon } = uiSlice.actions;

export default uiSlice.reducer;
