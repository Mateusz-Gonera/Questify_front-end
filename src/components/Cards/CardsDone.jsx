import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CardItem from './CardItem';
import { getCardsType } from './ChallengeCard';
import { useState, useEffect } from 'react';

export default function DoneList({
   item,
}) {
   const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
   
//////////////Sortowanie
   const [currentDate, setCurrentDate] = React.useState(new Date());

  const tomorrowDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  const [isOpenCreateCardForm, setIsOpenCreateCardForm] = React.useState(false);

  const filteredCards = item.filter(card => {
    const cardDate = new Date(card.date);
    return (
      cardDate.getFullYear() === currentDate.getFullYear() &&
      cardDate.getMonth() === currentDate.getMonth() &&
      cardDate.getDate() === currentDate.getDate()
    );
  });
  const doneCards = item.sort((a, b) => {
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




  return (
    <List
      sx={{ width: '100%', maxWidth: 1280 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Done" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 5 }}>              
               {doneCards.map(card => (
                  <CardItem
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
              </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
