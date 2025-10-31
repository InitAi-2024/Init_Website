import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';
import { Copy, Check, Share2, Clock, Calendar, User, ArrowLeft } from 'lucide-react';
import FinalNavbar from "../components/FinalNavbar";
import LiquidEther from "@/components/LiquidEther";
import FinalFooter from "@/components/FinalFooter";
import { format } from 'date-fns';

// Format date to a readable string
const formatDate = (dateString) => {
    if (!dateString) return '';
    return format(new Date(dateString), 'MMMM d, yyyy');
};

// Copy code block content
const CodeBlock = ({ node, inline, className, children, ...props }) => {
    const [copied, setCopied] = useState(false);
    const codeRef = useRef(null);
    
    const handleCopy = () => {
        if (codeRef.current) {
            navigator.clipboard.writeText(codeRef.current.textContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const match = /language-(\w+)/.exec(className || '');
    
    return !inline ? (
        <div className="relative group my-6 rounded-lg overflow-hidden bg-gray-900 border border-gray-700">
            <div className="flex justify-between items-center bg-gray-800 px-4 py-2 text-sm text-gray-300">
                <span>{match ? match[1] : 'code'}</span>
                <button 
                    onClick={handleCopy}
                    className="p-1 rounded hover:bg-gray-700 transition-colors"
                    title="Copy code"
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto" ref={codeRef}>
                <SyntaxHighlighter
                    language={match ? match[1] : ''}
                    style={undefined}
                    customStyle={{
                        margin: 0,
                        padding: 0,
                        background: 'transparent',
                        fontSize: '0.9em',
                        lineHeight: '1.6',
                    }}
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            </div>
        </div>
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
};

// Custom components for markdown rendering
const components = {
    h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mb-6 mt-10 text-white" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mb-4 mt-8 text-white border-b border-gray-700 pb-2" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-2xl font-semibold mb-3 mt-6 text-white" {...props} />,
    p: ({ node, ...props }) => <p className="text-gray-300 mb-6 leading-relaxed text-lg" {...props} />,
    a: ({ node, ...props }) => <a className="text-indigo-400 hover:text-indigo-300 transition-colors underline" target="_blank" rel="noopener noreferrer" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-300" {...props} />,
    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
    blockquote: ({ node, ...props }) => (
        <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-6 text-gray-300" {...props} />
    ),
    img: ({ node, ...props }) => (
        <div className="my-8 rounded-lg overflow-hidden shadow-xl">
            <img 
                className="w-full h-auto max-h-[600px] object-cover" 
                loading="lazy"
                alt={props.alt || 'Blog post image'}
                {...props} 
            />
            {props.alt && (
                <p className="text-center text-sm text-gray-400 mt-2">{props.alt}</p>
            )}
        </div>
    ),
    code: CodeBlock,
    table: ({ node, ...props }) => (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden" {...props} />
        </div>
    ),
    th: ({ node, ...props }) => (
        <th className="px-6 py-3 bg-gray-800 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" {...props} />
    ),
    td: ({ node, ...props }) => (
        <td className="px-6 py-4 border-t border-gray-700 text-gray-300" {...props} />
    ),
};

export default function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [toc, setToc] = useState([]);
    const contentRef = useRef(null);

    // 👉 Fetch blog post data
    useEffect(() => {
        fetch(`/${id}.json`)
            .then((res) => {
                if (!res.ok) throw new Error(`Blog post not found: ${res.status}`);
                return res.json();
            })
            .then(data => {
                setPost(data);
                // Extract headings for table of contents
                const parser = new DOMParser();
                const doc = parser.parseFromString(`<div>${data.mdcontent}</div>`, 'text/html');
                const headings = Array.from(doc.querySelectorAll('h1, h2, h3'));
                const tocItems = headings.map((heading, index) => ({
                    id: `heading-${index}`,
                    text: heading.textContent,
                    level: parseInt(heading.tagName.substring(1)),
                }));
                setToc(tocItems);
            })
            .catch((err) => setError(err.message));
    }, [id]);

    // Handle social sharing
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post?.title || 'Check out this blog post',
                    text: post?.excerpt || '',
                    url: window.location.href,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    // Scroll to a specific heading
    const scrollToHeading = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#03071e] text-black overflow-y-clip overflow-x-clip relative">
            {/* -------- LiquidEther behind everything -------- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <LiquidEther
                    colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            {/* Navbar stays on top */}
            <FinalNavbar />

            {/* -------- Markdown on top of the background -------- */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 z-20">
                {error ? (
                    <div className="bg-red-900/50 border border-red-700 text-red-100 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">Error Loading Post</h2>
                        <p>{error}</p>
                        <Link 
                            to="/blogs" 
                            className="mt-4 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            <ArrowLeft size={16} className="mr-1" /> Back to all posts
                        </Link>
                    </div>
                ) : !post ? (
                    <div className="text-center py-20">
                        <div className="animate-pulse space-y-4">
                            <div className="h-10 bg-gray-800 rounded w-3/4 mx-auto"></div>
                            <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto"></div>
                            <div className="h-4 bg-gray-800 rounded w-2/3 mx-auto"></div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Table of Contents */}
                        {toc.length > 0 && (
                            <div className="hidden lg:block lg:w-64 flex-shrink-0">
                                <div className="sticky top-24 bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                                    <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
                                    <nav className="space-y-2">
                                        {toc.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToHeading(item.id)}
                                                className={`block text-left text-sm transition-colors hover:text-indigo-400 ${
                                                    item.level === 1 ? 'font-medium' : item.level === 3 ? 'ml-4 text-gray-400' : 'ml-2'
                                                }`}
                                            >
                                                {item.text}
                                            </button>
                                        ))}
                                    </nav>
                                    <button
                                        onClick={handleShare}
                                        className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors text-sm"
                                    >
                                        <Share2 size={16} /> Share
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Main Content */}
                        <article className="flex-1">
                            <div className="max-w-3xl mx-auto">
                                <Link 
                                    to="/blogs" 
                                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mb-6 text-sm"
                                >
                                    <ArrowLeft size={16} className="mr-1" /> Back to all posts
                                </Link>
                                
                                <header className="mb-10">
                                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                                        {post.author && (
                                            <span className="flex items-center">
                                                <User size={14} className="mr-1" /> {post.author}
                                            </span>
                                        )}
                                        {post.date && (
                                            <span className="flex items-center">
                                                <Calendar size={14} className="mr-1" /> {formatDate(post.date)}
                                            </span>
                                        )}
                                        {post.readTime && (
                                            <span className="flex items-center">
                                                <Clock size={14} className="mr-1" /> {post.readTime} min read
                                            </span>
                                        )}
                                    </div>
                                    
                                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                        {post.title}
                                    </h1>
                                    
                                    {post.excerpt && (
                                        <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>
                                    )}
                                    
                                    {post.image && (
                                        <div className="mt-8 mb-10 rounded-xl overflow-hidden">
                                            <img 
                                                src={post.image} 
                                                alt={post.title} 
                                                className="w-full h-auto max-h-[500px] object-cover"
                                                loading="eager"
                                            />
                                        </div>
                                    )}
                                </header>

                                <div className="prose prose-invert max-w-none" ref={contentRef}>
                                    <ReactMarkdown components={components}>
                                        {post.mdcontent}
                                    </ReactMarkdown>
                                </div>

                                {/* Tags */}
                                {post.tags?.length > 0 && (
                                    <div className="mt-12 pt-6 border-t border-gray-800">
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span 
                                                    key={tag} 
                                                    className="px-3 py-1 bg-gray-800 text-sm rounded-full text-gray-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Author Bio */}
                                {post.author && (
                                    <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                                        <div className="flex items-start">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-white mb-2">
                                                    About the Author
                                                </h3>
                                                <p className="text-gray-300">
                                                    {post.authorBio || `The author of this post is ${post.author}.`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Share Buttons */}
                                <div className="mt-12 pt-6 border-t border-gray-800">
                                    <h3 className="text-lg font-semibold text-white mb-4">Share this post</h3>
                                    <div className="flex space-x-4">
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                                            aria-label="Share on Twitter"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                                            aria-label="Share on LinkedIn"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <button
                                            onClick={handleShare}
                                            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors ml-auto"
                                            aria-label="Share this post"
                                        >
                                            <Share2 size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="mt-12 pt-6 border-t border-gray-800">
                                    <div className="flex justify-between">
                                        <Link 
                                            to="/blogs" 
                                            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                                        >
                                            <ArrowLeft size={16} className="mr-1" /> Back to all posts
                                        </Link>
                                        <button 
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            Back to top ↑
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                )}
            </div>
            <FinalFooter></FinalFooter>
        </div>
    );
}
