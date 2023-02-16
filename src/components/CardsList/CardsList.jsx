import Card from "../Cards/Cards"
import style from "./CardsList.module.css"

function CardsList() {


   return(
      <div>
         <ul className={style.cardList}>
            <li className={style.cardsListItem} >
               < Card
                  //id={id}
               />
            </li>
         </ul>
      </div>
   )
}

export default CardsList