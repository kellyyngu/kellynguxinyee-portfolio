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
        <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-[#d5d9d2] sm:left-8" />

        <div className="space-y-6 sm:space-y-8">
          {experiencesData.map((item, idx) => (
            <div key={idx} className="relative pl-16 sm:pl-20">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f3d5c] text-xl text-white shadow ring-2 ring-white sm:h-16 sm:w-16 sm:text-2xl sm:ring-4">
                {item.icon}
              </div>

              <motion.div
                whileHover={{ y: -4, boxShadow: "0 16px 30px -14px rgba(15, 24, 40, 0.28)" }}
                transition={{ duration: 0.2 }}
                className="panel p-4 sm:p-6"
              >
                <div className="flex flex-col gap-1 sm:gap-2 mb-3">
                  <div>
                    <h3 className="display-heading text-base leading-tight text-slate-900 sm:text-xl">{item.title}</h3>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">{item.location}</div>
                  </div>
                </div>

                <p className="muted-text text-sm leading-relaxed sm:text-base">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
