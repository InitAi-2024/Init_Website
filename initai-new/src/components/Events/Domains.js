import React from "react";
import "./styles.css"

const Domains = () => {
  return (
    <div className="flex flex-col align-items-center justify-center">
      <div className="pattern pattern--blueprint ">
        <div className="domains text-white text-center  ">Computer Vision</div>
      </div>
      <div className="pattern pattern--blueprint blue">
        <div className="domains text-white text-center  ">NLP</div>
      </div>
      <div className="pattern pattern--blueprint">
        <div className="domains text-white text-center  ">GEN AI</div>
      </div>
      <div className="pattern pattern--blueprint">
        <div className="domains text-white text-center  ">DATA SCIENCE</div>
      </div>
      <div className="pattern pattern--blueprint">
        <div className="domains text-white text-center  ">ML OPS</div>
      </div>
    </div>
  );
};

export default Domains;