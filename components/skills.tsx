"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { categorizedSkills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mx-auto mb-28 max-w-7xl scroll-mt-28 px-4">
      <SectionHeading>Skills & Expertise</SectionHeading>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 space-y-8"
      >
        {Object.entries(categorizedSkills).map(([key, category]) => (
          <motion.div key={key} variants={itemVariants} className="panel p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#0f3d5c]" />
              <h3 className="display-heading text-2xl text-slate-900">{category.title}</h3>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                {String(category.skills.length).padStart(2, "0")} Items
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.02 }}
                  whileHover={{ y: -3 }}
                  className="rounded-full border border-[#d7dde3] bg-[#f1f5f8] px-3 py-2 text-center text-sm font-medium text-slate-700"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
