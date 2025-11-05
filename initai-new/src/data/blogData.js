// Comprehensive blog data with diverse, high-quality content
// Comprehensive blog data with diverse, high-quality content
export const blogPosts = [
  {
    id: 1,
    title: "Spotify's Algorithm",
    category: "Healthcare AI",
    readTime: 8,
    image: "https://res.cloudinary.com/dgbhomjud/image/upload/v1735114109/B11_pdrjmm.jpg",
    excerpt: "Discover how our breakthrough machine learning models are achieving 99.7% accuracy in early disease detection",
    featured: true,
    tags: ["AI", "Healthcare", "Machine Learning", "Diagnostics"],
    views: 2456
  },
  {
    id: 2,
    title: "Smart Reply in Gmail",
    category: "Quantum Tech",
    readTime: 12,
    image: "https://res.cloudinary.com/dgbhomjud/image/upload/v1735114109/B10_fp7ctk.jpg",
    excerpt: "Our quantum algorithms are revolutionizing how we approach NP-hard problems in logistics and finance",
    featured: true,
    tags: ["Quantum Computing", "Optimization", "Algorithms"],
    views: 1834
  },
  {
    id: 3,
    title: "Getting started with TensorFlow.js",
    category: "Space Tech",
    readTime: 10,
    image: "https://res.cloudinary.com/dgbhomjud/image/upload/v1735114110/B9_ptijit.png",
    excerpt: "How AI-powered navigation is enabling unprecedented precision in satellite operations",
    featured: false,
    tags: ["Space Technology", "Neural Networks", "Navigation"],
    views: 1567
  },
  {
    id: 4,
    title: "AI Based Approach for enhanced children storytelling ",
    category: "Green Tech",
    readTime: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWBKAYOeedmwhQOxsShpcLtBdLpUqxafBqw&s",
    excerpt: "Innovative approaches to making AI training 80% more energy-efficient without compromising performance",
    featured: false,
    tags: ["Sustainability", "Green AI", "Energy Efficiency"],
    views: 987
  },
  {
    id: 5,
    title: "Enhancing Privacy in Mental Health Prediction",
    category: "Computer Vision",
    readTime: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXERGlzYb8wHlxqmqCAyjgzNsSzZy1adVsxQ&s",
    excerpt: "Breakthrough in real-time object detection achieving 120 FPS on mobile devices",
    featured: true,
    tags: ["Computer Vision", "Real-time", "Mobile AI"],
    views: 3124
  },
  {
    id: 6,
    title: "Loan Acceptance Prediction and Analysis using XAI",
    category: "NLP",
    readTime: 7,
    image: "https://cdn.corporatefinanceinstitute.com/assets/commercial-loan-1024x684.jpg",
    excerpt: "Advanced NLP models that understand emotional context and cultural nuances in human communication",
    featured: false,
    tags: ["NLP", "Context Understanding", "Emotional AI"],
    views: 1456
  },
  {
    id: 7,
    title: "Traffic Forecasting with Spatio-Temporal GNN",
    category: "Robotics",
    readTime: 11,
    image: "https://images.unsplash.com/photo-1740556391559-eda85bd20523?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    excerpt: "How collaborative robots are transforming manufacturing with 40% efficiency improvements",
    featured: false,
    tags: ["Robotics", "Manufacturing", "Automation"],
    views: 2134
  },
  {
    id: 8,
    title: "Blockchain and AI: Decentralized Machine Learning Networks",
    category: "Blockchain AI",
    readTime: 13,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
    excerpt: "Pioneering decentralized AI networks that ensure data privacy while maintaining model accuracy",
    featured: true,
    tags: ["Blockchain", "Decentralized AI", "Privacy"],
    views: 2789
  },
  {
    id: 9,
    title: "Edge AI: Bringing Intelligence to the Internet of Things",
    category: "Edge Computing",
    readTime: 8,
    image: "https://728015.fs1.hubspotusercontent-na1.net/hubfs/728015/MediaTek%20Assets/Images/Blog/What%20is%20Edge%20AI%20and%20Why%20Is%20It%20Critical%20for%20Next-Generation%20IoT.jpg",
    excerpt: "Revolutionary edge computing solutions enabling real-time AI processing on IoT devices",
    featured: false,
    tags: ["Edge Computing", "IoT", "Real-time AI"],
    views: 1678
  }
];

export const categories = [
  "All",
  "Healthcare AI",
  "Quantum Tech",
  "Space Tech",
  "Green Tech",
  "Computer Vision",
  "NLP",
  "Robotics",
  "Blockchain AI",
  "Edge Computing"
];

export const featuredPosts = blogPosts.filter(post => post.featured);
