import type { ProjectType } from "@/utils/types"
import projects from "@/data/projects.json"

export function getProjects(): Array<ProjectType> {
  try {
    return projects as Array<ProjectType>
  } catch (_) {
    return [] as Array<ProjectType>
  }
}

export function getProjectBySlug(slug: string): ProjectType | null {
  try {
    return getProjects().find((item) => item.slug === slug) || null
  } catch (_) {
    return null
  }
}
