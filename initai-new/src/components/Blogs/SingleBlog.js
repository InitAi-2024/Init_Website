// import React, { useState, useEffect } from "react";
// import Bottombar from "./Bottombar";
// import Sidebar from "./Sidebar";
// import Profile from "../../assets/Profile_Blog.svg";
// import axios from "../../axios";
// import Dots from "../../assets/Three_dots.svg";
// import linkedin from "../../assets/LinkedIn_black.svg";
// import insta from "../../assets/Insta_black.svg";
// import globe from "../../assets/Globe_black.svg";
// import Bookmark from "../../assets/Bookmark_black.svg";
// import { useParams } from "react-router-dom";
// import HtmlParser from "html-react-parser";
// import Html2ReactParser from "html-to-react/lib/parser";
// import mainImage from "../../assets/blog_picture.jpeg";

// const SingleBlog = (props) => {
//   const [myData, setMyData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [isError, setIsError] = useState({});
//   // const { id } = useParams(); //Id From Url

//   // const getApiData = async () => {
//   //   try {
//   //     const res = await axios.get(`/blog/?_id=${id}`);
//   //     setMyData(res.data);
//   //   } catch (error) {
//   //     setIsError("error form content", error);
//   //   }
//   // };

//   // let date = new Date(myData.dateOfPublish);
//   // let date1 = date.toDateString();
//   // let indexOfSpace = date1.indexOf(" ");
//   // let dateShow = date1.substring(indexOfSpace + 1);
//   // // let blogdata = HtmlParser(myData.content)
//   // useEffect(() => {
//   //   setLoading(true);
//   //   getApiData();
//   //   setLoading(false);
//   // }, []);

//   // new code for single blog

//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlogDetail = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
//         setBlog(res.data);
//       } catch (error) {
//         console.error("Error fetching blog details:", error);
//       }
//     };

//     fetchBlogDetail();
//   }, [id]);

//   if (!blog) return <p>Loading...</p>;

//   return (
//     <div>
//       <div className="grid lg:grid-cols-12 grid-cols-1">
//         {/* <div className="bg-white lg:col-span-1 hidden lg:block">
//           <Sidebar />
//         </div> */}

//         <div className="lg:col-span-12 col-span-1 px-16 py-10 singleblog text-white">
//           <div className=" pb-8 mt-6">
//             {/* <div className="col-span-1">
//               <img src={Profile} alt="" />
//             </div> */}
//             <div className="flex flex-col">
//               <p className="py-2 text-base font-bold">{blog?.authors}</p>
//             </div>
//             {/* <div className="col-span-1 flex">
//               <img className="mt-auto" src={Dots} alt="" />
//             </div> */}
//             <div className="flex space-x-10">
//               <p className="mt-auto">{new Date(blog.date).toDateString()}</p>
//               <p className="mt-auto">{blog?.readTime}in read</p>
//             </div>
//             <div className="col-span-3"></div>
//             {/* <div className="col-span-3">
//               <div className="row flex lg:justify-end justify-center pt-8">
//                 <div className="pr-3">
//                   <a
//                     href="https://www.linkedin.com/company/init-ai/mycompany/"
//                     target="_blank"
//                   >
//                     <img src={linkedin} alt="" />
//                   </a>
//                 </div>
//                 <div className="px-3">
//                   <a
//                     href="https://www.instagram.com/djinit.ai/"
//                     target="_blank"
//                   >
//                     <img src={insta} alt="" />
//                   </a>
//                 </div>
//                 <div className="px-3">
//                   <a href="">
//                     <img src={globe} alt="" />
//                   </a>
//                 </div>
//                 <div className="px-3">
//                   <a href="">
//                     <img src={Bookmark} alt="" />
//                   </a>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//           <div className="row">
//             <p className="text-3xl font-bold">{blog.title}</p>
//           </div>
//           <div>
//             <img
//               className="mx-auto my-5 h-60 rounded-md shadow-md border-2 max-w-lg border-gray-800"
//               src={mainImage}
//               alt=""
//             />
//           </div>
//           <div
//             dangerouslySetInnerHTML={{ __html: blog.content }}
//             className="text-justify"
//           >
//             {/* {data} */}
//           </div>

//           {/* <div className="lg:hidden">
//             <Bottombar />
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleBlog;

// {myData.map((post) => {
//   const { _id,authors, title, content, mainImage, domains,dateOfPublish, readTime } = post;
//   let sents = content.split('.');
//   let bag = sents.slice(0,3);
//   let showContent = bag.join('.').concat('.');
//   let date = new Date(dateOfPublish);
//   let date1 = date.toDateString();
//   let indexOfSpace = date1.indexOf(' ');
//   let dateShow = date1.substring(indexOfSpace + 1);

//   return (
//     <div className="mb-4">
//       <img src={Profile} alt="" />
//       <p className="font-black text-lg py-2 px-2">{title.toUpperCase()}</p>
//       <div className="grid grid-cols-1 md:grid-cols-11">
//         <div className="col-span-8">
//           <p className="px-2 pb-2">{showContent}</p>
//         </div>

//       </div>
//     </div>
//   );
// })}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mainImage from "../../assets/blog_picture.jpeg";
import "./markdownBlog.css";
import ReactMarkdown from "markdown-to-jsx";
import "github-markdown-css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { rainbow, xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SingleBlog = () => {
  const { id } = useParams(); // ID of the blog from the URL
  // const [blog, setBlog] = useState(null); // State to store blog data
  // const [loading, setLoading] = useState(true); // State to manage loading

  // set the blog content to the blog usestate.
  const mdContent = `
# Want to Learn Python?

Python is a powerful and versatile programming language loved by developers worldwide. Here's why you should start learning Python:

- *Easy to Learn*: Python's syntax is clean and beginner-friendly.
- *Versatile*: From web development to data science, Python is used in various fields.
- *Large Community*: Get help and resources from a vast Python community.

## Code Example:

\`\`\`python
def greet(name):
    print(f"Hello, {name}! Welcome to Python learning!")

greet("Mohit")
\`\`\`

## Learn More:

[Click here to start your Python journey](https://www.python.org).`;

  const customRenderers = {
    a: ({ href, children }) => (
      <a href={href} target="_self" rel="noopener noreferrer">
        {children}
      </a>
    ),
    code: ({ className, children }) => {
      const language = className?.replace("language-", "") || "text";
      return (
        <SyntaxHighlighter style={rainbow} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  // useEffect(() => {
  //   const fetchBlogDetail = async () => {
  //     try {
  //       // Fetch the blog using the provided ID
  //       const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
  //       const data = await res.json();
  //       setBlog(data); // Update the state with blog data
  //     } catch (error) {
  //       console.error("Error fetching blog details:", error);
  //     } finally {
  //       setLoading(false); // Stop loading
  //     }
  //   };

  //   fetchBlogDetail();
  // }, [id]);

  // if (loading) return <p>Loading...</p>;
  // if (!blog) return <p>Blog not found!</p>;

  return (
    <div className="markdown-body w-full">
      <div className="text-6xl my-8 font-black">Want to Learn Python</div>
      <ReactMarkdown
        options={{
          overrides: customRenderers, // Use 'overrides' here
        }}
        className="mx-auto"
      >
        {/* render the blog usestate here*/}
        {mdContent}
      </ReactMarkdown>
    </div>
  );
};

export default SingleBlog;
