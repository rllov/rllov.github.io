import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import About from "../components/About";
import HeroCard from "../components/HeroCard";
// import SkillTree from "../components/SkillTree";

import AllProjectsHomePage from "../projects/allProjectsHomePage";

import "../global.css";

function LandingScreen({ onFinish, theme }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 750);
    const cleanup = setTimeout(onFinish, 1250); // 750ms + 350ms fade
    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, [onFinish]);

  return (
    <div
      data-theme={theme}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-base-100 transition-opacity duration-500 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="text-5xl font-bold tracking-wide">RL</span>
    </div>
  );
}

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [showLanding, setShowLanding] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div data-theme={theme}>
      {showLanding && (
        <LandingScreen onFinish={() => setShowLanding(false)} theme={theme} />
      )}
      {!showLanding && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main className="min-h-screen w-full flex flex-col md:flex-row items-stretch justify-evenly bg-base-100">
            <div className="w-full md:w-1/3 md:sticky md:top-0 md:h-screen flex items-center justify-center p-4 bg-base-200 ">
              <HeroCard />
            </div>
            <div className="w-full md:w-2/3 max-w-4xl space-y-8 p-4 overflow-y-auto">
              <div className="divider divider-primary w-full"></div>
              <About />
              <div class="divider divider-neutral"></div>
              <Education />
              <div class="divider divider-secondary"></div>
              <Skills />
              <div class="divider divider-accent"></div>
              <Contact />
              <div class="divider divider-primary"></div>
              <AllProjectsHomePage />

              {/* <SkillTree /> */}
              <div class="divider divider-accent"></div>
            </div>
          </main>
          <footer className="w-full text-center p-4 bg-base-300">
            <p className="text-sm">
              © {new Date().getFullYear()} Ryan Lov. All rights reserved.
            </p>
            <p className="text-xs">Built using React + TailwindCSS + DaisyUI</p>
            <p>Updated {new Date().toLocaleDateString()}</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default Home;
