import React from "react";
import { Calendar, Trophy, Users } from "lucide-react";

const Hero = () => {
  // Text for the animated heading
  const mainHeadingLine1 = "Welcome to the ";
  const mainHeadingLine2 = "Future of AI";

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-0"></div>
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 text-center relative z-10">
        <div className="animate-fade-in space-y-6 sm:space-y-8 max-w-6xl mx-auto">
          {/* Main heading - with letter-by-letter animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 tracking-tight leading-tight">
            <div className="glowing-text-container">
              {mainHeadingLine1.split("").map((letter, index) => (
                <span
                  key={`line1-${index}`}
                  className="text-green-400 inline-block letter-glow"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
            <div className="glowing-text-container mt-1 sm:mt-2">
              {mainHeadingLine2.split("").map((letter, index) => (
                <span
                  key={`line2-${index}`}
                  className="text-green-300 inline-block letter-glow"
                  style={{
                    animationDelay: `${
                      (mainHeadingLine1.length + index) * 0.1
                    }s`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          </h1>

          {/* Subheading - secondary importance */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 animate-typewriter max-w-3xl mx-auto text-green-300/90 font-light">
            Where Innovation Meets Intelligence
          </h2>

          {/* Info cards */}
          <div
            className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-black/30 border border-green-400/20 hover:border-green-400/50 transition-all hover:transform hover:scale-105 duration-300">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 my-2 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-green-300">
                22nd March
              </h3>
              <p className="text-xs sm:text-sm text-green-300/80">2025</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-black/30 border border-green-400/20 hover:border-green-400/50 transition-all hover:transform hover:scale-105 duration-300">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 my-2 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-green-300">
                ₹80,000
              </h3>
              <p className="text-xs sm:text-sm text-green-300/80">
                in total cash prices
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-black/30 border border-green-400/20 hover:border-green-400/50 transition-all hover:transform hover:scale-105 duration-300">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 my-2 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-green-300">
                100+ Hackers
              </h3>
              <p className="text-xs sm:text-sm text-green-300/80">nationally</p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce-slow opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 border-2 border-green-400 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for glow effects */}
      <style>{`
        .matrix-glow {
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.3),
                      0 0 10px rgba(74, 222, 128, 0.2),
                      0 0 20px rgba(74, 222, 128, 0.1);
        }
        
        @keyframes typewriter {
          from { width: 0 }
          to { width: 100% }
        }
        
        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 3s steps(40) 1s 1 normal both;
        }
        
        /* Letter-by-letter glow animation */
        @keyframes letterGlow {
          0%, 100% {
            text-shadow: none;
            opacity: 0.8;
          }
          20%, 80% {
            text-shadow: 0 0 8px rgba(74, 222, 128, 0.8),
                        0 0 15px rgba(74, 222, 128, 0.5),
                        0 0 25px rgba(74, 222, 128, 0.3);
            opacity: 1;
          }
        }
        
        .letter-glow {
          animation: letterGlow 2s ease-in-out forwards;
          opacity: 0.8;
        }
        
        .glowing-text-container {
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default Hero;
