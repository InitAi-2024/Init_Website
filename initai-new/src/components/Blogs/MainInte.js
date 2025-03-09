// import React, { useState, useEffect } from "react";
// import axios from "../../axios";
// import MultiCarousel from "./MultiCarousel";
// import Profile from "../../assets/Author_img.svg";
// import Bookmark from "../../assets/Bookmark.svg";
// import Round from "../../assets/Round.svg";
// import Dots from "../../assets/Three_dots.svg";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const MainInte = () => {
//   const parser = new DOMParser();
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState({});
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [keywords, setKeywords] = useState([]);
//   // const getApiData = async () => {
//   //   try {
//   //     const res = await axios.get("/blog/all");
//   //     setMyData(res.data);
//   //   } catch (error) {
//   //     setIsError("error form content", error);
//   //   }
//   // };
//   // useEffect(() => {
//   //   getApiData();
//   // }, []);

//   return (
//     <>
//       <div className="sm:px-5 px-20 pt-10 md:pt-0">
//         <MultiCarousel onSelectCategory={setSelectedCategory} />
//         <hr />
//       </div>
//       <h1 className="font-black text-4xl pt-4 py-7">Latest Blogs</h1>
//       {myData
//        .filter((post) => {
//         console.log("Blog:", post);
//         console.log(
//           "Category Match:",
//           !selectedCategory || post.domains === selectedCategory
//         );
//         return !selectedCategory || post.domains[0] === selectedCategory;
//       })
//         .map((post) => {
//           const {
//             _id,
//             authors,
//             title,
//             content,
//             mainImage,
//             domains,
//             dateOfPublish,
//             readTime,
//           } = post;
//           let date = new Date(dateOfPublish);
//           let date1 = date.toDateString();
//           let indexOfSpace = date1.indexOf(" ");
//           let dateShow = date1.substring(indexOfSpace + 1);

//           // let date2 = new Date(dateOfPublish);
//           // let options = { year: 'numeric', month: 'long', day: 'numeric' };
//           // let formattedDate = date2.toLocaleDateString('en-US', options);

//           const doc = parser.parseFromString(content, "text/html");
//           const elements = Array.from(doc.body.children).slice(0, 2);
//           const firstThreeElements = elements
//             .map((element) => element.outerHTML)
//             .join("");

//           const truncateText = (text, maxWords) => {
//             const words = text.split(" ");
//             if (words.length > maxWords) {
//               return words.slice(0, maxWords).join(" ") + " ...";
//             }
//             return text;
//           };
//           const truncatedContent = truncateText(firstThreeElements, 60);

//           return (
//             <div key={_id} className="">
//               <Link to={`/blogs/${_id}`}>
//                 <p className="font-black text-lg py-2">{title.toUpperCase()}</p>
//               </Link>
//               <div className="grid grid-cols-1 md:grid-cols-12">
//                 <div className="col-span-8 mb-2 text-sm">
//                   {/* <p className="px-2 pb-2">{showContent}</p> */}
//                   <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
//                   {/* <div>{HTMLReactParser(content)}</div> */}
//                 </div>

//                 <div className="mx-auto md:mx-0 col-span-3">
//                   <img
//                     className="md:h-40 w-full my-auto border-2 border-gray-800 rounded-lg shadow-xl blogimg"
//                     src={mainImage}
//                     alt=""
//                   />
//                 </div>
//                 {/* <div className="flex">
//               <span>
//                 <img src={Profile} alt="" />
//               </span>
//               <span className="px-3 pb-2 text-lg">{authors}</span>
//             </div> */}
//               </div>

//               {/* <div className="pb-5 px-2">
//               <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{domains.toString().split(',').join(" , ")}</span>
//               <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{readTime}</span>
//               <span className="hidden lg:pr-4 md:block text-[#75758B] font-normal text-sm">
//                 {dateShow}
//               </span>
//               <div className="flex ml-auto">
//                 <img
//                   className=" m-2 w-4 lg:pr-4 lg:w-8"
//                   src={Bookmark}
//                   alt=""
//                 />
//                 <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
//                 <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
//               </div>
//             </div> */}
//               {/* <div className=" grid grid-cols-4 md:grid-cols-6 pb-5 px-2"> */}
//               {/* text-[#75758B] */}
//               <div className=" flex pb-5 ">
//                 <span className="pr-3 lg:pr-10 text-[#9c9ca8] font-normal text-sm">
//                   {domains.toString().split(",").join(" , ")}
//                 </span>

