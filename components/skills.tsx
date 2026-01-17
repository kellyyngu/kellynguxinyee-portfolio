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

const gradients = [
  "from-orange-400 to-pink-500",
  "from-blue-400 to-purple-500",
  "from-green-400 to-teal-500",
  "from-pink-400 to-rose-500",
  "from-indigo-400 to-blue-500",
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  
  return (
    <section id="skills" ref={ref} className="mb-28 scroll-mt-28 max-w-7xl mx-auto px-4">
      <SectionHeading>Skills & Expertise</SectionHeading>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 space-y-8"
      >
        {Object.entries(categorizedSkills).map(([key, category], categoryIndex) => (
          <motion.div
            key={key}
            variants={itemVariants}
            className="relative"
          >
            {/* Category Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:border-orange-200 transition-all group">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-3xl p-3 bg-gradient-to-br ${gradients[categoryIndex % gradients.length]} rounded-xl text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.02 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="relative group/skill"
                  >
                    <div className={`p-3 bg-gradient-to-br ${gradients[categoryIndex % gradients.length]} bg-opacity-10 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all`}>
                      <span className="text-sm font-medium text-gray-800 text-center block">
                        {skill}
                      </span>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity">
                        <div className={`absolute inset-0 bg-gradient-to-r ${gradients[categoryIndex % gradients.length]} opacity-10 rounded-lg blur`}></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${gradients[categoryIndex % gradients.length]} opacity-5 rounded-tr-2xl rounded-bl-2xl -z-10`}></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Summary Stats
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl border border-orange-200 text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            10+
          </div>
          <div className="mt-2 text-sm font-medium text-gray-600">Programming Languages</div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            15+
          </div>
          <div className="mt-2 text-sm font-medium text-gray-600">Frameworks & Libraries</div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-200 text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            3
          </div>
          <div className="mt-2 text-sm font-medium text-gray-600">Languages Spoken</div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-200 text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            9+
          </div>
          <div className="mt-2 text-sm font-medium text-gray-600">Development Tools</div>
        </div>
      </motion.div> */}
    </section>
  );
}
