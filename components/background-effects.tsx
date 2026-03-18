"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-[5] overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[-14%] right-[4%] h-[26rem] w-[26rem] rounded-full bg-[#dce8f0]/70 blur-3xl"
        animate={{
          x: [0, 38, 0],
          y: [0, -24, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-18%] left-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#f0eadf]/85 blur-3xl"
        animate={{
          x: [0, -42, 0],
          y: [0, 26, 0],
          scale: [1, 1.09, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-slate-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -36, 0],
            x: [0, Math.random() * 14 - 7, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #c8cfc8 1px, transparent 1px),
            linear-gradient(to bottom, #c8cfc8 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
