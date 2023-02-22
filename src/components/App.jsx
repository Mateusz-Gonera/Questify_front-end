import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import NotFound from "../pages/notFound/NotFound";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import "./App.css";
import Register from "../pages/landingPage/Register";
import Login from "../pages/landingPage/Login"

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const LandingPage = React.lazy(() => import("../pages/landingPage/LandingPage"));

const App = () => {

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="landing" element={<LandingPage />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="dashboard" element={<Dashboard/>} />
					<Route index element={<LandingPage />} />
					{/* <Route element={<PrivateRoute />}>
					</Route> */}
					<Route element={<RestrictedRoute />}>
						<Route path="landing" element={<LandingPage />} />
				
					</Route>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
