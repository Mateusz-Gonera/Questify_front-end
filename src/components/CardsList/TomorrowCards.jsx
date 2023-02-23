import React from 'react';
import Card from "../Cards/Cards"
import style from "./CardsList.module.css"

function TomorrowCards ({cards}) {
const currentDate = new Date();
 const tomorrowDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

  const filteredTomorrowCards = cards.filter((card) => {
    const cardDate = new Date(card.date);
    return (
      cardDate.getFullYear() === tomorrowDate.getFullYear() &&
      cardDate.getMonth() === tomorrowDate.getMonth() &&
      cardDate.getDate() === tomorrowDate.getDate()
    );
  });
 
const tomorrowCards = filteredTomorrowCards.sort((a, b) => {
		const timeA = timeStringToMs(a.time);
		const timeB = timeStringToMs(b.time);
      console.log(timeA)
      console.log(timeB)
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
<div className={style.tomorrowList}>
   <h4>Tomorrow </h4>
   <ul className={style.cardList}>
      {tomorrowCards.map((card) => (
         <Card key={card.id} 
            title={card.title} 
            dueDate={card.date} 
            dueTime={card.time}
            isChallenge={card.isChallenge}
            difficulty={card.difficulty}
            category={card.category}  />
      ))}
   </ul>
</div>
  )
}
export default TomorrowCards;