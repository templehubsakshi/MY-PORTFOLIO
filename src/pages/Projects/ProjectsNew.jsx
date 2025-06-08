import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "@/assets/images/poject1.jpeg";
import trekup from "@/assets/images/final.PNG";
import chess from "@/assets/images/chess.png";
import todo from "@/assets/images/todo.png";
import weather from "@/assets/images/weather.png";
import post from "@/assets/images/post.png";
import currency from "@/assets/images/currencyconverter.PNG";
import portfolio from "@/assets/images/final.PNG";
import tictac from "@/assets/images/tictac.png";  // Added tic-tac-toe image import
import port from "@/assets/images/port.PNG";

const projects = [
  {
    title: "GreenRank - Eco Initiative Platform",
    description:
      "Track and reward eco-friendly actions. Promotes environmental awareness.",
    src: project1,
    color: "#4caf50",
    githubLink: "https://github.com/yourusername/greenrank",
    liveLink: "https://yourliveurl.com/greenrank",
  },
  {
    title: "Trekup - Travel Explorer",
    description:
      "Discover hidden destinations, book trips, and explore travel experiences.",
    src: trekup,
    color: "#ff7043",
    githubLink: "https://github.com/yourusername/trekup",
    liveLink: "https://yourliveurl.com/trekup",
  },
  {
    title: "Chess Game",
    description: "A basic chess game using HTML, CSS, and JavaScript.",
    src: chess,
    color: "#607d8b",
    githubLink: "https://github.com/yourusername/chess-game",
    liveLink: "https://yourliveurl.com/chess",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio showcasing skills, projects, and contact using React + Tailwind.",
    src: port,
    color: "#3f51b5",
    githubLink: "https://github.com/yourusername/personal-portfolio",
    liveLink: "https://yourliveurl.com/personal-portfolio",
  },
  
  {
    title: " Todo App",
    description:
      "Combined sleek portfolio with a to-do management app for daily productivity.",
    src: todo,
    color: "#8f89ff",
    githubLink: "https://github.com/yourusername/portfolio-todo",
    liveLink: "https://yourliveurl.com/portfolio-todo",
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather updates for any city using API integration.",
    src: weather,
    color: "#00bcd4",
    githubLink: "https://github.com/yourusername/weather-app",
    liveLink: "https://yourliveurl.com/weather",
  },
  {
    title: "Post Management",
    description:
      "Create, edit, and delete blog posts with a clean CRUD interface.",
    src: post,
    color: "#9c27b0",
    githubLink: "https://github.com/yourusername/post-management",
    liveLink: "https://yourliveurl.com/post",
  },
  {
    title: "Currency Converter",
    description:
      "Convert between currencies using real-time exchange rates.",
    src: currency,
    color: "#009688",
    githubLink: "https://github.com/yourusername/currency-converter",
    liveLink: "https://yourliveurl.com/currency-converter",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
    src: tictac,
    color: "#ff5722",
    githubLink: "https://github.com/yourusername/tic-tac-toe",
    liveLink: "https://yourliveurl.com/tic-tac-toe",
  },
  
];

export default function ProjectsNew() {
  return (
    <section className="w-full min-h-screen bg-[#020617] py-16 px-6">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffea] via-[#ff00f7] to-[#00f7ff] drop-shadow-[0_0_12px_rgb(0,255,234)]">
        My Projects
      </h2>

      <div className="max-w-[1400px] mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, src, color, githubLink, liveLink }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.07, rotateX: 5, rotateY: 5 }}
            className="relative rounded-3xl border border-gray-800 bg-[rgba(20,20,20,0.45)] backdrop-blur-md shadow-lg cursor-pointer overflow-hidden"
            style={{
              borderColor: color,
              boxShadow: `0 0 15px 4px ${color}aa`,
              WebkitBoxShadow: `0 0 15px 4px ${color}aa`,
            }}
          >
            <span
              className="absolute -inset-1 rounded-3xl opacity-60 blur-xl animate-pulse"
              style={{ boxShadow: `0 0 30px 6px ${color}` }}
            ></span>

            <motion.img
              src={src}
              alt={title}
              loading="lazy"
              className="w-full h-60 object-cover brightness-90 transition duration-500"
              whileHover={{ scale: 1.15, rotate: 3, filter: "brightness(1.2)" }}
            />

            <div className="p-7">
              <h3 className="text-3xl font-extrabold mb-4" style={{ color }}>
                {title}
              </h3>
              <p className="mb-6 text-gray-300">{description}</p>

              <div className="flex space-x-6 text-2xl text-white">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} GitHub repository`}
                    className="hover:text-[#00fff7]"
                  >
                    <FaGithub />
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} Live demo`}
                    className="hover:text-[#00fff7]"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
