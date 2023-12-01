import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "english",
};

export const persistedSlice = createSlice({
  name: "persisted",
  initialState,
  reducers: {
    setLanguage(state, { payload }) {
      state.language = payload;
    },
  },
});

export const { setLanguage } = persistedSlice.actions;

export default persistedSlice.reducer;
