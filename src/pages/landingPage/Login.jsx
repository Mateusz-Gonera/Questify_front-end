import React, { useEffect } from "react";
import { LoginForm } from "../../components/landing/LoginForm";
import LandingWelcome from "../../components/landing/LandingWelcome";  
// import Background from "../../components/landing/Background";
import styles from "../../components/landing/Landing.module.css";


const Login = () => {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "white";
  // }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingWelcome></LandingWelcome>
        <LoginForm></LoginForm>
      </div>
      {/* <Background></Background> */}
    </div>
  );
};

export default Login;