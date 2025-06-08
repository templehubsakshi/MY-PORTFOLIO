import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaJava } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";


import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Cpu } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiVite, SiCplusplus } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";

const SkillCard = ({ icon: Icon, subTitle, skills, color, description }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 min-h-[320px] p-4 flex flex-col">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10 flex flex-col flex-grow">

      {/* Only subheading remains */}
      <h3 className={`text-2xl font-semibold mb-4 ${color}`}>
        {subTitle}
      </h3>

      {description && (
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
      )}
      <div className="flex flex-wrap gap-3 items-center">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 whitespace-nowrap"
          >
            {skill.icon && (
              <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
            )}
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      subTitle: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "JavaScript", icon: <SiVite className="w-4 h-4 text-yellow-400" /> },
      ],
      description:
        "Building responsive and dynamic user interfaces using modern frontend technologies.",
    },
    {
      icon: Database,
      subTitle: "Learning Backend",
      color: "text-green-400",
      skills: [
  { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
  { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
  { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-black" /> },
],

      description:
        "Understanding server-side development, databases, and API integration.",
    },
    {
      icon: Cpu,
      subTitle: "Tools I Use",
      color: "text-pink-400",
      skills: [
  { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
  { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGitAlt className="w-4 h-4 text-white" /> },
  { name: "Postman", icon: <BsFileEarmarkCode className="w-4 h-4 text-orange-500" /> },
  { name: "Eclipse", icon: <SiEclipseide className="w-4 h-4 text-[#2C2255]" /> },
],

      description:
        "Essential tools and environments to write and manage code efficiently.",
    },
    {
      icon: Code2,
      subTitle: "Programming Languages",
      color: "text-yellow-400",
      skills: [
  { name: "C", icon: <SiCplusplus className="w-4 h-4 text-blue-700" /> },
  { name: "C++", icon: <SiCplusplus className="w-4 h-4 text-blue-600" /> },
  { name: "Python", icon: <FaPython className="w-4 h-4 text-yellow-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="w-4 h-4 text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="w-4 h-4 text-red-600" /> },
],

      description:
        "Comfortable in multiple programming languages with practical experience in building efficient applications.",
    },
    {
      icon: Code2,
      subTitle: "Data Structures & Algorithms",
      color: "text-green-400",
      skills: [
        { name: "Arrays" },
        { name: "Linked Lists" },
        { name: "Trees" },
        { name: "Graphs" },
        { name: "Sorting & Searching" },
        { name: "Dynamic Programming" },
      ],
      description:
        "Strong problem-solving skills focusing on algorithmic efficiency and data structure mastery.",
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <h1 className="text-center text-4xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
         Skills & Technologies
        </h1>

        <div className="flex justify-center items-center mb-8">
          <IconCloudDemo />
        </div>

        {/* Grid of skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              subTitle={category.subTitle}
              skills={category.skills}
              color={category.color}
              description={category.description}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
