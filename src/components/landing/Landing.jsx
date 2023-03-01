import React, { useEffect } from "react";
import LandingWelcome from "./LandingWelcome";
import styles from "./Landing.module.css";

const Landing = () => {


  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingWelcome></LandingWelcome>
      </div>
    </div>
  );
};

export default Landing;