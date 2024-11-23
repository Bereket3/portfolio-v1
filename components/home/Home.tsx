import React from "react";
import { Hero } from "./hero/Hero";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import Skills from "./skills/skills";
import { FloatingDockDemo } from "../nav/components/floting-dock-nav";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1">
        {/* <SideBar /> */}
        <main id="main">
          {/* <Heading /> */}
          <FloatingDockDemo />
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};
