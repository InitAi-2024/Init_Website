import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: "What is D2K 3.0 Hack?",
      answer: "D2K 3.0 Hack is a 9-hour hackathon focused on AI, machine learning, and cutting-edge technology. It brings together developers, designers, and innovators to create groundbreaking solutions."
    },
    {
      question: "Who can participate?",
      answer: "Anyone over 18 years old can participate, regardless of their experience level. We welcome students, professionals, and enthusiasts alike."
    },
    {
      question: "Do I need a team?",
      answer: "You can participate in a team of minimum 2 or up to 3 people. We'll also have team formation events if you're looking to join one!"
    },
    {
      question: "What should I bring?",
      answer: "Your laptop, charger, any hardware you plan to use, and your creativity! We'll provide food, drinks, and a comfortable hacking environment."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is completely free! We believe in making technology accessible to everyone."
    },
    {
      question: "Will there be prizes?",
      answer: "Yes! We have a total prize pool of ₹80,000 distributed across various categories and special awards."
    },
    // {
    //   question: "What if I don't know how to code?",
    //   answer: "That's okay! We welcome participants of all skill levels. We'll have workshops and mentors to help you get started."
    // }
    // {
    //   question: "Can I start working on my project before the event?",
    //   answer: "No, all projects must be started during the hackathon. You can brainstorm ideas beforehand, but coding and design must begin at the event."
    // }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-green-400/30 rounded-lg overflow-hidden backdrop-blur-sm transition-all hover:border-green-400/50"
          >
            <button
              className="w-full p-5 sm:p-6 lg:p-7 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span className="text-lg sm:text-xl lg:text-2xl font-medium pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 my-2 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform flex-shrink-0 ${
                  openItem === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItem === index
                  ? "max-h-96 px-5 sm:px-6 lg:px-7 pb-5 sm:pb-6 lg:pb-7"
                  : "max-h-0"
              }`}
            >
              <p className="text-base sm:text-lg lg:text-xl text-green-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Combined FAQPage component
const FAQPage = () => {
  return (
    <section id="faq" className="relative z-10 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 lg:mb-16 text-center matrix-glow">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </div>

      {/* Custom styles for glow effects */}
      <style>{`
        .matrix-glow {
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.3),
                      0 0 10px rgba(74, 222, 128, 0.2);
        }
      `}</style>
    </section>
  );
};

export { FAQ, FAQPage };
export default FAQPage;
