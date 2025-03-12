import { useState, useEffect } from "react";
import "./styles.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Events() {
  const [selected, setSelected] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white w-full py-20 px-6 md:px-20 lg:px-40 events bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <h1 className="my-10 md:text-6xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-600">
        Data To Knowledge
      </h1>
      <p className="text-gray-300 text-center max-w-2xl mb-16 md:text-lg">
        Explore our annual events that transform data into actionable insights.
        Join us in shaping the future of data science and analytics.
      </p>

      <div className={`md:grid ${selected == null ? "grid-cols-6" : "grid-cols-7"} w-full gap-6 md:h-96 px-auto space-y-6 md:space-y-0`}>
        <Link
          to={"/events/2023"}
          className={clsx(
            "transform hover:scale-105 transition-all duration-500 ease-in-out",
            selected === 2023 && "md:col-span-3",
            selected === 2024 || selected === 2025
              ? "md:col-span-2"
              : "md:col-span-2"
          )}
          onMouseOver={() => setSelected(2023)}
          onMouseLeave={() => setSelected(null)}
        >
          <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group md:h-96 h-48 border border-red-400/30 backdrop-blur-sm">
            <img
              src="https://www.shutterstock.com/image-photo/speaker-giving-talk-conference-hall-600nw-1117902230.jpg"
              className="absolute w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              alt="2023 Conference"
            />
            <div className="z-10 p-6 text-center">
              <p className="text-5xl font-bold mb-4">2023</p>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm md:text-base">
                Foundations in Data Science
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={"/events/2024"}
          className={clsx(
            "transform hover:scale-105 transition-all duration-500 ease-in-out",
            selected === 2024 && "md:col-span-3",
            selected === 2023 || selected === 2025
              ? "md:col-span-2"
              : "md:col-span-2"
          )}
          onMouseOver={() => setSelected(2024)}
          onMouseLeave={() => setSelected(null)}
        >
          <div className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group md:h-96 h-48 border border-purple-400/30 backdrop-blur-sm">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/10/QD/PC/BM/50342114/corporate-event.jpg"
              className="absolute w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              alt="2024 Conference"
            />
            <div className="z-10 p-6 text-center">
              <p className="text-5xl font-bold mb-4">2024</p>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm md:text-base">
                Innovation in AI & Analytics
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={"/events/2025"}
          className={clsx(
            "transform hover:scale-105 transition-all duration-500 ease-in-out",
            selected === 2025 && "md:col-span-3",
            selected === 2023 || selected === 2024
              ? "md:col-span-2"
              : "md:col-span-2"
          )}
          onMouseOver={() => setSelected(2025)}
          onMouseLeave={() => setSelected(null)}
        >
          <div className="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group md:h-96 h-48 border border-emerald-400/30 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3"
              className="absolute w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              alt="2025 Conference"
            />
            <div className="z-10 p-6 text-center">
              <p className="text-5xl font-bold mb-4">2025</p>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm md:text-base">
                Future of Data Engineering
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}