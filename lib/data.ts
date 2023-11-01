import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import ataasil from "../public/at-taasil.png";
import mainstack from "../public/mainstack.png";
import muslimspace from "../public/muslim_space.png";
import zipo from "../public/zipo.jpg";
import learnboost from "../public/learnboost.jpg";

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
    name: "Experience",
    hash: "#experience",
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
  {
    title: "Frontend Developer",
    location: "LearnBoost, Nigeria",
    description: "A skilled and experienced mobile app developer",
    icon: React.createElement(FaReact),
    date: "July 2022 - Sept 2022",
  },
] as const;

export const projectsData = [
  {
    title: "At-Taasil",
    description: "An online university meant to teach people through the net",
    tags: ["Next", "i18next", "Twind macro", "Axios", "React Query"],
    url: ataasil,
  },
  {
    title: "LearnBoost",
    description: "An educational mobile app for children",
    tags: ["React Native", "Axios", "React Querry", "Axios", "React Query"],
    url: learnboost,
  },
  {
    title: "Mainstack",
    description: "Built a responsive dashboard",
    tags: ["Next", "i18next", "Twind macro", "Axios", "React Query"],
    url: mainstack,
  },
  {
    title: "learnboost",
    description: "Built a responsive dashboard",
    tags: ["Next", "i18next", "Twind macro", "Axios", "React Query"],
    url: zipo,
  },
  {
    title: "Muslim Space",
    description: "Collaborated in building an e-commerce website",
    tags: ["Next", "i18next", "Twind macro", "Axios", "React Query"],
    url: muslimspace,
  },
] as const;

export const skillsData = [
  "React JS",
  "HTML 5",
  "CSS 3",
  "Next JS",
  "Javascript",
  "Tailwind CSS",
  "Styled Component",
  "git",
  "Axios",
  "Typescript",
  "Material UI",
] as const;

export const languagesData = [
  { lang: "English", level: 9 },
  { lang: "Arabic", level: 9 },
] as const;
