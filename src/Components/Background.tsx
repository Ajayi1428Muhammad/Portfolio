"use client";

import { motion, useReducedMotion } from "framer-motion";

const STARS = Array.from({ length: 60 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 61 + 13) % 100,
  size: (i % 3) + 1,
  delay: (i % 7) * 0.6,
  duration: 2 + (i % 4),
}));

// Lucide "rocket" paths (24x24 viewBox)
const ROCKET_PATHS = [
  "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
  "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
  "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
  "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
];

function DrawingRocket() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-95 md:size-120 text-slate-50/40"
    >
      {ROCKET_PATHS.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={reduce ? { pathLength: 1 } : { pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 7,
            times: [0, 0.4, 0.7, 1],
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.35,
          }}
        />
      ))}
    </svg>
  );
}

export default function SpaceBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden bg-black"
      aria-hidden="true"
    >
      {STARS.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
          }}
          animate={reduce ? { opacity: 0.4 } : { opacity: [0.15, 0.8, 0.15] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <DrawingRocket />
      </div>
    </div>
  );
}
