"use client";

import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import { CSSProperties } from "react";
import SectionHeading from "../SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "next-themes";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  // const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 ">
      <SectionHeading>My Experience</SectionHeading>
      {/* {mounted && ( */}
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(34, 32, 32, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#ffff" : "#1d2432",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-600 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      {/* )} */}
    </section>
  );
}
