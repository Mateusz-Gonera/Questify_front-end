import React, { useState } from 'react';
import Card from "../Cards/Cards"
import style from "./CardsList.module.css"
<<<<<<< HEAD
import Clock from "./Clock"

function CardsList({cards}) {

  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  
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

   return(
      <div className={style.sectionCards}>
         <Clock/>
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
               category={card.category}
               /> ))}
         </ul>
         </div>
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
                  category={card.category}
                  />
                  ))}
               </ul>
         </div>
         
      </div>
   )
}

export default CardsList
=======
// import newCard  from "../newCard/newCard.jsx"
// import {modal} from "../modal/modal.jsx"

// function CardsList() {


//    return(
//       <div>
//          <ul className={style.cardList}>
//             <li className={style.cardsListItem} >
//                < Card
//                   isChallenge = {false}
//                   difficulty = {"Easy"}
//                   group = {'Leisure'}
//                   title = {"Blabla CardName"}
//                />
//             </li>
//          </ul>
//       </div>
//    )
// }

// export default CardsList

function CardsList() {
   const [cards, setCards] = useState([
     {
       isChallenge: false,
       difficulty: 'Easy',
       group: 'Leisure',
       title: 'Blabla CardName'
     }
   ]);
 
   const addCard = () => {
     const newCard = {
       isChallenge: false,
       difficulty: 'Normal',
       group: 'Work',
       title: 'New Challenge'
     };
     setCards([...cards, newCard]);
   };
 
   return (
     <div>
      
       <button onClick={addCard}>Add Card</button>
       <ul className={style.cardList}>
         {cards.map((card, index) => (
           <li className={style.cardsListItem} key={card.index}>
             <Card
               isChallenge={card.isChallenge}
               difficulty={card.difficulty}
               group={card.group}
               title={card.title}
             />
           </li>
         ))}
       </ul>
     </div>
   );
 }
 
 export default CardsList;
>>>>>>> f4cbbc5d42383874b44b88e77db9b3998e7b5cd8
