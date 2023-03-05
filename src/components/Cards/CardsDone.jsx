import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import style from './CardsDone.module.css';
import CardItem from './CardItem';

export default function DoneList({ item }) {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  //////////////Sortowanie
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const tomorrowDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  const [isOpenCreateCardForm, setIsOpenCreateCardForm] = React.useState(false);

  const doneCards = item.sort((a, b) => {
    const dateA = a.date + ' ' + a.time;
    const dateB = b.date + ' ' + b.time;
    if (dateA < dateB) {
      return -1;
    } else if (dateA > dateB) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <List
      sx={{ width: '100%', maxWidth: 1280 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText className={style.title_done} primary={<h4>DONE</h4>} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ul className={style.cardContainer_done}>
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
        </ul>
      </Collapse>
    </List>
  );
}
