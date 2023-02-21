import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import NotFound from "../pages/notFound/NotFound";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import "./App.css";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const LandingPage = React.lazy(() => import("../pages/landing/LandingPage"));

const App = () => {

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
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
