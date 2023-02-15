import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Suspense } from "react";
import { AppBar } from "./appBar/AppBar";

export const Layout = () => {
	return (
		<>
			<div style={{ margin: "0 auto", padding: "0 25px" }}>
				<AppBar/>
			</div>
			<div>
				<Suspense fallback={null}>
					<Outlet />
				</Suspense>
				<ToastContainer autoClose={3000} />
			</div>
		</>
	);
};
