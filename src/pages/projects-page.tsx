import React, { useEffect, useRef, useState } from "react"
import { FaStar } from "react-icons/fa"
import Layout from "@/components/layout"
import { getProjects } from "@/data"
import ProjectCard from "@/components/projects/project-card"
import { cn } from "@/utils/cn"
import HighlightProject from "@/components/projects/highlight-project"

const ProjectsPage: React.FC = () => {
  const allProjects = getProjects()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [highlightIndex, setHighlightIndex] = useState(0)

  const uniqueTypes = Array.from(
    new Set(allProjects.flatMap((project) => project.type)),
  )
  const categories = ["All", ...uniqueTypes]

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) =>
          project.type.includes(selectedCategory as any),
        )

  const highlightedProjects = allProjects.filter((p) => p.hight_light)

  useEffect(() => {
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
        threshold: 0.15,
      },
    )

    const elements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-scale",
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selectedCategory, highlightIndex])

  return (
    <Layout>
      <div
        ref={scrollContainerRef}
        className="min-h-screen w-full px-6 pt-24 pb-16 md:px-16 lg:px-24 xl:px-32"
      >
        <div className="mb-12 flex flex-col items-center gap-4">
          <h1
            className="scroll-reveal text-center text-4xl font-bold text-(--foreground) md:text-5xl"
            style={{ transitionDelay: "0ms" }}
          >
            My Projects
          </h1>
          <div
            className="scroll-reveal h-1 w-24 rounded-full bg-(--accent)"
            style={{ transitionDelay: "100ms" }}
          ></div>
          <p
            className="scroll-reveal mt-4 max-w-2xl text-center text-base text-(--primary) md:text-xl"
            style={{ transitionDelay: "200ms" }}
          >
            Berikut adalah beberapa proyek yang telah saya kerjakan, mulai dari
            aplikasi web hingga integrasi perangkat keras.
          </p>
        </div>

        {highlightedProjects.length > 0 && (
          <section className="mx-auto mb-20 max-w-5xl">
            <h2
              className="scroll-reveal mb-6 flex items-center gap-2 text-2xl font-bold text-(--foreground)"
              style={{ transitionDelay: "300ms" }}
            >
              <FaStar className="text-(--accent)" />
              Featured Highlights
            </h2>

            <HighlightProject
              projects={highlightedProjects}
              highlightIndex={highlightIndex}
              setHighlightIndex={setHighlightIndex}
            />

            <div className="mt-4 flex justify-center gap-2">
              {highlightedProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHighlightIndex(idx)}
                  className={cn(
                    "h-2 cursor-pointer rounded-full transition-all duration-300",
                    highlightIndex === idx
                      ? "w-8 bg-(--accent)"
                      : "w-2 bg-(--primary)/30 hover:bg-(--primary)/50",
                  )}
                  aria-label={`Go to highlight ${idx + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-6xl">
          <div
            className="scroll-reveal mb-8 flex flex-wrap justify-center gap-3"
            style={{ transitionDelay: "100ms" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-(--accent) text-(--background) shadow-(--accent)/20 shadow-md"
                    : "border border-(--primary)/10 bg-(--card) text-(--primary) hover:border-(--accent)/50 hover:text-(--accent)",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={`${selectedCategory}-${index}`}
                className="scroll-reveal-scale h-full"
                style={{ transitionDelay: `${(index % 6) * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-lg text-(--primary)">
              No projects found in this category.
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}

export default ProjectsPage
