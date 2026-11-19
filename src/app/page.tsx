import React from "react";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Resume from "@/Components/Resume";
import Expertise from "@/Components/Expertise";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import Connect from "@/Components/Connect";

const Page = () => {
  return (
    <div className="flex flex-col text-slate-50 p-2 space-y-4 mb-8">
      <Hero />
      <div className="mt-4 p-4">
        <About />
      </div>
      <div>
        <Resume />
      </div>
      <div>
        <Expertise />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Connect />
      </div>
    </div>
  );
};

export default Page;
