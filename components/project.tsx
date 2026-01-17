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
      <section className="mx-auto max-w-5xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-2/5 relative overflow-hidden">
            {imageUrl ? (
              <div className="relative h-64 md:h-full group">
                <Image
                  src={imageUrl as StaticImageData}
                  alt={title}
                  quality={90}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ) : (
              <div className="w-full h-64 md:h-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-4xl mb-2">🖼️</div>
                  <div className="text-sm">No image</div>
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/5 p-5 sm:p-8 relative">
            {/* Title and Link */}
            <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                {title}
              </h3>
              {link && (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-shrink-0 p-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:scale-110 transition-transform shadow-md"
                  title="View live project"
                >
                  <FiExternalLink className="text-xl" />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {isExpanded ? description : `${description.substring(0, maxDescriptionLength)}${description.length > maxDescriptionLength ? '...' : ''}`}
            </p>

            {description.length > maxDescriptionLength && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
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

            {/* Tags */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="text-xs font-medium bg-gradient-to-r from-orange-100 to-pink-100 text-gray-800 px-3 py-1.5 rounded-full border border-orange-200 hover:shadow-md transition-shadow"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-100/30 to-transparent rounded-tl-full"></div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
