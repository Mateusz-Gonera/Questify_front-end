import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";

import Avatar from "../../assets/header/avatar.svg";
import ChallengeIcon from "../../assets/header/challengeIcon.svg";
import Logout from "../../assets/header/logout.svg";

import { useLogoutMutation } from "../../redux/api/questifyApi";

import style from "../navBar/NavBar.module.css";

export const NavBar = () => {
	
	const [logout] = useLogoutMutation();
	const { user } = useAuth();
	return (
		<>
			<NavLink className={style.link} to="/">
				Questify
			</NavLink>
			<nav className={style.navWrapper}>
				<div className={style.userMenu}>
					<div className={style.avatar}>
						<img src={Avatar} alt="user avatar" />
					</div>
					<p className={style.userName}>{user.email} Quest Log </p>
				</div>
				<img className={style.challengeIcon} src={ChallengeIcon} alt="logo" />
			    <NavLink to="/landing">
					{ <button className={style.btn} type="button" onClick={() => logout()} ><img src={Logout} /></button> }
                </NavLink>
			</nav>
		</>
	);
};
