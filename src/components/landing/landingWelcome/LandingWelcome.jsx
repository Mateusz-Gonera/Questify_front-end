import { Wrapper } from "./LandingWelcome.styled"
import styles from "../landingLogin/LoginForm.module.css";
import { useNavigate } from "react-router-dom";

const LandingWelcome = () => {

  const navigate = useNavigate()
  return (
    <Wrapper>
      <h1>Questify</h1>
      <p>
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </p>

      <br/>
      
      <p>Choose your name to <button onClick={()=>navigate("/register")} className="textButton">sign up</button>
         or <button onClick={()=>navigate("/login")} className="textButton">log in</button> <button onClick={()=>navigate("/login")} className={styles.buttonGo}> go! </button></p>
    
    </Wrapper>
  );
};

export default LandingWelcome;