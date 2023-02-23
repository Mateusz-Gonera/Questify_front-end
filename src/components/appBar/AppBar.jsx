import { NavBar } from "../navBar/NavBar";
import { useAuth } from "../../utils/hooks/useAuth";

import style from "../appBar/AppBar.module.css";

export const AppBar = () => {
	
	const { isLoggedIn } = useAuth();

	return (
		<header className={style.header}>
			{isLoggedIn && <NavBar />}
		</header>
	);
};



