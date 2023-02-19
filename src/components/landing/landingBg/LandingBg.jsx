import { useEffect, useState } from "react";
import { ImgUp, ImgDown } from "./LandingBg.styled";

import MobileDown from "../../../imagesLanding/mobile/blueRectangle.svg";
import MobileUp from "../../../imagesLanding/mobile/greyRectangle.svg";
import TabletHorDown from "../../../imagesLanding/tablet/downHorizontal.svg";
import TabletHorUp from "../../../imagesLanding/tablet/upHorizontal.svg";
import TabletVerDown from "../../../imagesLanding/tablet/downVertical.svg";
import TabletVerUp from "../../../imagesLanding/tablet/upVertical.svg";
import DesktopUp from "../../../imagesLanding/desktop/up.svg";
import DesktopDown from "../../../imagesLanding/desktop/down.svg";

function LandingBg(props) {
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

	return (
		<>
			<ImgUp src={image1} />
			<ImgDown src={image2} />
		</>
	);
}

export default LandingBg;