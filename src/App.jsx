import React, { useState } from "react";
import "./assets/css/index.css";
import CodingProfilesSection from "./pages/Profiles/CodingProfiles";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Contact from "./pages/Contact/Contact";
import ProjectsNew from "./pages/Projects/ProjectsNew";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Achievements/Education";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false);

  return (
    <>
      <Header />
      {isOnePage ? (
        <>
          <Hero />
          <Skills />
          <CodingProfilesSection />
          <Education />
          <Contact />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<CodingProfilesSection />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
         
<Route path="/projects" element={<ProjectsNew />} />
        </Routes>
      )}
    </>
  );
}
