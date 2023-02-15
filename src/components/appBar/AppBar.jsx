import { Navigation } from "../navigation/Navigation";

import style from "../AppBar/AppBar.module.css";

export const AppBar = () => {
	return (
		<header className={style.header}>
			<Navigation/> 
		</header>
	);
};
