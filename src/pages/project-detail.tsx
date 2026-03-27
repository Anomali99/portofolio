import React, { useEffect, useState } from "react"
import { useParams } from "@tanstack/react-router"
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import type { IconType } from "react-icons"
import Layout from "@/components/layout"
import { getProjectBySlug } from "@/data"
import { frameworkIcons, languageIcons, toolsIcons } from "@/utils/icons-map"
import SubProjectItem from "@/components/projects/sub-project-item"
import ImageModal from "@/components/image-modal"

const allIcons = [...languageIcons, ...toolsIcons, ...frameworkIcons]

const getIcon = (name: string): IconType | null => {
  const found = allIcons.find((item) => item.title === name)
  return found ? found.icon : null
}

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams({ strict: false })
  const project = getProjectBySlug(slug || "")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    if (!project) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          } else {
            entry.target.classList.remove("is-visible")
          }
        })
      },
      {
        root: null,
        threshold: 0.1,
      },
    )

    const elements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-scale",
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [project])

  if (!project) {
    return (
      <Layout>
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold text-(--foreground)">
            Project not found
          </h1>
          <a href="/project" className="text-(--accent) hover:underline">
            &larr; Back to Projects
          </a>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen w-full px-6 pt-24 pb-20 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:gap-14">
          <div className="scroll-reveal" style={{ transitionDelay: "0ms" }}>
            <a
              href="/project"
              className="inline-flex items-center gap-2 text-sm font-medium text-(--primary) transition hover:text-(--accent)"
            >
              <FaArrowLeft /> Back to Projects
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="scroll-reveal flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between"
              style={{ transitionDelay: "100ms" }}
            >
              <h1 className="text-4xl font-bold text-(--foreground) md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <span className="shrink-0 rounded-full border border-(--accent) bg-(--accent)/10 px-4 py-1.5 text-sm font-semibold text-(--accent)">
                {project.year} • {project.category}
              </span>
            </div>

            <div
              className="scroll-reveal flex flex-wrap gap-2"
              style={{ transitionDelay: "200ms" }}
            >
              {project.type.map((t, i) => (
                <span
                  key={i}
                  className="rounded-md border border-(--primary)/20 bg-(--card) px-3 py-1 text-sm font-medium text-(--primary)"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            className="scroll-reveal w-full overflow-hidden rounded-2xl border border-(--primary)/10 shadow-xl"
            style={{ transitionDelay: "300ms" }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="aspect-video w-full cursor-pointer object-cover transition-transform duration-700 hover:scale-105"
              onClick={() => setSelectedImage(project.thumbnail)}
            />
          </div>

          <div
            className="scroll-reveal flex flex-col gap-4 text-justify text-base leading-relaxed text-(--primary) md:text-lg"
            style={{ transitionDelay: "100ms" }}
          >
            {project.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>

          <div className="mt-4">
            <h3
              className="scroll-reveal mb-6 text-2xl font-bold text-(--foreground) md:text-3xl"
              style={{ transitionDelay: "0ms" }}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {project.framework.map((tech, i) => {
                const Icon = getIcon(tech)
                return (
                  <div
                    key={tech}
                    className="scroll-reveal-scale flex items-center gap-2.5 rounded-xl border border-(--primary)/10 bg-(--card) px-4 py-2.5 shadow-sm transition-transform hover:-translate-y-1 hover:border-(--accent)/50 hover:shadow-md"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {Icon && <Icon className="size-5 text-(--accent)" />}
                    <span className="text-sm font-medium text-(--foreground) md:text-base">
                      {tech}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {project.preview && project.preview.length > 0 && (
            <div className="mt-4">
              <h3
                className="scroll-reveal mb-6 text-2xl font-bold text-(--foreground) md:text-3xl"
                style={{ transitionDelay: "0ms" }}
              >
                Gallery
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {project.preview.map((img, i) => (
                  <div
                    key={i}
                    className="scroll-reveal-scale overflow-hidden rounded-xl border border-(--primary)/10 shadow-sm"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <img
                      src={img}
                      alt={`preview ${i}`}
                      className="aspect-video w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.sub_project && project.sub_project.length > 0 && (
            <div className="mt-4 flex flex-col gap-6">
              <h3 className="scroll-reveal text-2xl font-bold text-(--foreground) md:text-3xl">
                Sub Projects
              </h3>
              <div className="flex flex-col gap-6">
                {project.sub_project.map((sub, i) => (
                  <SubProjectItem
                    key={i}
                    sub={sub}
                    onImageClick={setSelectedImage}
                    delay={i * 100}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="scroll-reveal mt-8 flex flex-col gap-4 border-t border-(--primary)/10 pt-10 sm:flex-row">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-(--foreground) px-8 py-3.5 font-semibold text-(--background) transition-all hover:-translate-y-1 hover:bg-(--primary) hover:shadow-lg sm:w-auto"
              >
                <FaGithub size={20} /> View Source
              </a>
            )}
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-(--accent) px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-(--accent)/80 hover:shadow-(--accent)/20 hover:shadow-lg sm:w-auto"
              >
                <FaExternalLinkAlt size={18} /> Visit Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </Layout>
  )
}

export default ProjectDetailPage
