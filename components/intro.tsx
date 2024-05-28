"use client";
import React from 'react'
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const jb = JetBrains_Mono({subsets: ['latin']})
export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
      <section
        ref={ref}
        id="home"
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[50rem]"
      >
          <motion.div
            className="w-full flex items-center justify-center flex-col rounded-[25px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 1.4
            }}
          >
            <div className="flex items-center justify-between w-full px-4">
              <div className="flex flex-col gap-2">
                <Link
                  href="#contact"
                  className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                  onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  Contact me here{" "}
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                
                <a
                  className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                  href="/CV.pdf"
                  download
                >
                  Download CV{" "}
                  <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
              </div>
                
              <motion.div
                className="w-[192px] h-[192px] flex flex-col bg-[#b5dbff] bg-center bg-no-repeat bg-cover overflow-hidden bg-[url('/profilePic.png')] border-[5px] border-white shadow-xl rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 1.4
                }}
              >
              </motion.div>
              
              <div className="flex flex-col gap-2">
                <a
                  className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/harvey-marshall-827531160/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className={`${jb.className} w-[550px] h-[109px] text-[#171717] text-2xl leading-[1.5] font-medium text-center flex items-center justify-center flex-col mt-[40px]`} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{
          type: "tween",
          duration: 1.4
          }}>
            Hi, I'm Harvey. I'm a Software/ <br /> Web Developer as well as working primarily as a Data Engineer.
          </motion.div>
      </section>
    );
}