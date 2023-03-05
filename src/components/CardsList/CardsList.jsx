import React, { useState, useEffect } from "react";
import { Form, Formik, Field } from "formik";

import style from "./CardsList.module.css";
import Card from "../Cards/Card";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DoneList from "../Cards/CardsDone";
import EditCard from "../Cards/EditCard";
import True from "../Cards/True";
import Plus from "../../assets/plus.svg";

const CardsList = ({ cards }) => {
  // Create newCard

  // CardsSorted
  const inCompletedCards = cards.filter((card) => card.status === "Incomplete");
  const CompletedCards = cards.filter((card) => card.status === "Complete");
  const [isTrue, setIsTrue] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const tomorrowDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  const [isOpenCreateCardForm, setIsOpenCreateCardForm] = useState(false);

  const filteredCards = inCompletedCards.filter((card) => {
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

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
  }, []);

  const filteredTomorrowCards = inCompletedCards.filter((card) => {
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
  ///////////// Lisata Done
  // useEffect(() => {
  //    cards.forEach((el) => {
  //      const cTitle = el.title.toLowerCase();
  //      if (cTitle.includes("cucumber")) {
  //        setIsTrue(true);
  //      }
  //    });
  //  });

  function timeStringToMs(cards) {
    const [hours, minutes] = cards.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.getTime();
  }

  return (
    <>
      <div>
        {isTrue && <True />}

        <div className={style.sectionCards}>
          <div className={style.listContainer}>
            <h4 className={style.dayTitle}>TODAY</h4>
            <div className={style.cardList}>
              {isOpenCreateCardForm && (
                <div className={style.createContainer}>
                  <EditCard
                    id={15}
                    isChallenge={false}
                    title={"Create Title"}
                    dueDate={currentDate}
                    dueTime={"15:15"}
                    type={"Task"}
                    difficulty={"Easy"}
                    category={"Family"}
                    isShowCreate={true}
                    isCreateForm={() => setIsOpenCreateCardForm(false)}
                  />
                </div>
              )}
              {todayCards.map((card) => (
                <Card
                  key={card._id}
                  id={card._id}
                  title={card.title}
                  dueDate={card.date}
                  dueTime={card.time}
                  type={card.type}
                  difficulty={card.difficulty}
                  category={card.category}
                  status={card.status}
                />
              ))}
            </div>
          </div>
          <div className={style.listContainer}>
            <h4 className={style.dayTitle}>TOMORROW </h4>
            <ul className={style.cardList}>
              {tomorrowCards.map((card) => (
                <Card
                  key={card._id}
                  id={card._id}
                  title={card.title}
                  type={card.type}
                  dueDate={card.date}
                  dueTime={card.time}
                  difficulty={card.difficulty}
                  category={card.category}
                  status={card.status}
                />
              ))}
            </ul>
            <div className={style.btn_container}>
              <button
                onClick={() => setIsOpenCreateCardForm(true)}
                className={style.btn_add_card}
              >
                <img src={Plus} />
              </button>
            </div>
          </div>

          <DoneList item={CompletedCards} />
        </div>
      </div>
    </>
  );
};

export default CardsList;
