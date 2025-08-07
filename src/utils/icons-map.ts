import { FaCode, FaJava, FaReact, FaTools, FaVuejs } from "react-icons/fa"
import {
  SiAndroidstudio,
  SiApachenetbeanside,
  SiArduino,
  SiCanva,
  SiCoreldraw,
  SiCplusplus,
  SiDart,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiJavascript,
  SiJupyter,
  SiKotlin,
  SiLaragon,
  SiNextdotjs,
  SiPlatformio,
  SiPostman,
  SiPython,
  SiSpring,
  SiTailwindcss,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { IoLibrary } from "react-icons/io5"

import type { IconMapType } from "./types"

export const categoryIcons: Array<IconMapType> = [
  {
    title: "Language",
    icon: FaCode,
  },
  {
    title: "Tool",
    icon: FaTools,
  },
  {
    title: "Framework",
    icon: IoLibrary,
  },
]

export const languageIcons: Array<IconMapType> = [
  {
    title: "Java",
    icon: FaJava,
  },
  {
    title: "Python",
    icon: SiPython,
  },
  {
    title: "Javascript",
    icon: SiJavascript,
  },
  {
    title: "Kotlin",
    icon: SiKotlin,
  },
  {
    title: "Dart",
    icon: SiDart,
  },
  {
    title: "C++",
    icon: SiCplusplus,
  },
]

export const toolsIcons: Array<IconMapType> = [
  {
    title: "VS Code",
    icon: VscVscode,
  },
  {
    title: "Android Studio",
    icon: SiAndroidstudio,
  },
  {
    title: "NetBeans IDE",
    icon: SiApachenetbeanside,
  },
  {
    title: "Arduino IDE",
    icon: SiArduino,
  },
  {
    title: "PlatformIO",
    icon: SiPlatformio,
  },
  {
    title: "Git",
    icon: SiGit,
  },
  {
    title: "GitHub",
    icon: SiGithub,
  },
  {
    title: "Postman",
    icon: SiPostman,
  },
  {
    title: "Laragon",
    icon: SiLaragon,
  },
  {
    title: "Docker",
    icon: SiDocker,
  },
  {
    title: "Colab",
    icon: SiGooglecolab,
  },
  {
    title: "CorelDraw",
    icon: SiCoreldraw,
  },
  {
    title: "Canva",
    icon: SiCanva,
  },
  {
    title: "Figma",
    icon: SiFigma,
  },
]

export const frameworkIcons: Array<IconMapType> = [
  {
    title: "React",
    icon: FaReact,
  },
  {
    title: "React Native",
    icon: FaReact,
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
  },
  {
    title: "Vue.js",
    icon: FaVuejs,
  },
  {
    title: "Express.js",
    icon: SiExpress,
  },
  {
    title: "Django",
    icon: SiDjango,
  },
  {
    title: "Flask",
    icon: SiFlask,
  },
  {
    title: "Jupyter",
    icon: SiJupyter,
  },
  {
    title: "Spring Boot",
    icon: SiSpring,
  },
  {
    title: "Java Swing",
    icon: FaJava,
  },
  {
    title: "Java Android",
    icon: SiKotlin,
  },
  {
    title: "Kotlin Android",
    icon: FaReact,
  },
  {
    title: "Flutter",
    icon: SiFlutter,
  },
  {
    title: "Arduino Core",
    icon: SiArduino,
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
  },
]
