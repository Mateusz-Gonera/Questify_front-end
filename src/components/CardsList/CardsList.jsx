import Card from "../Cards/Cards"
import style from "./CardsList.module.css"

function CardsList() {


   return(
      <div>
         <ul className={style.cardList}>
            <li className={style.cardsListItem} >
               < Card
                  isChallenge = {false}
                  difficulty = {"Easy"}
                  group = {'Leisure'}
                  title = {"Blabla CardName"}
               />
            </li>
         </ul>
      </div>
   )
}

export default CardsList