import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { useHoverStore } from "./store";
import achievements from "./achievements.jpg";
import blogs from "./blogs.jpg";
import projects from "./projects.jpg";

function Card() {
  gsap.registerPlugin(ScrollTrigger);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const scrollTrigger = gsap.fromTo(
        containerRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-200vw",
          ease: "none",
          duration: 0.5,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=4000 top",
            scrub: 0.6,
            pin: true,
            onUpdate: (self) => {
              setIsScrolledToEnd(self.progress >= 0.8);
            },
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const { setHover } = useHoverStore();
  const handleMouseEnter = () => {
    setHover("medium");
  };
  const handleMouseLeave = () => {
    setHover("small");
  };

  return (
    <div>
      <section ref={triggerRef} className="scroll-container-outer">
        <div id="box" ref={containerRef} className="scroll-container">
          <div
            id="box1"
            className="scroll-section-1 scroll-section landing text-white "
          >
            <div className="box-image-cnt  ">
              <Link
                onClick={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to="/achievements"
              >
                <img
                  src={achievements}
                  className="flex-center"
                  height="563"
                  width="337"
                  alt="achievements"
                />
              </Link>
            </div>
            <div className="box-informations-cnt">
              <div className="box__width">
                <span className="small-font box-subtitle">
                  01 / Work
                  <br />
                </span>
                <Link
                  className="medium-font box-title  font-bold text-xl"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/achievements"
                  passHref
                >
                  ACHIEVEMENTS
                </Link>
                <ul>
                  <li>
                    Discover the exceptional achievements of the members of our
                    esteemed club, showcasing excellence in various domains.
                  </li>
                </ul>
                <div className="box-link-cnt">
                  <Link
                    className="btn-small box-link"
                    to="/achievements"
                    passHref
                  >
                    <span>Find out</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            id="box2"
            className="scroll-section-2 scroll-section landing text-white"
          >
            <div className="box-image-cnt">
              <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to="/blogs/all"
              >
                <img
                  src={blogs}
                  className="flex-center"
                  height="563"
                  width="337"
                  alt="projects"
                />
              </Link>
            </div>
            <div className="box-informations-cnt">
              <div className="box__width">
                <span className="small-font box-subtitle">
                  02 / Work
                  <br />
                </span>
                <Link
                  className="medium-font box-title text-xl font-bold"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/blogs/all"
                  passHref
                >
                  BLOGS
                </Link>
                <ul>
                  <li>
                    Embark on a journey through the insightful blogs created by
                    our esteemed club members, highlighting their expertise.
                  </li>
                  {/* <li>Main technologies: Adobe XD, CSS, jQuery, WordPress</li>
                  <li>2020 / 2022</li> */}
                </ul>
                <div className="box-link-cnt ">
                  <Link
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="btn-small box-link"
                    to="/blogs/all"
                    passHref
                  >
                    Find out
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            id="box3"
            className="scroll-section-3 scroll-section landing text-white"
          >
            <div className="box-image-cnt">
              <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to="/projects"
              >
                <img
                  src={projects}
                  className="flex-center"
                  height="563"
                  width="337"
                  alt="projects"
                />
              </Link>
            </div>
            <div className="box-informations-cnt">
              <div className="box__width">
                <span className="small-font box-subtitle">
                  03 / Work
                  <br />
                </span>
                <Link
                  className="medium-font box-title font-bold text-xl"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/projects"
                  passHref
                >
                  PROJECTS
                </Link>
                <ul>
                  <li>
                    Our club actively engages in a spectrum of projects centered
                    around cutting-edge Machine Learning initiatives, fostering
                    innovation and advancement within the field.
                  </li>
                </ul>
                <div className="box-link-cnt ">
                  <Link
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="btn-small box-link"
                    // href="/stuff/ideology"
                    to="/projects"
                    passHref
                  >
                    Find out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed flex items-center gap-4 left-1/2 bottom-5 transform -translate-x-1/2 z-[9999] text-white"
        >
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="text-white text-xl font-semibold tracking-wider font-mono"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            {isScrolledToEnd ? "Keep Scrolling" : "Scroll Down"}
          </motion.p>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="text-white cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faArrowDown}
              size="2x"
              className="hover:text-gray-300 transition-colors duration-300 transform hover:scale-110 filter drop-shadow-lg"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                animation: "slide 2s ease-in-out infinite",
              }}
            />
          </motion.div>
        </motion.div>
        <style jsx>
          {`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(10px);
              }
              100% {
                transform: translateX(0);
              }
            }
          `}
        </style>
      </section>
    </div>
  );
}

export default Card;