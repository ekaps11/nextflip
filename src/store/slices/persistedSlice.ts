import { createSlice } from "@reduxjs/toolkit";

export const defaultSearchState = {
  query: "",
  searchResults: [],
};

const initialState = {
  language: "english",
  searchedMovies: defaultSearchState,
};

export const persistedSlice = createSlice({
  name: "persisted",
  initialState,
  reducers: {
    setLanguage(state, { payload }) {
      state.language = payload;
    },
    setSearchedMovies(state, { payload }) {
      state.searchedMovies = payload;
    },
  },
});

export const { setLanguage, setSearchedMovies } = persistedSlice.actions;

export default persistedSlice.reducer;
