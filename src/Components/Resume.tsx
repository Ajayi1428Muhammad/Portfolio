"use client";
import CHeader from "@/Components/HeaderProp";
import { motion } from "motion/react";
import { LuDownload, LuExternalLink, LuFileText } from "react-icons/lu";

const Resume = () => {
  const resumeUrl = "/resume.pdf";
  const fileName = "Muhammad_Ajayi_Resume";

  return (
    <div className="p-4 w-full">
      <div>
        <CHeader Head="Resume" SubHead="My curriculum vitae" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 border-t-white/25 bg-linear-to-b from-white/6 via-white/2 to-transparent p-6 backdrop-blur-xl md:flex-row sm:items-center sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5">
            <LuFileText className="h-6 w-6 text-slate-200" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-mono text-base font-semibold text-white">
              Muhammad_Ajayi_Resume
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              View in browser or download a PDF copy of my curriculum vitae.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-linear-to-b from-white/15 via-white/6 to-transparent px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors duration-150 hover:border-white/30 hover:from-white/20 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <span>View Resume</span>
            <LuExternalLink
              className="h-4 w-4 text-slate-300"
              aria-hidden="true"
            />
          </a>
          <a
            href={resumeUrl}
            download={fileName}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 border-t-white/35 bg-linear-to-b from-white/90 via-white/75 to-white/55 px-4 py-2.5 text-sm font-medium text-black backdrop-blur-md transition-colors duration-150 hover:from-white/95 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <LuDownload className="h-4 w-4" aria-hidden="true" />
            <span>Download PDF</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
