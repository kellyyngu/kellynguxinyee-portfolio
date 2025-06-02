"use client";
// component will run on the client side, enabling interactive features

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
    <section
      id="home"
      className="mb-1 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]"
      // bottom margin, max width, remove bottom margin on small screens,
      // scroll margin top for smooth scrolling
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center">
          {/*  arranges children in a column by default,
          changing to row layout on small screens */}
          <div className="relative mr-10 mb-4 sm:mb-0">
            <motion.div
              initial={{ y: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
            >
              <Image
                src={Kelly}
                alt="Hello"
                width="1000"
                height="1000"
                quality="100"
                priority={true}
                className="rounded-full object-cover shadow-xl"
              />
            </motion.div>
          </div>
          <motion.h1
            className="text-2xl font-medium !leading-[1.5] sm:text-3xl text-left"
            // Forced line height of 1.5
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 10 }}
          >
            <span className="text-2xl">
              Hi, I am Kelly Ngu Xin Yee, an undergraduate student pursuing a
              degree in Computer Science with Artificial Intelligence. I am
              passionate about software development and aspire to become a
              full-stack developer.
            </span>
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg font-medium mt-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950"
        >
          {/* px-7 py-3: Horizontal padding (1.75rem) and vertical padding (0.75rem) */}
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-gray-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-gray-700 p-4 text-white hover:text-white hover:bg-gray-950 flex items-center gap-2 rounded-full transition transform active:scale-[0.94] cursor-pointer"
          href="https://www.linkedin.com/in/kelly-ngu-xin-yee-342a13253/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-gray-700 p-4 text-white hover:text-white hover:bg-gray-950 flex items-center gap-2 rounded-full transition transform active:scale-[0.94] cursor-pointer"
          href="https://github.com/kellyyngu"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
