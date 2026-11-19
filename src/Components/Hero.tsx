"use client"
import CHeader from "@/Components/HeaderProp";
import Image from "next/image";
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <motion.div className="mt-8 flex w-full flex-col gap-8 px-6 md:flex-row-reverse md:items-center md:justify-between md:px-12 lg:px-20">
      <div className="flex justify-center">
        <div className="relative shrink-0 size-40 sm:size-48 md:size-60 rounded-full overflow-hidden">
          <Image
            src="/Headshot.jpg"
            alt="Muhammad Ajayi"
            fill
            sizes="(min-width: 768px) 240px, 192px"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex w-full space-y-2 flex-col items-start text-left md:mr-auto md:max-w-xl mt-8">
        <CHeader
          Head="Muhammad Ajayi"
          SubHead="Frontend Developer (React & Next.js)"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="font-sans"
        >
          I build fast, production-ready web applications using Next.js, React,
          TypeScript, and Tailwind CSS — focusing on clean architecture,
          responsive UI, using real-world tools and libraries.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="font-sans"
        >
          <span className="font-bold text-xl">My focus</span>: To build fast
          applications that reduce redundancy for businesses and help them
          stand out online, I thrive well working in a team to provide a
          solution to a distinct problem that needs a solution to thrive.
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Hero;
