"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  IoCheckmark,
  IoCopyOutline,
  IoMailOutline,
  IoArrowUpOutline,
} from "react-icons/io5";
import { motion } from "motion/react"
import CHeader from "@/Components/HeaderProp";

const socials = [
  {
    name: "GitHub",
    handle: "@Ajayi1428Muhammad",
    href: "https://github.com/Ajayi1428Muhammad",
    icon: FaGithub,
    accent: "group-hover:text-white",
  },
  {
    name: "X (Twitter)",
    handle: "@Muhd_dev",
    href: "https://x.com/Muhd_dev",
    icon: FaXTwitter,
    accent: "group-hover:text-white",
  },
  {
    name: "LinkedIn",
    handle: "in/ajayi-muhammad-adeyemi",
    href: "https://linkedin.com/in/ajayi-muhammad-adeyemi",
    icon: FaLinkedinIn,
    accent: "group-hover:text-[#0A66C2]",
  },
  {
    name: "WhatsApp",
    handle: "Direct chat",
    href: "https://wa.me/2348128214760",
    icon: FaWhatsapp,
    accent: "group-hover:text-[#25D366]",
  },
];

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const email = "tusqaa1428@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mt-24 p-4">
      <CHeader
        Head="Connect"
        SubHead="Have an idea or role in mind? Let's talk."
      />
      <p className="text-sm mb-3 text-neutral-400 leading-relaxed">
        Reach out directly via email or connect on any of my socials below.
      </p>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="
          relative overflow-hidden p-6 sm:p-8 rounded-3xl
          bg-linear-to-b from-white/6 via-white/2 to-transparent
          border border-white/10 border-t-white/25
          shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)]
          backdrop-blur-md
        "
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/8">
          <div className="space-y-3 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/4 border border-white/10">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-neutral-300">
                Available for freelance & roles
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="
                inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white
                bg-linear-to-b from-white/15 via-white/6 to-transparent
                border border-white/15 border-t-white/35
                shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.3)]
                hover:from-white/20 transition-all duration-200 active:scale-95
              "
            >
              <IoMailOutline className="size-4" />
              <span>Say Hello</span>
            </a>

            <button
              onClick={handleCopy}
              aria-label="Copy email address"
              className="
                inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-linear-to-b from-white/15 via-white/6 to-transparent
                text-neutral-300 hover:text-white
                border border-white/15 border-t-white/35
                shadow-[-3px_-3px_8px_rgba(255,255,255,0.05),3px_3px_10px_rgba(0,0,0,0.9)]
                active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.04),inset_2px_2px_6px_rgba(0,0,0,0.9)]
                transition-all duration-200 active:scale-95 cursor-pointer 
              "
            >
              <span>{copied ? "Copied!" : email}</span>
              {copied ? (
                <IoCheckmark className="size-4 text-emerald-400" />
              ) : (
                <IoCopyOutline className="size-4 text-neutral-500" />
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-8">
          {socials.map(({ name, handle, href, icon: Icon, accent }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center justify-between p-4 rounded-2xl
                bg-linear-to-b from-white/15 via-white/6 to-transparent
                text-neutral-300 border border-white/15 border-t-white/35
                shadow-[-4px_-4px_10px_rgba(255,255,255,0.05),4px_4px_12px_rgba(0,0,0,0.95)]
                active:shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.04),inset_3px_3px_8px_rgba(0,0,0,0.95)]
                transition-all duration-200 active:scale-[0.98]
              "
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/4 border border-white/6 text-neutral-400 transition-colors">
                  <Icon className={`size-5 transition-colors ${accent}`} />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{name}</p>
                  <p className="text-xs text-neutral-500">{handle}</p>
                </div>
              </div>

              <IoArrowUpOutline className="size-4 text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all rotate-45" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
