import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  cards: [],
  sid: "",
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => payload,
    deleteUser: (state, { payload }) => initialState,
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;