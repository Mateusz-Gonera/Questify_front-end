import LandingWelcome from "./landingWelcome/LandingWelcome";
import { LoginForm } from "./landingLogin/LoginForm";
import { RegisterForm } from "./landingRegister/RegisterForm";
import { Container, Wrapper } from "./Landing.styled";
import { useEffect, useState } from "react";

import MobileDown from "../../imagesLanding/mobile/blueRectangle.svg";
import MobileUp from "../../imagesLanding/mobile/greyRectangle.svg";
import TabletHorDown from "../../imagesLanding/tablet/downHorizontal.svg";
import TabletHorUp from "../../imagesLanding/tablet/upHorizontal.svg";
import TabletVerDown from "../../imagesLanding/tablet/downVertical.svg";
import TabletVerUp from "../../imagesLanding/tablet/upVertical.svg";
import DesktopUp from "../../imagesLanding/desktop/up.svg";
import DesktopDown from "../../imagesLanding/desktop/down.svg";

const Landing = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);

	let image1 = MobileUp;
	let image2 = MobileDown;

	if (windowWidth >= 768 && windowWidth < 1280 && windowHeight >= 1024) {
		image1 = TabletVerUp;
		image2 = TabletVerDown;
	} else if (windowWidth >= 768 && windowWidth < 1280 && windowHeight >= 760) {
		image1 = TabletHorUp;
		image2 = TabletHorDown;
	} else if (windowWidth >= 1280) {
		image1 = DesktopUp;
		image2 = DesktopDown;
	}

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
			setWindowHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [windowHeight]);

	useEffect(() => {
		document.body.style.backgroundColor = "white";
	}, []);
	return (
		<Wrapper>

			
			<Container>
				{<LandingWelcome/>}
				{/* {<LoginForm /> }
				{<RegisterForm/>} */}
			</Container>

		</Wrapper>
	);
};

export default Landing;