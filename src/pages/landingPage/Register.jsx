import React, { useEffect } from "react";
import { RegisterForm } from "../../components/landing/RegisterForm";;
import LandingWelcome from "../../components/landing/LandingWelcome";  
// import Background from "../../components/landing/Background";
import styles from "../../components/landing/Landing.module.css";


const Register = () => {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "white";
  // }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LandingWelcome></LandingWelcome>
        <RegisterForm></RegisterForm>
      </div>
      {/* <Background></Background> */}
    </div>
  );
};

export default Register;