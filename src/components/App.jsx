import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import NotFound from "../pages/notFound/NotFound";

//import "./App.css";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const LandingPage = React.lazy(() => import("../pages/landingPage/LandingPage"));

const App = () => {
	return (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="landing" element={<LandingPage />} />
					<Route index element={<Dashboard />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
);
};

export default App;
