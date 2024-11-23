import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import Skills from "./skills/skills";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[60px_1fr]">
        <SideBar />
        <main id="main">
          <Heading />
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
