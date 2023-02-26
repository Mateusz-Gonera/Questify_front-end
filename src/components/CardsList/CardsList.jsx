import React, { useState } from 'react';

import style from './CardsList.module.css';
import Card from '../Cards/Card';
import { useCreateCardMutation } from '../../redux/api/questifyApi';
import { Input } from '@mui/material';
import { Title } from '@mui/icons-material';
const CardsList = ({ cards }) => {
  // Create newCard
  const [addCard] = useCreateCardMutation();
  const addNewCard = e => {
    e.preventDefault();
    const today = new Date();
    const newCard = {
      title: 'exemple',
      difficulty: 'Easy',
      category: 'Stuff',
      date: today,
      type: 'Task',
      time: '00-00',
    };
    addCard(newCard);
  };

  // CardsSorted
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

  const filteredCards = cards.filter(card => {
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

  const filteredTomorrowCards = cards.filter(card => {
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
    const [hours, minutes] = cards.split('-');
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.getTime();
  }

  //

  return (
    <>
      <div className={style.sectionCards}>
        <div className={style.todaylist}>
          <h4>Today</h4>
          <ul className={style.cardList}>
            {todayCards.map(card => (
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
        </div>
        <div className={style.tomorrowList}>
          <h4>Tomorrow </h4>
          <ul className={style.cardList}>
            {tomorrowCards.map(card => (
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
            <button onClick={addNewCard} className={style.btn_add_card}>
              +
            </button>
          </div>
        </div>
        {/*<DoneList/>*/}
      </div>
    </>
  );
};

export default CardsList;
