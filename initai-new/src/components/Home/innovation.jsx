import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Innovation() {
  const innovationRef = useRef(null);
  const innovationTriggerRef = useRef(null);
  const arrowRef = useRef(null);
  const textRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const innHero = gsap.fromTo(
      innovationRef.current,
      {
        scale: 1,
        translateX: window.innerWidth > 768 ? "14.51%" : "10%",
      },
      {
        scale: 0.1,
        translateX: 0,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: innovationTriggerRef.current,
          start: "center center",
          end: "5000 top",
          scrub: true,
          pin: true,
        },
      }
    );
    return () => {
      innHero.kill();
    };
  }, []);

  return (
    <div>
      <div ref={innovationTriggerRef} className="inn-outer relative">
        <h2 ref={innovationRef} className="extreme-font">
          INNOVATION
        </h2>
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed flex flex-col justify-center items-center right-4 bottom-24 transform z-[9999] text-white"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="text-white text-xl font-semibold tracking-wider z-[9999] font-mono"
            style={{ 
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              letterSpacing: "0.2em",
              textTransform: "uppercase"
            }}
          >
            Keep Scrolling
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="text-white cursor-pointer z-[9999]"
          >
            <FontAwesomeIcon
              icon={faArrowDown}
              size="3x"
              className="hover:text-gray-300 transition-colors duration-300 transform hover:scale-110 filter drop-shadow-lg"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                animation: "bounce 2s ease-in-out infinite",
              }}
            />
          </motion.div>
        </motion.div>
        <style jsx>
          {`
            @keyframes bounce {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Innovation;
