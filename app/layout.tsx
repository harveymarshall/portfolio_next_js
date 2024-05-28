import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
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
        <div className={"absolute z-10 top-[-3rem] w-[100%] h-[300px] column flex-start bg-[#2d3fe7] overflow-hidden blur-mask"}>
        </div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
