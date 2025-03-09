import React, { useState, useEffect } from 'react';
import Mobile from './Mobile';
import D2KDesktopView from './d2k_desktop_view';

const D2k_2024 = () => {
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 950);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth > 950);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isDesktopView ? <D2KDesktopView /> : <Mobile />}
    </div>
  );
};

export default D2k_2024;









// import React, { useState, useEffect, lazy, Suspense } from "react";
// import "./d2k2024.scss";
// import deathstar from "./deathstar.png";

// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

// const MenuItemComponent1 = lazy(() => import("./About_event"));
// const MenuItemComponent2 = lazy(() => import("./Domains"));
// const MenuItemComponent3 = lazy(() => import("./Timeline"));
// const MenuItemComponent5 = lazy(() => import("./Prizes"));
// const MenuItemComponent4 = lazy(() => import("./Sponsors"));
// const MenuItemComponent6 = lazy(() => import("./FAQ"));

// export default function D2k_2024() {
//   const [transformOffset, setTransformOffset] = useState(0);
//   const [activeButtonIndex, setActiveButtonIndex] = useState(null);

//   const handleMenuItemClick = (index) => {
//     removeActive();
//     setActiveButtonIndex(index);
//   };

//   const removeActive = () => {
//     setActiveButtonIndex(null);
//   };

//   useEffect(() => {
//     const menu = document.querySelector(".menuItems");
//     const computedStyle = window.getComputedStyle(menu);
//     const offset = computedStyle.getPropertyValue("transform-origin");
//     setTransformOffset(parseInt(offset, 10));
//     setActiveButtonIndex(0);
//   }, []);

//   const renderMenuItemComponent = () => {
//     switch (activeButtonIndex) {
//       case 0:
//         return <MenuItemComponent1 />;
//       case 1:
//         return <MenuItemComponent2 />;
//       case 2:
//         return <MenuItemComponent3 />;
//       case 3:
//         return <MenuItemComponent4 />;
//       case 4:
//         return <MenuItemComponent5 />;
//       case 5:
//         return <MenuItemComponent6 />;
//       default:
//         return null;
//     }
//   };

//   const options = {
//     particles: {
//       number: {
//         // value: 48,
//         value: 40,
//         density: {
//           snable: false,
//           // enable: true,
//           // area: 800,
//         },
//       },
//       color: {
//         // value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
//         value: "fff",
//       },
//       shape: {
//         type: "circle",
//       },
//       // opacity: {
//       //   value: 0.9,
//       // },
//       opacity: {
//         value: 0.9,
//         random: true, // Enable random opacity for twinkling effect
//         anim: {
//           enable: true,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false,
//         },
//       },
//       size: {
//         value: { min: 0.8, max: 2.5 },
//       },
//       blur: {
//         value: 0,
//       },
//       links: {
//         enable: false,
//         distance: 125,
//         // color:'808080',
//         color: "#fff",
//         opacity: 0.7,
//         width: 1,
//       },
//       move: {
//         enable: false,
//         speed: 0.8,
//         direction: "random",
//         random: false,
//         straight: false,
//         outModes: "out",
//       },
//     },
//     interactivity: {
//       events: {
//         onHover: {
//           enable: true,
//           mode: "bubble",
//         },
//         onClick: {
//           enable: false,
//           mode: "push",
//         },
//       },
//       modes: {
//         grab: {
//           distance: 180,
//           links: {
//             opacity: 1,
//           },
//         },
//         bubble: {
//           distance: 500,
//           size: 0,
//           duration: 2,
//           opacity: 0,
//           speed: 5,
//         },
//         push: {
//           quantity: 1,
//           size: 1.5,
//         },
//       },
//     },
//   };
//   const particlesInit = async (engine) => {
//     await loadFull(engine);
//   };

//   return (
//     <div className="body w-screen h-screen flex align-items-center bg-black justify-start ">
//       <Particles
//         options={options}
//         init={particlesInit}
//         style={{
//           position: "relative",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: "-100",
//           // filter: "blur(2.5px)"
//         }}
//       />
//       <div className="w-full h-full flex align-items-center justify-start">
//         <img
//           src={deathstar}
//           alt="image"
//           className="w-[400px] h-[400px] object-cover ml-[-200px] z-2"
//         ></img>
//         <div className="container mt-[-190px] ml-[25px]">
//           <div className="menuItems">
//             <h1
//               className={`menuItem ${activeButtonIndex === 0 ? "active" : ""}`}
//               onClick={() => handleMenuItemClick(0)}
//             ></h1>
//             <h1
//               className={`menuItem ${activeButtonIndex === 1 ? "active" : ""}`}
//               onClick={() => handleMenuItemClick(1)}
//             ></h1>
//             <h1
//               className={`menuItem ${activeButtonIndex === 2 ? "active" : ""}`}
//               onClick={() => handleMenuItemClick(2)}
//             ></h1>
//             <h1
//               className={`menuItem ${activeButtonIndex === 3 ? "active" : ""}`}
//               onClick={() => handleMenuItemClick(3)}
//             ></h1>
//             <h1
//               className={`menuItem ${activeButtonIndex === 4 ? "active" : ""}`}
//               onClick={() => handleMenuItemClick(4)}
//             ></h1>
//             <h1
//               className={`menuItem ${activeButtonIndex === 5 ? "active" : ""}`}
//               onClick={() => handleMenuItemClick(5)}
//             ></h1>
//           </div>
//         </div>
//       </div>
//       <div className="side-container m-10  ">
//         <Suspense fallback={<div>Loading...</div>}>
//           {renderMenuItemComponent()}
//         </Suspense>
//       </div>
     
//     </div>
//   );
// }
