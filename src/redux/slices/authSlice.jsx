import { createSlice } from "@reduxjs/toolkit";
import { questifyApi } from "../api/questifyApi";

// const token = localStorage.getItem("token")
//   ? localStorage.getItem("token")
//   : null;
const token = localStorage.getItem("token") || "";

const initialState = {
	user: { name: "", email: "", password: "", avatarURL: "" },
	token,
	isLoggedIn: false,
	isError: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,

	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload;
		},
		setToken: (state, { payload }) => {
			state.token = payload;
		},
	},

	extraReducers: (builder) => {
		builder.addMatcher(
			questifyApi.endpoints.register.matchFulfilled,
			(state, { payload }) => {
				state.user = payload.userData;
				// state.token = payload.token;
				// state.isLoggedIn = true;
			},
		);
		builder.addMatcher(
			questifyApi.endpoints.login.matchFulfilled,
			(state, { payload }) => {
				state.user = payload.userData;
				state.token = payload.accessToken;
				state.isLoggedIn = true;
			},
		);
		// builder.addMatcher(
		//   questifyApi.endpoints.login.matchRejected,
		//   (state, { payload }) => {
		//     if (payload.status === 400) {
		//       state.isError = true;
		//     }
		//   }
		// );
		builder.addMatcher(questifyApi.endpoints.logout.matchFulfilled, (state) => {
			localStorage.removeItem("token");
			state.user = { email: null };
			state.token = null;
			state.isLoggedIn = false;
		});
		builder.addMatcher(
			questifyApi.endpoints.refresh.matchFulfilled,
			(state, { payload }) => {
				state.user = payload.userData;
				state.isLoggedIn = true;
				// state.token = payload.refreshToken;
				// state.sid = payload.sid;
			},
		);
	},
});

export default authSlice.reducer;
export const { setUser, setToken } = authSlice.actions;
