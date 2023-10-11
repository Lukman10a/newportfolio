"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import workSpace from "../../public/workspace.jpg";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="max-width-[50rem] scroll-mt-[100rem] text-center"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={workSpace}
              alt="workspace"
              width="300"
              height="500"
              quality="95"
              priority={true}
              className="w-40 h-40 rounded-[30px] object-cover border-[0.3rem] border-gray-700 shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">I am Lukman, frontend developer</span>{" "}
        <span className="font-bold">specialized in building modern web </span>{" "}
        <span className="font-bold">and mobile App using</span>{" "}
        <span className="underline">ReactJS, Next JS and React native</span>{" "}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 rounded-full outline-none group text-white bg-blue-800 px-7 py-3 focus:scale-110 hover:bg-gray-900 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-black text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://flowcv.com/resume/rs37mhwpto"
          target="_blank"
          download
          rel="noopener"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://github.com/Lukman10a"
          target="_blank"
          rel="noopener"
          className="p-4 bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-2 rounded-full shadow-md transition-all duration-300"
        >
          <FaGithubSquare size={20} />
          <span className="font-semibold">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/abdulrauf-lukman-761095217/"
          target="_blank"
          rel="noopener"
          className="p-4 bg-blue-500 hover:bg-blue-400 text-white flex items-center gap-2 rounded-full shadow-md transition-all duration-300"
        >
          <BsLinkedin size={20} />
          <span className="font-semibold">LinkedIn</span>
        </a>
      </motion.div>
    </section>
  );
}
