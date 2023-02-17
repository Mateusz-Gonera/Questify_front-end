import { NavLink } from "react-router-dom";

import style from "./NavBar.module.css";

export const NavBar = () => {
	return (
		<nav>
			To jest navbar: tu będzie nav:logo, user, login/logout
			<NavLink className={style.link} to="/">
			Questify
			</NavLink>
			<div>user: name</div>
			<button>login/logout</button>
		</nav>
	);
};
