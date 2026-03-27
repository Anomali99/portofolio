import React, { useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import type { ProjectType } from "@/utils/types"

interface HighlightProjectProps {
  projects: Array<ProjectType>
  highlightIndex: number
  setHighlightIndex: React.Dispatch<React.SetStateAction<number>>
}

const HighlightProject: React.FC<HighlightProjectProps> = ({
  projects,
  highlightIndex,
  setHighlightIndex,
}) => {
  const projectLength = projects.length
  const activeHighlight = projects[highlightIndex]

  const nextHighlight = () => {
    setHighlightIndex((prev) => (prev + 1) % projectLength)
  }

  const prevHighlight = () => {
    setHighlightIndex((prev) => (prev === 0 ? projectLength - 1 : prev - 1))
  }

  useEffect(() => {
    if (projectLength <= 1) return

    const autoplayTimer = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % projectLength)
    }, 5000)

    return () => clearInterval(autoplayTimer)
  }, [projectLength, highlightIndex])

  return (
    <div
      className="scroll-reveal relative flex flex-col overflow-hidden rounded-2xl border border-(--primary)/10 bg-(--card) shadow-lg md:h-96 md:flex-row"
      style={{ transitionDelay: "400ms" }}
    >
      <div
        key={`img-${activeHighlight.slug}`}
        className="animate-fade-in relative w-full overflow-hidden md:w-1/2"
      >
        <img
          src={activeHighlight.thumbnail}
          alt={activeHighlight.title}
          className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-(--background)/80 to-transparent md:bg-gradient-to-r md:from-transparent md:to-(--card)"></div>
      </div>

      <div
        key={`content-${activeHighlight.slug}`}
        className="animate-fade-in flex w-full flex-col justify-between p-6 md:w-1/2 md:p-8"
      >
        <div>
          <span className="mb-2 inline-block rounded-full bg-(--accent)/10 px-3 py-1 text-xs font-semibold text-(--accent)">
            {activeHighlight.year} • {activeHighlight.category}
          </span>
          <h3 className="mb-3 text-2xl font-bold text-(--foreground) md:text-3xl">
            {activeHighlight.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-(--primary) md:text-base">
            {activeHighlight.description[0]}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {activeHighlight.framework.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="rounded-md border border-(--primary)/20 px-2 py-1 text-xs text-(--primary)"
              >
                {tech}
              </span>
            ))}
            {activeHighlight.framework.length > 4 && (
              <span className="rounded-md border border-(--primary)/20 px-2 py-1 text-xs text-(--primary)">
                +{activeHighlight.framework.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={prevHighlight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-(--primary)/20 bg-(--background) text-(--primary) transition hover:border-(--accent) hover:text-(--accent)"
              aria-label="Previous Highlight"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextHighlight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-(--primary)/20 bg-(--background) text-(--primary) transition hover:border-(--accent) hover:text-(--accent)"
              aria-label="Next Highlight"
            >
              <FaChevronRight />
            </button>
          </div>

          <a
            href={`/project/${activeHighlight.slug}`}
            className="inline-block rounded-md bg-(--accent) px-5 py-2 text-sm font-semibold text-(--background) transition hover:bg-(--accent)/80"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  )
}

export default HighlightProject
