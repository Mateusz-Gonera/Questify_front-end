import React from "react";
import { RegisterForm } from "../../components/landing/RegisterForm";;
import LandingWelcome from "../../components/landing/LandingWelcome";  
import styles from "../../components/landing/Landing.module.css";


const Register = () => {

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingWelcome></LandingWelcome>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default Register;