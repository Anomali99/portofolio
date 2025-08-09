import type { MeType, ProjectType } from "@/utils/types"
import projects from "@/data/projects.json"
import me from "@/data/me.json"

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

export function getMeData(): MeType | null {
  try {
    return me as MeType
  } catch (_) {
    return null
  }
}
