"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Kelly from "@/public/kelly.jpeg";

export default function Intro() {
  return (
    <section id="home" className="mb-20 flex min-h-[76vh] w-full items-center">
      <div className="site-shell">
        <div className="panel relative overflow-hidden p-8 md:p-12">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#e6edf3]/50 to-transparent" />

          <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-full bg-[#d6e5ef] blur-lg" />
              <Image
                src={Kelly}
                alt="Kelly"
                width={196}
                height={196}
                quality={95}
                className="relative rounded-full object-cover ring-4 ring-white shadow-xl"
              />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Portfolio
                </p>
                <h1 className="display-heading mt-2 text-4xl leading-tight text-slate-900 sm:text-5xl">
                  Kelly Ngu Xin Yee
                </h1>
                <p className="mt-3 text-base font-medium text-slate-600 sm:text-lg">
                  Computer Science with AI • University of Nottingham
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="muted-text mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
              >
                I am a final-year computer science student passionate about
                building software that makes a tangible, positive impact on
                society. I have strong interests in web and mobile development,
                machine learning, and AI. I spend my free time exploring new
                technologies to see how emerging tech can solve real-world
                problems. I am always eager to tackle complex technical
                challenges, and I am happy to connect with industry
                professionals to find a team where I can contribute, learn, and
                grow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f3d5c] px-6 py-3 font-medium text-white shadow-md transition hover:bg-[#0d334d]"
                >
                  View Projects
                  <BsArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-[#0f3d5c]/40 hover:text-slate-900"
                >
                  Get in Touch
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-6 flex justify-center gap-3 md:justify-start"
              >
                <a
                  href="https://www.linkedin.com/in/kelly-ngu-xin-yee-342a13253/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                >
                  <BsLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/kellyyngu"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                >
                  <FaGithubSquare className="text-xl" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
