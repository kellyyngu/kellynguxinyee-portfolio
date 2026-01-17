import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-semibold uppercase tracking-wide mb-6 text-center text-gray-800">
      <span className="inline-block border-b-2 border-gray-200 pb-2">{children}</span>
    </h2>
  );
}
