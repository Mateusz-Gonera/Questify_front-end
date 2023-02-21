import LandingWelcome from "./landingWelcome/LandingWelcome";
import { LoginForm } from "./landingLogin/LoginForm";
import { RegisterForm } from "./landingRegister/RegisterForm";
import LandingBg from "./landingBg/LandingBg";
import { useEffect } from "react";
import { Container, Wrapper } from "./Landing.styled";


const Landing = () => {
	useEffect(() => {
		document.body.style.backgroundColor = "white";
	}, []);
	return (
		<>
			<Wrapper>
				<Container>

					<LandingWelcome />

				</Container>

				{/* <LandingBg /> */}
			</Wrapper>
		</>
	);
};

export default Landing;