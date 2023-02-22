import React from "react";
import style from "./CardsList.module.css";
import Clock from "./Clock";
import TodayCards from "./TodayCards";
import TomorrowCards from "./TomorrowCards";

function CardsList({ cards }) {
  const addCard = () => {
    const newCard = {
      isChallenge: false,
      difficulty: "Normal",
      group: "Work",
      title: "New Challenge",
    };
    setCards([...cards, newCard]);
  };

  return (
    <div className={style.sectionCards}>
      <button className={style.btn_add_card} onClick={addCard}>
        +
      </button>
      <Clock />
      <TodayCards cards={cards} />
      <TomorrowCards cards={cards} />
    </div>
  );
}

export default CardsList;
