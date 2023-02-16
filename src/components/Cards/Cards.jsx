import style from './Cards.module.css'

function Card({
   deadline, isChallenge
}) {
   const date = new Date(deadline).toLocaleTimeString
   return (
      <div>
         <h3>Hello i am first of your Card</h3>
         <div className={style.cardContainer}>

            <div className={style.difficultyContainer}>
               <div className={style.levelDifficulty}>
                  <div className={style.difficultyIcon}> </div>
                  <h3 className={style.level}> Hard</h3>
               </div>
            <p className={style.icon}>Icon</p>
            </div>
            {isChallenge && <h3 className={style.isChallenge} >Challenge</h3>}
            <h2 className={isChallenge ? style.chalengeName : style.taskName}>Blabla CardNAme</h2>
            <div className={style.group}>Health</div>
         </div>
      </div>

   )
}
export default Card