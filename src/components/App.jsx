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
				{/* <Route path="/" element={<LandingPage />}> */}
				<Route index element={<LandingPage />} />
				<Route
          			path="landing"
          			element={
            		<RestrictedRoute redirectTo="/dashboard" component={<LandingPage />} />
          			}
					/>
					<Route
          				path="register"
          				element={
            			<RestrictedRoute redirectTo="/dashboard" component={<Register />} />
          				}
        				/>
        			<Route
          				path="login"
          				element={
            			<RestrictedRoute redirectTo="/dashboard" component={<Login />} />
          				}
        				/>
        		
					<Route
          				path="dashboard"
          				element={
            			<PrivateRoute redirectTo="/landing" component={<Dashboard />} />
          				}
						/>
					
				{/* </Route> */}
					
				
					<Route path="*" element={<NotFound />} />

			</Routes>
		</>
	);
};

export default App;
