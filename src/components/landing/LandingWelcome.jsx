import styles from "./Landing.module.css";
//import styles from "./landingLogin/LoginForm.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const LandingWelcome = (props) => {
  const navigate = useNavigate()

  return (
    <div className={styles.info}>
      <h1 className={styles.landingHeader}>Questify</h1>
      <p className={styles.landingParagraph}>
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </p>
      <p className={styles.landingTekst}>
        Choose your name to&nbsp;
        <button
          onClick={() => props.onShowRegister()}
          className={styles.textButton}
        >sign up</button>
        &nbsp;or&nbsp;
        <button
          onClick={() => props.onShowLogin()}
          className={styles.textButton}
        >log in</button>&nbsp;
        {/* <button className={styles.buttonGo}> go! </button> */}
      </p>
    </div>
  );
};

export default LandingWelcome;