import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

type UserState = { user: User | null };

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
