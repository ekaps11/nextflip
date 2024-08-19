import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../utils/tmdb";

const initialState = {
  query: "",
  searchResults: [] as Movie[],
};

const persistedSlice = createSlice({
  name: "persisted",
  initialState,
  reducers: {
    setQuery(state, { payload }) {
      state.query = payload;
    },
    setSearchResults(state, { payload }) {
      state.searchResults = payload;
    },
    removeQueryNresult(state) {
      state.query = "";
      state.searchResults = [];
    },
  },
});

export const { setQuery, setSearchResults, removeQueryNresult } =
  persistedSlice.actions;

export default persistedSlice.reducer;
