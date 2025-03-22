import React from "react";
import deathstar from "./deathstar.png";
import logo from "./logo.png";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Faqicon from "../../assets/Faqicon.svg";
import golden_ribbon from "./golden_ribbon.png";
import silver_ribbon from "./silver_ribbon.png";
import bronze_ribbon from "./bronze_ribbon.png";
import timeline_img_phone from "./timeline_img_phone_copy2.png";
import "./styles.css";
import Timer_2024 from "./Timer_2024";

const navigateToLink = () => {
  window.location.href =
    "https://unstop.com/hackathons/data-2-knowledge-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-874519?lb=gLcAz6g7";
};

const Mobile = () => {
  const options = {
    particles: {
      number: {
        // value: 48,
        value: 40,
        density: {
          snable: false,
          // enable: true,
          // area: 800,
        },
      },
      color: {
        // value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
        value: "fff",
      },
      shape: {
        type: "circle",
      },
      // opacity: {
      //   value: 0.9,
      // },
      opacity: {
        value: 0.9,
        random: true, // Enable random opacity for twinkling effect
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.8, max: 2.5 },
      },
      blur: {
        value: 0,
      },
      links: {
        enable: false,
        distance: 125,
        // color:'808080',
        color: "#fff",
        opacity: 0.7,
        width: 1,
      },
      move: {
        enable: false,
        speed: 0.8,
        direction: "random",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        onClick: {
          enable: false,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 500,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 5,
        },
        push: {
          quantity: 1,
          size: 1.5,
        },
      },
    },
  };
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div
      className={`bodymobile w-screen h-full overflow-y-scroll flex flex-col justify-start `}
    >
      <Particles
        options={options}
        init={particlesInit}
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "-100",
          // filter: "blur(2.5px)"
        }}
      />
      {/* about */}

      <div className="flex flex-col align-items-center justify-center ">
        <img src={logo} className="w-full p-10 pt-20 object-fit my-10 "></img>
        {/* <div>
          <button
            className="pulseBox font-['Koulen'] px-3 py-2 rounded-lg"
            onClick={navigateToLink}
          >
            register now!
          </button>
        </div> */}
        <Timer_2024/>
        <div className="mt-20">
          <span className="text-white text-[32px] font-normal font-['Koulen']">
            ABOUT{" "}
          </span>
          <span className="text-yellow-400 text-[32px] font-normal font-['Koulen']">
            THE
          </span>
          <span className="text-white text-[32px] font-normal font-['Koulen']">
            {" "}
            EVENT
          </span>
        </div>
        <p className="roboto text-white text-[12px] p-10 text-justify">
          Following the groundbreaking success of D2K in 2023, this year marks
          the second edition of the 6-hour Datathon. Set to challenge
          participants with real-world problem statements from industry giants,
          the event goes beyond competition, offering an immersive experience
          where teams unravel solutions within the ticking clock. Expect a
          thrilling journey, packed with learning, collaboration, and the
          excitement of applying machine learning principles to solve practical
          challenges.
        </p>
      </div>


      {/* domain */}
      <div className="flex flex-col px-5 pt-20 align-items-center justify-center">
        <div className="mb-2">
          <span className="text-white text-[32px] font-normal font-['Koulen']">
            DOM
          </span>
          <span className="text-yellow-400 text-[32px] font-normal font-['Koulen']">
            AI
          </span>
          <span className="text-white text-[32px] font-normal font-['Koulen']">
            NS
          </span>
        </div>
        <div className="w-full my-2 pattern--blueprintmobile  ">
          <div className=" text-[20px] uppercase roboto  py-2  text-white text-center  ">
            Computer Vision
          </div>
        </div>
        <div className="w-full my-2 pattern--blueprintmobile ">
          <div className=" text-[20px] roboto  py-2  text-white text-center  ">
            NLP
          </div>
        </div>
        <div className="w-full my-2 pattern--blueprintmobile">
          <div className=" text-[20px] roboto  py-2  text-white text-center  ">
            GEN AI
          </div>
        </div>
        <div className="w-full my-2 pattern--blueprintmobile">
          <div className=" uppercase text-[20px] roboto  py-2  text-white text-center  ">
            Data Science
          </div>
        </div>
        <div className="w-full my-2 pattern--blueprintmobile">
          <div className=" text-[20px] roboto  py-2  text-white text-center  ">
            ML OPS
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex items-center justify-center mt-20 ">
         <img src={timeline_img_phone} alt="" className="h-auto" />
      </div>
      {/* prizes */}
      <div className="text-white mt-20 text-center ">
        <div class="text-yellow-400 text-[32px] mb-10 font-normal font-['Koulen']">
          PRIZES
        </div>
        <div className="flex  justify-center items-center">
          <img
            src={golden_ribbon}
            alt="Golden Ribbon"
            className="ml-3  w-[80px]"
          />
          <img
            src={silver_ribbon}
            alt="Silver Ribbon"
            className="ml-3  w-[80px]"
          />
          <img
            src={bronze_ribbon}
            alt="Bronze Ribbon"
            className="ml-3  w-[80px]"
          />
        </div>

        <div className="font-extrabold prize_text text-xl mt-10 ">
          1st Prize - 20K Inr
        </div>
        <div className="font-extrabold prize_text text-xl mt-3 ">
          2nd Prize - 15K Inr
        </div>
        <div className="font-extrabold prize_text text-xl mt-3 ">
          3rd Prize - 10K Inr
        </div>
        {/* <div className="font-extrabold prize_text text-2xl mt-10 ">
          Prizes worth 50K +
        </div> */}
      </div>
      {/* faq */}
      <div className="faq pt-20">
        <div class="row md:mx-auto">
          <div class="p-8 rounded overflow-hidden">
            <div class="text-white text-[32px] font-normal text-center font-['Koulen']">
              FAQ
            </div>
            <hr className="my-3" />
            <div class="group outline-none accordion-section" tabindex="1">
              <div class="group flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
                <div class="group-focus:text-white md:text-lg text-base transition ease duration-500">
                  Team Size?
                </div>
                <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                  <img src={Faqicon} alt="" />
                </div>
              </div>
              <div class="group-focus:max-h-screen max-h-0 bg-opacity-50 px-4 overflow-hidden ease duration-500 faq_p">
                <p class="p-2 text-white text-justify text-xs">
                  You can participate solo or in team of upto 3 members.
                </p>
              </div>
            </div>

            <hr className="my-3" />
            <div class="group outline-none accordion-section" tabindex="3">
              <div class="group flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
                <div class="group-focus:text-white md:text-lg text-base transition ease duration-500">
                  What will be provided during the hackathon?
                </div>
                <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                  <img src={Faqicon} alt="" />
                </div>
              </div>
              <div class="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500 faq_p">
                <p class="p-2 text-white text-justify md:text-md text-xs ">
                  Internet access and lunch will be provided.
                </p>
              </div>
            </div>
            <hr className="my-3" />
            <div class="group outline-none accordion-section" tabindex="4">
              <div class="group flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
                <div class="group-focus:text-white md:text-lg text-base transition ease duration-500">
                  Registration Cost?
                </div>
                <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                  <img src={Faqicon} alt="" />
                </div>
              </div>
              <div class="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500 faq_p">
                <p class="p-2 text-white text-justify md:text-md text-xs ">
                  Nada.
                </p>
              </div>
            </div>
            <hr className="my-3" />
            <div class="group outline-none accordion-section" tabindex="5">
              <div class="group flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
                <div class="group-focus:text-white md:text-lg text-base transition ease duration-500">
                  What should I bring?
                </div>
                <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                  <img src={Faqicon} alt="" />
                </div>
              </div>
              <div class="group-focus:max-h-screen max-h-0  px-4 overflow-hidden ease duration-500 faq_p">
                <p class="p-2 text-white text-justify md:text-md text-xs ">
                  Your laptop: Make sure your laptop is fully charged and that
                  you bring the charger. Make sure you have any necessary
                  software installed before the hackathon.
                </p>
              </div>
            </div>
            <hr className="my-3" />
          </div>
        </div>
      </div>
      {/* <div className=" w-full h-full pt-[1000px] overflow-y-scroll flex flex-col justify-center">
        <div className="flex flex-col align-items-center justify-center ml-[-80px] ">
          <img
            src={logo}
            className="w-[400px] h-[100px] object-fit mt-10 "
          ></img>
          <p className="roboto text-white  p-10 text-center">
            Following the groundbreaking success of D2K in 2023, this year marks
            the second edition of the 6-hour Datathon. Set to challenge
            participants with real-world problem statements from industry
            giants, the event goes beyond competition, offering an immersive
            experience where teams unravel solutions within the ticking clock.
            Expect a thrilling journey, packed with learning, collaboration, and
            the excitement of applying machine learning principles to solve
            practical challenges.
          </p>
        </div>

        <div className=" mt-80 px-10 mx-10 z-20 bg-black border border-yellow-400">
          <div>
            <span className="text-white text-[32px] font-normal font-['Koulen']">
              ABOUT{" "}
            </span>
            <span className="text-yellow-400 text-[32px] font-normal font-['Koulen']">
              THE
            </span>
            <span className="text-white text-[32px] font-normal font-['Koulen']">
              {" "}
              EVENT
            </span>
          </div>
          <div className=" text-center text-white text-[13px] font-normal font-['Koulen']">
            Founded in 2017, DJ Init AI proudly serves as the official AI club
            of DJ Sanghvi College of Engineering, focusing on enriching the
            learning experience through seminars, workshops, and lecture series
            centered around machine learning. Following the groundbreaking
            success of D2K in 2023, this year marks the second edition of the
            6-hour Datathon. Set to challenge participants with real-world
            problem statements from industry giants, the event goes beyond
            competition, offering an immersive experience where teams unravel
            solutions within the ticking clock. Expect a thrilling journey,
            packed with learning, collaboration, and the excitement of applying
            machine learning principles to solve practical challenges.
          </div>
        </div>

        <div className=" px-10 mt-20 mx-10 z-20 bg-black border border-yellow-400">
          <div class="text-white text-[32px] font-normal font-['Koulen']">
            DOMAIN
          </div>
          <div class="w-[302px] text-center text-white text-[13px] font-bold font-['Roboto Mono']">
            DATA SCIENCE
            <br />
            Data science is a multidisciplinary field that utilizes scientific
            methods, processes, algorithms, and systems to extract insights and
            knowledge from structured and unstructured data.
            <br />
            <br />
            GEN AI
            <br />
            Generative AI refers to a category of artificial intelligence
            systems designed to generate content, data, or outputs that mimic
            human-like creativity.
            <br />
            <br />
            <br />
            COMPUTER VISION
            <br />
            Computer vision is a field that enables computers to interpret and
            make decisions based on visual data from the world. Key components
            of computer vision include image processing, pattern recognition,
            and machine learning techniques
            <br />
            <br />
            ML OPS
            <br />
            MLOps, short for Machine Learning Operations, is a set of practices
            that combines Machine Learning (ML), DevOps, and Data Engineering to
            streamline and optimize the lifecycle of machine learning and data
            models in production.
            <br />
            <br />
            NLP
            <br />
            Natural Language Processing (NLP) is a field of artificial
            intelligence (AI) that focuses on enabling computers to understand,
            interpret, and generate human language in a way that is both
            meaningful and contextually relevant.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Mobile;
