"use client";
import React from 'react'
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import { useSectionInView } from "@/lib/hooks";
import { Carousel } from 'react-responsive-carousel';
import { projectsData } from '@/lib/data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const jb = JetBrains_Mono({subsets: ['latin']})

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
}

export default function Projects () {
    const { ref } = useSectionInView("Projects");
    return (
        <motion.section
          ref={ref}
          className="mt-[20px] mb-28 max-w-[45rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="projects"
        >
          <SectionHeading>Projects.</SectionHeading>
          <div className="mt-[20px]">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={true}
              className="max-w-full h-auto"
            >
              {projectsData.map((project) => (
                <div key={project.id} className="relative">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-auto" />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2 justify-center">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded text-xs mb-3">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </motion.section>
      )
}