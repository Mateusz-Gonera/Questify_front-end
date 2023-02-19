import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("token") || "";

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, { payload }) => payload,
    deleteToken: (state, { payload }) => "",
  },
});

export const { addToken, deleteToken } = tokenSlice.actions;

export default tokenSlice.reducer;