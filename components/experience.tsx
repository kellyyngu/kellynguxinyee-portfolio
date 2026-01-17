"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 max-w-5xl mx-auto px-4">
      <SectionHeading>Experience</SectionHeading>

      <div className="relative mt-12">
        {/* Vertical timeline line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-pink-300 to-purple-300"></div>

        <div className="space-y-6 sm:space-y-8">
          {experiencesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-16 sm:pl-20"
            >
              {/* Icon circle on timeline */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 + 0.2 }}
                className="absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg ring-2 sm:ring-4 ring-white"
              >
                {item.icon}
              </motion.div>

              {/* Content card */}
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:border-orange-200 transition-all"
              >
                {/* Header with title and location */}
                <div className="flex flex-col gap-1 sm:gap-2 mb-3">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                      {item.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-gray-600 mt-1">{item.location}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100/50 to-pink-100/50 rounded-bl-full rounded-tr-xl -z-10"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
