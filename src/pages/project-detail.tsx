import React, { useLayoutEffect, useState } from "react"
import { useParams } from "@tanstack/react-router"
import gsap from "gsap"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
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

  useLayoutEffect(() => {
    if (!project) return
    const ctx = gsap.context(() => {
      gsap.from(".animate-in", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      })
    })
    return () => ctx.revert()
  }, [project])

  if (!project) {
    return (
      <Layout>
        <div className="flex h-screen w-full items-center justify-center">
          <h1 className="text-2xl font-bold text-(--foreground)">
            Project not found
          </h1>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen w-full px-8 pt-24 pb-16 md:px-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <div className="animate-in flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-bold text-(--foreground)">
                {project.title}
              </h1>
              <span className="rounded-full border border-(--accent) px-3 py-1 text-sm font-semibold text-(--accent)">
                {project.year}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.type.map((t, i) => (
                <span
                  key={i}
                  className="rounded-md bg-(--accent)/10 px-2 py-0.5 text-sm text-(--primary)"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="animate-in w-full overflow-hidden rounded-xl border border-(--accent)/20 shadow-2xl">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full cursor-pointer object-cover transition duration-300 hover:scale-[1.01]"
              onClick={() => setSelectedImage(project.thumbnail)}
            />
          </div>
          <div className="animate-in flex flex-col gap-4 text-justify text-lg leading-relaxed text-(--primary)">
            {project.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
          <div className="animate-in">
            <h3 className="mb-4 text-2xl font-bold text-(--foreground)">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {project.framework.map((tech) => {
                const Icon = getIcon(tech)
                return (
                  <div
                    key={tech}
                    className="flex items-center gap-2 rounded-lg border border-(--primary)/20 bg-(--card) px-4 py-2 shadow-sm"
                  >
                    {Icon && <Icon className="size-5 text-(--accent)" />}
                    <span className="font-medium text-(--foreground)">
                      {tech}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          {project.preview && project.preview.length > 0 && (
            <div className="animate-in">
              <h3 className="mb-4 text-2xl font-bold text-(--foreground)">
                Gallery
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {project.preview.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`preview ${i}`}
                    className="w-full cursor-pointer rounded-lg border border-(--primary)/10 transition duration-300 hover:scale-[1.02]"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
          )}
          {project.sub_project && (
            <div className="animate-in flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-(--foreground)">
                Sub Projects
              </h3>
              {project.sub_project.map((sub, i) => (
                <SubProjectItem
                  key={i}
                  sub={sub}
                  onImageClick={setSelectedImage}
                />
              ))}
            </div>
          )}
          <div className="animate-in flex gap-4 border-t border-(--primary)/10 pt-8">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-(--foreground) px-6 py-3 font-semibold text-(--background) transition hover:bg-(--primary)"
              >
                <FaGithub size={20} /> View Source
              </a>
            )}
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-(--accent) px-6 py-3 font-semibold text-white transition hover:bg-(--accent)/80"
              >
                <FaExternalLinkAlt size={20} /> Live Demo
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
