import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import { FlipWords } from "@/components/ui/flip-words";
import PortfolioPage from "@/pages/About/About";
import HeroImg from "@/assets/sakshi1.jpeg";

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

export default function Hero() {
  const words = ["Developer","Innovator" ,"Problem Solver", "Programmer"];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="bg-[#020617] text-white min-h-screen relative overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 pointer-events-none">
        <Meteors number={10} />
      </div>

      <section className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10 py-20">
        {/* Left content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft">
          <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/60 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-gray-300 text-sm font-semibold select-none">Welcome to my universe</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
            <span className="gradient-text block mb-2">Hello, I am</span>
            <span>Sakshi Gupta</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-semibold max-w-xl mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Engineer by degree. Creator by choice. Coder by soul.
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-blue-600/40 backdrop-blur-md shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
            <i className="fas fa-rocket text-blue-400 animate-bounce text-xl"></i>
            <FlipWords className="text-xl text-blue-400 font-semibold" words={words} />
          </div>

          {/* Social Media Icons */}
          {/* Social Media Icons */}
<div className="flex gap-4 mt-7 mb-5 text-white text-3xl">
  <a
    href="https://www.linkedin.com/in/sakshi-gupta-40335429a/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 transition transform hover:scale-110"
  >
    <i className="fab fa-linkedin" aria-hidden="true"></i>
  </a>
  <a
    href="https://github.com/sakshi788"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition transform hover:scale-110"
  >
    <i className="fab fa-github" aria-hidden="true"></i>
  </a>
  <a
    href="https://twitter.com/yourhandle"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-sky-500 transition transform hover:scale-110"
  >
    <i className="fab fa-twitter" aria-hidden="true"></i>
  </a>
  <a
    href="https://www.instagram.com/yourhandle"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-pink-500 transition transform hover:scale-110"
  >
    <i className="fab fa-instagram" aria-hidden="true"></i>
  </a>
</div>


          {/* Resume & Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-6">
            {/* Resume Button */}
            <a
              href="/SakshiGupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105"
            >
              <span className="text-white font-semibold flex items-center gap-3">
                Get Resume
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>

        {/* Right content - Profile image */}
        <div className="w-full lg:w-1/2 flex justify-center animate__animated animate__fadeInDown">
          <div className="relative w-[360px] h-[360px] rounded-full p-1 bg-gradient-to-br from-[#0ea5e9] via-[#14b8a6] to-[#22c55e] shadow-xl hover:shadow-[0_20px_50px_rgba(34,197,94,0.5)] transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
            <img
              src={HeroImg}
              alt="Sakshi Gupta"
              className="rounded-full object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <PortfolioPage />
    </main>
  );
}
