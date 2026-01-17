"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { educationData } from "@/lib/data";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-6xl mx-auto px-4 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      {/* Main About Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-white to-orange-50/30 rounded-2xl shadow-xl p-8 mb-12 border border-orange-100"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-200/40 to-transparent rounded-tr-2xl"></div>
        
        <div className="md:flex md:gap-8 items-start relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0 flex justify-center md:block"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur opacity-50"></div>
              <Image 
                src="/kelly.jpeg" 
                alt="Kelly" 
                width={160} 
                height={160} 
                className="relative rounded-full object-cover shadow-lg ring-4 ring-white" 
              />
            </div>
          </motion.div>
          
          <div className="flex-1">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4"
            >
              Hi, I'm Kelly! 👋
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-700 leading-relaxed text-lg mb-6"
            >
              A passionate <span className="font-semibold text-orange-600">Computer Science with AI</span> student at the University of Nottingham. 
              My interests span <span className="font-semibold text-pink-600">web development, robotics, AI, and machine learning</span>. 
              I'm driven by creating solutions that make a positive impact and am constantly seeking opportunities to learn, grow, and collaborate on innovative projects.
            </motion.p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
              >
                <FaMapMarkerAlt className="text-orange-500 text-xl" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Location</div>
                  <div className="text-sm font-semibold text-gray-800">Malaysia</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
              >
                <FaEnvelope className="text-pink-500 text-xl" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Email</div>
                  <div className="text-sm font-semibold text-gray-800">kellynxy8838@gmail.com</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="tel:+60165228838"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:border-purple-200 border border-transparent transition-all group cursor-pointer"
                >
                  <FaPhone className="text-purple-500 text-xl group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Phone</div>
                    <div className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">+60 16 522 8838</div>
                  </div>
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
              >
                <FaBriefcase className="text-blue-500 text-xl" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Open To</div>
                  <div className="text-sm font-semibold text-gray-800">Full-time</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <SectionHeading>Education</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {educationData.map((edu, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
            className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-orange-200 transition-all group"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-400 via-pink-400 to-purple-400 rounded-l-xl"></div>
            
            <div className="text-sm font-semibold text-orange-600 mb-2">{edu.period}</div>
            <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{edu.institution}</h4>
            <div className="text-gray-700 font-medium mb-3">{edu.degree}</div>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{edu.notes}</p>
            
            {/* Corner decoration */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-100/50 to-transparent rounded-br-xl"></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