//                 <span className="pr-3 lg:pr-10 text-[#9c9ca8] font-normal text-sm">
//                   {readTime}in read
//                 </span>
//                 <span className="hidden lg:pr-10 md:block text-[#9c9ca8] font-normal text-sm">
//                   {dateShow}
//                 </span>
//                 <span className="pb-2 text-[#9c9ca8] text-sm italic">
//                   - By {authors}
//                 </span>
//                 {/* <div className="flex ml-auto">
//                 <img
//                   className=" m-2 w-4 lg:pr-4 lg:w-8"
//                   src={Bookmark}
//                   alt=""
//                 />
//                 <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
//                 <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
//               </div> */}
//               </div>
//             </div>
//           );
//         })}
//     </>
//   );
// };

// export default MainInte;

// 1st code up..

// // import React, { useState, useEffect } from "react";
// // import axios from "../../axios"
// // import MultiCarousel from "./MultiCarousel";
// // import Profile from "../../assets/Author_img.svg";
// // import Bookmark from "../../assets/Bookmark.svg";
// // import Round from "../../assets/Round.svg";
// // import Dots from "../../assets/Three_dots.svg";
// // import { Link, useNavigate , useParams } from 'react-router-dom';

// // const MainInte = () => {
// //   const parser = new DOMParser();
// //   const [myData, setMyData] = useState([]);
// //   const [isError, setIsError] = useState({});
// //   const navigate = useNavigate();

// //   const getApiData = async () => {
// //     try {
// //       const res = await axios.get("/blog/all");
// //       setMyData(res.data);
// //     } catch (error) {
// //       setIsError("error form content", error);
// //     }
// //   };

// //   useEffect(() => {
// //     getApiData();
// //   }, []);

// //   return (
// //     <>
// //       <div className="sm:px-5 px-20 ">
// //         <MultiCarousel/>
// //         <hr />
// //       </div>
// //       <h1 className="font-black text-2xl pt-4 px-2 py-7">Latest Blogs</h1>
// //       {myData.map((post) => {
// //         const { _id,authors, title, content, mainImage, domains,dateOfPublish, readTime } = post;
// //         let date = new Date(dateOfPublish);
// //         let date1 = date.toDateString();
// //         let indexOfSpace = date1.indexOf(' ');
// //         let dateShow = date1.substring(indexOfSpace + 1);

// //         // let date2 = new Date(dateOfPublish);
// //         // let options = { year: 'numeric', month: 'long', day: 'numeric' };
// //         // let formattedDate = date2.toLocaleDateString('en-US', options);

// //         const doc = parser.parseFromString(content, 'text/html');
// //         const elements = Array.from(doc.body.children).slice(0, 2);
// //         const firstThreeElements = elements.map(element => element.outerHTML).join('');

// //         return (
// //           <div key={_id} className="mb-4">
// //             <Link to= {`/blogs/${_id}`} >
// //             <div className="flex">
// //               <span>
// //                 <img src={Profile} alt="" />
// //               </span>
// //               <span className="px-3 pb-2 text-lg">{authors}</span>
// //             </div></Link>
// //             <p className="font-black text-lg py-2 px-2">{title.toUpperCase()}</p>
// //             <div className="grid grid-cols-1 md:grid-cols-11">
// //               <div className="col-span-8 mb-2">
// //                 {/* <p className="px-2 pb-2">{showContent}</p> */}
// //                 <div dangerouslySetInnerHTML={{__html:firstThreeElements}} />
// //                 {/* <div>{HTMLReactParser(content)}</div> */}
// //               </div>
// //               <div className="mx-auto md:mx-0 col-span-3">
// //                 <img
// //                   className="md:ml-auto h-40 w-full my-auto border-2 border-gray-800 rounded-lg shadow-xl"
// //                   src={mainImage}
// //                   alt=""
// //                 />
// //               </div>
// //             </div>

// //             <div className=" grid grid-cols-4 md:grid-cols-6 pb-5 px-2">
// //               <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{domains.toString().split(',').join(" , ")}</span>
// //               <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{readTime}</span>
// //               <span className="hidden lg:pr-4 md:block text-[#75758B] font-normal text-sm">
// //                 {dateShow}
// //               </span>
// //               <div className="flex ml-auto">
// //                 <img
// //                   className=" m-2 w-4 lg:pr-4 lg:w-8"
// //                   src={Bookmark}
// //                   alt=""
// //                 />
// //                 <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
// //                 <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
// //               </div>
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </>
// //   );
// // };

// // export default MainInte;

