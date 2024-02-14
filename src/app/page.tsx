"use client";

import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import MoreOnGitHub from "@/components/MoreOnGitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const handleNavbarClick = (val: string) => {
    switch (val) {
      case "Home": {
        sectionRef.current!.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      }
      case "About": {
        sectionRef.current!.scrollTo({
          top: document.getElementById("about")!.offsetTop - 140,
          behavior: "smooth",
        });
        break;
      }
      case "Skills": {
        sectionRef.current!.scrollTo({
          top: document.getElementById("skills")!.offsetTop - 140,
          behavior: "smooth",
        });
        break;
      }
      case "Experience": {
        sectionRef.current!.scrollTo({
          top: document.getElementById("experience")!.offsetTop - 140,
          behavior: "smooth",
        });
        break;
      }
      case "Education": {
        sectionRef.current!.scrollTo({
          top: document.getElementById("education")!.offsetTop - 140,
          behavior: "smooth",
        });
        break;
      }
      case "Projects": {
        sectionRef.current!.scrollTo({
          top: document.getElementById("projects")!.offsetTop - 140,
          behavior: "smooth",
        });
        break;
      }
      case "Contact": {
        sectionRef.current!.scrollTo({
          top: document.getElementById("contact")!.offsetTop - 140,
          behavior: "smooth",
        });
        break;
      }
      default:
        break;
    }
  };

  return (
    <div
      className={`h-svh w-svw overflow-y-scroll transition-colors ${darkMode ? "bg-slate-900" : "bg-slate-100"}`}
      ref={sectionRef}
    >
      {/* Navbar */}
      <section
        id="navbar"
        className="fixed left-0 top-0 z-10 h-16 w-full md:h-20 lg:h-24 xl:h-28 2xl:h-32"
      >
        <Navbar
          handleNavbarClick={handleNavbarClick}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </section>
      {/* Home */}
      <motion.section
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        id="homepage"
        className="lg:bg-version-control mt-28 flex w-full justify-center bg-center bg-no-repeat sm:mt-44 md:bg-top xl:h-[40%] 2xl:mt-36 2xl:h-[95%] 2xl:bg-cover 2xl:bg-center"
      >
        <HomePage darkMode={darkMode} />
      </motion.section>
      {/* About */}
      <motion.section
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        id="about"
        className="mt-14 flex w-full flex-row justify-center"
      >
        <About darkMode={darkMode} />
      </motion.section>
      {/* Skills */}
      <motion.section
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        id="skills"
        className="mt-4 flex w-full flex-row justify-center"
      >
        <Skills darkMode={darkMode} />
      </motion.section>
      {/* Resume */}
      {/* <motion.section
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        id="resume"
        className="mt-4 flex w-full flex-row justify-center"
      >
        <Resume darkMode={darkMode} />
      </motion.section> */}
      {/* Experience */}
      <motion.section
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        id="experience"
        className="mt-4 flex w-full flex-row justify-center"
      >
        <Experience darkMode={darkMode} />
      </motion.section>
      {/* Education */}
      <motion.section
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        id="education"
        className="mt-4 flex w-full flex-row justify-center"
      >
        <Education darkMode={darkMode} />
      </motion.section>
      {/* Projects */}
      <motion.section
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        id="projects"
        className="mt-4 flex w-full flex-row justify-center"
      >
        <Projects darkMode={darkMode} />
      </motion.section>
      {/* More on GitHub */}
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        id="more-on-github"
        className="bg-source-code mt-40 flex w-full flex-row justify-center bg-center bg-no-repeat"
      >
        <MoreOnGitHub darkMode={darkMode} />
      </motion.section>
      {/* contact */}
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        id="contact"
        className="mt-20 flex w-full flex-row justify-center"
      >
        <Contact darkMode={darkMode} />
      </motion.section>
      {/* All Rights Reserved */}
      <section
        id="footer"
        className="mt-10 flex w-full flex-row justify-center"
      >
        <Footer darkMode={darkMode} />
      </section>
    </div>
  );
}
