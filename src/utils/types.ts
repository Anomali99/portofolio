import type { IconType } from "react-icons"

export interface IconMapType {
  title: string
  icon: IconType
  visible?: boolean
}

export interface SubProjectType {
  title: "Frontend" | "Backend" | "Android" | "Arduino" | "Desktop"
  description: Array<string>
  github_url?: string
  demo_url?: string
  preview?: Array<string>
  framework: string
}

export interface DocumentType {
  title: string
  url: string
}

export interface AuthorType {
  name: string
  url?: string
}

export interface ProjectType {
  title: string
  slug: string
  description: Array<string>
  year: string
  hight_light: boolean
  thumbnail: string
  github_url?: string
  demo_url?: string
  preview?: Array<string>
  documents?: Array<DocumentType>
  framework: Array<string>
  category: "Hobby" | "Coursework"
  author: Array<AuthorType>
  type: Array<"Frontend" | "Backend" | "Android" | "Arduino" | "Desktop">
  sub_project?: Array<SubProjectType>
}

export interface CertType {
  name: string
  issuer: string
  year: string
  description: string
  image: string
}

export interface StudyType {
  name: string
  description: string
  start: string
  end: string
  image: string
  specialist?: string
}

export interface MeType {
  name: string
  title: string
  short_description: string
  description: Array<string>
  email?: string
  github?: string
  linkedin?: string
  facebook?: string
  instagram?: string
  gallery?: Array<string>
  certifications?: Array<CertType>
  study: Array<StudyType>
}
