"use client"
import React from "react";
import Hero from "@/components/home/hero/Hero";
import { About } from "@/components/home/about/About";
import { Projects } from "@/components/home/projects/Projects";
import { Experience } from "@/components/home/experience/Experience";
import { Contact } from "@/components/home/contact/Contact";
import Skills from "@/components/home/skills/skills";
import { FloatingNav } from "@/components/UI/flotting-navbar";
import { navItems } from "@/data";
import "@/styles/globals.css"

const Home = () => {
  return (
    <main id="main" className="relative flex bg-gray-950 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          className="bg-gray-900"
          navItems={navItems}
        />
        <Hero />
        {/*  <Skills /> */}
        {/* <About /> */}
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </div>
    </main>
  );
};

export default Home;
