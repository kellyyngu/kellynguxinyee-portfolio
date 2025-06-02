"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  // Uses the useSectionInView hook with "About" as an identifier,
  // returning a ref to track visibility

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      // Adds top margin when scrolling to this section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a goal-oriented second-year Computer Science with Artificial
        Intelligence student from Malaysia. My interests lie in web and mobile
        application development, machine learning, and exploring other emerging
        fields that drive innovation. I’m particularly motivated to use my
        skills to contribute to projects with positive social impact. Committed
        to continuous growth, I’m always eager to learn, collaborate, and take
        on challenges that push me to improve. I welcome opportunities for
        networking and mentorship to support my personal and professional
        development.
      </p>
    </motion.section>
  );
}
