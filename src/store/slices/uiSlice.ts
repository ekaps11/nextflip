import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenre: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedGenre(state, { payload }) {
      state.selectedGenre = payload;
    },
  },
});

export const { setSelectedGenre } = uiSlice.actions;

export default uiSlice.reducer;
