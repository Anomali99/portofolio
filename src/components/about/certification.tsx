import React from "react"
import { FaAward } from "react-icons/fa"
import type { CertType } from "@/utils/types"

interface CertProps {
  index?: number
  certification: CertType
  onImageClick: (src: string) => void
}

const Certification: React.FC<CertProps> = ({
  certification,
  onImageClick,
  index = 0,
}) => {
  return (
    <div
      key={index}
      className="scroll-reveal group flex cursor-pointer flex-col gap-6 rounded-2xl border border-(--primary)/10 bg-(--card) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-(--accent)/10 hover:shadow-xl md:flex-row md:items-center"
      style={{ transitionDelay: `${index * 150}ms` }}
      onClick={() =>
        onImageClick(`/images/me/certifications/${certification.image}`)
      }
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--accent)/10 text-(--accent) transition-colors duration-300 group-hover:bg-(--accent) group-hover:text-(--background)">
            <FaAward className="size-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-(--foreground)">
              {certification.name}
            </h3>
            <p className="font-medium text-(--accent)">
              {certification.issuer}
            </p>
            <span className="mt-1 block text-sm text-(--primary)/70">
              Diterbitkan: {certification.year}
            </span>
          </div>
        </div>
        {certification.description && (
          <p className="mt-2 text-justify text-sm leading-relaxed text-(--primary) md:text-base">
            {certification.description}
          </p>
        )}
      </div>

      {certification.image && (
        <div className="w-full shrink-0 overflow-hidden rounded-lg border border-(--primary)/10 md:w-1/3">
          <img
            src={`/images/me/certifications/${certification.image}`}
            alt={certification.name}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  )
}

export default Certification
