"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Experience() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handleNext = () => {
    if (startIndex + itemsToShow < experiencesData.length) {
      setStartIndex(startIndex + itemsToShow);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsToShow);
    }
  };

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <div className="container mx-auto">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative mt-8">
          <div className="flex overflow-hidden">
            {experiencesData
              .slice(startIndex, startIndex + itemsToShow)
              .map((item, index) => (
                <div
                  key={startIndex + index}
                  className="flex-shrink-0 w-full md:w-1/3 px-3"
                >
                  <div className="p-6 bg-white shadow-lg rounded-lg h-full transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {item.location}
                    </p>
                    <p className="text-base text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            {/* Add empty placeholders if needed */}
            {experiencesData.slice(startIndex, startIndex + itemsToShow)
              .length < itemsToShow &&
              Array(
                itemsToShow -
                  experiencesData.slice(startIndex, startIndex + itemsToShow)
                    .length
              )
                .fill(0)
                .map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="flex-shrink-0 w-full md:w-1/3 px-3"
                  >
                    <div className="p-6 bg-transparent h-full"></div>
                  </div>
                ))}
          </div>

          {/* Navigation Arrows */}
          {startIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md z-10"
              aria-label="Previous experience"
            >
              <FiChevronLeft size={24} />
            </button>
          )}

          {startIndex + itemsToShow < experiencesData.length && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md z-10"
              aria-label="Next experience"
            >
              <FiChevronRight size={24} />
            </button>
          )}

          {/* Pagination indicators */}
          <div className="flex justify-center mt-5">
            {Array.from({
              length: Math.ceil(experiencesData.length / itemsToShow),
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx * itemsToShow)}
                className={`mx-1 w-2 h-2 rounded-full ${
                  Math.floor(startIndex / itemsToShow) === idx
                    ? "bg-gray-800"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
