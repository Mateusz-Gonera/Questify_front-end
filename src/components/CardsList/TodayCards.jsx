import Card from "../Cards/Cards"
import style from "./CardsList.module.css"


function TodayCards({card}) {

function compareTime(a, b) {
  // розділяємо значення time на години і хвилини
  const [hoursA, minutesA] = a.time.split(':');
  const [hoursB, minutesB] = b.time.split(':');

  // перетворюємо години і хвилини в числові значення
  const timeA = parseInt(hoursA) * 60 + parseInt(minutesA);
  const timeB = parseInt(hoursB) * 60 + parseInt(minutesB);

  // порівнюємо значення за допомогою знаку мінус, щоб отримати порядок зростання
  return timeA - timeB;
}

   return(
      <div>
         <ul className={style.cardList}>
            <h4>Today</h4>
                  <Card key={card.id} 
                  title={card.title} 
                  dueDate={card.date} 
                  dueTime={card.time}
                  isChallenge={card.isChallenge}
                  difficulty={card.difficulty}
                  category={card.category}
                  /> 
         </ul>
      </div>
   )
}

export default TodayCards