import Icon from '../Icon';
import style from './Cards.module.css';

function CardItem({
   difficulty,
   category,
   title,
   dueDate,
   dueTime,
   isChallenge,
}) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formatDate = date => {
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
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
      <div
        className={isChallenge ? style.challengeContainer : style.cardContainer}
      >
        <div className={style.difficultyContainer}>
          <div className={style.difficultyLevel}>
            <div className={style[difficulty]}> </div>
            <h3 className={style.levelName}>{difficulty}</h3>
          </div>

          <button> 
               {isChallenge ? (
               <Icon
                  className={style.trophyIcon}
                  name="trophy"
                  color="#00d7ff"
                  size={15}
               />
               ) : (
               <Icon
                  className={style.starIcon}
                  name="Star"
                  color="#00d7ff"
                  size={15}
               />
            )}
         </button>

        </div>

        <div className={style.titleContainer}>
          {isChallenge && <div className={style.isChallenge}>Challenge</div>}
          <h2 className={isChallenge ? style.chalengeName : style.taskName}>
            {title}
          </h2>

          <div className={style.date}>
                 {isChallenge && 'by '}
                 {formatDate(new Date(dueDate))} , {dueTime}{' '}
          </div>
           </div>
           <div className={style.bottomContainer}> 
              <div style={{cursor:'default'}} className={style[category]}>{category}</div>
           </div>

        
      </div>
    </li>
  );
}

export default CardItem;
