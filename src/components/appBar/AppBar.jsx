import { NavBar } from "../navBar/NavBar";

import style from "../appBar/AppBar.module.css";

export const AppBar = () => {
	return (
		<header className={style.header}>
			<NavBar />
		</header>
	);
};
