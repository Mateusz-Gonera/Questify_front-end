import { useState } from 'react';
import { useDeleteCardMutation, useEditCardMutation } from '../../redux/api/questifyApi';
import style from './Cards.module.css';


function EditCard({
 difficulty,
 category,
 title: initialTitle,
 dueDate,
 dueTime,
 isChallenge,
 id,
}) {

const [deleteCard] = useDeleteCardMutation();
const [editCard, { isLoading, error }]  = useEditCardMutation()

   const [title, setTitle] = useState(initialTitle);
   const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);
   const [selectedGroup, setSelectedGroup] = useState(category);
   const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);
   const [showGroupDropdown, setShowGroupDropdown] = useState(false);
   const [endDate, setEndDate] = useState(null);
   const [isDone, setIsDone] = useState(false);
   

      const handleSubmit = async (event) => {
         event.preventDefault();
         console.log(title)
         console.log(selectedDifficulty)
         console.log(selectedGroup)
      try{
         const result = await editCard({id, 
            title,
            difficulty: selectedDifficulty,
            category: selectedGroup,
         }).unwrap();
         console.log(result);
      } catch (err){
         console.log(err);
      }
      }

const handleInputChange = (event) => {
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
    const handleCompleted = () => {
      setIsDone(true)
      console.log('we did it')
    }

   // Change date to string Today or Tomorrow
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
   <div className={ isChallenge ? style.challengeContainer : style.cardContainer}>
      <div className={style.difficultyContainer}>
         <div className={style.difficultyLevel}>
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div className={style[selectedDifficulty]}> </div>
               <h3 className={style.levelName} onClick={handleDifficultyClick}>
                  {selectedDifficulty}
               </h3>
               {showDifficultyDropdown && (
                  <select
                     className={style.difficultyDropdown}
                     value={selectedDifficulty}
                     onChange={handleDifficultyChange} size="3">
                        <option value="Easy" >Easy</option>
                        <option value="Normal">Normal</option>
                        <option value="Hard">Hard</option>
                  </select>
               )}
         </div>


         {isChallenge ? ( <button className={style.trophyIcon} > </button> )
            : ( <button className={style.starIcon} > </button> )}
      </div>
      <div className={style.titleContainer} >
         {isChallenge && <button className={style.isChallenge}>Challenge</button>}

         <input type="text" value={title} onChange={handleInputChange}
            className={isChallenge ? style.chalengeName : style.taskName}  />

               


         <h5 className={style.date}>{formatDate(new Date(dueDate))} , {dueTime} </h5>

         <div>
               {endDate ? (
                  <div>
                     {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                     <p className={style.date} onClick={handleResetEndDate}> {endDate}</p>
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


      </div>
      {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className={style[selectedGroup]} onClick={handleGroupClick}>{selectedGroup}
         {showGroupDropdown && (
         <select
            className={style.difficultyDropdown}
            value={selectedGroup}
            onChange={handleGroupChange} size="6">
               <option value="Stuff">Stuff</option>
               <option value="Family">Family</option>
               <option value="Health">Health</option>
               <option value="Learning">Learning</option>
               <option value="Leisure">Leisure</option>
               <option value="Work">Work</option>
         </select>
         )}
      </div>
      <div className={style.btnContainer}>
         <button className={style.completBtn} onClick={handleCompleted} name="done">isCompleted</button>
         <button className={style.deleteBtn} onClick={() => deleteCard(id)}>Delete</button>
         <button className={style.submitBtn} type='submit' disabled={isLoading} onClick={handleSubmit}>
            {isLoading ? 'Loading...' : 'Submit'}
         </button>
      </div>
      
   </div>
</li>
  );
}

export default EditCard;

