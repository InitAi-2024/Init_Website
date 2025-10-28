import React, { useEffect } from "react";
import Bottombar from "./Bottombar";
import MainInte from "./MainInte";
import Rightsection from "./Rightsection";
import Sidebar from "./Sidebar";
import "./Blogs.css";
import Blogs from "../../assets/blogs.jpg";
const Blogpage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="blogs">
      <div className="relative h-[35vh] hidden lg:block overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <img
            src={Blogs}
            alt="Blog Header"
            className="w-full h-full object-cover transform scale-105 transition-transform duration-3000 hover:scale-110"
          />
          {/* Adjusted gradient opacity */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f90] via-[#1a1a3a80] to-[#0a0a1f] opacity-85"></div>
        </div>

        {/* Content - Adjusted spacing */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Reduced size of decorative element */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 rounded-full"></div>

          {/* Reduced text size */}
          <h1 className="text-white text-5xl font-bold mb-4 tracking-wider relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-shine">
              OUR BLOGS
            </span>
          </h1>

          {/* Reduced subtitle size and adjusted spacing */}
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 text-xl font-medium max-w-2xl">
            Explore insightful articles and technical content written by our
            club members
          </p>

          {/* Reduced size of decorative circles */}
          <div className="absolute left-1/4 top-1/4 w-24 h-24 bg-purple-500/10 rounded-full filter blur-2xl animate-pulse"></div>
          <div className="absolute right-1/4 bottom-1/4 w-24 h-24 bg-blue-500/10 rounded-full filter blur-2xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-12 grid-cols-1"> */}
      <div>
        {/* <div className="bg-white lg:col-span-1 hidden lg:block">
          <Sidebar />
        </div> */}
        {/* <div className="lg:col-span-8 col-span-1 px-2 lg:px-28 pb-8 text-white ">
          <MainInte />
        </div> */}
        <div className="lg:pb-8 text-white md:justify-center md:mx-[150px] mx-[20px] md:pt-14 ">
          <MainInte />
        </div>
        {/* <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CCE2FC] hidden lg:block col-span-3">
          <Rightsection />
        </div> */}
        {/* <div className='lg:hidden'>
          <Bottombar />
        </div> */}
      </div>
    </div>
  );
};

export default Blogpage;

<style jsx>{`
  @keyframes shine {
    from {
      background-position: 200% center;
    }
    to {
      background-position: -200% center;
    }
  }

  .animate-shine {
    background-size: 200% auto;
    animation: shine 8s linear infinite;
  }
`}</style>;
