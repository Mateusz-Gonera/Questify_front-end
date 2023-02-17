import { NavBar } from "../navBar/NavBar";

import style from "../AppBar/AppBar.module.css";

export const AppBar = () => {
	return (
		<header className={style.header}>To jest czarny header a w nim NavBar
			<NavBar/> 
		</header>
	);
};
