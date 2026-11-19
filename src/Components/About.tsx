"use client"
import CHeader from "@/Components/HeaderProp";
import { motion } from "motion/react";
import ReadMore from '@/Components/ReadMore';

const About = () => {
  const first = "My name is Muhammad Ajayi. What I do best is to deliver application that reduce redundancy, loads fast, solve a problem clearly. I'm open to remote roles and internship where i can put what i do best a professional settings working on app used by various people."
  const second = "I'm also open to working on client project, if your business needs a digital identity and a website, i think i'm the right person as i go beyond delivaering services, i create responsiveness to your business to increase credibility and interest"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ml-2 md:ml-8">
      <motion.div className="space-y-3">
        <CHeader Head="About" SubHead="What I do best" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className=""
        >
          <ReadMore text={first} />
        </motion.div>
        <motion.div
          className="mt-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <span className="">
            <ReadMore text={second} />
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About
