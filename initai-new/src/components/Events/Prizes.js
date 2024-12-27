import React from "react";
import golden_ribbon from "./golden_ribbon.png";
import silver_ribbon from "./silver_ribbon.png";
import bronze_ribbon from "./bronze_ribbon.png";
import './styles.css'; 

const Prizes = () => {
  return (
    <div className="text-white mt-20 text-center text-5xl">
      <div className="d-flex justify-center align-items-center">
        <div className="flex flex-col items-center">
          <img
            src={golden_ribbon}
            alt="Golden Ribbon"
            className="h-[220px] w-[200px]"
          />
          <div className=" text-3xl prize_text mt-2">
            1st-20K 
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={silver_ribbon}
            alt="Silver Ribbon"
            className="h-[180px] w-[180px]"
          />
          <div className="text-3xl  prize_text mt-2">
            2nd-15K 
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={bronze_ribbon}
            alt="Bronze Ribbon"
            className="h-[150px] w-[150px]"
          />
          <div className="text-3xl prize_text mt-2">
            3rd-10K 
          </div>
        </div>
      </div>
{/* 
      <div className="font-thin text-md font-[koulen] prize_text mt-5">
        Prize pool of{" "}
      </div>
      <div className="font-extrabold text-md font-[koulen] prize_text mt-2">
        50K +
      </div> */}
    </div>
  );
};

export default Prizes;








// import React from "react";
// import golden_ribbon from "./golden_ribbon.png";
// import silver_ribbon from "./silver_ribbon.png";
// import bronze_ribbon from "./bronze_ribbon.png";
// const Prizes = () => {
//   return (
//     <div className="text-white mt-20 text-center text-5xl">
//       <div className="d-flex justify-center align-items-center">
//         <img
//           src={golden_ribbon}
//           alt="Golden Ribbon"
//           className="mr-3 h-[220px] w-[200px]"
//         />
//         <img
//           src={silver_ribbon}
//           alt="Silver Ribbon"
//           className="mx-3 h-[180px] w-[180px]"
//         />
//         <img
//           src={bronze_ribbon}
//           alt="Bronze Ribbon"
//           className="ml-3  h-[150px] w-[150px]"
//         />
//       </div>

//       <div className="font-thin text-md font-[koulen] prize_text mt-10  font- ">
//         Prize pool of{" "}
//       </div>
//       <div className="font-extrabold text-md font-[koulen] prize_text mt-5 ">
//         50K +
//       </div>
//     </div>
//   );
// };

// export default Prizes;