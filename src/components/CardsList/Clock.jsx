import React, { useState, useEffect } from "react";
import style from "./CardsList.module.css"

function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return (
    <div className={style.clockContainer}>
      <h4>Current Date:</h4>
      <h5>{currentDateTime.toLocaleDateString([], dateOptions)}</h5>
      <h4>Current Time:</h4>
      <h5>{currentDateTime.toLocaleTimeString([], timeOptions)}</h5>
    </div>
  );
}

export default Clock;