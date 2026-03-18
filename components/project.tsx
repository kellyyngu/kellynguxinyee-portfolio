"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number] & {
  link?: string;
  imageUrl?: StaticImageData | string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const maxDescriptionLength = 220;

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-8"
    >
      <section className="panel mx-auto max-w-5xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 relative overflow-hidden">
            {imageUrl ? (
              <div className="relative h-64 md:h-full group">
                <Image
                  src={imageUrl as StaticImageData}
                  alt={title}
                  quality={90}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ) : (
              <div className="flex h-64 w-full items-center justify-center bg-[#ecf1f5] text-slate-500 md:h-full">
                <div className="text-center">
                  <div className="mb-2 text-4xl">IMG</div>
                  <div className="text-sm uppercase tracking-widest">No preview</div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full md:w-3/5 p-5 sm:p-8 relative">
            <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
              <h3 className="display-heading text-2xl text-slate-900 sm:text-[1.9rem]">
                {title}
              </h3>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 rounded-lg border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                  title="View live project"
                >
                  <FiExternalLink className="text-xl" />
                </a>
              )}
            </div>

            <p className="muted-text text-sm leading-relaxed sm:text-base">
              {isExpanded
                ? description
                : `${description.substring(0, maxDescriptionLength)}${description.length > maxDescriptionLength ? "..." : ""}`}
            </p>

            {description.length > maxDescriptionLength && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0f3d5c] transition-colors hover:text-[#0c2f48]"
              >
                {isExpanded ? (
                  <>
                    Show less <FiChevronUp />
                  </>
                ) : (
                  <>
                    Read more <FiChevronDown />
                  </>
                )}
              </button>
            )}

            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-full border border-[#d8dee6] bg-[#f1f5f8] px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
