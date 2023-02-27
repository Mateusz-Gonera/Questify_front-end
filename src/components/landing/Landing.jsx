import React, { useEffect } from "react";
import LandingWelcome from "./LandingWelcome";
import Background from "./Background";
import styles from "./Landing.module.css";

const Landing = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingWelcome></LandingWelcome>
      </div>
      <Background></Background>
    </div>
  );
};

export default Landing;