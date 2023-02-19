import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";
import style from "./NavBar.module.css";

export const NavBar = () => {
	const { isLoggedIn } = useAuth();
	return (
		<nav>
			To jest navbar: tu po zaogowaniu będzie UserMenu (userName, logoutbtn )
			<NavLink className={style.link} to="/">
			Questify
			</NavLink>
		</nav>
	);
};


// export const NavBar = () => {
// 	const { isLoggedIn } = useAuth();

// 	return (
// 		<nav>
// 			<NavLink className={style.link} to="/landing">
// 				Questify
// 			</NavLink>
// 			{isLoggedIn && (
// 				<NavLink className={style.link} to="/dashboard">
// 					tasks
// 				</NavLink>
// 			)}
// 		</nav>
// 	);
// };