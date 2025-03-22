// import XarrowContext from "react-xarrows";
import Card from "./Card/Card";
import "./Layout.css";
import { useEffect, useState } from "react";
import AbhinavNair from "./Card/images/AbhinavNair.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  NavLink,
  useNavigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  faculty,
  prez,
  vprez,
  secretary,
  juniorMentor,
  seniorMentor,
  Chairperson1,
  Chairperson2,
  seniorMentor2,
  techHeads,
  marketingHeads,
  pubsHeads,
  logiHeads,
  creativeHeads,
  tech,
  marketing,
  pubs,
  logi,
  creatives,
} from "./Card/initdata";
import { Zoom } from "react-awesome-reveal";

export default function Layout() {
  let nav1 = useNavigate();

  let constN = () => {
    nav1("/Technical");
  };

  const [check, setCheck] = useState(true);

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    let a = document.getElementById("mentors");
    let b = document.getElementById("sec");
    let c = document.getElementById("event");
    let d = document.getElementById("disJm");
    let e = document.getElementById("disSec");
    let f = document.getElementById("disEvent");
    let nav = document.getElementById("nav");
    a.addEventListener("click", () => {
      if (e.classList.contains("disApp")) {
        setCheck(!check);
        e.classList.remove("disApp");
        e.classList.add("disNone");
      } else if (f.classList.contains("disApp")) {
        setCheck(!check);
        nav.classList.remove("navbar");
        nav.classList.add("disNone");
        f.classList.remove("disApp");
        f.classList.add("disNone");
      } else {
        d.classList.remove("disNone");
        d.classList.add("disApp");
        setCheck(!check);
      }
    });

    b.addEventListener("click", () => {
      if (d.classList.contains("disApp")) {
        setCheck(!check);
        d.classList.remove("disApp");
        d.classList.add("disNone");
      } else if (f.classList.contains("disApp")) {
        setCheck(!check);
        nav.classList.remove("navbar");
        nav.classList.add("disNone");
        f.classList.remove("disApp");
        f.classList.add("disNone");
      } else {
        e.classList.remove("disNone");
        e.classList.add("disApp");
        setCheck(!check);
      }
    });

    c.addEventListener("click", () => {
      if (d.classList.contains("disApp")) {
        setCheck(!check);
        d.classList.remove("disApp");
        d.classList.add("disNone");
      } else if (e.classList.contains("disApp")) {
        setCheck(!check);
        e.classList.remove("disApp");
        e.classList.add("disNone");
      } else {
        f.classList.remove("disNone");
        f.classList.add("disApp");
        nav.classList.add("navbar");
        nav.classList.remove("disNone");

        setCheck(!check);
      }
    });

    return () => {
      a.removeEventListener("click", () => {});
      b.removeEventListener("click", () => {});
      c.removeEventListener("click", () => {});
    };

    //remove the event listeners from useEffect
  }, [check]);

  console.log(Image);
  return (
    <div className="mainbody">
      <div className=" flex flex-col items-center justify-start max-w-full px-2 sm:px-2 lg:w-4/5  mx-auto mt-0">
        <div className="lg:mt-[15vh] md:grid-cols-2 mt-6 grid gap-2 justify-items-center lg:flex lg:justify-between w-full">
          <Zoom>
            {faculty.map((data) => (
              <Card
                id={data.id}
                name={data.Name}
                image={data.Image}
                pos={data.Position}
                insta={data.Instagram}
                git={data.Github}
                lin={data.LinkedIn}
                email={data.Email}
              />
            ))}
          </Zoom>
        </div>
        <div className="lg:mt-[15vh] mt-6" id="point-1"></div>
        <p className="border-2  p-2  tab lg:hidden">Chairpersons</p>
        <div className="lg:mt-[15vh] mt-6 md:grid-cols-2 grid gap-4 lg:flex justify-items-center lg:items-center lg:justify-between w-full">
          <Zoom>
            {Chairperson1.map((data) => (
              <Card
                id={data.id}
                name={data.Name}
                image={data.Image}
                pos={data.Position}
                insta={data.Instagram}
                git={data.Github}
                lin={data.LinkedIn}
                email={data.Email}
              />
            ))}
          </Zoom>
          <p id="pres" className="border-2  p-2  tab hidden lg:block">
            Chairpersons
          </p>
          <Zoom>
            {Chairperson2.map((data) => (
              <Card
                id={data.id}
                name={data.Name}
                image={data.Image}
                pos={data.Position}
                insta={data.Instagram}
                git={data.Github}
                lin={data.LinkedIn}
                email={data.Email}
              />
            ))}
          </Zoom>
        </div>
        <p className="border-2 lg:mt-[15vh] mt-6 p-2 tab lg:hidden ">
          Vice Chairpersons
        </p>
        <p id="vpres" className="border-2 text-center  p-2 tab hidden lg:block">
          Vice Chairpersons
        </p>
        <div className="lg:mt-[15vh] mt-6 grid grid-cols-1 md:grid-cols-2 gap-1 items-end">
          <Zoom>
            {vprez.map((data) => (
              <div key={data.id} className="flex flex-col items-center">
                <Card
                  id={data.id}
                  name={data.Name}
                  image={data.Image}
                  pos={data.Position}
                  insta={data.Instagram}
                  git={data.Github}
                  lin={data.LinkedIn}
                  email={data.Email}
                />
              </div>
            ))}
          </Zoom>
        </div>

        <div className="flex flex-col lg:mt-[15vh] mt-6 w-full gap-12">
          <div className="flex items-center justify-center">
            <p id="smentor" className="border-2  p-2 tab">
              Senior Research Leads
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center w-full gap-5 lg:mt-[15vh] mt-6">
            <Zoom>
              {seniorMentor.map((data) => (
                <Card
                  id={data.id}
                  name={data.Name}
                  image={data.Image}
                  pos={data.Position}
                  insta={data.Instagram}
                  git={data.Github}
                  lin={data.LinkedIn}
                  email={data.Email}
                />
              ))}
            </Zoom>
          </div>
        </div>
        {/* <div className="md:col-span-2 flex items-center justify-center lg:col-span-3">
          {seniorMentor.map((data) => (
            <Card
              id={data.id}
              name={data.Name}
              image={data.Image}
              pos={data.Position}
              insta={data.Instagram}
              git={data.Github}
              lin={data.LinkedIn}
              email={data.Email}
            />
          ))}
        </div> */}
        <div className="mt-[15vh]" id="point-3" />

        <div className="" id="point-4" />
        <div className="divSize1 w-full">
          <div className=" md:grid md:grid-cols-3  gap-6 mt-12 mb-10 items-center justify-items-center w-full">
            <div>
              <p
                className="border-2 p-2 mb-2 text-center text-sm tab"
                id="mentors"
              >
                Junior Research Leads
              </p>
            </div>
            <div>
              <p className="border-2 p-2 mb-2 text-center tab text-sm" id="sec">
                Secretary
              </p>
            </div>
            <div>
              <p
                className="border-2 p-2 mb-2 text-center tab text-sm "
                id="event"
              >
                Events
              </p>
            </div>
          </div>

          <div
            className="disNone grid py-10 mb-10 md:grid-cols-2 xl:grid-cols-3 justify-items-center w-full gap-5 lg:mt-[15vh] mt-6"
            id="disJm"
          >
            <Zoom>
              {juniorMentor.map((data) => (
                <Card
                  id={data.id}
                  name={data.Name}
                  image={data.Image}
                  pos={data.Position}
                  insta={data.Instagram}
                  git={data.Github}
                  lin={data.LinkedIn}
                  email={data.Email}
                />
              ))}
            </Zoom>
          </div>
          <div
            className="disNone grid py-10 mb-10 md:grid-cols-1 lg:grid-cols-1 justify-items-center w-full gap-5 lg:mt-[15vh] mt-6"
            id="disSec"
          >
            <Zoom>
              {secretary.map((data) => (
                <Card
                  id={data.id}
                  name={data.Name}
                  image={data.Image}
                  pos={data.Position}
                  insta={data.Instagram}
                  git={data.Github}
                  lin={data.LinkedIn}
                  email={data.Email}
                />
              ))}
            </Zoom>
          </div>

          <div>
            <nav id="nav" className="disNone ">
              <div className="flex md:flex-row justify-around gap-6 flex-col">
                <span className="flex py-2 text-center items-center justify-center">
                  <NavLink to={"Technical"}>Technical</NavLink>
                </span>
                <span className="flex py-2 text-center items-center justify-center">
                  <NavLink to={"Creatives"}>Creatives</NavLink>
                </span>
                <span className="flex py-2 text-center items-center justify-center">
                  <NavLink to={"Publicity"}>Publicity</NavLink>
                </span>
                <span className="flex py-2 text-center items-center justify-center">
                  <NavLink to={"Marketing"}>Marketing</NavLink>
                </span>
                <span className="flex py-2 text-center items-center justify-center">
                  <NavLink to={"Logistics"}>Logistics</NavLink>
                </span>
                <span className="flex py-2 text-center items-center justify-center">
                  <NavLink to={"Research"}>Research</NavLink>
                </span>
                <span className="flex py-2 text-center items-center justify-center">
                  <NavLink to={"Editorial"}>Editorial</NavLink>
                </span>
              </div>
            </nav>
            <div
              id="disEvent"
              className="disNone py-10 mb-10  justify-items-center w-full gap-5 lg:mt-[15vh] mt-6"
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
