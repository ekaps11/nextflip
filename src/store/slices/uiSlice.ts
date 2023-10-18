import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  language: "english",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading(state, { payload }) {
      state.isLoading = payload;
    },
    setLanguage(state, { payload }) {
      state.language = payload;
    },
  },
});

export const { setIsLoading, setLanguage } = uiSlice.actions;

export default uiSlice.reducer;
