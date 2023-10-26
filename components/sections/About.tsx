"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-bold">
          I am Lukman, a frontend developer with
        </span>{" "}
        <span className="font-bold">3 years of experience</span>{" "}
        <span className="font-bold">
          {" "}
          I am capable of creating efficient, scalable
        </span>
        <span className="font-bold">and visually appealing web apps</span>
      </p>
      <p>
        <span>My passion for for front end development is evident</span> {""}
        <span className="italic">in my attention to details.</span> {""}
        <span className="font-medium">
          I am a collaborative team player who thrives in agile enviroment
        </span>
      </p>
    </motion.section>
  );
}
