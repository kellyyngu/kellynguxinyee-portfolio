"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./contact-form";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-5xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Let's Connect</SectionHeading>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
        {/* Left Column - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold mb-3">Get in Touch</h3>
              <p className="text-white/90 leading-relaxed">
                I'm open to full-time roles, and collaboration opportunities. Let's build something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <motion.a 
              href="mailto:kellynxy8838@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 group"
            >
              <div className="p-3 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg text-white group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Email</div>
                <div className="text-sm font-semibold text-gray-800">kellynxy8838@gmail.com</div>
              </div>
            </motion.a>

            <motion.a 
              href="tel:+60165228838"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-purple-300 group cursor-pointer"
            >
              <div className="p-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg text-white group-hover:scale-110 transition-transform">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Phone</div>
                <div className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">+60 16 522 8838</div>
              </div>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="p-3 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg text-white">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Location</div>
                <div className="text-sm font-semibold text-gray-800">Malaysia</div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <a 
              href="https://www.linkedin.com/in/kelly-ngu-xin-yee-342a13253/" 
              target="_blank" 
              className="flex-1 flex items-center justify-center gap-2 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              <BsLinkedin className="text-xl" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/kellyyngu" 
              target="_blank" 
              className="flex-1 flex items-center justify-center gap-2 p-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              <FaGithubSquare className="text-xl" />
              <span className="font-medium">GitHub</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Send a Message
          </h3>
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
}
