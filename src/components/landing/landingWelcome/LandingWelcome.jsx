import { Wrapper } from "./LandingWelcome.styled"

const LandingWelcome = () => {
  return (
    <Wrapper>
      <h1>Questify</h1>
      <p>
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </p>

      <br/>
      
      <p>Choose your name to <span className="textButton">sign up</span> or <span className="textButton">log in</span> <button> go! </button></p>
    
    </Wrapper>
  );
};

export default LandingWelcome;