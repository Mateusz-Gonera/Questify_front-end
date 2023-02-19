import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import NotFound from "../pages/notFound/NotFound";

import CardsList from './CardsList/CardsList'

//import "./App.css";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));

const App = () => {
	return (
		<div className="App">
         <div>
            <h2>Test of my Cards</h2>
            <CardsList></CardsList>
         </div>
		</div>
	);
}

export default App;
