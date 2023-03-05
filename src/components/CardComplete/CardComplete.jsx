import Icons from '../../Images/icons.svg';
import Icon from '../Icon';
import style from './CardComplete.module.css';
import './Animation.css';
import { CSSTransition } from 'react-transition-group';

const CardComplete = ({ title, close, cancel }) => {
  return (
    <div className={style.cardContainer_cards_complete}>
      <div className={style.contentBox}>
        <p className={style.content}>COMPLETED:</p>
        <p className={style.link} onClick={cancel}>
          {title}
        </p>
      </div>
      <div className={style.awardBox}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1250}
          classNames="leftClouds"
          unmountOnExit
        >
          <svg className={style.leftClouds}>
            <use xlinkHref={`${Icons}#icon-left-clouds`} />
          </svg>
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          timeout={1250}
          classNames="rightClouds"
          unmountOnExit
        >
          <svg className={style.rightClouds}>
            <use xlinkHref={`${Icons}#icon-right-clouds`} />
          </svg>
        </CSSTransition>
        <svg className={style.iconBase}>
          <use xlinkHref={`${Icons}#icon-base`} />
        </svg>

        <div>
          <svg className={style.iconTarget}>
            <use xlinkHref={`${Icons}#icon-target`} />
          </svg>
          <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="arrow"
            unmountOnExit
          >
            <svg className={style.iconArrow}>
              <use xlinkHref={`${Icons}#icon-arrow`} />
            </svg>
          </CSSTransition>
        </div>
      </div>

      <button onClick={close} className={style.button}>
        <span>Continue</span>
        <Icon className={style.arrow} name={"arrow-right"} />
      </button>
    </div>
  );
};

export default CardComplete;
