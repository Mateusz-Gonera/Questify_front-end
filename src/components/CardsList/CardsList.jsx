import Card from "../Cards/Cards"
import style from "./CardsList.module.css"
import Clock from "./Clock"



function CardsList(props) {
   
  const sortedCards = props.cards.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

   return(
      <div>
         <Clock/>
         <ul className={style.cardList}>
            {sortedCards.map((card) => (
                  <Card key={card.id} 
                  title={card.title} 
                  dueDate={card.date} 
                  dueTime={card.time}
                  isChallenge={card.isChallenge}
                  difficulty={card.difficulty}
                  group={card.group}
                  />
                  ))}
         </ul>
      </div>
   )
}

export default CardsList