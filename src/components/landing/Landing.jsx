import React from "react";
import LandingWelcome from "./LandingWelcome";
import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingWelcome></LandingWelcome>
        <p className={styles.landingTekst}>Choose your name
        to <button onClick={() => navigate("/register")} className={styles.textButton}>sign up</button> or <button onClick={() => navigate("/login")} className={styles.textButton}>log in</button></p>
      </div>
    </div>
  );
};

export default Landing;