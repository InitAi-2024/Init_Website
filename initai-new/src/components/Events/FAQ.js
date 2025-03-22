import React from "react";
import Faqicon from "../../assets/Faqicon.svg";
import RedVertical from "../../assets/RedVertical.svg";
import WhiteVertical from "../../assets/WhiteVertical.svg";
import "./styles.css";

const FAQ = () => {
  return (
    <div className="faq">
      {/* <div className="row">
        <img className="md:ml-auto md:mr-32 ml-auto md:h-full h-7" src={RedVertical} alt="" />
      </div> */}
      {/* <div className="text-white text-center mb-2 md:mb-20 md:text-5xl text-2xl">
        Frequently asked Questions
      </div> */}
      {/* <div className="text-white text-center mb-2 md:mb-20 md:text-2xl text-base">
        Can't find the answers to what you are looking for?{" "}
        <span className="text-[#FF8A50] ">Reach out to our Team</span>
      </div> */}

      <div class="row md:mx-auto">
        <div class="p-8 rounded overflow-hidden">
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
              <p class="p-2 text-white text-justify md:text-md text-base">
                You can participate solo or in team of upto 3 members.
              </p>
            </div>
          </div>
          {/* <hr className="my-3" />
          <div class="group outline-none accordion-section" tabindex="2">
            <div class="group flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white md:text-lg text-base transition ease duration-500">
                What should be my preparation for a hackathon?
              </div>
              <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <img src={Faqicon} alt="" />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-[#ffffff99] text-justify md:text-lg text-base">
                Familiarize yourself with the theme or problem statement of the
                hackathon and any rules or guidelines provided by the
                organizers. Form a team or find potential teammates to work
                with. 
              </p>
            </div>
          </div> */}
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
              <p class="p-2 text-white text-justify md:text-md text-base ">
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
              <p class="p-2 text-white text-justify md:text-md text-base ">
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
              <p class="p-2 text-white text-justify md:text-md text-base ">
                Your laptop: Make sure your laptop is fully charged and that you
                bring the charger. Make sure you have any necessary software installed before the hackathon.
              </p>
            </div>
          </div>
          <hr className="my-3" />
        </div>
      </div>

     

    </div>
  );
};

export default FAQ;
