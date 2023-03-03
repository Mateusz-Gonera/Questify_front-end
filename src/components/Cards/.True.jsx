  const [isTrue, setIsTrue] = useState(false);
useEffect(() => {
    cards.forEach((el) => {
      const cTitle = el.title.toLowerCase();
      if (cTitle.includes("cucumber")) {
        setIsTrue(true);
      }
    });
  });


      {isTrue && <True />}


import { useState } from "react";

const True = () => {
   const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
   const [visible, setVisible] = useState(true);
   const handleVisible = () => {
      setVisible(false)
   }
   return(
      <div>
         {visible && (
          <div
               style={{
               color: "#b3ffb3",
               position: "absolute",
               top: "0",
               left: "0",
               fontSize: "50px",
               zIndex: "1000",
               textAlign: "center",
               width: "90%",
               overflow:"hidden"
            }}>
            <iframe src="https://giphy.com/embed/3o85xuO1siCT147FrG" width="480" height="266" allowFullScreen></iframe>
            <h2 style={{
               position: "abcolute",
               marginTop: "-50px",
               }}>Ha ha Rick and Morthy <br />Peace among world</h2>
               <button onClick={handleVisible} style={{color:"#e6b3cc" }}> Close</button>
         </div>
         
         )}
         
      </div>
   )
}

export default True;