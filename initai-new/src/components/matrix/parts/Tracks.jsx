import React from "react";
import { Brain, Laptop, Gift, Cpu } from "lucide-react";

const Tracks = () => {
  return (
    <section id="tracks" className="relative z-10 py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center matrix-glow">
          Hack Tracks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: <Brain className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 my-1 mb-3" />,
              title: "NLP",
              description:
                "Create intelligent applications that understand and process human language.",
              items: ["Sentiment Analysis", "Chatbots", "Text Classification"],
            },
            {
              icon: <Laptop className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 my-1 mb-3" />,
              title: "Gen AI",
              description:
                "Explore the capabilities of Generative AI to create innovative and creative solutions.",
              items: ["Text Generation", "Image Synthesis", "Chatbots"],
            },
            {
              icon: <Gift className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 my-1 mb-3" />,
              title: "Computer Vision",
              description:
                "Develop systems that analyze and understand visual data.",
              items: ["Image Recognition", "Object Detection", "Face Recognition"],
            },
            {
              icon: <Cpu className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 my-1 mb-3" />,
              title: "Machine Learning",
              description:
                "Train models to uncover patterns and make predictions from data.",
              items: ["Regression Models", "Classification", "Clustering"],
            },
          ].map((track, index) => (
            <div
              key={track.title}
              className="bg-black/80 p-4 sm:p-5 lg:p-6 rounded-lg border border-green-400/30 hover:border-green-400 transition-all backdrop-blur-sm w-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {track.icon}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-green-400">
                  {track.title}
                </h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-green-300">
                  {track.description}
                </p>
                <ul className="space-y-2 text-left w-full text-sm sm:text-base">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;