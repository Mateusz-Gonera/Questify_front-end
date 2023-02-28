import styles from "./Landing.module.css";
//import styles from "./landingLogin/LoginForm.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const LandingWelcome = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.info}>
      <h1 className={styles.landingHeader}>Questify</h1>
      <p className={styles.landingParagraph}>
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </p>
      <p className={styles.landingTekst}>Choose your name
        to <button onClick={() => navigate("/register")} className={styles.textButton}>sign up</button> or <button onClick={() => navigate("/login")} className={styles.textButton}>log in</button></p>
    </div>
  );
};

export default LandingWelcome;