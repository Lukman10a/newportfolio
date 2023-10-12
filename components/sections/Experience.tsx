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
// import "react-vertical-timeline-component/dist/es/style.min.css";

import { experiencesData } from "@/lib/data";
import { useTheme } from "next-themes";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  console.log(experiencesData);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 ">
      <SectionHeading>My Experience</SectionHeading>
      {mounted && (
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(43, 133, 178, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(48, 40, 40, 0.05)",
                  textAlign: "left",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  visibility: "visible",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(27, 30, 188, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === "light" ? "#ffff" : "#3b70da",
                  fontSize: "1.5rem",
                  visibility: "visible",
                }}
              >
                <h3 className="font-semibold capitalize text-blue-600">
                  {item.title}
                </h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-600 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      )}
    </section>
  );
}
