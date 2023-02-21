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
// import { useState } from 'react';
// import style from './Cards.module.css';


import { useState } from 'react';
import style from './Cards.module.css';

function Card({
  isChallenge,
  difficulty,
  group,
  title: initialTitle,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);
  const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDifficultyClick = () => {
    setShowDifficultyDropdown(!showDifficultyDropdown);
  };

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
    setShowDifficultyDropdown(false);
  };

  return (
    <div className={isChallenge ? style.challengeContainer : style.cardContainer}>
      <div className={style.difficultyContainer}>
        <div className={style.difficultyLevel}>
          <div className={style[selectedDifficulty]}> </div>
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<h3 className={style.levelName} onClick={handleDifficultyClick}>
            {selectedDifficulty}
          </h3>
          {showDifficultyDropdown && (
            <select
              className={style.difficultyDropdown}
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
            >
              <option value="Easy" >Easy</option>
              <option value="Normal">Normal</option>
              <option value="Hard">Hard</option>
            </select>
          )}
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