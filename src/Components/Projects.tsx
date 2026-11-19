"use client"
import Project from "@/Components/ProjectProp";
import { motion } from "motion/react";
import CHeader from "@/Components/HeaderProp";

const projects = [
  {
    path: "/LunarTracker.png",
    title: "Lunar Tracker",
    githubUrl: "https://github.com/Ajayi1428Muhammad/LunarTracker",
    demoUrl: "https://lunartracker-ng.vercel.app/",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "REST API", "React"],
    desc: "An open-source Islamic lunar calendar platform and REST API synchronized directly with official Sultan moon-sighting announcements. Built to eliminate guesswork around month rollovers with an interactive 30-day Hijri grid, shareable date cards, and verified JSON endpoints for developers.",
  },
  {
    path: "/Luhub.png",
    title: "Lagos Uni Hub",
    githubUrl: "https://github.com/Ajayi1428Muhammad/lagos-uni-hub",
    demoUrl: "https://lagos-uni-hub.vercel.app/",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Prisma", "NextAuth", "Neon"],
    desc: "Lagos University Hub. A campus marketplace and resource-sharing platform built to connect students across tertiary institutions in Lagos for seamless peer-to-peer buying, selling, and trading. Integrates a responsive, filterable storefront and video feed with a full-stack backend handling user authentication, verified student profiles, and real-time listing management.",
  },
  {
    path: "/Wither.png",
    title: "Wither",
    githubUrl: "https://github.com/Ajayi1428Muhammad/Wither",
    demoUrl: "https://witherapp.tech/",
    tags: ["JavaScript", "Tailwind CSS", "REST API", "LunarTracker API", "TanStack Query", "Gemini AI", "React", "OpenStreetMap API"],
    desc: "An agricultural weather and lunar-phase tracking web app engineered to help farmers optimize irrigation schedules and minimize water waste. Featuring an AI chatbot that relates weather with actionable steps, integrating real-time meteorological forecasts with the LunarTracker API.",
  },
  {
    path: "/ScamShield.png",
    title: "Scam Shield AI",
    githubUrl: "https://github.com/AcexDev/scam_shield_frontend",
    demoUrl: "https://scam-shield-frontend-lilac.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Gemini API", "Django"],
    desc: "Together with my team, we worked on an AI-powered cybersecurity web application built to protect everyday users from digital financial fraud, phishing links, and deceptive messages. Lets users analyze suspicious text, screenshots, or URLs in real time to receive instant threat risk scores and actionable safety guidance. Where i contributed directly to the frontend aspect and authentication layer for users",
  },
  {
    path: "/Mootrestaurant.png",
    title: "Moot Restaurant",
    githubUrl: "https://github.com/Ajayi1428Muhammad/MootRestaurant",
    demoUrl: "https://mootrestaurant.vercel.app/",
    tags: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
    desc: "A responsive restaurant web application and digital storefront designed around a streamlined, conversion-focused dining experience. Features an interactive popular menu showcase, a three-step ordering workflow, customer reviews, and structured dynamic menu data.",
  },
]; 

const Projects = () => {
  return (
    <div className="p-4" id="projects">
      <CHeader Head="My Projects" SubHead="Here are some of my best works " />
      <div>
        <h1 className="font-sans">
          I don't just design projects, I build them to create impact and solve
          problems for <span className="font-bold text-xl"> users</span> and{" "}
          <span className="font-bold text-xl"> businesses</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
