import React, { useEffect } from "react";
import { LoginForm } from "../../components/landing/LoginForm";
import LandingWelcome from "../../components/landing/LandingWelcome";  
import styles from "../../components/landing/Landing.module.css";


const Login = () => {


  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingWelcome></LandingWelcome>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;