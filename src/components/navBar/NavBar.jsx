import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";
//import { useDispatch } from 'react-redux';

import Avatar from "../../assets/header/avatar.svg";
import ChallengeIcon from "../../assets/header/challengeIcon.svg";
import Logout from "../../assets/header/logout.svg";

//import { useLogoutMutation } from ''; //dodać później import
//import { useAuth } from 'utils/hooks/useAuth';

import style from "../navBar/NavBar.module.css";

export const NavBar = () => {
	//const dispatch = useDispatch();
	//const { user } = useAuth();
	//const [logout] = useLogoutMutation();
	const { isLoggedIn } = useAuth();

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
					<p className={style.userName}>John’s Quest Log</p>
				</div>
				<img className={style.challengeIcon} src={ChallengeIcon} alt="logo" />

				<button className={style.btn} type="button">
					<img alt="logout" src={Logout} />
				</button>
				{/* do wylogowania dodać onclik jak ponizej*/}
				{/* <button className={style.btn} type="button" onClick={() => dispatch(logout())} ><img src={Logout} /></button> */}
			</nav>
		</>
	);
};
