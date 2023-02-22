import { useState } from 'react';
import style from './Cards.module.css'

function Card({
 isChallenge,
 difficulty,
 category,
 title: initialTitle,
 dueDate,
 dueTime,
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

   //
const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date) => {
    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    }
  };

   return (
   <li>
      <div className={isChallenge ? style.challengeContainer : style.cardContainer}>
         <div className={style.difficultyContainer}>
            <div className={style.difficultyLevel}>
               {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                  <h3 className={style.levelName} onClick={handleDifficultyClick}>
                     {selectedDifficulty}
                  </h3>
                  {showDifficultyDropdown && (
                     <select
                     className={style.difficultyDropdown}
                     value={selectedDifficulty}
                     onChange={handleDifficultyChange}
                        size="3"
                     >
                     <option value="Easy" >Easy</option>
                     <option value="Normal">Normal</option>
                     <option value="Hard">Hard</option>
                     </select>
                )}

            </div>


            {isChallenge ? ( <button className={style.trophyIcon}> </button> )
            : ( <button className={style.starIcon}> </button> )}
         </div>
            <div className={style.titleContainer} >
               {isChallenge && <h3 className={style.isChallenge} >Challenge</h3>}

               <input type="text" 
                  className={isChallenge ? style.chalengeName : style.taskName} 
                  value={title}
                     onChange={handleTitleChange} />
               <h5 className={style.date}>{formatDate(new Date(dueDate))} , {dueTime} </h5>
            </div>
         <div className={style[category]}>{category}</div>
      </div>
   </li>
   )
}
export default Card