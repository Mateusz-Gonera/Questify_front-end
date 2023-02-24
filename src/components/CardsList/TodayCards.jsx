import React from 'react';
import Card from "../Cards/Cards"
import style from "./CardsList.module.css"

function TodayCards ({cards}) {

   const currentDate = new Date();

  const filteredCards = cards.filter((card) => {
    const cardDate = new Date(card.date);
    return (
      cardDate.getFullYear() === currentDate.getFullYear() &&
      cardDate.getMonth() === currentDate.getMonth() &&
      cardDate.getDate() === currentDate.getDate()
    );
  });
  const todayCards = filteredCards.sort((a, b) => {
   const timeA = timeStringToMs(a.time);
		const timeB = timeStringToMs(b.time);
		if (timeA < timeB) {
			return -1;
		} else if (timeA > timeB) {
			return 1;
		} else {
			return 0;
		}
  });
  function timeStringToMs(cards) {
  const [hours, minutes] = cards.split("-");
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  return date.getTime();
}

  return (
<div className={style.todaylist}>
   <h4>Today</h4>
   <ul className={style.cardList}>
      {todayCards.map((card) => (
         <Card key={card.id} 
            title={card.title} 
            dueDate={card.date} 
            dueTime={card.time}
            isChallenge={card.isChallenge}
            difficulty={card.difficulty}
            category={card.category} /> 
      ))}
   </ul>
</div>
  )
}
export default TodayCards;