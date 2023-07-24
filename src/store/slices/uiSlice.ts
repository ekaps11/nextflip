import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accordion: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAccordion(state, { payload }) {
      state.accordion = payload;
    },
  },
});

export const { toggleAccordion } = uiSlice.actions;

export default uiSlice.reducer;
