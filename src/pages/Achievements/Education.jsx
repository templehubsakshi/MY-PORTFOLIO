import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, FileText, Award } from "lucide-react";

import project1 from "@/assets/images/patent.png";
import project2 from "@/assets/images/ACHIEVE.jpg";
import project3 from "@/assets/images/flipkart.jpg";
import project4 from "@/assets/images/cert.PNG";

const typeConfig = {
  patent: {
    icon: <FileText className="w-6 h-6 text-teal-400" />,
    color: "from-teal-400 to-blue-500",
  },
  achievement: {
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-400 to-yellow-600",
  },
  participation: {
    icon: <Award className="w-6 h-6 text-blue-400" />,
    color: "from-blue-400 to-blue-600",
  },
  certificate: {
    // Using Award icon here for certificate since no Certificate icon in lucide-react
    icon: <Award className="w-6 h-6 text-purple-400" />,
    color: "from-purple-400 to-purple-600",
  },
};

const CertificatesSection = () => {
  const certData = [
    {
      type: "patent",
      title: "Patent Application Publication",
      description:
        "A DIGITAL PLATFORM FOR SUSTAINABLE TOURISM AND CULTURAL PRESERVATION",
      image: project1,
    },
    {
      type: "achievement",
      title: "ACM BMU - Technical Event",
      description: "Secured 2nd Runner-up in coding event organized by ACMBMU.",
      image: project2,
    },
    {
      type: "participation",
      title: "Flipkart Runway - Season 5",
      description:
        "Participated in Flipkart's Season 5 challenge focused on product development.",
      image: project3,
    },
    {
      type: "certificate",
      title: "Winter Coding Challenge - AXIS 25, VNIT Nagpur",
      description:
        "Participated in Winter Coding Challenge organized by AXIS 25, VNIT Nagpur in collaboration with GeeksforGeeks.",
      image: project4,
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-[#04081A] text-white px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-12">
        Patents & Certificates
      </h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {certData.map((cert, i) => {
          const { icon, color } = typeConfig[cert.type] || {};
          return (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 15px 30px -10px rgba(14, 116, 144, 0.7), 0 4px 6px rgba(14, 116, 144, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`cursor-pointer rounded-2xl overflow-hidden border border-gray-700 bg-[#0F172A] shadow-md`}
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-cover"
                />
                <div
                  className={`absolute top-3 left-3 bg-gradient-to-r ${color} px-3 py-1 rounded-full flex items-center gap-2 shadow-lg`}
                >
                  {icon}
                  <span className="text-sm font-semibold">{cert.type}</span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-gray-400">{cert.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CertificatesSection;
