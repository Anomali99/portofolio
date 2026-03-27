import React, { useState } from "react"
import {
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa"

const SubProjectItem: React.FC<{
  sub: any
  onImageClick: (src: string) => void
  delay?: number
}> = ({ sub, onImageClick, delay = 0 }) => {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div
      className="scroll-reveal overflow-hidden rounded-2xl border border-(--primary)/10 bg-(--card) p-6 shadow-sm transition-all hover:border-(--accent)/30 hover:shadow-md md:p-8"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h4 className="text-xl font-bold text-(--foreground) md:text-2xl">
          {sub.title}
        </h4>
        <div className="rounded-full bg-(--primary)/10 px-3 py-1 text-xs font-semibold text-(--foreground)">
          {sub.framework}
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-(--primary)/10 pb-4">
        {sub.github_url && (
          <a
            href={sub.github_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-(--primary) transition hover:text-(--accent)"
          >
            <FaGithub className="size-4" /> Repository
          </a>
        )}
        {sub.demo_url && (
          <a
            href={sub.demo_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-(--primary) transition hover:text-(--accent)"
          >
            <FaExternalLinkAlt className="size-3.5" /> Live Demo
          </a>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {sub.description.map((d: string, j: number) => (
          <p
            key={j}
            className="text-justify text-sm leading-relaxed text-(--primary) md:text-base"
          >
            {d}
          </p>
        ))}
      </div>

      {sub.preview && sub.preview.length > 0 && (
        <div className="mt-6 border-t border-(--primary)/10 pt-4">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 rounded-md bg-(--primary)/5 px-4 py-2 text-sm font-semibold text-(--accent) transition hover:bg-(--accent)/10"
          >
            {showPreview ? (
              <>
                <FaChevronUp /> Hide Gallery Preview
              </>
            ) : (
              <>
                <FaChevronDown /> Show Gallery Preview ({sub.preview.length})
              </>
            )}
          </button>

          <div
            className={`grid transform transition-all duration-500 ease-in-out ${showPreview ? "mt-6 grid-cols-1 gap-4 opacity-100 sm:grid-cols-2 lg:grid-cols-3" : "h-0 grid-cols-1 overflow-hidden opacity-0"}`}
          >
            {showPreview &&
              sub.preview.map((img: string, k: number) => (
                <div
                  key={k}
                  className="overflow-hidden rounded-xl border border-(--primary)/10"
                >
                  <img
                    src={img}
                    alt={`${sub.title} preview ${k}`}
                    className="aspect-video w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
                    onClick={() => onImageClick(img)}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SubProjectItem
