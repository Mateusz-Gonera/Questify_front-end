import style from "../navBar/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";
import { useLogoutMutation } from "../../redux/api/questifyApi";
import ChallengeIcon from "../../assets/header/challengeIcon.svg";
import Trophy from "../../assets/header/trophy.svg";
import Logout from "../../assets/header/logout.svg";
import { useGetAllCardsQuery } from "../../redux/api/questifyApi";

export const NavBar = () => {
  const [logout] = useLogoutMutation();
  const { user } = useAuth();
  const { data } = useGetAllCardsQuery();

  const onlyChallenge = data.cards.some((card) => card.type === "Challenge");

  return (
    <>
      <NavLink className={style.logo} to="/">
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

        {onlyChallenge === true ? (
          <img className={style.challengeIcon} src={ChallengeIcon} alt="logo" />
        ) : (
          <div className={style.trophyBg}>
            <img className={style.trophyIcon} src={Trophy} alt="logo" />
          </div>
        )}

        <NavLink to="/">
          {
            <button
              className={style.btn}
              type="button"
              onClick={() => logout()}
            >
              <img
                src={Logout}
                className={style.logoutIcon}
                alt="logout button"
              />
            </button>
          }
        </NavLink>
      </nav>
    </>
  );
};
