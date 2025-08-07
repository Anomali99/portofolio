import type { IconType } from "react-icons"

export interface IconMapType {
  title: string
  icon: IconType
}

export interface ProjectType {
  title: string
  slug: string
  description: Array<string>
  year: string
  thumbnail: string
  github_url?: string
  demo_url?: string
  preview?: Array<string>
  framework: Array<string>
  category: "Hobby" | "Coursework"
  author: Array<string>
  type: Array<"Frontend" | "Backend" | "Android" | "Arduino" | "Desktop">
  sub_project?: Array<{
    title: "Frontend" | "Backend" | "Android" | "Arduino" | "Desktop"
    description: Array<string>
    github_url?: string
    demo_url?: string
    preview?: Array<string>
    framework: string
  }>
}
