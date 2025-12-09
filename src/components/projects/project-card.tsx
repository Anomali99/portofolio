import React from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import type { IconType } from "react-icons"
import type { ProjectType } from "@/utils/types"
import { frameworkIcons, languageIcons, toolsIcons } from "@/utils/icons-map"

const allIcons = [...languageIcons, ...toolsIcons, ...frameworkIcons]

const getIcon = (name: string): IconType | null => {
  const found = allIcons.find((item) => item.title === name)
  return found ? found.icon : null
}

interface ProjectCardProps {
  project: ProjectType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-(--accent)/20 bg-(--card) shadow-md transition hover:border-(--accent)/50">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-(--background) to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="line-clamp-1 text-2xl font-bold text-(--foreground)">
            {project.title}
          </h3>
          <span className="rounded-full border border-(--primary)/30 px-2 py-0.5 text-sm text-(--primary)">
            {project.year}
          </span>
        </div>

        <p className="line-clamp-3 text-justify text-sm text-(--primary)">
          {project.description[0]}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.framework.map((tech) => {
            const Icon = getIcon(tech)
            return (
              <div
                key={tech}
                className="flex items-center gap-1 rounded-md bg-(--accent)/10 px-2 py-1 text-xs text-(--accent)"
                title={tech}
              >
                {Icon && <Icon className="size-3" />}
                <span>{tech}</span>
              </div>
            )
          })}
        </div>

        <div className="flex gap-3 border-t border-(--primary)/10 pt-4">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-(--primary) transition hover:text-(--accent)"
            >
              <FaGithub /> Source
            </a>
          )}
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-(--primary) transition hover:text-(--accent)"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
          <a
            href={`/project/${project.slug}`}
            className="ml-auto flex items-center gap-2 rounded-md bg-(--accent)/20 px-3 py-1 text-sm font-medium text-(--accent) transition hover:bg-(--accent) hover:text-(--background)"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
