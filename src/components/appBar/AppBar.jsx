import { NavBar } from "../navBar/NavBar";
import { useAuth } from "../../utils/hooks/useAuth";
import { UserMenu } from "../userMenu/userMenu";
import { AuthNav } from "../authNav/AuthNav";

import style from "../appBar/AppBar.module.css";

export const AppBar = () => {
	
	const { isLoggedIn } = useAuth();
	return (
		<header className={style.header}>
			<NavBar /> 
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</header>
	);
};



