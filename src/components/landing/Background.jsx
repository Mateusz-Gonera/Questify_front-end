// import React, { useEffect, useState } from "react";
// import styles from "./Landing.module.css";

// import MobileDown from "../../imagesLanding/mobile/blueRectangle.svg";
// import MobileUp from "../../imagesLanding/mobile/greyRectangle.svg";
// import TabletHorDown from "../../imagesLanding/tablet/downHorizontal.svg";
// import TabletHorUp from "../../imagesLanding/tablet/upHorizontal.svg";
// import TabletVerDown from "../../imagesLanding/tablet/downVertical.svg";
// import TabletVerUp from "../../imagesLanding/tablet/upVertical.svg";
// import DesktopUp from "../../imagesLanding/desktop/up.svg";
// import DesktopDown from "../../imagesLanding/desktop/down.svg";

// const Background = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   let image1 = MobileUp;
//   let image2 = MobileDown;
//   if (windowWidth >= 768 && windowWidth < 1019) {
//     image1 = TabletVerUp;
//     image2 = TabletVerDown;
//   } else if (windowWidth >= 1020 && windowWidth < 1279) {
//     image1 = TabletHorUp;
//     image2 = TabletHorDown;
//   } else if (windowWidth >= 1280) {
//     image1 = DesktopUp;
//     image2 = DesktopDown;
//   }

//   useEffect(() => {
//     const handleWindowResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);

//   return (
//     <div>
//       <img src={`${image1}`} alt="line" className={styles.landingBgImage1} />
//       <img src={`${image2}`} alt="line" className={styles.landingBgImage2} />
//     </div>
//   );
// };

// export default Background;