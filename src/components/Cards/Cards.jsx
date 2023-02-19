import style from './Cards.module.css'

function Card({
 isChallenge,
 difficulty,
 group
}) {

   return (
      <div className={isChallenge ? style.challengeContainer : style.cardContainer}>
         <div className={style.difficultyContainer}>
            <div className={style.difficultyLevel}>
               <div className={style[difficulty]}> </div>
               <h3 className={style.levelName}>{difficulty}</h3>
            </div>
            {isChallenge ? <button className={style.trophyIcon}> </button>
            : <button className={style.starIcon}> </button> }
         </div>
         {isChallenge && <h3 className={style.isChallenge} >Challenge</h3>}
         <h2 className={isChallenge ? style.chalengeName : style.taskName}>Blabla CardNAme</h2>
         <div className={style[group]}>{group}</div>
      </div>

   )
}
export default Card