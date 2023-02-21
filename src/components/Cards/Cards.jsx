// import style from './Cards.module.css'

// function Card({
//  isChallenge,
//  difficulty,
//  group,
//  title
// }) {

//    return (
//       <div className={isChallenge ? style.challengeContainer : style.cardContainer}>
//          <div className={style.difficultyContainer}>
//             <div className={style.difficultyLevel}>
//                <div className={style[difficulty]}> </div>
//                <h3 className={style.levelName}>{difficulty}</h3>
//             </div>
//             {isChallenge ? <button className={style.trophyIcon}> </button>
//             : <button className={style.starIcon}> </button> }
//          </div>
//          {isChallenge && <h3 className={style.isChallenge} >Challenge</h3>}
//          <h2 className={isChallenge ? style.chalengeName : style.taskName}>{title}</h2>
//          <div className={style[group]}>{group}</div>
//       </div>

//    )
// }
// export default Card
import { useState } from 'react';
import style from './Cards.module.css';

function Card({
  isChallenge,
  difficulty,
  group,
  title: initialTitle,
}) {
  const [title, setTitle] = useState(initialTitle);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className={isChallenge ? style.challengeContainer : style.cardContainer}>
      <div className={style.difficultyContainer}>
        <div className={style.difficultyLevel}>
          <div className={style[difficulty]}> </div>
          <h3 className={style.levelName}>{difficulty}</h3>
        </div>
        {isChallenge ? (
          <button className={style.trophyIcon}> </button>
        ) : (
          <button className={style.starIcon}> </button>
        )}
      </div>
      {isChallenge && <h3 className={style.isChallenge}>Challenge</h3>}
      <input
        type="text"
        className={isChallenge ? style.chalengeName : style.taskName}
        value={title}
        onChange={handleTitleChange}
      />
      <div className={style[group]}>{group}</div>
    </div>
  );
}

export default Card;