"use client";

import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="flex flex-col items-center px-4">
      <SectionDivider />
      <Contact />
    </motion.main>
  );
}
