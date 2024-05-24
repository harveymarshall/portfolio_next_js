"use client";
import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import { JetBrains_Mono } from "next/font/google";

const jb = JetBrains_Mono({subsets: ['latin']})

export default function About () {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref1, { triggerOnce: false, threshold: 0.1 });
    const isInView2 = useInView(ref2, { triggerOnce: true, threshold: 0.1 });
    return (
        <section >
            <div className="relative z-[900] w-full h-[500px] flex flex-col items-center justify-center overflow-hidden mt-[150px]">
                <motion.div 
                    ref={ref1}
                    className={`${jb.className} w-[750px] h-[145px] flex items-center justify-center flex-col mt-[80px]`} // Reduced margin-top here
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={isInView1 ? { opacity: 1, scale: 1} : { opacity: 0, scale: 0}} 
                    transition={{
                        type: "tween",
                        duration: 0.8,
                        delay: 0.2
                    }}
                >
                    <h1 className={`${jb.className} font-bold text-[#171717] text-3xl`}>About Me.</h1>
                </motion.div>
                <motion.div 
                    ref={ref2}
                    className={`w-[750px] h-[300px] flex items-center justify-center flex-col mt-[-100px]`} // Reduced margin-top here
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={isInView1 ? { opacity: 1, scale: 1} : { opacity: 0, scale: 0}} 
                    transition={{
                        type: "tween",
                        duration: 0.8,
                        delay: 0.2
                    }}
                >
                    <p className={`${jb.className} text-[#171717] text-2xl leading-[1.5] font-medium text-center`}>
                        📍 <br /> West Yorkshire, UK
                    </p>
                </motion.div>
            </div>
        </section>
    )
}