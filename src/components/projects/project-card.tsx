import React from "react"
import { FaExternalLinkAlt, FaFileAlt, FaGithub } from "react-icons/fa"
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
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--primary)/10 bg-(--card) shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-(--accent)/50 hover:shadow-(--accent)/10 hover:shadow-xl">
      <div className="relative aspect-video w-full overflow-hidden bg-(--background)/50">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-(--card) via-transparent to-transparent opacity-90" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-xl font-bold text-(--foreground) md:text-2xl">
            {project.title}
          </h3>
          <div className="flex shrink-0 flex-col items-end gap-1.5">
            <span className="rounded-full border border-(--primary)/20 bg-(--primary)/5 px-2.5 py-1 text-xs font-semibold text-(--primary)">
              {project.year}
            </span>
            {project.documents && project.documents.length > 0 && (
              <span
                className="flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400"
                title="Dokumen Proyek Tersedia"
              >
                <FaFileAlt /> Docs
              </span>
            )}
          </div>
        </div>

        <div className="flex-1">
          <p className="line-clamp-3 text-justify text-sm leading-relaxed text-(--primary)">
            {project.description[0]}
          </p>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.framework.map((tech) => {
            const Icon = getIcon(tech)
            return (
              <div
                key={tech}
                className="flex items-center gap-1.5 rounded-md border border-(--primary)/10 bg-(--primary)/5 px-2 py-1 text-xs text-(--primary) transition-colors hover:border-(--accent)/30 hover:bg-(--accent)/10 hover:text-(--accent)"
                title={tech}
              >
                {Icon && <Icon className="size-3" />}
                <span>{tech}</span>
              </div>
            )
          })}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-(--primary)/10 pt-4">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-(--primary) transition-colors hover:text-(--accent)"
            >
              <FaGithub className="size-4" /> Source
            </a>
          )}
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-(--primary) transition-colors hover:text-(--accent)"
            >
              <FaExternalLinkAlt className="size-3.5" /> Demo
            </a>
          )}
          <a
            href={`/project/${project.slug}`}
            className="ml-auto inline-flex items-center gap-2 rounded-lg bg-(--accent)/10 px-4 py-2 text-sm font-semibold text-(--accent) transition-colors hover:bg-(--accent) hover:text-(--background)"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
