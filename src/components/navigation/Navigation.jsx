import { NavLink } from "react-router-dom";

import style from "../navigation/Navigation.module.css";

export const Navigation = () => {
	return (
		<nav>
			<NavLink className={style.link} to="/">
				Here will be our navigation panel
			</NavLink>
		</nav>
	);
};
