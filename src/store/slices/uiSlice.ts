import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  profilePanel: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading(state, { payload }) {
      state.isLoading = payload;
    },
    setProfilePanel(state, { payload }) {
      state.profilePanel = payload;
    },
  },
});

export const { setIsLoading, setProfilePanel } = uiSlice.actions;

export default uiSlice.reducer;
