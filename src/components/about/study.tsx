import React from "react"
import type { StudyType } from "@/utils/types"

interface StudyProps {
  index?: number
  study: StudyType
}

const Study: React.FC<StudyProps> = ({ study, index = 0 }) => {
  return (
    <div
      key={index}
      className={`scroll-reveal relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute left-6 mt-1.5 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-(--background) bg-(--accent) shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)] md:left-1/2 md:mt-0 md:translate-y-1"></div>

      <div
        className={`pl-10 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}
      >
        <span className="mb-2 inline-block w-fit rounded-full bg-(--accent)/10 px-4 py-1.5 text-sm font-bold tracking-wide text-(--accent)">
          {study.start} - {study.end}
        </span>
      </div>

      <div
        className={`mt-3 pl-10 md:mt-0 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
      >
        <h3 className="text-xl font-bold text-(--foreground) md:text-2xl">
          {study.name}
        </h3>
        {study.specialist && (
          <p className="mb-3 font-medium text-(--accent)">{study.specialist}</p>
        )}
        <p className="text-justify text-sm leading-relaxed text-(--primary) md:text-base">
          {study.description}
        </p>
        {study.image && (
          <img
            src={`/images/me/study/${study.image}`}
            alt={study.name}
            className={`mt-4 inline-block h-32 w-full rounded-lg border border-(--primary)/10 object-cover shadow-md md:w-56 ${index % 2 === 0 ? "md:float-right" : "md:float-left"}`}
          />
        )}
      </div>
    </div>
  )
}

export default Study
