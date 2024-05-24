"use client";
import React from 'react'
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

const jb = JetBrains_Mono({subsets: ['latin']})
export default function Intro() {
    return (
      <section>
        <motion.div className="relative z-[900] w-full h-[800px] flex flex-col items-center justify-center overflow-hidden" style={{ top: '175px' }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{
          type: "tween",
          duration: 1.4
        }}>
          <motion.div className={`${jb.className} w-[550px] h-[109px] text-[#171717] text-2xl leading-[1.5] font-medium text-center flex items-center justify-center flex-col mt-[40px]`} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{
          type: "tween",
          duration: 1.4
        }}>
            Hi, I'm Harvey. I am a Software, <br /> Web Developer as well as working primarily as a Data Engineer.
          </motion.div>
          <motion.div className="w-[162px] h-[176px] flex items-center justify-center flex-col mt-[20px] rounded-[25px]" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{
          type: "tween",
          duration: 1.4
        }}>
            <motion.div className="w-[162px] h-[176px] flex flex-col rounded-[52px] bg-[#b5dbff] bg-center bg-no-repeat bg-cover overflow-hidden bg-[url('/profilePic.png')] border-[5px] border-white shadow-xl" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{
          type: "tween",
          duration: 1.4
        }}>
            </motion.div>
          </motion.div>
          <motion.div className={`${jb.className} w-[750px] h-[145px] text-[#171717] text-2xl leading-[1.5] font-medium text-center flex items-center justify-center flex-col mt-[80px]`} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{
          type: "tween",
          duration: 1.4
        }}>
            Alongside my work and side projects, I run the YouTube channel <a href="https://www.youtube.com/@harveyscodebase" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">HarveysCodeBase 🔗</a> where I create and publish <br /> 'A Day In The Life' style Vlogs showing my life as an Engineer/Developer and showcasing my passions for coding and technology.
          </motion.div>
        </motion.div>
      </section>
    );
}