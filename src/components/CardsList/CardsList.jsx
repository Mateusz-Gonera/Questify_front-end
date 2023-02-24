import React from 'react';
import style from "./CardsList.module.css"
import Clock from "./Clock"
import TodayCards from './TodayCards';
import TomorrowCards from './TomorrowCards';

function CardsList({data}) {

   const addCard = () => {
     const newCard = {
       isChallenge: false,
       difficulty: 'Normal',
       group: 'Work',
       title: 'New Challenge'
     };
     setCards([...cards, newCard]);
   };





   return(
      <div className={style.sectionCards}>
         <button onClick={addCard}>Add Card</button>
         <Clock/>
         <TodayCards cards={data}/>
         <TomorrowCards cards={data}/>
         
      </div>
   )
}

export default CardsList