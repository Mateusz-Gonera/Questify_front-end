

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
  const [selectedGroup, setSelectedGroup] = useState(group);
  const [showGroupDropdown, setShowGroupDropdown] = useState(false);
  const [endDate, setEndDate] = useState(null);

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

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setShowGroupDropdown(false);
  };

  const handleGroupClick = () => {
    setShowGroupDropdown(!showGroupDropdown);
  };

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
    }
    
    function handleEndDateSubmit(event) {
    event.preventDefault();
    // tutaj można wykorzystać wartość endDate
    }
    
    function handleResetEndDate() {
    setEndDate(null);
    }
    
  

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
               size="3"
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
     
      {isChallenge && <button className={style.isChallenge}>Challenge</button>}
      <input
        type="text"
        className={isChallenge ? style.chalengeName : style.taskName}
        value={title}
        onChange={handleTitleChange}
        
      />

<div>

{endDate ? (
<div>
{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<p onClick={handleResetEndDate}> {endDate}</p>

</div>
) : (
<form onSubmit={handleEndDateSubmit}>
<label>

<input type="datetime-local" onChange={handleEndDateChange} />
</label>
{/* <button type="submit">OK</button> */}
</form>
)}
</div>
      {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<div className={style[selectedGroup]} onClick={handleGroupClick}>{selectedGroup}
{showGroupDropdown && (
        <select
        className={style.difficultyDropdown}
        value={selectedGroup}
        onChange={handleGroupChange}
         size="6">
          <option value="Stuff">Stuff</option>
          <option value="Family">Family</option>
          <option value="Health">Health</option>
          <option value="Learning">Learning</option>
          <option value="Leisure">Leisure</option>
          <option value="Work">Work</option>
        </select>
      )}
 </div>
    </div>
  );
}

export default Card;

