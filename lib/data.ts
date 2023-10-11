import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Remote",
    description: "A skilled and experienced developer",
    icon: React.createElement(FaReact),
    date: "July 2022 - Sept 2022",
  },
  {
    title: "Mobile Developer",
    location: "LearnBoost, Nigeria",
    description: "A skilled and experienced mobile app developer",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - Sept 2022",
  },
] as const;
