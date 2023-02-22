import React, { useState } from 'react';
import Card from "../Cards/Cards"
import style from "./CardsList.module.css"



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