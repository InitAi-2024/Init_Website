import React from "react";
import Sponsor from "./Sponsor.jpg";
import TitleSponsor from "./Title_Sponsor.jpg";

const Sponsors = () => {

  const navigateToLink1 = () => {
    window.location.href =
     "https://dextralabs.com/";
  };
  const navigateToLink2 = () => {
    window.location.href = "https://www.goldenorioleedu.com/";
  };


  return (
    <div className="font-[koulen] flex flex-col items-center justify-center  text-white mt-[5vh] ml-[-8vw] ">
      <div onClick={navigateToLink1} className="cursor-pointer">
        <div className="text-3xl">Title Sponsor</div>
        <img
          className=" h-[190px]  object-fit mt-2 mb-8 "
          src={TitleSponsor}
        ></img>
      </div>
      <div onClick={navigateToLink2} className="cursor-pointer">
        <div className="text-2xl">Overseas Education Partner</div>
        <img className=" h-[120px]  object-fit mt-2 mb-8 " src={Sponsor}></img>
      </div>
    </div>
  );
};

export default Sponsors;