import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navStack: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setNavStack(state, { payload }) {
      state.navStack = payload;
    },
  },
});

export const { setNavStack } = uiSlice.actions;

export default uiSlice.reducer;
