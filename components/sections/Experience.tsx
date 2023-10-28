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
                    theme === "light" ? "#b2bdd0" : "rgba(43, 133, 178, 0.05)",
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
                      ? "0.4rem solid #596475"
                      : "0.4rem solid rgba(27, 30, 188, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === "light" ? "#ac9e9e" : "#3b70da",
                  fontSize: "1.5rem",
                  visibility: "visible",
                }}
              >
                <h3 className="font-semibold capitalize text-blue-500">
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

// "use client";

// import { useSectionInView } from "@/lib/hooks";
// import React, { useEffect, useRef, useState } from "react";
// import SectionHeading from "../SectionHeading";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";

// import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/lib/data";
// import { useTheme } from "next-themes";

// // ... (imports and other code)

// const AnimatedVerticalTimelineElement = ({ item }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);
//   const { theme } = useTheme();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // Disconnect the observer once the element is fully visible
//         }
//       },
//       { root: null, threshold: 1.0 } // Adjust threshold to 1.0
//     );

//     const currentRef = elementRef.current;

//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, []);

//   const animatedStyles = {
//     opacity: isVisible ? 0 : 1, // Set opacity to 0 when element is in viewport
//     transform: `translateY(${isVisible ? 0 : "20px"})`, // Slide in from bottom
//     transition: "opacity 0.5s, transform 0.5s",
//   };

//   return (
//     <VerticalTimelineElement
//       ref={elementRef}
//       className="vertical-timeline-element--animate"
//       contentStyle={{
//         ...animatedStyles,
//         background: theme === "light" ? "#f3f4f6" : "rgba(43, 133, 178, 0.05)",
//         boxShadow: "revert",
//         border: "1px solid rgba(48, 40, 40, 0.05)",
//         textAlign: "left",
//         padding: "1rem 2rem",
//         borderRadius: "0.5rem",
//         cursor: "pointer",
//         visibility: "visible",
//       }}
//       contentArrowStyle={{
//         borderRight:
//           theme === "light"
//             ? "0.4rem solid #9ca3af"
//             : "0.4rem solid rgba(27, 30, 188, 0.5)",
//       }}
//       date={item.date}
//       icon={item.icon}
//       iconStyle={{
//         ...animatedStyles,
//         background: theme === "light" ? "#ffff" : "#3b70da",
//         fontSize: "1.5rem",
//         visibility: "visible",
//       }}
//     >
//       <h3 className="font-semibold capitalize text-blue-600">{item.title}</h3>
//       <p className="font-normal !mt-0">{item.location}</p>
//       <p className="!mt-1 !font-normal text-gray-600 dark:text-white/75">
//         {item.description}
//       </p>
//     </VerticalTimelineElement>
//   );
// };

// // ... (rest of the code)

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 ">
//       <SectionHeading>My Experience</SectionHeading>
//       {mounted && (
//         <VerticalTimeline lineColor="">
//           {experiencesData.map((item, index) => (
//             <AnimatedVerticalTimelineElement key={index} item={item} />
//           ))}
//         </VerticalTimeline>
//       )}
//     </section>
//   );
// }
