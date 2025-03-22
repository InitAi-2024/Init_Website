// 3rd trial code down
import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./markdownBlog.css"; // Import your CSS file
import "./Blogs.css";
import API from "../../axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchBlogDetail = async () => {
      try {
        const res = await axios.get(`blogs/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (!blog) return <p className="text-center text-white text-xl">Loading...</p>;

  return (
    <div className="py-24 px-4 lg:px-12 singleblog text-white min-h-screen bg-gray-900">
      <div className="mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400 text-center lg:text-left break-words">
          {blog.title}
        </h1>
        <p className="text-md md:text-lg lg:text-2xl text-gray-400 mb-4 text-center lg:text-left">
          {new Date(blog.date).toDateString()}
        </p>
        <p className="text-sm md:text-lg text-gray-300 italic mb-6 text-center lg:text-left">
          {blog.summary}
        </p>
        <div className="markdown-body overflow-auto">
                  {/* Render markdown with syntax highlighting */}
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      code({ inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={materialDark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {blog.mdcontent}
                  </ReactMarkdown>
                </div>
      </div>
    </div>
  );
};

export default BlogDetail;

