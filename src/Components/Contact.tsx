"use client"
import CHeader from "@/Components/HeaderProp";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "motion/react"
const opportunities = [
  "Frontend Developer Roles",
  "Freelance Client Projects",
  "Internship Opportunities",
];

const Contact = () => {
  const resumeUrl = "/resume.pdf";
  return (
    <div className="p-4">
      <CHeader
        Head="Get in Touch"
        SubHead="Let's Build Something
        Amazing Together"
      />
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-white/20 border-t-white/25 bg-linear-to-b from-white/6 via-white/2 to-transparent backdrop-blur-lg p-4 sm:p-8 space-y-3"
      >
        <h1 className="font-sans">
          Currently open to frontend developer roles, freelance project with
          clients, and internship opportunities. Let's connect! and build something amazing today
        </h1>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-linear-to-b from-white/15 via-white/6 to-transparent px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors duration-150 hover:border-white/30 hover:from-white/20 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <span>Explore Projects</span>
            <LuArrowUpRight
              className="h-4 w-4 text-slate-300"
              aria-hidden="true"
            />
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-linear-to-b from-white/15 via-white/6 to-transparent px-4 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-md transition-colors duration-150 hover:border-white/30 hover:from-white/20 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <span>Curriculum Vitae</span>
            <LuArrowUpRight
              className="h-4 w-4 text-slate-300"
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-white/10 bg-white/3 p-5">
            <p className="font-mono text-xs font-medium text-slate-400">
              Open To
            </p>
            <ul className="mt-3 divide-y divide-white/10">
              {opportunities.map((opportunity) => (
                <li
                  key={opportunity}
                  className="py-3 first:pt-1 last:pb-1 text-sm font-medium text-slate-200"
                >
                  {opportunity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