// 2nd trial code down
// import React, { useState, useEffect } from "react";
// import axios from "../../axios";
// import MultiCarousel from "./MultiCarousel";
// import { Link, useNavigate } from "react-router-dom";
// import mainImage from "../../assets/blog_picture.jpeg"

// const MainInte = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [keywords, setKeywords] = useState("");

//   const getApiData = async (keywords, category) => {
//     try {
//       let endpoint = "http://localhost:5000/api/blogs";
//       if (keywords || category) {
//         endpoint += `?${keywords ? `keywords=${keywords}` : ""}${
//           category ? `&category=${category}` : ""
//         }`;
//       } else {
//         endpoint += "/all";
//       }
//       const res = await axios.get(endpoint);
//       setMyData(res.data);
//     } catch (error) {
//       setIsError("Error fetching content", error);
//     }
//   };

//   useEffect(() => {
//     getApiData(keywords, selectedCategory);
//   }, [keywords, selectedCategory]);

//   return (
//     <>
//       <div className="sm:px-5 px-20 pt-10 md:pt-0">
//         {/* Category selection carousel */}
//         <MultiCarousel onSelectCategory={setSelectedCategory} />
//         <hr />
//         {/* Keyword search input */}
//         <input
//           type="text"
//           value={keywords}
//           onChange={(e) => setKeywords(e.target.value)}
//           placeholder="Search by keywords"
//           className="border p-2 rounded mt-4 w-full text-black"
//         />
//       </div>
//       <h1 className="font-black text-4xl pt-4 py-7">Latest Blogs</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {myData.map((post) => {
//           const {
//             _id,
//             title,
//             content,
//             category,
//             date,
//             writtenBy,
//           } = post;

//           const truncatedContent = content.split(" ").slice(0, 20).join(" ") + "...";

//           return (
//             <div
//               key={_id}
//               className="bg-[#3b2f57] text-[#e6e6e6] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <Link to={`/blogs/${_id}`}>
//                 <img
//                   className="w-full h-40 rounded-md object-cover mb-4"
//                   src={mainImage}
//                   alt={title}
//                 />
//                 <div className="p-4">
//                   <span className="text-[#ff77a9] font-semibold text-sm mb-2">
//                     {category}
//                   </span>
//                   <h2 className="text-[#f1f1f1] font-bold text-lg mb-2">{title}</h2>
//                   <p className="text-[#d1d1d1] text-sm mb-4">{truncatedContent}</p>
//                   <div className="flex justify-between items-center text-xs text-[#bcbcbc]">
//                     <span>By {writtenBy}</span>
//                     <span>{new Date(date).toDateString()}</span>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default MainInte;

// 3rd trial code down

// import React, { useState, useEffect } from "react";
// import axios from "../../axios";
// import MultiCarousel from "./MultiCarousel";
// import { Link, useNavigate } from "react-router-dom";
// import mainImage from "../../assets/blog_picture.jpeg";
// import MohitBlog from "./MohitBlog";
// import { Fade } from "react-awesome-reveal";
// import SingleBlog from "./SingleBlog";

// const MainInte = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [keywords, setKeywords] = useState("");

//   const getApiData = async (keywords, category) => {
//     try {
//       let endpoint = "http://localhost:5000/api/blogs";
//       console.log("Category:", category);
//       if (keywords || category) {
//         endpoint += `${category ? `?categories=${category}` : ""}`;
//       } else {
//         endpoint += "/all";
//       }
//       const res = await axios.get(endpoint);
//       setMyData(res.data);
//     } catch (error) {
//       setIsError("Error fetching content", error);
//     }
//   };

//   useEffect(() => {
//     getApiData(keywords, selectedCategory);
//   }, [keywords, selectedCategory]);

//   return (
//     <>
//       <div className="sm:px-5 px-20 pt-10 md:pt-0">
//         {/* Category selection carousel */}
//         <MultiCarousel
//           onSelectCategory={(e) => {
//             setSelectedCategory(() => {
//               console.log("Category selected: " + e); // Log the lowercase value
//               return e; // Update the state with the lowercase value
//             });
//           }}
//         />
//         <hr />
//         {/* Keyword search input */}
//         <input
//           type="text"
//           value=""
//           onChange={() => {}}
//           placeholder="Search by keywords"
//           className="border p-2 rounded mt-4 w-full text-black"
//         />
//       </div>
//       <h1 className="font-black text-4xl pt-4 py-7">Latest Blogs</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-self-center">
//         {myData.map((post) => {
//           const { id, title, summary, categories, date, image } = post;
//           const categoryList = categories;
//           return (
//             <div
//               key={id}
//               className="bg-[#3b2f57] text-[#e6e6e6] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <img
//                 className="w-full h-40 rounded-md object-cover mb-4"
//                 src={image}
//                 alt={title}
//               />
//               <div className="p-4">
//                 <span className="text-[#ff77a9] font-semibold text-sm mb-2">
//                   {categoryList}
//                 </span>
//                 <h2 className="text-[#f1f1f1] font-bold text-lg mb-2">
//                   {title}
//                 </h2>
//                 <p className="text-[#d1d1d1] text-sm mb-4">{summary}</p>
//                 <div className="flex justify-between items-center text-xs text-[#bcbcbc]">
//                   <span>{new Date(date).toDateString()}</span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default MainInte;

