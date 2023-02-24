import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import NotFound from "../pages/notFound/NotFound";
import LandingWelcome from "./landing/landingWelcome/LandingWelcome";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import "./App.css";
import Register from "../pages/landingPage/Register";
import Login from "../pages/landingPage/Login";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const LandingPage = React.lazy(
	() => import("../pages/landingPage/LandingPage"),
);

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<LandingWelcome />} />
					<Route path="register" element={<Register />} />
					<Route
						path="login"
						element={
							<RestrictedRoute redirectTo="/dashboard" component={<Login />} />
						}
					/>
					<Route
						path="dashboard"
						element={
							<PrivateRoute redirectTo="/login" component={<Dashboard />} />
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
