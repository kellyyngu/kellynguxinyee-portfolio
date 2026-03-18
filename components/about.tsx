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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="panel mb-12 p-8"
      >
        <div className="md:flex md:gap-8 items-start relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0 flex justify-center md:block"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-[#d6e5ef] blur" />
              <Image 
                src="/kelly.jpeg" 
                alt="Kelly" 
                width={160} 
                height={160} 
                className="relative rounded-full object-cover ring-4 ring-white shadow-lg" 
              />
            </div>
          </motion.div>
          
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="display-heading mb-4 text-3xl text-slate-900"
            >
              Hi, I am Kelly
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="muted-text mb-6 text-lg leading-relaxed"
            >
              I am a Computer Science with AI student at the University of Nottingham with strong interests in
              product engineering, machine learning, and human-centered design. I value well-structured systems,
              clean implementation, and collaboration that turns ideas into practical solutions.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 rounded-xl border border-[#e5e8e2] bg-white p-3"
              >
                <FaMapMarkerAlt className="text-xl text-[#0f3d5c]" />
                <div>
                  <div className="text-xs font-medium text-slate-500">Location</div>
                  <div className="text-sm font-semibold text-slate-800">Malaysia</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 rounded-xl border border-[#e5e8e2] bg-white p-3"
              >
                <FaEnvelope className="text-xl text-[#0f3d5c]" />
                <div>
                  <div className="text-xs font-medium text-slate-500">Email</div>
                  <div className="text-sm font-semibold text-slate-800">kellynxy8838@gmail.com</div>
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
                  className="group flex cursor-pointer items-center gap-3 rounded-xl border border-[#e5e8e2] bg-white p-3 transition hover:border-[#0f3d5c]/30"
                >
                  <FaPhone className="text-xl text-[#0f3d5c] transition-transform group-hover:scale-110" />
                  <div>
                    <div className="text-xs font-medium text-slate-500">Phone</div>
                    <div className="text-sm font-semibold text-slate-800">+60 16 522 8838</div>
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 rounded-xl border border-[#e5e8e2] bg-white p-3"
              >
                <FaBriefcase className="text-xl text-[#0f3d5c]" />
                <div>
                  <div className="text-xs font-medium text-slate-500">Open To</div>
                  <div className="text-sm font-semibold text-slate-800">Full-time Roles</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <SectionHeading>Education</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 16px 30px -14px rgba(15, 24, 40, 0.28)" }}
            className="panel relative p-6"
          >
            <div className="mb-2 text-sm font-semibold text-[#0f3d5c]">{edu.period}</div>
            <h4 className="mb-1 text-xl font-bold text-slate-900">{edu.institution}</h4>
            <div className="mb-3 font-medium text-slate-700">{edu.degree}</div>
            <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">{edu.notes}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
