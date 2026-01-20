import React from "react";
import leetcodeLogo from "@/assets/leetcode.png";
import codechefLogo from "@/assets/codechef.png";
import gfgLogo from "@/assets/gfg.png";

const ProfileCard = ({ title, platform, image, description, link, ringColor }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-cyan-400/30 hover:bg-[#132344]"
  >
    <div className="relative z-10 bg-[#0e1528cc] backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 mb-5">
          <div className={`p-2.5 rounded-full bg-white ring-2 ${ringColor} group-hover:scale-110 transition-transform duration-300`}>
            <img
              src={image}
              alt={platform}
              className="w-9 h-9 rounded-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-cyan-200 tracking-wide group-hover:text-sky-400 transition-colors duration-300">{platform}</h3>
            <span className="text-sm text-blue-400 font-medium">{title}</span>
          </div>
        </div>

        <p className="text-gray-300 text-[15px] mt-3 border-l-4 border-cyan-300/50 pl-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6">
        <span className="inline-block px-5 py-1.5 text-sm font-semibold bg-cyan-500/10 text-cyan-200 rounded-full group-hover:bg-cyan-600/20 transition-all duration-300">
          View Profile →
        </span>
      </div>
    </div>
  </a>
);

const CodingProfilesSection = () => {
  const profiles = [
    {
      image: leetcodeLogo,
      title: "Problem Solver",
      platform: "LeetCode",
      link: "https://leetcode.com/u/sakshi_7880/",
      description:
        "Rating: 1596 | Global Rank: Top 23% | 700+ Problems Solved | 7 Badges Earned | 20+ Contests",
      ringColor: "ring-yellow-400/70"
    },
    {
      image: codechefLogo,
      title: "Coding Challenger",
      platform: "CodeChef",
      link: "https://www.codechef.com/users/sakshi_788",
      description:
        "180+ Problems Solved | 30+ Contests Participated | Strong Rating Growth | Consistent Practice",
      ringColor: "ring-violet-400/70"
    },
    {
      image: gfgLogo,
      title: "DSA Learner",
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/sgy77m39/",
      description:
        "Practicing Core DSA Topics | Using Tags & Editorials | 40+ Key Problems Solved",
      ringColor: "ring-green-400/70"
    },
  ];

  return (
    <section className="min-h-screen bg-[#04081A] pt-32 pb-24 relative overflow-hidden">
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6 mb-20 z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-center animate-fade-in">
           Coding Profiles
          </h2>
          <p className="text-lg text-gray-400 font-medium text-center max-w-xl animate-slide-up">
            Building skills with consistency, contests, and daily practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>

      {/* Floating glow elements */}
      <div className="absolute top-16 left-16 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default CodingProfilesSection;
