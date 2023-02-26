import { useState } from "react";
import { getCardsType } from "./ChallengeCard";
import EditCard from "./EditCard";
import { getCardsStatus } from "./isDone";

import CardItem from "./CardItem";

function Card({
   id,
   difficulty,
   category,
   title,
   dueDate,
   dueTime,
   type,
   status,
}){
   const { isChallenge } = getCardsType(type);
   const {isDone} = getCardsStatus(status);

   const [edit, setEdit] = useState(false)
   const [isDelete, setIsDelete] = useState(false)
   
   //const [isDone, setIsDone] = useState(false)

   function cardClick(){
				if (isDone && !isDelete) {
					setIsDelete(true);
				} else if(!isDone){
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
            />
         </div>
      )




   )



}
export default Card;