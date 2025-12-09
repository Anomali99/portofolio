import React, { useState } from "react"
import { FaChevronDown, FaChevronUp, FaGithub } from "react-icons/fa"

const SubProjectItem: React.FC<{
  sub: any
  onImageClick: (src: string) => void
}> = ({ sub, onImageClick }) => {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="rounded-xl border border-(--accent)/20 bg-(--card) p-6">
      <h4 className="mb-2 text-xl font-bold text-(--foreground)">
        {sub.title}
      </h4>
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded bg-(--primary)/10 px-2 py-1 text-xs text-(--foreground)">
          {sub.framework}
        </div>
        {sub.github_url && (
          <a
            href={sub.github_url}
            target="_blank"
            className="flex items-center gap-1 text-xs text-(--accent) hover:underline"
          >
            <FaGithub /> Repo
          </a>
        )}
      </div>
      {sub.description.map((d: string, j: number) => (
        <p key={j} className="mb-1 text-justify text-sm text-(--primary)">
          {d}
        </p>
      ))}

      {sub.preview && sub.preview.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 text-sm font-medium text-(--accent) transition hover:text-(--accent)/80"
          >
            {showPreview ? (
              <>
                <FaChevronUp /> Hide Preview
              </>
            ) : (
              <>
                <FaChevronDown /> Show Preview
              </>
            )}
          </button>

          {showPreview && (
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {sub.preview.map((img: string, k: number) => (
                <img
                  key={k}
                  src={img}
                  alt={`${sub.title} preview ${k}`}
                  className="w-full cursor-pointer rounded-lg border border-(--primary)/10 transition duration-300 hover:scale-[1.02]"
                  onClick={() => onImageClick(img)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SubProjectItem
