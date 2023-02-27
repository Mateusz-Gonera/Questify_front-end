import Icons from "../../Images/icons.svg";
import Icon from "../Icon";
import style from "./CardComplete.module.css";

const CardComplete = ({ title, close}) => {
   

  return (
    <div className={style.cardContainer}>
      <div className={style.contentBox}>
        <p className={style.content}>COMPLETED:</p>
        <p className={style.link}>{title}</p>
      </div>
      <div className={style.awardBox}>
          <svg className={style.leftClouds}>
            <use xlinkHref={`${Icons}#icon-left-clouds`} />
          </svg>
          <svg className={style.rightClouds}>
            <use xlinkHref={`${Icons}#icon-right-clouds`} />
          </svg>
        <svg className={style.iconBase}>
          <use xlinkHref={`${Icons}#icon-base`} />
        </svg>

        <div>
            <svg className={style.iconTarget}>
              <use xlinkHref={`${Icons}#icon-target`} />
            </svg>
            <svg className={style.iconArrow}>
              <use xlinkHref={`${Icons}#icon-arrow`} />
            </svg>
        </div>
      </div>

      <button onClick={close} className={style.button}>
        <span>Continue</span>
        <Icon className={style.arrow} name={"arrow-right"} size={7} />
      </button>
    </div>
  );
};

export default CardComplete;
