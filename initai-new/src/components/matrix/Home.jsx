import React, { useEffect, useState } from "react";
import { Code2, Users, Zap, Brain, Gift, Laptop, HomeIcon } from "lucide-react";
import DigitalRain from "./parts/DigitalRain";
import FAQPage from "./parts/FAQ";
import Features from "./parts/Features";
import Hero from "./parts/Hero";
import Sponsors from "./parts/Sponsers";
import Tracks from "./parts/Tracks";


function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-green-400 font-mono relative">
      <DigitalRain />
      <Hero />
      <Features />
      <Tracks />
      <Sponsors />
      <FAQPage />
    </div>
  );
}

export default Home;
