import React, { useState } from 'react';

import style from "./CardsList.module.css"
import Card from '../Cards/Card';
import { useCreateCardMutation, useGetAllCardsQuery } from '../../redux/api/questifyApi';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';


const  CardsList = ({cards}) => {

const today = new Date();
const {data} = useGetAllCardsQuery();
const [addCard] = useCreateCardMutation();

const addNewCard = e => {
   e.preventDefault();
   const form = e.currentTarget;
   const title = form.title.value;
   const normalizedTitle = title.toLowerCase();
   let titleAlreadyInUse = false;

   const newCard = {
      title: title,
      difficulty: 'Easy',
      category: 'Leisure',
      date: today,
      type:'Challenge',
      time:"20-00",
     
     };
      data.cards.forEach(card => {
         if (card.title.toLowerCase() === normalizedTitle){
            toast.info(`${card.title} is already in use`);
            titleAlreadyInUse = true;}
         });
         if (titleAlreadyInUse) return ;
         addCard(newCard);
         form.reset();
}
//const addNewCard = e => {
//   e.preventDefault();

//   const newCard = {
//      title: "Example",
//      difficulty: 'Easy',
//      category: 'Leisure',
//      date: today,
//      type:'Challenge',
//      time:"20-00",
//   };
//   data.cards.forEach(card =>{
//      if (card.title.toLowerCase() === title){
//         toast.info("You must to edit your already made card");
//         cardAlreadyInUse
//      }
//   })
//}






//const [newCards, setNewCards] = useState([
     
//   ]);
//   const addCard = () => {
//     const newCard = {
//       type:'Challenge',
//       difficulty: 'Normal',
//       category: 'Work',
//       title: 'New Challenge'
//     };
//     setNewCards([...newCards, newCard]);
//   };

// CardsSorted
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

//



   return(
<>
      <form onSubmit={addNewCard}>
         <input type="text" name="title"/>
      </form>



      <div className={style.sectionCards}> 
         
         <div className={style.todaylist}>
            <h4>Today</h4>
            <ul className={style.cardList}>
               {todayCards.map((card) => (
                  <Card key={card._id}
                     id={card._id}
                     title={card.title} 
                     dueDate={card.date} 
                     dueTime={card.time}
                     type={card.type}
                     difficulty={card.difficulty}
                     category={card.category}
                     status={card.status} /> 
               ))}
            </ul>
         </div>
         <div className={style.tomorrowList}>
            <h4>Tomorrow </h4>
            <ul className={style.cardList}>
               {tomorrowCards.map((card) => (
               <Card key={card._id} 
                  id={card._id}
                  title={card.title} 
                  type={card.type}
                  dueDate={card.date} 
                  dueTime={card.time}
                  difficulty={card.difficulty}
                  category={card.category}
                  status={card.status}   />
               ))}
            </ul>
         </div>
         {/*<DoneList/>*/}
      </div>
</>
      
   )
}

export default CardsList