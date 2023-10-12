"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mg-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-200max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-100 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:b-white/20 ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <Image src={url} alt="my live projects" quality={95} />
        </div>
      </section>
    </motion.div>
  );
}
