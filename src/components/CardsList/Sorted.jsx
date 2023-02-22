import React, { useState } from "react";

function sortCardsByDate(cards) {
  const sortedCards = cards.sort((a, b) => {
    const dateA = new Date(a.date +  a.time);
    const dateB = new Date(b.date + b.time);
    return dateA - dateB;
  });
  return sortedCards;
}

function sortCardsByTodayAndTomorrow(cards) {
  const todayCards = [];
  const tomorrowCards = [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  cards.forEach((card) => {
    const cardDate = new Date(card.date + card.time);
    if (cardDate >= today && cardDate < tomorrow) {
      todayCards.push(card);
    } else {
      tomorrowCards.push(card);
    }
  });

  return [sortCardsByDate(todayCards), sortCardsByDate(tomorrowCards)];
}

export default sortCardsByTodayAndTomorrow