// 4th trial code down
// import React, { useState, useEffect } from "react";
// import axios from "../../axios";
// import MultiCarousel from "./MultiCarousel";
// import { Link } from "react-router-dom";
// import API from "../../axios";

// const MainInte = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const getApiData = async (category) => {
//     try {
//       let endpoint = "";
//       if (category) {
//         endpoint += `blogs?categories=${category.toLowerCase()}`;
//       } else {
//         endpoint += "blogs/all";
//       }
//       const res = await axios.get(endpoint);
//       setMyData(res.data);
//     } catch (error) {
//       setIsError("Error fetching content");
//     }
//   };

//   useEffect(() => {
//     getApiData(selectedCategory);
//   }, [selectedCategory]);

//   return (
//     <>
//       <div className="sm:px-5 px-20 pt-10 md:pt-0">
//         {/* Category selection carousel */}
//         <MultiCarousel
//           onSelectCategory={(category) => {
//             setSelectedCategory(category);
//           }}
//         />
//         <hr />
//       </div>
//       <h1 className="font-black text-4xl pt-4 py-7">Latest Blogs</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-self-center">
//         {myData.map((post) => {
//           const { _id, title, summary, categories, image, date } = post;
//           return (
//             <Link to={`/blogs/${_id}`}>
//               <div
//                 key={_id}
//                 className="bg-[#3b2f57] text-[#e6e6e6] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
//               >
//                 <img
//                   className="w-full h-40 rounded-md object-cover mb-4"
//                   src={image}
//                   alt={title}
//                 />

//                 <h2 className="text-[#f1f1f1] font-bold text-lg mb-2 hover:text-[#ff77a9]">
//                   {title}
//                 </h2>

//                 <span className="text-[#ff77a9] font-semibold text-sm mb-2">
//                   {categories}
//                 </span>
//                 <p className="text-[#d1d1d1] text-sm mb-4">{summary}</p>
//                 <div className="text-xs text-[#bcbcbc]">
//                   <span>{new Date(date).toDateString()}</span>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default MainInte;


import React, { useState, useEffect } from "react";
import axios from "../../axios";
import MultiCarousel from "./MultiCarousel";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const MainInte = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getApiData = async (category) => {
    try {
      setIsLoading(true);
      let endpoint = category
        ? `blogs?categories=${category.toLowerCase()}`
        : "blogs/all";
      const res = await axios.get(endpoint);
      setMyData(res.data);
    } catch (error) {
      setIsError("Error fetching content");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className="sm:px-5 px-20 pt-10 md:pt-0">
        {/* Category selection carousel */}
        <MultiCarousel
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <hr />
      </div>

      <h1 className="font-black text-4xl pt-4 py-7">Latest Blogs</h1>
      <div className="relative">
        {/* Loader overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center z-10">
            <Loader />
          </div>
        )}

        {/* Blog cards grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 place-self-center ${
            isLoading ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {myData && myData.length > 0 ? (
            myData.map((post) => {
              const { _id, title, summary, categories, image, date } = post;
              return (
                <Link to={`/blogs/${_id}`} key={_id}>
                  <div
                    className="bg-[#3b2f57] text-[#e6e6e6] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      className="w-full h-40 rounded-md object-cover mb-4"
                      src={image}
                      alt={title}
                    />

                    <h2 className="text-[#f1f1f1] font-bold text-lg mb-2 hover:text-[#ff77a9]">
                      {title}
                    </h2>

                    <span className="text-[#ff77a9] font-semibold text-sm mb-2">
                      {categories}
                    </span>
                    <p className="text-[#d1d1d1] text-sm mb-4">{summary}</p>
                    <div className="text-xs text-[#bcbcbc]">
                      <span>{new Date(date).toDateString()}</span>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            !isLoading && (
              <p className="text-center text-gray-500">No blogs available.</p>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default MainInte;

