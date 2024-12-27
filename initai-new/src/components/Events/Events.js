import { useState,useEffect } from "react";
import "./styles.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Events() {
  const [selected, setSelected] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0
  })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center text-white w-full py-20 px-10 md:px-40 events">
      <h1 className="my-10 md:text-5xl text-xl font-semibold ">
        Data To Knowledge
      </h1>
      <div className="md:grid grid-cols-4 w-full gap-10 md:h-96 flex flex-col">
        <Link
          to={"/events/2023"}
          className={clsx(
            " hover:col-span-3 transition-all duration-500 ease-in-out",
            selected === 2023 && "col-span-3",
            selected === 2024 && "col-span-1",
            !selected && "col-span-2"
          )}
          onMouseOver={() => setSelected(2023)}
          onMouseLeave={() => setSelected(null)}
        >
          <div
            className={clsx(
              "bg-red-400 rounded-3xl flex items-center justify-center relative border-2 md:h-96 h-40 border-red-500 transition-all duration-500 ease-in-out"
            )}
          >
            <img
              src="https://www.shutterstock.com/image-photo/speaker-giving-talk-conference-hall-600nw-1117902230.jpg"
              className="object-cover w-full md:h-96 h-40 rounded-3xl opacity-20"
              alt=""
            />
            <p className="text-5xl font-bold absolute">2023</p>
          </div>
        </Link>
        <Link
          to={"/events/2024"}
          className={clsx(
            "hover:col-span-3 transition-all duration-500 ease-in-out",
            selected === 2024 && "col-span-3",
            selected === 2023 && "col-span-1",
            !selected && "col-span-2"
          )}
          onMouseOver={() => setSelected(2024)}
          onMouseLeave={() => setSelected(null)}
        >
          <div
            className={clsx(
              "bg-black rounded-3xl flex items-center justify-center md:h-96 h-40 relative border-2 border-black transition-all "
            )}
          >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/10/QD/PC/BM/50342114/corporate-event.jpg"
              className="object-cover w-full md:h-96 h-40 rounded-3xl opacity-20"
              alt=""
            />
            <p className="text-5xl font-bold absolute ">2024</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
