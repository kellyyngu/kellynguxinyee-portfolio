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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="panel overflow-hidden p-8">
            <div className="relative">
              <h3 className="display-heading mb-3 text-3xl text-slate-900">Get in Touch</h3>
              <p className="leading-relaxed text-slate-600">
                I am open to full-time roles and meaningful collaborations. If your team is building
                ambitious products, I would love to connect.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <motion.a
              href="mailto:kellynxy8838@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ x: 5 }}
              className="group flex items-center gap-4 rounded-xl border border-[#e5e8e2] bg-white p-4 shadow-sm transition hover:shadow"
            >
              <div className="rounded-lg bg-[#0f3d5c] p-3 text-white transition-transform group-hover:scale-110">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500">Email</div>
                <div className="text-sm font-semibold text-slate-800">kellynxy8838@gmail.com</div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+60165228838"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ x: 5 }}
              className="group flex cursor-pointer items-center gap-4 rounded-xl border border-[#e5e8e2] bg-white p-4 shadow-sm transition hover:shadow"
            >
              <div className="rounded-lg bg-[#0f3d5c] p-3 text-white transition-transform group-hover:scale-110">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500">Phone</div>
                <div className="text-sm font-semibold text-slate-800">+60 16 522 8838</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 rounded-xl border border-[#e5e8e2] bg-white p-4 shadow-sm"
            >
              <div className="rounded-lg bg-[#0f3d5c] p-3 text-white">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500">Location</div>
                <div className="text-sm font-semibold text-slate-800">Malaysia</div>
              </div>
            </motion.div>
          </div>

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
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#d6dbe3] bg-white p-4 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <BsLinkedin className="text-xl" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/kellyyngu"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#d6dbe3] bg-white p-4 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <FaGithubSquare className="text-xl" />
              <span className="font-medium">GitHub</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="panel lg:col-span-3 p-8"
        >
          <h3 className="display-heading mb-6 text-3xl text-slate-900">
            Send a Message
          </h3>
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
}
