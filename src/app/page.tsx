"use client";

import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import version_control from "../svg/version_control.svg";
import WhatIDo from "@/components/WhatIDo";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import MoreOnGitHub from "@/components/MoreOnGitHub";
import source_code from "../svg/source_code.svg";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

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
      case "Resume": {
        sectionRef.current!.scrollTo({
          top: document.getElementById("resume")!.offsetTop - 140,
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
      id="scrollableDiv"
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
        className="bg-version-control mt-28 flex w-full justify-center bg-center bg-no-repeat sm:mt-44 md:bg-top xl:h-[40%] 2xl:mt-28 2xl:h-[95%] 2xl:bg-cover 2xl:bg-center"
        style={{
          backgroundImage: `url(${version_control.src})`,
        }}
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
      {/* What I Do */}
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
        id="what-i-do"
        className="mt-20 flex w-full flex-row justify-center"
      >
        <WhatIDo darkMode={darkMode} />
      </motion.section>
      {/* Resume */}
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
        id="resume"
        className="mt-20 flex w-full flex-row justify-center"
      >
        <Resume darkMode={darkMode} />
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
        className="mt-20 flex w-full flex-row justify-center"
      >
        <Projects darkMode={darkMode} />
      </motion.section>
      {/* More on GitHub */}
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        id="more-on-github"
        className="mt-40 flex w-full flex-row justify-center"
        style={{
          backgroundImage: `url(${source_code.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
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
