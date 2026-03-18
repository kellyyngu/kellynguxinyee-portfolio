"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#dfe2d9] bg-[#f7f7f3]/90 backdrop-blur-md">
      <div className="site-shell">
        <nav className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="display-heading text-xl text-slate-900">
              Kelly Ngu Xin Yee
            </Link>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-slate-500 lg:inline">
              Computer Science with AI
            </span>
          </motion.div>

          <ul className="hidden items-center gap-2 text-sm md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-4 py-2 transition-colors ${
                      isActive
                        ? "bg-[#0f3d5c] text-white"
                        : "text-slate-600 hover:bg-white hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-2 text-slate-600 transition-colors hover:text-slate-900 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#e4e6de] bg-[#f7f7f3] md:hidden"
          >
            <div className="site-shell py-4">
              <ul className="space-y-1.5">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block rounded-lg px-4 py-3 transition-colors ${
                          isActive
                            ? "bg-[#0f3d5c] text-white"
                            : "text-slate-700 hover:bg-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
