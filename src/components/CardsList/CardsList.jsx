import React, { useState, useEffect } from "react";
import { Form, Formik, Field } from "formik";

import style from "./CardsList.module.css";
import Card from "../Cards/Card";
import { useCreateCardMutation } from "../../redux/api/questifyApi";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DoneList from "../Cards/CardsDone";

const CardsList = ({ cards }) => {
  // Create newCard
  const [addCard] = useCreateCardMutation();

  // CardsSorted
  const inCompletedCards = cards.filter((card) => card.status === "Incomplete");
  const CompletedCards = cards.filter((card) => card.status === "Complete");

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

  function timeStringToMs(cards) {
    const [hours, minutes] = cards.split("-");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.getTime();
  }
  ///////////////// Lisata Done

  return (
    <>
      <div className={style.sectionCards}>
        <div className={style.todaylist}>
          <h4>TODAY</h4>
          <ul className={style.cardList}>
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
          </ul>
          {isOpenCreateCardForm && (
            <div>
              <Formik
                initialValues={{
                  title: "",
                  category: "Family",
                  difficulty: "Easy",
                  type: "Task",
                  date: `${currentDate.getFullYear()}-${currentDate.getMonth() < 10
                      ? "0" + currentDate.getMonth()
                      : currentDate.getMonth()
                    }-${currentDate.getDate() < 10
                      ? "0" + currentDate.getDate()
                      : currentDate.getDate()
                    }`,
                  time: `${currentDate.getHours() < 10
                      ? "0" + currentDate.getHours()
                      : currentDate.getHours()
                    }:${currentDate.getMinutes() < 10
                      ? "0" + currentDate.getMinutes()
                      : currentDate.getMinutes()
                    }`,
                }}
                onSubmit={async (values) => {
                  addCard(values);
                  setIsOpenCreateCardForm(false);
                }}
              >
                <div className={style.add_modal_list}>
                  <Form className={style.modal_add_container}>
                    <>
                      <div className={style.modal_add_level_name}>
                        <Field as="select" name="difficulty">
                          <option
                            className={style.modal_add_level_name}
                            value="Easy"
                          >
                            Easy
                          </option>
                          <option
                            className={style.modal_add_level_name}
                            value="Normal"
                          >
                            Normal
                          </option>
                          <option
                            className={style.modal_add_level_name}
                            value="Hard"
                          >
                            Hard
                          </option>
                        </Field>

                        <Field as="select" name="type">
                          <option value="Task">Task</option>
                          <option value="Challenge">Challenge</option>
                        </Field>
                      </div>
                    </>
                    <Field
                      className={style.modal_add_name}
                      name="title"
                      type="text"
                    />

                    <Field name="date" type="date" />
                    <Field name="time" type="time" />
                    <Field as="select" name="category">
                      <option value="Stuff">Stuff</option>
                      <option value="Family">Family</option>
                      <option value="Health">Health</option>
                      <option value="Learning">Learning</option>
                      <option value="Leisure">Leisure</option>
                      <option value="Work">Work</option>
                    </Field>
                    <div>
                      <button type="submit">X</button>

                      <button type="submit">CREATE</button>
                    </div>
                  </Form>
                </div>
              </Formik>
            </div>
          )}
        </div>
        <div className={style.tomorrowList}>
          <h4>TOMORROW </h4>
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
            <IconButton
              aria-label="add"
              onClick={() => setIsOpenCreateCardForm(true)}
              className={style.btn_add_card}
            >
              <AddIcon />
            </IconButton>
          </div>
        </div>
        <DoneList item={CompletedCards} />
      </div>
    </>
  );
};

export default CardsList;
