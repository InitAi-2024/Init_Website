import "./styles.css";
import React, { useRef, useEffect } from "react";
// import lottie from "lottie-web";
// import animation from "../../assets/animation.gif";
import img1 from "../../assets/img1.png";

export default function Comingsoon() {
  return (
    <div className="body1 w-full h-full flex justify-center">
      <div className="container text-white  justify-center  flex space-x-40">
        <div className=" text  " style={{ marginTop: "20vh", display: "flex" }}>
          <p className="font-bold text ">Coming Soon...</p>
          <div className="image" style={{ marginTop: "-75px",paddingLeft:'25px',marginBottom:'80px' }}>
            {/* <img
              className="animation-container"
              src={animation}
              alt="..."
            ></img> */}
          <img src={img1} alt="image" />
          </div>
        </div>
        {/* <div className="image">
          <img src={img1} alt="image" />
        </div> */}
      </div>
    </div>
  );
}




// import "./styles.css";
// import React, { useRef, useEffect } from 'react';
// // import lottie from 'lottie-web';
// // import animationData from './Animation - 1703588581162.json';
// import img1 from "../../assets/img1.png"

// export default function Comingsoon(){

//     const animationContainer = useRef(null);

//     // useEffect(() => {
//     //   const anim = lottie.loadAnimation({
//     //     container: animationContainer.current,
//     //     renderer: 'svg', 
//     //     loop: true, 
//     //     autoplay: true, 
//     //     animationData: animationData, 
//     //   });
  
//     //   return () => anim.destroy();
//     // }, []);

//     return(
// <div className="csbody">
//   <div className="container flex flex-col justify-between px-48">
//     <div className="textpanel mx-4">
//       <p className="text-white">Coming Soon...</p>
//       {/* <div className="animation-container pt-9 pl-7 text-white" ref={animationContainer}></div> */}
//     </div>

//     <img className="image1 rotate-4" 
//       height={600}
//       width={557}
//       src={img1}
//       alt="image"
//     />
//   </div>
// </div>


//   );
// }