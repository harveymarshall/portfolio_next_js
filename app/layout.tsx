import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import About from "@/components/about";
import { memo, SVGProps } from 'react';
import { Ellipse1Icon } from '@/components/mesh-gradient/Ellipse1Icon';
import { Ellipse2Icon } from '@/components/mesh-gradient/Ellipse2Icon';
import { Vector1Icon } from "@/components/mesh-gradient/Vector1Icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HarveysCodebase | Portfolio | Blog",
  description: "HarveysCodeBase is the site to compliment my YouTube channel a place to read Blog posts and see my personal projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
      <div className={"absolute z-10 top-[-1rem] w-[200%] h-[325px] column flex-start bg-[#56fbb6] overflow-hidden blur-[3000px]"}>
        <div className={"absolute z-20 left-[-81px] top-[-180px] w-[669px] h-[417px] overflow-visible"}>
          <Ellipse1Icon className={"w-[100%] h-[100%]"} />
        </div>
        <div className={"absolute left-[859px] top-[176px] w-[900px] h-[982px] overflow-visible"}>
          <Ellipse2Icon className={"w-[100%] h-[100%]"} />
        </div>
        <div className="absolute left-[489.2708px] top-[123.5381px] w-[494.1668px] h-[637.0844px] bg-[#8f1491] origin-top-left"
             style={{ transform: 'matrix(0.6272, 0.7789, -0.7789, 0.6272, 0, 0)'}}></div>
        <div className="absolute left-[710.8736px] top-[-54px] w-[782.1264px] h-[285.2603px] overflow-visible" 
             style={{ filter: 'drop-shadow(0px 4px 4px #00000040)' }}>
          <Vector1Icon className={"w-[100%] h-[100%]"} />
        </div>
      </div>
        <Header />
        <About />
        {children}
      </body>
    </html>
  );
}
