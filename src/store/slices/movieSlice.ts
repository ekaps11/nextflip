import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: [],
  indonesianMovies: [],
};

const uiSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPopularMovies(state, { payload }) {
      state.popularMovies = payload;
    },
  },
});

export const { setPopularMovies } = uiSlice.actions;

export default uiSlice.reducer;
