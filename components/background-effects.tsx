"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-[5] overflow-hidden pointer-events-none">
      {/* Animated gradient orbs - highly visible */}
      <motion.div
        className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-400/60 via-pink-400/50 to-purple-300/40 blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-blue-400/55 via-purple-400/45 to-pink-300/35 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1, 1.35, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] left-[50%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-yellow-400/50 via-orange-300/40 to-pink-300/30 blur-3xl"
        animate={{
          x: [0, 90, 0],
          y: [0, -70, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles - highly visible */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-r from-orange-500/50 to-pink-500/50 rounded-full shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.5, 0.9, 0.5],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Visible grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ff6b35 1px, transparent 1px),
            linear-gradient(to bottom, #ff6b35 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
