import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDirty: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsDirty(state, { payload }) {
      state.isDirty = payload;
    },
  },
});

export const { setIsDirty } = uiSlice.actions;

export default uiSlice.reducer;
