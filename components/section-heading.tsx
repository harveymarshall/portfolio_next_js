import React from "react";
import { JetBrains_Mono } from "next/font/google";

const jb = JetBrains_Mono({subsets: ['latin']})

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className={`${jb.className} text-3xl font-medium capitalize mb-8 text-center`}>
      {children}
    </h2>
  );
}