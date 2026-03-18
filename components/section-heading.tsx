import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]">
      <span className="display-heading inline-block pb-3">
        {children}
      </span>

      <div className="mt-3 flex justify-center">
        <div className="h-1 w-24 rounded-full bg-[#0f3d5c]/40" />
      </div>
    </h2>
  );
}
