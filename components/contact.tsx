"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 text-center max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="mt-6">
        Thank you for taking the time to explore my portfolio. I am currently
        seeking full-time opportunities in software development and am open to
        professional inquiries related to employment, collaboration, project
        discussions, or my previous work and experience. For direct
        communication, please feel free to reach out to me at{" "}
        <a
          className="underline font-medium"
          href="mailto:kellynxy8838@gmail.com"
        >
          kellynxy8838@gmail.com
        </a>
        . I make it a priority to respond promptly and look forward to
        connecting with you.
      </p>
    </motion.section>
  );
}
