import style from "../navBar/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";
import { useLogoutMutation } from "../../redux/api/questifyApi";
import ChallengeIcon from "../../assets/header/challengeIcon.svg";
import Logout from "../../assets/header/logout.svg";

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
						<img
							className={style.avatarImg}
							src={user.avatarURL}
							alt="user avatar"
						/>
					</div>
					<p className={style.userName}>{user.name}'s Quest Log </p>
				</div>
				<img className={style.challengeIcon} src={ChallengeIcon} alt="logo" />
				<NavLink to="/">
					{
						<button
							className={style.btn}
							type="button"
							onClick={() => logout()}
						>
							<img src={Logout} alt="logout button" />
						</button>
					}
				</NavLink>
			</nav>
		</>
	);
};
