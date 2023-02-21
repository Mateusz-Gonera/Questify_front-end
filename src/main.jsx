import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from "./components/App";
import "./index.css";
import { store } from "./redux/store.js";
<<<<<<< Updated upstream

=======
import  Modal from "./components/modal/modal.jsx"
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
				<Modal/>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
