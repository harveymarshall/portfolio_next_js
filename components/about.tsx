"use client";
import React from 'react'
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import { useSectionInView } from "@/lib/hooks";

const jb = JetBrains_Mono({subsets: ['latin']})

export default function About () {
    const { ref } = useSectionInView("About");
    return (
        <motion.section 
            ref={ref}
            className="mt-[20px] mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
        <SectionHeading>About me.</SectionHeading>
        <p>
            📍
            W. Yorkshire, UK
        </p>
        <motion.div className={`${jb.className} w-[750px] h-[145px] text-[#171717] text-2xl leading-[1.5] font-medium text-center flex items-center justify-center flex-col mt-[80px]`} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{
          type: "tween",
          duration: 1.4
        }}>
            Alongside my work and side projects, I run the YouTube channel <a href="https://www.youtube.com/@harveyscodebase" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">HarveysCodeBase 🔗</a> where I create and publish <br /> 'A Day In The Life' style Vlogs showing my life as an Engineer/Developer and showcasing my passions for coding and technology.
        </motion.div>
        </motion.section>
    )
}