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
      {/* <p className="mb-3">
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
      </p> */}

      <p>
        Front-End Developer with 3+ years of experience, skilled in React,
        Next.js, TypeScript, JavaScript, and other key technologies. Proficient
        in essential tools and services, such as Tailwind CSS, Axios, React
        Query, and database systems like MongoDB and Firebase. Proven ability to
        write clean, efficient, and maintainable code, and successfully complete
        projects that demonstrate technical prowess. Dedicated to delivering
        high-quality solutions with meticulous attention to detail, a strong
        work ethic, and a commitment to staying updated with the latest trends
        and best practices in the industry. Thrives in collaborative Agile
        environments, where I can work seamlessly with cross-functional teams to
        create innovative, impactful, and user-friendly applications.
      </p>
    </motion.section>
  );
}
