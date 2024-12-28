import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./Achievements.css";
import API from "../../axios";
import Loader from "../Loader/Loader";

const Achievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [displayedAchievement, setDisplayedAchievement] = useState("hello");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://init-website-backend.vercel.app/api/achievements"
      );
      if (Array.isArray(response.data)) {
        setAchievements(response.data);
        if (response.data.length > 0) {
          setDisplayedAchievement(response.data[0]);
        }
      } else {
        console.error("Unexpected API response format:", response.data);
        setAchievements([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setAchievements([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="achievements-container">
        <div className="w-[80%] pb-10 mx-auto">
          <div className="pt-20">
            {loading ? (
              <div className="flex justify-center items-center h-[730px]">
                <Loader />
              </div>
            ) : (
              <Slider {...settings}>
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="gradient h-auto md:h-[730px] text-white rounded-3xl shadow-2xl border-2 bg-gradient1"
                  >
                    <div className="h-60 md:h-72 bg-transparent flex justify-center items-center rounded-t-xl mt-5">
                      <img
                        src={achievement.image}
                        alt=""
                        className="h-60 md:h-72 w-full object-contain transition-transform hover:scale-105"
                      />
                    </div>
                    <div
                      key={achievement?._id}
                      className="achievement_card px-2 md:px-8 py-6 md:py-5 "
                    >
                      <p className="text-center font-bold text-lg lg:text-3xl py-1">
                        {achievement?.CompetitionName}
                      </p>
                      <p className="text-sm md:text-lg text-center py-1">
                        {achievement?.TeamMembersName?.map(
                          (name) => name + ", "
                        )}
                      </p>
                      <p className="text-center font-extrabold text-sm md:text-md">
                        {achievement?.Position}
                      </p>
                      <p className="text-center text-sm md:text-md lg:text-lg m-3 lg:m-5 px-1">
                        {achievement?.Description?.slice(0, 150) + "..."}
                      </p>
                      <p className="text-center text-sm md:text-lg px-4 my-1">
                        <strong className="text-sm md:text-lg">
                          Organized By:
                        </strong>{" "}
                        {achievement?.OrganizedBy}
                      </p>
                      <p className="text-center text-sm md:text-lg my-1">
                        <strong className="text-sm md:text-lg">Year:</strong>{" "}
                        {achievement?.Year}
                      </p>
                      <p className="text-center text-sm md:text-lg mt-1">
                        <strong className="text-sm md:text-lg">Date:</strong>{" "}
                        {achievement?.Date}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;









// import React, { useState, useEffect, useRef } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Achievements.css"; // Import your CSS file for styling
// import axios from "axios";
// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";

// const Achievements = () => {
//   const [filterType, setFilterType] = useState("Core");
//     const [achievements, setAchievements] = useState([]);
//   const [displayedAchievement, setDisplayedAchievement] = useState("hello");

//   const apiUrl =
//     "https://init-ai-website-backend.onrender.com/api/achievements";

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(apiUrl);
//       setAchievements(response.data);
//       // Set the first achievement of the selected type as the displayed achievement
//       const filteredAchievements = response.data.filter(
//         (achievement) => achievement.type === filterType
//       );
//       if (filteredAchievements.length > 0) {
//         setDisplayedAchievement(filteredAchievements[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [filterType]); // Fetch data when the filterType changes

//   // const handleNext = () => {
//   //   // Find the next achievement of the selected type
//   //   const filteredAchievements = achievements.filter(
//   //     (achievement) => achievement.type === filterType
//   //   );
//   //   if (filteredAchievements.length > 0) {
//   //     const currentIndex = filteredAchievements.indexOf(displayedAchievement);
//   //     const nextIndex = (currentIndex + 1) % filteredAchievements.length;
//   //     setDisplayedAchievement(filteredAchievements[nextIndex]);
//   //   }
//   // };

//   return (
//     <>
//       <div className=" bg-black pt-20">
//         <div className="flex  items-center gap-3 text-md font-bold text-black  mx-8 md:mx-32  md:text-2xl h-16 rounded-3xl bg-white ">
//           <div
//             className={`flex items-center justify-center w-1/3  ${
//               filterType === "Core" ? "text-[#B42B84]" : ""
//             }`}
//             onClick={() => setFilterType("Core")}
//             style={{ cursor: "pointer" }}
//           >
//             <h1 className="">CORE</h1>
//           </div>
//           <div
//             className={`flex items-center justify-center w-1/3 ${
//               filterType === "Head" ? "text-[#B42B84]" : ""
//             }`}
//             onClick={() => setFilterType("Head")}
//             style={{ cursor: "pointer" }}
//           >
//             <h1 className="">HEADS</h1>
//           </div>
//           <div
//             className={`flex items-center justify-center w-1/3 ${
//               filterType === "Co-comm" ? "text-[#B42B84]" : ""
//             }`}
//             onClick={() => setFilterType("Co-comm")}
//             style={{ cursor: "pointer" }}
//           >
//             <h1 className="">CO-COM</h1>
//           </div>
//         </div>
//         <AwesomeSlider animation="cubeAnimation" className="">
//         {achievements
//             .filter((achievement) => achievement.type === filterType)
//             .map((achievement, index) => (
//           <div key={index} className=" w-full h-screen  grid grid-cols-1 md:grid-cols-3   md:mx-32">
//             <div className=" mt-32 col-span-2 ">
//               <div>
//                 <img
//                   src={achievement.url}
//                   className="h-[300px] w-[300px] md:h-[600px] md:w-[600px] lg:w-[900px] object-cover border-white border-8 rounded-xl"
//                 />
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center justify-center">
//                 <div className="text-white mt-32 h-[600px] border-white border-8 rounded-xl bg-gradient-to-r from-[#B42B84] to-[#6C1AA3] ... ">
//                   <>
//                     <div key={achievement?._id} className="card ">
//                       <h2 className="text-center text-xl lg:text-3xl mt-8">
//                         {achievement?.competitionName}
//                       </h2>
//                       <p className="text-lg md:text-xl text-center mt-5">
//                         <strong></strong>{" "}
//                         {achievement?.names?.map(
//                           (name) => name + ", "
//                         )}
//                       </p>
//                       <p className="text-center">
//                         <strong></strong> {achievement?.position}
//                       </p>

//                       <p className="text-center md:text-md lg:text-xl m-3 lg:m-5">
//                         <strong></strong>{" "}
//                         {achievement?.description?.slice(0, 150) +
//                           "..."}
//                       </p>
//                       <p className="text-center">
//                         <strong>Organized By:</strong>{" "}
//                         {achievement?.organizedBy}
//                       </p>
//                       <p className="text-center">
//                         <strong>Year:</strong> {achievement?.year}
//                       </p>
//                       <p className="text-center mb-4">
//                         <strong>Date:</strong>{" "}
//                         {new Date(
//                           achievement.date
//                         ).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </>
//                 </div>
//               </div>
//             </div>
//           </div>))}
//         </AwesomeSlider>
//       </div>
//     </>
//   );
// };

// export default Achievements;








// import React, { useState, useEffect, useRef } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Achievements.css"; // Import your CSS file for styling
// import $ from "jquery";
// import { jQuery } from "jquery";
// import axios from "axios";

// const Achievements = () => {
//   const sliderRef = useRef(null);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [filterType, setFilterType] = useState("Core");
//   const [achievements, setAchievements] = useState([]);
//   const [displayedAchievement, setDisplayedAchievement] = useState("hello");

//   const apiUrl =
//     "https://init-ai-website-backend.onrender.com/api/achievements";

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(apiUrl);
//       setAchievements(response.data);
//       // Set the first achievement of the selected type as the displayed achievement
//       const filteredAchievements = response.data.filter(
//         (achievement) => achievement.type === filterType
//       );
//       if (filteredAchievements.length > 0) {
//         setDisplayedAchievement(filteredAchievements[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [filterType]); // Fetch data when the filterType changes

//   const handleNext = () => {
//     // Find the next achievement of the selected type
//     const filteredAchievements = achievements.filter(
//       (achievement) => achievement.type === filterType
//     );
//     if (filteredAchievements.length > 0) {
//       const currentIndex = filteredAchievements.indexOf(displayedAchievement);
//       const nextIndex = (currentIndex + 1) % filteredAchievements.length;
//       setDisplayedAchievement(filteredAchievements[nextIndex]);
//     }
//   };

//   useEffect(() => {
//     // Slider core functions
//     const sliderNext = () => {
//       const total = $(sliderRef.current).find(".intro-slide").length;
//       $(sliderRef.current)
//         .find("#intro-slider .intro-slide:first-child")
//         .hide()
//         .appendTo($(sliderRef.current).find("#intro-slider"))
//         .fadeIn();
//       $(sliderRef.current)
//         .find(".intro-slide")
//         .each(function (index, dp_item) {
//           $(dp_item).attr("data-position", index + 1);
//         });
//       // Update the activeImageIndex
//       setActiveImageIndex((prevIndex) => (prevIndex + 1) % total);

//       // Find the next achievement of the selected type
//       const filteredAchievements = achievements.filter(
//         (achievement) => achievement.type === filterType
//       );
//       if (filteredAchievements.length > 0) {
//         const currentIndex = filteredAchievements.indexOf(displayedAchievement);
//         const nextIndex = (currentIndex + 1) % filteredAchievements.length;
//         setDisplayedAchievement(filteredAchievements[nextIndex]);
//       }
//     };

//     const onIntroSlideClick = function () {
//       const get_slide = $(this).attr("data-class");
//       console.log(get_slide);
//       $(sliderRef.current)
//         .find('#intro-slider .intro-slide[data-class="' + get_slide + '"]')
//         .hide()
//         .prependTo($(sliderRef.current).find("#intro-slider"))
//         .fadeIn();
//       $(sliderRef.current)
//         .find(".intro-slide")
//         .each(function (index, dp_item) {
//           $(dp_item).attr("data-position", index + 1);
//         });
//     };

//     // Attach event handlers
//     $(sliderRef.current).on("click", "#slider-next", sliderNext);
//     $(sliderRef.current).on(
//       "click",
//       "#intro-slider .intro-slide:not(:first-child)",
//       onIntroSlideClick
//     );

//     // Drag
//     $.fn.swipe = function (callback) {
//       // ... (your swipe function code)
//     };

//     // Disable image drag
//     $(sliderRef.current)
//       .find("#slider img")
//       .on("dragstart", function (event) {
//         event.preventDefault();
//       });

//     // Slider Methods
//     // ... (your slider methods code)

//     // Cleanup
//     return () => {
//       // Remove event handlers or any cleanup you may need
//       $(sliderRef.current).off("click", "#slider-next", sliderNext);
//       $(sliderRef.current).off(
//         "click",
//         "#intro-slider .intro-slide:not(:first-child)",
//         onIntroSlideClick
//       );
//     };
//   }, [achievements, filterType, displayedAchievement]);

//   useEffect(() => {
//     const apiUrl =
//       "https://init-ai-website-backend.onrender.com/api/achievements";
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         setAchievements(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <ul className="circles">
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//       <div className="relative bg-black pt-20">
//         <div className="flex items-center font-bold text-black mx-32 text-2xl h-16 rounded-3xl bg-white z-50 ">
//           <div
//             className={`flex items-center justify-center w-1/3  ${
//               filterType === "Core" ? "text-[#B42B84]" : ""
//             }`}
//             onClick={() => setFilterType("Core")}
//           >
//             <h1 className="">CORE</h1>
//           </div>
//           <div
//             className={`flex items-center justify-center w-1/3 ${
//               filterType === "Head" ? "text-[#B42B84]" : ""
//             }`}
//             onClick={() => setFilterType("Head")}
//           >
//             <h1 className="">HEADS</h1>
//           </div>
//           <div
//             className={`flex items-center justify-center w-1/3 ${
//               filterType === "Co-comm" ? "text-[#B42B84]" : ""
//             }`}
//             onClick={() => setFilterType("Co-comm")}
//           >
//             <h1 className="">CO-COM</h1>
//           </div>
//         </div>

//         <div className="grid grid-cols-2">
//           <section className="section-ach ml-32 mt-[-30px] ">
//           <div id="slider" ref={sliderRef}>
//               <div className="slider-wrap">
//                 <div id="intro-slider">
//                   <div className="intro-slide" data-class="1" data-position="1">
//                     <div className="slide-overlay"></div>
//                     <div
//                       className="poster-box"
//                       style={{
//                         background: `url(${displayedAchievement.url}) center center / cover no-repeat`,
//                       }}
//                     >
//                       <img
//                         // src={displayedAchievement.url}
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   <div className="intro-slide" data-class="2" data-position="2">
//                     <div className="slide-overlay"></div>
//                     <div
//                       className="poster-box bg-cover bg-no-repeat bg-center"
//                       style={{
//                         background: `url(${displayedAchievement.url}) center center / cover no-repeat`,
//                       }}
//                     >
//                       <img
//                         // src={displayedAchievement.url}
//                         alt=" "
//                       />
//                     </div>
//                   </div>
//                   <div className="intro-slide" data-class="3" data-position="3">
//                     <div className="slide-overlay"></div>
//                     <div
//                       className="poster-box"
//                       style={{
//                         background: `url(${displayedAchievement.url}) center center / cover no-repeat`,
//                       }}
//                     >
//                       <img
//                         // src={displayedAchievement.url}
//                         alt=""
//                       />
//                     </div>
//                   </div>

//                   {/* Add more intro-slide elements here */}
//                 </div>
//                 <span id="slider-next">
//                   <img
//                     src="https://yudiz.com/codepen/stack-slider/arrow.png"
//                     alt="arrow-image"
//                   />
//                 </span>
//               </div>
//             </div>
//           </section>
//           <div className="flex items-center justify-start">
//             <div className="text-white w-2/3 h-2/3  border-white border-8 rounded-xl bg-gradient-to-r from-[#B42B84]  to-[#6C1AA3] ... ">
//               {displayedAchievement && (
//                 <>
//                   <div key={displayedAchievement?._id} className="card">
//                     <h2 className="text-center text-3xl mt-8">
//                       {displayedAchievement?.competitionName}
//                     </h2>
//                     <p className="text-xl text-center mt-5">
//                       <strong></strong>{" "}
//                       {displayedAchievement?.names?.map((name) => name + ", ")}
//                     </p>
//                     <p className="text-center">
//                       <strong></strong> {displayedAchievement?.position}
//                     </p>

//                     <p className="text-center m-5">
//                       <strong></strong>{" "}
//                       {displayedAchievement?.description?.slice(0, 150) + "..."}
//                     </p>
//                     <p className="text-center">
//                       <strong>Organized By:</strong>{" "}
//                       {displayedAchievement?.organizedBy}
//                     </p>
//                     <p className="text-center">
//                       <strong>Year:</strong> {displayedAchievement?.year}
//                     </p>
//                     <p className="text-center">
//                       <strong>Date:</strong>{" "}
//                       {new Date(displayedAchievement.date).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Achievements;