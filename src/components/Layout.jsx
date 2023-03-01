import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Suspense } from "react";
import Loader from "../utils/loader/Loader";

export const Layout = () => {
	return (
		<>
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
			<ToastContainer autoClose={3000} />
		</>
	);
};
