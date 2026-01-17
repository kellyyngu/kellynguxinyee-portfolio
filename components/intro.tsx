"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Kelly from "@/public/kelly.jpeg";

export default function Intro() {
  return (
    <section id="home" className="mb-20 w-full min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-6xl px-4 w-full">
        <div className="relative">
          {/* Gradient background decoration */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 rounded-3xl blur-2xl opacity-30"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }} 
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <Image
                  src={Kelly}
                  alt="Kelly"
                  width={200}
                  height={200}
                  quality={95}
                  className="relative rounded-full object-cover shadow-2xl ring-4 ring-white"
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Kelly Ngu Xin Yee
                  </h1>
                  <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-600 font-medium">
                    Computer Science with AI • University of Nottingham
                  </p>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl"
                >
                  I'm a goal-oriented <span className="font-semibold text-orange-600">final year Computer Science with Artificial Intelligence</span> student from Malaysia. My interests lie in <span className="font-semibold text-pink-600">web development, robotics, machine learning, AI, and exploring other emerging fields that drive innovation</span>. I'm particularly motivated to use my skills to contribute to projects with positive social impact. Committed to continuous growth, I'm always eager to learn, collaborate, and take on challenges that push me to improve. I welcome opportunities for networking and mentorship to support my personal and professional development.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-start justify-center"
                >
                  <Link 
                    href="/projects" 
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    View Projects
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-xl font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600 transform hover:scale-105 transition-all duration-200 shadow-md"
                  >
                    Get in Touch
                  </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex gap-4 justify-center md:justify-start"
                >
                  <a 
                    href="https://www.linkedin.com/in/kelly-ngu-xin-yee-342a13253/" 
                    target="_blank" 
                    className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg hover:scale-110 transition-transform shadow-md"
                  >
                    <BsLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="https://github.com/kellyyngu" 
                    target="_blank" 
                    className="p-3 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg hover:scale-110 transition-transform shadow-md"
                  >
                    <FaGithubSquare className="text-xl" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
