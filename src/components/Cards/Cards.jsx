import style from './Cards.module.css'

function Card({
 isChallenge,
 difficulty,
 group,
 title,
 dueDate,
 dueTime,
   

}) {
   return (
   <li>
      <div className={isChallenge ? style.challengeContainer : style.cardContainer}>
         <div className={style.difficultyContainer}>
            <div className={style.difficultyLevel}>
               <div className={style[difficulty]}> </div>
               <h3 className={style.levelName}>{difficulty}</h3>
            </div>
            {isChallenge ? <button className={style.trophyIcon}> </button>
            : <button className={style.starIcon}> </button> }
         </div>
            <div className={style.titleContainer} >
               {isChallenge && <h3 className={style.isChallenge} >Challenge</h3>}
               <h2 className={isChallenge ? style.chalengeName : style.taskName}>{title}</h2>
               <h5 className={style.date}>{dueDate} {dueTime}</h5>
            </div>
         

         <div className={style[group]}>{group}</div>
      </div>
   </li>

   )
}
export default Card