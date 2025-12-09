import React, { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import Layout from "@/components/layout"
import { getProjects } from "@/data"
import ProjectCard from "@/components/projects/project-card"
import { cn } from "@/utils/cn"

const ProjectsPage: React.FC = () => {
  const allProjects = getProjects()
  const comp = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      })
    }, comp)
    return () => ctx.revert()
  }, [selectedCategory])

  return (
    <Layout>
      <div ref={comp} className="min-h-screen w-full px-8 pt-24 pb-16 md:px-16">
        <div className="mb-16 flex flex-col items-center gap-6">
          <h1 className="text-center text-5xl font-bold text-(--foreground)">
            My Projects
          </h1>
          <p className="max-w-2xl text-center text-xl text-(--primary)">
            Berikut adalah beberapa proyek yang telah saya kerjakan, mulai dari
            aplikasi web hingga integrasi perangkat keras.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-(--accent) text-(--background)"
                    : "bg-(--accent)/10 text-(--accent) hover:bg-(--accent)/20",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-(--primary)">
            No projects found in this category.
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ProjectsPage
