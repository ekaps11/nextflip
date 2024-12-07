import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const persistedSlice = createSlice({
  name: "persisted",
  initialState,
  reducers: {
    setSearchQuery(state, { payload }) {
      state.searchQuery = payload;
    },
    clearQuery(state) {
      state.searchQuery = "";
    },
  },
});

export const { setSearchQuery, clearQuery } = persistedSlice.actions;

export default persistedSlice.reducer;
