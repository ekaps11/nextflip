import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  language: "",
  lngContent: "",
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
    setLngContent(state, { payload }) {
      state.lngContent = payload;
    },
  },
});

export const { setIsLoading, setLanguage, setLngContent } = uiSlice.actions;

export default uiSlice.reducer;
