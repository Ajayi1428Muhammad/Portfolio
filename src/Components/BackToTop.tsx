"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { IoArrowUp } from "react-icons/io5";

export default function FloatingBackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Return to top"
          className="
            fixed bottom-6 right-6 z-50
            inline-flex items-center justify-center p-3.5 rounded-2xl
            
            bg-linear-to-b from-white/15 via-white/6 to-transparent text-neutral-300 hover:text-cyan-400
            border border-white/4
            
            shadow-[-4px_-4px_10px_rgba(255,255,255,0.06),4px_4px_12px_rgba(0,0,0,0.95)]
            
            active:shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.05),inset_3px_3px_8px_rgba(0,0,0,0.95)]
            active:scale-95
            
            transition-all duration-200 cursor-pointer
          "
        >
          <IoArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
