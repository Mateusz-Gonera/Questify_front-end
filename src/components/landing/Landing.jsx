import React, { useEffect, useState } from "react";
import Background from "./Background";
import styles from "./Landing.module.css";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import LandingWelcome from "./LandingWelcome";

const Landing = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);


  const handleShowRegister = () => {
    if (showLogin) {
      setShowLogin(false);
    }
    setShowRegister(true);
  }
  
  const handleShowLogin = () => {
    if (showRegister) {
      setShowRegister(false);
    }
    setShowLogin(true);
  }
  
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingWelcome
          onShowRegister={handleShowRegister}
          onShowLogin={handleShowLogin}>
        </LandingWelcome>
        {showRegister && <RegisterForm />}
        {showLogin && <LoginForm/>}
      </div>
      <Background></Background>
    </div>
  );
};

export default Landing;