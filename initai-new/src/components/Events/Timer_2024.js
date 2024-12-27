import React from "react";
import { useState, useEffect, useMemo } from "react";

const Timer_2024 = () => {
  // const deadline = "February, 6, 2024";
  const parsedDeadline = 1707177600000;
  const [time, setTime] = React.useState(parsedDeadline - Date.now());


  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );
    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    // <div className="font-['Montserrat'] bg-gradient-to-r from-fuchsia-600 to-pink-600  p-1 w-[70%] h-[75%]">
    <div className="bg-none p-1 md:w-[70%] md:h-[75%] border border-solid border-gray-500 timer_2024">
      {
        time / DAY > 0 ?
        <>
          <div className="grid grid-cols-4 bg-none md:p-3">
            {
              Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
              }).map(([label, value]) => (
                <div key={label} className="col-span-1">
                  <div className="mx-auto">
                    <p className="md:pl-5 px-1 text-xl md:text-2xl my-2 text-white">{`${Math.floor(value)}`.padStart(2, "0")}</p>
                    <span className="md:pl-5 px-1 text-base md:text-xl text-white">{label}</span>
                  </div>
                </div>
                
              ))
            }
            </div>
            <div className="my-1 text-center text-white font-medium text-2xl">Event Starts In!!!!</div>
          
          </>
          
          : <div className="text-xl text-white text-center"> Inspect the data, and it will confess anything. </div>
      }
    </div>

  );
};

export default Timer_2024;
