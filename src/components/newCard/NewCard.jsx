import { useState } from "react";
// import style from './Cards.module.css'

function Card({ isChallenge, difficulty, group, title }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);
  const [selectedGroup, setSelectedGroup] = useState(group);
  const [isEditing, setIsEditing] = useState(false);
  const [titleValue, setTitleValue] = useState(title);

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const handleEditTitle = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleTitleSave = () => {
    setIsEditing(false);
  };

  return (
    <div
      className={isChallenge ? style.challengeContainer : style.cardContainer}
    >
      <div className={style.difficultyContainer}>
        <div className={style.difficultyLevel}>
          <div className={style[selectedDifficulty]}> </div>
          <button
            className={style.difficultyIcon}
            onClick={handleDifficultyChange}
          />
        </div>
        {isChallenge ? (
          <button className={style.trophyIcon}> </button>
        ) : (
          <button className={style.starIcon}> </button>
        )}
      </div>
      {isChallenge && <h3 className={style.isChallenge}>Challenge</h3>}
      {isEditing ? (
        <input
          className={isChallenge ? style.chalengeName : style.taskName}
          type="text"
          value={titleValue}
          onChange={handleTitleChange}
          onBlur={handleTitleSave}
          // rome-ignore lint/a11y/noAutofocus: <explanation>
          autoFocus
        />
      ) : (
        // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <h2
          className={isChallenge ? style.challengeName : style.taskName}
          onClick={handleEditTitle}
        >
          {titleValue}
        </h2>
      )}
      <div className={style.groupContainer}>
        <div className={style.groupLabel}>Group:</div>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className={style.groupName}
          onClick={() => setSelectedGroup(group)}
        >
          {" "}
          {selectedGroup}{" "}
        </div>
        <button
          className={style.groupIcon}
          onClick={() => setSelectedGroup(group)}
        />
        <select
          className={style.groupSelect}
          value={selectedGroup}
          onChange={handleGroupChange}
        >
          <option value="group1">Health</option>
          <option value="group2">Family</option>
          <option value="group3">Leisure</option>
        </select>
      </div>
    </div>
  );
}

export default ChallengeCard;
