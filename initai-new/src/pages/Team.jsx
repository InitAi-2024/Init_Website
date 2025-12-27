import React from "react";
import BlurTextAnimation from "@/components/blur-text-animation";
import FlippingChromaGridV2 from "@/components/FlippingChromaGridV2";
import FinalNavbar from "@/components/FinalNavbar";
import FinalFooter from "@/components/FinalFooter";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaInstagram } from "react-icons/fa";
import ThreeJSHeader_Team from "@/components/ThreeJSHeader_Team";

const colors = [
  { hex: "#4F46E5", name: "Indigo" },
  { hex: "#10B981", name: "Emerald" },
  { hex: "#F59E0B", name: "Amber" },
  { hex: "#EF4444", name: "Red" },
  { hex: "#8B5CF6", name: "Violet" },
  { hex: "#06B6D4", name: "Cyan" },
  { hex: "#EC4899", name: "Pink" },
  { hex: "#14B8A6", name: "Teal" },
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const getRandomBorderColor = () => {
  const randomColors = [...colors].sort(() => Math.random() - 0.5);
  return randomColors[0].hex;
};
const getRandomGradient = () => {
  const availableColors = [...colors];
  const color1Index = Math.floor(Math.random() * availableColors.length);
  const color1 = availableColors[color1Index];
  availableColors.splice(color1Index, 1);

  const color2 = availableColors[Math.floor(Math.random() * availableColors.length)];
  const angle = Math.floor(Math.random() * 360);

  return `linear-gradient(${angle}deg, ${color1.hex}, ${color2.hex})`;
};

export default function Team() {
  const [activeTab, setActiveTab] = React.useState('mentors');

  return (
    <section className="min-h-screen bg-[#03071e] text-white">
      <FinalNavbar />

      {/* ✅ Added ThreeJSHeader Section */}
      <section className="relative z-10">
        <ThreeJSHeader_Team />
      </section>

      {/* New FlippingChromaGridV2 */}
      <div className="bg-[#03071e]">
        <div className="container mx-auto px-4">
          <BlurTextAnimation
            text="Meet our team"
            className="mb-8 text-center max-w-4xl mx-auto"
            fontSize="text-3xl md:text-4xl"
            textColor="text-white"
            animationDelay={800}
          />

          {/* Tab Navigation */}
          <div className="flex justify-center gap-6 mb-12">
            <button
              onClick={() => setActiveTab('mentors')}
              className={`px-16 py-4 rounded-2xl font-medium text-lg transition-all duration-300 ${activeTab === 'mentors'
                ? 'border-2 border-cyan-400 text-cyan-400 bg-transparent'
                : 'border-2 border-gray-500 text-gray-400 bg-transparent hover:border-gray-400'
                }`}
            >
              Core Committee
            </button>
            <button
              onClick={() => setActiveTab('associates')}
              className={`px-16 py-4 rounded-2xl font-medium text-lg transition-all duration-300 ${activeTab === 'associates'
                ? 'border-2 border-cyan-400 text-cyan-400 bg-transparent'
                : 'border-2 border-gray-500 text-gray-400 bg-transparent hover:border-gray-400'
                }`}
            >
              Co-Committee
            </button>
          </div>

          {/* Mentors Tab Content */}
          {activeTab === 'mentors' && (
            <>
              {/* Faculty in charge */}
              <FlippingChromaGridV2
                items={[
                  {
                    image: "./core_images/Prachi_Satam.png",
                    title: "Prof. Prachi Satam",
                    subtitle: "Faculty Co-ordinator",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/prachi-tawde-a17414208/" },
                    ]
                  },
                  {
                    image: "./core_images/Priyanca_Gonsalves.png",
                    title: "Prof. Priyanca Gonsalves",
                    subtitle: "Faculty Co-ordinator",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/priyanca-gonsalves-b141451b1/" },
                    ]
                  },
                ]}
                columns={2}
              />

              <FlippingChromaGridV2
                items={[
                  {
                    image: "./core_images/Nandini.jpg",
                    title: "Nandini Nema",
                    subtitle: "Chairperson",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/nandininema07" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/nandininema" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/nandininema_07/" },
                    ]
                  }
                ]}
                columns={1}
              />

              {/* Core Team Members*/}
              <FlippingChromaGridV2
                items={[
                  {
                    image: "./core_images/Paril.jpg",
                    title: "Paril Rupani",
                    subtitle: "Vice Chairperson Reseach and Development",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/paril-01" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/paril-rupani-6396232a5" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/paril.rupani.351/" },
                    ]
                  },
                  {
                    image: "./core_images/Rachit.jpg",
                    title: "Rachit Chawda",
                    subtitle: "Vice Chairperson Outreach",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/Rachit1903" },
                      { icon: "linkedin", label: "LinkedIn", url: "http://www.linkedin.com/in/rachit-chawda" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/rachit_chawda" },
                    ]
                  }
                ]}
                columns={2}
              />

              {/* Secretary */}
              <FlippingChromaGridV2
                items={[
                  {
                    image: "./core_images/Nyasa.jpg",
                    title: "Nyasa Parikh",
                    subtitle: "Secretary",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: FaGithub, label: "GitHub", url: "https://github.com/Nyasa-Parikh-17" },
                      { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/nyasa-parikh-911a77293/" },
                    ]
                  },
                  {
                    image: "./core_images/Sneh.jpg",
                    title: "Sneh Shrimankar",
                    subtitle: "Secretary",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: FaGithub, label: "GitHub", url: "https://github.com/Sneh-Shrimankar/" },
                      { icon: FaLinkedin, label: "LinkedIn", url: "http://www.linkedin.com/in/snehshrimankar" },
                      { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/sneh_1002/" },
                    ]
                  }
                ]}
                columns={2}
              />

              {/* Research Team Members*/}
              <FlippingChromaGridV2
                items={[
                  {
                    image: "./core_images/Amit.png",
                    title: "Amit Upadhayay",
                    subtitle: "Research Lead",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/CelestialRouge" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/celstialrouge/" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_a.m.i.t_u/" },
                    ]
                  },
                  {
                    image: "./core_images/Krishna.jpg",
                    title: "Krishna Naudiyal",
                    subtitle: "Research Lead",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/krznanoziyal" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/krishna-naudiyal13/" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/krishna_naudiyal/" },
                    ]
                  },
                  {
                    image: "./core_images/Mallank.jpeg",
                    title: "Mallank Gogri",
                    subtitle: "Research Lead",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/mallankg" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/mallankgogri/" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/mallankg" },
                    ]
                  },
                  {
                    image: "./core_images/Mihik.jpg",
                    title: "Mihik Chaudhari",
                    subtitle: "Research Lead",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/Mihik197" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/mihik-chaudhari/" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/mihik_c123/" },
                    ]
                  },
                  {
                    image: "./core_images/Nachiket.jpg",
                    title: "Nachiket Jain",
                    subtitle: "Research Lead",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/Nachiket-Jain" },
                      { icon: "linkedin", label: "LinkedIn", url: "http://www.linkedin.com/in/jain-nachiket" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/nachijain/" },
                    ]
                  },
                  {
                    image: "./core_images/PranavS.jpg",
                    title: "Pranav Sonmale",
                    subtitle: "Research Lead",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/Sonmale25" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/pranav-sonmale-1364582b2/" },
                    ]
                  }
                ]}
                columns={3}
              />

              {/* Research part 2 */}
              <FlippingChromaGridV2
                items={[
                  {
                    image: "./core_images/Rohana.jpg",
                    title: "Rohana Mahimkar",
                    subtitle: "Research Lead",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "http://github.com/rohana-2005" },
                      { icon: "linkedin", label: "LinkedIn", url: "http://linkedin.com/in/rohana-mahimkar-96341a283" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_rohana.m_/#" },
                    ]
                  },
                  {
                    image: "./core_images/Sagar.jpg",
                    title: "Sagar Harsora",
                    subtitle: "Research Lead",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/sagarrh" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/sagarharsora" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/sagarr.h/" },
                    ]
                  }
                ]}
                columns={2}
              />

              {/* Tech Team Members */}
              <FlippingChromaGridV2
                items={[
                  {
                    image: "./core_images/Mihir.jpg",
                    title: "Mihir Patil",
                    subtitle: "Technical Head",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/MIHIRrPATIL" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/mihir-patil-a97777290/" },
                    ]
                  },
                  {
                    image: "./core_images/PranavD.jpg",
                    title: "Pranav Dharwadkar",
                    subtitle: "Technical Head",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/Pranaavvvv" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/pranav-dharwadkar-7051b4293/" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_praanavvvv_?igsh=MXhoaDRwZ2tvdW44eg==" },
                    ]
                  },
                  {
                    image: "./core_images/Krishnakant.jpg",
                    title: "Krishnakant Singh",
                    subtitle: "Techical Head",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/kktheomniscient" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/krishnakant-singh-5754a628b/" },
                    ]
                  }
                ]}
                columns={3}
              />

              {/* Marketing and Social Media Team Members - PHOTOS */}
              <FlippingChromaGridV2
                items={[
                  {
                    image: "./core_images/Parth.jpg",
                    title: "Parth Patil",
                    subtitle: "Marketing Head",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/BoomBoi44" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/parth-patillll/" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/prth_.ptl/" },
                    ]
                  },
                  {
                    image: "./core_images/Ibrahim.jpg",
                    title: "Ibrahim Kothari",
                    subtitle: "Social Media Head",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/IbrahimKo04" },
                      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/ibrahim-kothari" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_ibrahim04_ko" },
                    ]
                  },
                  {
                    image: "./core_images/Pranay.jpg",
                    title: "Pranay Kavthankar",
                    subtitle: "Social Media Head",
                    borderColor: getRandomBorderColor(),
                    gradient: getRandomGradient(),
                    socials: [
                      { icon: "github", label: "GitHub", url: "https://github.com/Pranay2412" },
                      { icon: "linkedin", label: "LinkedIn", url: "www.linkedin.com/in/pranaykavthankar" },
                      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/__pranay12__" },
                    ]
                  }
                ]}
                columns={3}
              />
            </>
          )}

          {/* Mentees and Associates Tab Content */}
          {activeTab === 'associates' && (
            <>
              {/* Research Mentees */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-6 text-white">Research Mentees</h3>
                <FlippingChromaGridV2
                  items={[
                    {
                      image: "./co-comm_images/Research Mentees/Aniket_Ambekar.jpg",
                      title: "Aniket Ambekar",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/AniketAmbekar943" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/aniket-ambekar-22b2a9317" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/ambekar4016" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Aryan_Patil.jpg",
                      title: "Aryan Patil",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/DarkTime721" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/aryan-patil-569527326" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/yvl.aryan" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Ashmit_Janjirkar.jpg",
                      title: "Ashmit Janjirkar",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "#" },
                        { icon: "linkedin", label: "LinkedIn", url: "#" },
                        { icon: "instagram", label: "Instagram", url: "#" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Atharva_Bhargava.jpg",
                      title: "Atharva Bhargava",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/BhargavaAtharva" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/atharvabhargava" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/atharva1536" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Bhavya_Kothari.png",
                      title: "Bhavya Kothari",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/amateurcoder015" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/bhavyaxkothari" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_.bhavya._015" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Jai_Udeshi.png",
                      title: "Jai Udeshi",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/jaiudeshi05" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/jaiudeshi05/" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/jaiudeshi596" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Navya_Bhansali.jpg",
                      title: "Navya Bhansali",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "http://github.com/navya3394" },
                        { icon: "linkedin", label: "LinkedIn", url: "http://www.linkedin.com/in/navyabhansali06" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/navya_bhansali06" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Niyati_Desai.jpg",
                      title: "Niyati Desai",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "#" },
                        { icon: "linkedin", label: "LinkedIn", url: "#" },
                        { icon: "instagram", label: "Instagram", url: "#" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Piyush_Tiwari.png",
                      title: "Piyush Tiwari",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/piyush-2911" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/piyush-tiwari-267202382/" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/piyushtiwari2166" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Rachit_Kawediya.png",
                      title: "Rachit Kawediya",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/ka-rachit" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/rachitkawediya" },
                        { icon: "instagram", label: "Instagram", url: "#" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/RushiMehta.png",
                      title: "Rushi Mehta",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/RushiMMehta" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/rushi-m-mehta-735938314" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/rushimehta83" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Siddhesh_Nadkarni.png",
                      title: "Siddhesh Nadkarni",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/Siddhesh290307" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/siddhesh-nadkarni-a99086297" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/sid29____/" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/WhatsApp Image 2025-12-09 at 22.03.34_35e92b6c.jpg",
                      title: "Vidit Gupta",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/Vidit-01" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/vidit-gupta3001" },
                        { icon: "instagram", label: "Instagram", url: "http://github.com/Vidit-01" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/Yukta_Chaudhari.jpg",
                      title: "Yukta Chaudhari",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/yuktac1011/" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/yukta-chaudhari-725065303/" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/yukta_c0921" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Research Mentees/GauraangThakkar.png",
                      title: "Gauraang Thakkar",
                      subtitle: "Research Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/Gauraangst" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/gauraangthakkar/" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/gauraangst/" },
                      ]
                    }
                  ]}
                  columns={3}
                />
              </div>

              {/* Technical Mentees */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-6 text-white">Technical Mentees</h3>
                <FlippingChromaGridV2
                  items={[
                    {
                      image: "./co-comm_images/Technical Mentees/Aman Gupta.png",
                      title: "Aman Gupta",
                      subtitle: "Technical Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/AmanGupta1354" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/amanguptait" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/aman__gupta1354" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Technical Mentees/Jeet_Gharat.png",
                      title: "Jeet Gharat",
                      subtitle: "Technical Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/Jeet2202" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/jeetgharat" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_jeet.199" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Technical Mentees/Krish_Mendpara.png",
                      title: "Krish Mendpara",
                      subtitle: "Technical Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/krishmendpara" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/krish-mendpara" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_krish090_" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Technical Mentees/Sarthak_Savani.png",
                      title: "Sarthak Savani",
                      subtitle: "Technical Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/Sarthak-2811" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/sarthak-savani-28a34132b/" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/sarthak_savani_2006/" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Technical Mentees/Zaid_Ahmad.jpg",
                      title: "Zaid Ahmad",
                      subtitle: "Technical Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/ZaidAhmad72" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/zaid-ahmad-b4675931b/" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/zaidnasim72/" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Technical Mentees/asif.jpg",
                      title: "Mohd Asif Shershahvadi ",
                      subtitle: "Technical Mentee",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "github", label: "GitHub", url: "https://github.com/seudoe" },
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/md-asif-sh" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_md_asifs_1" },
                      ]
                    }
                  ]}
                  columns={3}
                />
              </div>

              {/* Social Media Associates */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-6 text-white">Social Media Associates</h3>
                <FlippingChromaGridV2
                  items={[
                    {
                      image: "./co-comm_images/Social Media/Aryan_Vaghani.png",
                      title: "Aryan Vaghani",
                      subtitle: "Social Media Associate",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/aryan-vaghani-19a0173a3" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/aryanvaghanii" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Social Media/Diya_Shah.png",
                      title: "Diya Shah",
                      subtitle: "Social Media Associate",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/diya-shah-94b521333/" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_diyaa_7_" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Social Media/Palak_Shah.png",
                      title: "Palak Shah",
                      subtitle: "Social Media Associate",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/palak-shah-3312b8343" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/_palak856" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Social Media/Vidhi_Prajapati.png",
                      title: "Vidhi Prajapati",
                      subtitle: "Social Media Associate",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/vidhi-prajapati1006" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/viddhhii_10" },
                      ]
                    }
                  ]}
                  columns={3}
                />
              </div>

              {/* Marketing Associates */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-6 text-white">Marketing Associates</h3>
                <FlippingChromaGridV2
                  items={[
                    {
                      image: "./co-comm_images/Marketing/Shreyas_Badalia.png",
                      title: "Shreyas Badalia",
                      subtitle: "Marketing Associate",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "instagram", label: "Instagram", url: "#" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Marketing/Vansh_Shah.png",
                      title: "Vansh Shah",
                      subtitle: "Marketing Associate",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/vansh-shah-289a54257/" },
                        { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/vansh_shah03/" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Marketing/manaswi_bajaj.png",
                      title: "Manaswi Bajaj",
                      subtitle: "Marketing Associate",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "instagram", label: "Instagram", url: "#" },
                      ]
                    },
                    {
                      image: "./co-comm_images/Marketing/Dhruva_Gupta.png",
                      title: "Dhruva Gupta",
                      subtitle: "Marketing Associate",
                      borderColor: getRandomBorderColor(),
                      gradient: getRandomGradient(),
                      socials: [
                        { icon: "instagram", label: "Instagram", url: "#" },
                      ]
                    }
                  ]}
                  columns={3}
                />
              </div>
            </>
          )}
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-4">
          <FinalFooter />
        </div>
      </div>
    </section>
  )
}     