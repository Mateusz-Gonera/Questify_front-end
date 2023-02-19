import LandingWelcome from "./landingWelcome/LandingWelcome";
import LandingForm from "./landingForm/LandingForm";
import LandingBg from "./landingBg/LandingBg";
import { Container, Wrapper } from "./Landing.styled";
import { useEffect } from "react";

const Landing = () => {
	useEffect(() => {
		document.body.style.backgroundColor = "white";
	}, []);
	return (
		<>
			<Wrapper>
				<Container>
					<LandingWelcome />
					<LandingForm />
				</Container>
				<LandingBg />
			</Wrapper>
		</>
	);
};

export default Landing;