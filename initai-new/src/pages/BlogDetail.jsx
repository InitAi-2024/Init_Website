import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Share2, Clock, Calendar, User, ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import FinalNavbar from "../components/FinalNavbar";
import LiquidEther from "@/components/LiquidEther";
import FinalFooter from "@/components/FinalFooter";
import { format } from 'date-fns';

// Format date to a readable string
const formatDate = (dateString) => {
    if (!dateString) return '';
    return format(new Date(dateString), 'MMMM d, yyyy');
};

export default function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [toc, setToc] = useState([]);
    const [activeSection, setActiveSection] = useState(0);
    const [readProgress, setReadProgress] = useState(0);

    // Fetch blog post data
    useEffect(() => {
        fetch(`/${id}.json`)
            .then((res) => {
                if (!res.ok) throw new Error(`Blog post not found: ${res.status}`);
                return res.json();
            })
            .then(data => {
                setPost(data);
                if (data.sections) {
                    const tocItems = data.sections.map((section, index) => ({
                        id: `section-${index}`,
                        text: section.heading,
                        level: 2,
                    }));
                    setToc(tocItems);
                }
            })
            .catch((err) => setError(err.message));
    }, [id]);

    // Track scroll progress and active section
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
            setReadProgress(Math.min(progress, 100));

            const sections = document.querySelectorAll('[id^="section-"]');
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle social sharing
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post?.title || 'Check out this blog post',
                    text: post?.summary || '',
                    url: window.location.href,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    // Scroll to a specific section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#03071e] text-white overflow-y-clip overflow-x-clip relative">
            {/* Read Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300"
                    style={{ width: `${readProgress}%` }}
                />
            </div>

            {/* LiquidEther behind everything */}
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

            {/* Content on top of the background */}
            <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-20 z-20">
                {error ? (
                    <div className="bg-red-950/40 backdrop-blur-sm border border-red-800/50 text-red-100 p-6 rounded-xl shadow-2xl">
                        <h2 className="text-xl font-bold mb-2">Error Loading Post</h2>
                        <p className="text-red-200 mb-4">{error}</p>
                        <Link 
                            to="/blogs" 
                            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-all hover:gap-3 gap-2 text-sm"
                        >
                            <ArrowLeft size={16} /> Back to all posts
                        </Link>
                    </div>
                ) : !post ? (
                    <div className="text-center py-20">
                        <div className="animate-pulse space-y-4 max-w-3xl mx-auto">
                            <div className="h-10 bg-gray-800/50 rounded-xl w-3/4 mx-auto"></div>
                            <div className="h-5 bg-gray-800/50 rounded-lg w-1/2 mx-auto"></div>
                            <div className="h-5 bg-gray-800/50 rounded-lg w-2/3 mx-auto"></div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 relative">
                        {/* Table of Contents - Sticky Sidebar */}
                        {toc.length > 0 && (
                            <aside className="hidden xl:block xl:w-72 flex-shrink-0">
                                <div className="sticky top-24">
                                    <div className="bg-gray-900/40 backdrop-blur-xl p-5 rounded-xl border border-gray-800/50 shadow-2xl">
                                        <div className="flex items-center gap-2 mb-4">
                                            <BookOpen className="text-indigo-400" size={18} />
                                            <h3 className="text-base font-semibold text-white">Contents</h3>
                                        </div>
                                        <nav className="space-y-0.5">
                                            {toc.map((item, index) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => scrollToSection(item.id)}
                                                    className={`group w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-start gap-2 ${
                                                        activeSection === index 
                                                            ? 'bg-indigo-600/20 text-indigo-300 border-l-3 border-indigo-500' 
                                                            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/40 border-l-3 border-transparent'
                                                    }`}
                                                >
                                                    <ChevronRight 
                                                        size={14} 
                                                        className={`mt-0.5 transition-transform ${activeSection === index ? 'text-indigo-400' : 'opacity-0 group-hover:opacity-100'}`}
                                                    />
                                                    <span className="text-xs leading-snug font-medium">{item.text}</span>
                                                </button>
                                            ))}
                                        </nav>
                                        <button
                                            onClick={handleShare}
                                            className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg transition-all shadow-lg hover:shadow-indigo-500/50 font-medium text-sm"
                                        >
                                            <Share2 size={16} /> Share Article
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        )}

                        {/* Main Content */}
                        <article className="flex-1 min-w-0">
                            <div className="max-w-5xl mx-auto">
                                <Link 
                                    to="/blogs" 
                                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-all mb-6 gap-2 hover:gap-3 text-sm font-medium group"
                                >
                                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                                    Back to all posts
                                </Link>
                                
                                {/* Article Header */}
                                <header className="mb-10">
                                    {/* Meta Information */}
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-5">
                                        {post.author && (
                                            <span className="flex items-center gap-1.5 bg-gray-900/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                                <User size={13} className="text-indigo-400" /> 
                                                <span className="font-medium">{post.author}</span>
                                            </span>
                                        )}
                                        {post.date && (
                                            <span className="flex items-center gap-1.5 bg-gray-900/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                                <Calendar size={13} className="text-purple-400" /> 
                                                {formatDate(post.date)}
                                            </span>
                                        )}
                                        {post.readTime && (
                                            <span className="flex items-center gap-1.5 bg-gray-900/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                                <Clock size={13} className="text-pink-400" /> 
                                                {post.readTime} min read
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* Title */}
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                                        {post.title}
                                    </h1>
                                    
                                    {/* Summary */}
                                    {post.summary && (
                                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-6 max-w-4xl">
                                            {post.summary}
                                        </p>
                                    )}
                                    
                                    {/* Featured Image */}
                                    {post.image && (
                                        <div className="relative mt-6 rounded-xl overflow-hidden shadow-2xl group max-w-3xl mx-auto">
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                            <img 
                                                src={post.image} 
                                                alt={post.title} 
                                                className="w-full h-auto max-h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                loading="eager"
                                            />
                                        </div>
                                    )}
                                </header>

                                {/* Article Content - Sections */}
                                <div className="space-y-12">
                                    {post.sections?.map((section, sectionIndex) => (
                                        <section 
                                            key={sectionIndex} 
                                            id={`section-${sectionIndex}`}
                                            className="scroll-mt-24 relative"
                                        >
                                            {/* Section Heading */}
                                            <div className="mb-5">
                                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
                                                    {section.heading}
                                                </h2>
                                                <div className="h-0.5 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
                                            </div>
                                            
                                            {/* Section Paragraphs */}
                                            <div className="space-y-4">
                                                {section.paragraphs?.map((paragraph, pIndex) => (
                                                    <p 
                                                        key={pIndex} 
                                                        className="text-gray-300 leading-relaxed text-base md:text-lg font-light tracking-wide"
                                                        style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                            
                                            {/* Section Images */}
                                            {section.images && section.images.length > 0 && (
                                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {section.images.map((image, imgIndex) => (
                                                        <div 
                                                            key={imgIndex} 
                                                            className={`rounded-lg overflow-hidden shadow-2xl group relative ${
                                                                section.images.length === 1 ? 'md:col-span-2' : ''
                                                            }`}
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                                            <img 
                                                                src={image.url} 
                                                                alt={image.caption || `${section.heading} - Image ${imgIndex + 1}`}
                                                                className="w-full h-auto object-contain bg-gray-950/50 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-700"
                                                                loading="lazy"
                                                            />
                                                            {image.caption && (
                                                                <p className="absolute bottom-0 left-0 right-0 text-center text-xs text-white px-4 py-3 bg-gradient-to-t from-gray-900 to-transparent z-20">
                                                                    {image.caption}
                                                                </p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </section>
                                    ))}
                                </div>

                                {/* Tags */}
                                {post.tags?.length > 0 && (
                                    <div className="mt-12 pt-6 border-t border-gray-800/50">
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span 
                                                    key={tag} 
                                                    className="px-3 py-1.5 bg-gray-900/60 backdrop-blur-sm hover:bg-gray-800/60 text-xs rounded-full text-gray-300 border border-gray-800/50 transition-all hover:border-indigo-500/50 hover:text-indigo-300 cursor-pointer font-medium"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Author Bio */}
                                {post.author && (
                                    <div className="mt-12 p-6 bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-2xl">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-bold shadow-lg">
                                                    {post.author.charAt(0)}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-white mb-2">
                                                    About {post.author}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed text-sm font-light">
                                                    {post.authorBio || `${post.author} is a passionate writer and researcher dedicated to exploring cutting-edge topics and sharing insights with the community.`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Share Section */}
                                <div className="mt-12 pt-6 border-t border-gray-800/50">
                                    <h3 className="text-lg font-bold text-white mb-4">Share this article</h3>
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] rounded-lg transition-all shadow-lg hover:shadow-blue-500/50 text-white font-medium text-sm"
                                            aria-label="Share on Twitter"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                            Twitter
                                        </a>
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#095196] rounded-lg transition-all shadow-lg hover:shadow-blue-600/50 text-white font-medium text-sm"
                                            aria-label="Share on LinkedIn"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                            LinkedIn
                                        </a>
                                        <button
                                            onClick={handleShare}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 hover:bg-gray-700/60 rounded-lg transition-all border border-gray-700/50 hover:border-gray-600 text-white font-medium text-sm ml-auto"
                                            aria-label="Share this post"
                                        >
                                            <Share2 size={16} />
                                            Share
                                        </button>
                                    </div>
                                </div>

                                {/* Navigation Footer */}
                                <div className="mt-12 pt-6 border-t border-gray-800/50">
                                    <div className="flex justify-between items-center">
                                        <Link 
                                            to="/blogs" 
                                            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-all gap-2 hover:gap-3 font-medium text-sm group"
                                        >
                                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
                                            Back to all posts
                                        </Link>
                                        <button 
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                            className="text-gray-400 hover:text-white transition-all hover:-translate-y-1 font-medium text-sm"
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
            <FinalFooter />
        </div>
    );
}