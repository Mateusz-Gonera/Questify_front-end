import React, { useState } from "react";
import { getCardsType } from "./ChallengeCard";
import EditCard from "./EditCard";
import { getCardsStatus } from "./isDone";

import CardItem from './CardItem';

function Card({
  id,
  difficulty,
  category,
  title,
  dueDate,
  dueTime,
  type,
  status,
}) {
  const { isChallenge } = getCardsType(type);
  const { isDone } = getCardsStatus(status);

  const [edit, setEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [editElement, setEditElement] = useState(null);

  //const [isDone, setIsDone] = useState(false)

  function cardClick(event) {
    console.log({
      event,
      currentTarget: event.currentTarget,
      target: event.target,
    });
    if (isDone && !isDelete) {
      setIsDelete(true);
    } else if (!isDone) {
      setEdit(true);
    }
  }



   return (
      edit ? (
         <EditCard
            id={id}
            isChallenge={isChallenge}
            title={title} 
            dueDate={dueDate} 
            dueTime={dueTime}
            type={type}
            difficulty={difficulty}
            category={category}
            handleEdit={() => setEdit(false)}
         />
      ) : (
         <div onClick={cardClick}>
            <CardItem
               id={id}
               title={title} 
               dueDate={dueDate} 
               dueTime={dueTime}
               type={type}
               difficulty={difficulty}
               category={category} 
               isChallenge={isChallenge}
               isModal={isModal}
               on
            />
         </div>
      )




   )



}
export default Card;
