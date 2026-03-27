import React, { useEffect, useState } from "react"
import type { CertType, StudyType } from "@/utils/types"
import Layout from "@/components/layout"
import { getMeData } from "@/data"
import { frameworkIcons, languageIcons, toolsIcons } from "@/utils/icons-map"
import ImageModal from "@/components/image-modal"
import Study from "@/components/about/study"
import Certification from "@/components/about/certification"

const AboutPage: React.FC = () => {
  const me = getMeData()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
  }, [])

  if (!me) return null

  return (
    <Layout>
      <div className="min-h-screen w-full px-6 pt-24 pb-16 md:px-16 lg:px-24 xl:px-32">
        <section className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col items-center gap-4">
            <h1
              className="scroll-reveal text-4xl font-bold text-(--foreground) md:text-5xl"
              style={{ transitionDelay: "0ms" }}
            >
              About Me
            </h1>
            <div
              className="scroll-reveal h-1 w-24 rounded-full bg-(--accent)"
              style={{ transitionDelay: "100ms" }}
            ></div>
          </div>

          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start lg:gap-16">
            <div
              className="scroll-reveal w-full md:w-1/3 lg:w-1/4"
              style={{ transitionDelay: "200ms" }}
            >
              <img
                src="/images/me/profile.webp"
                alt={me.name}
                className="mx-auto aspect-square w-64 rounded-2xl object-cover object-top shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-(--accent)/30 md:aspect-2/3 md:w-full"
              />
            </div>

            {/* Deskripsi */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              <div className="flex flex-col gap-5 text-justify text-base leading-relaxed text-(--primary) md:text-lg">
                {me.description.map((desc, i) => (
                  <p
                    key={i}
                    className="scroll-reveal"
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl">
          <h2
            className="scroll-reveal mb-8 flex items-center justify-center gap-3 text-center text-3xl font-bold text-(--foreground)"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="h-px w-12 bg-(--primary)/30"></span>
            Gallery
            <span className="h-px w-12 bg-(--primary)/30"></span>
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {me.gallery?.map((src, idx) => (
              <div
                key={idx}
                className="scroll-reveal-scale overflow-hidden rounded-xl shadow-md"
                style={{ transitionDelay: `${100 + idx * 100}ms` }}
              >
                <img
                  src={`/images/me/gallery/${src}`}
                  alt={`Gallery ${idx + 1}`}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      "https://placehold.co/400x400/2a2a2a/7c3aed?text=Gallery+Image"
                  }}
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-110 hover:grayscale-0 md:grayscale"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-5xl">
          <h2 className="scroll-reveal mb-12 flex items-center justify-center gap-3 text-center text-3xl font-bold text-(--foreground)">
            <span className="h-px w-12 bg-(--primary)/30"></span>
            Education
            <span className="h-px w-12 bg-(--primary)/30"></span>
          </h2>

          <div className="relative mx-auto mt-8 px-4 md:px-0">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-(--accent)/30 md:left-1/2 md:-translate-x-1/2"></div>

            {me.study.map((edu: StudyType, index: number) => (
              <Study index={index} study={edu} />
            ))}
          </div>
        </section>

        {me.certifications != undefined && me.certifications.length > 0 && (
          <section className="mx-auto mt-24 max-w-5xl">
            <h2 className="scroll-reveal mb-12 flex items-center justify-center gap-3 text-center text-3xl font-bold text-(--foreground)">
              <span className="h-px w-12 bg-(--primary)/30"></span>
              Certifications
              <span className="h-px w-12 bg-(--primary)/30"></span>
            </h2>

            <div className="flex flex-col gap-8">
              {me.certifications.map((cert: CertType, idx: number) => (
                <Certification
                  index={idx}
                  certification={cert}
                  onImageClick={setSelectedImage}
                />
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto mt-24 max-w-5xl">
          <h2 className="scroll-reveal mb-12 flex items-center justify-center gap-3 text-center text-3xl font-bold text-(--foreground)">
            <span className="h-px w-12 bg-(--primary)/30"></span>
            My Toolbox
            <span className="h-px w-12 bg-(--primary)/30"></span>
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col gap-6">
              <h3
                className="scroll-reveal mb-2 text-center text-xl font-semibold text-(--foreground)"
                style={{ transitionDelay: "0ms" }}
              >
                Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {languageIcons
                  .filter((item) => item.visible != false)
                  .map((item, idx) => (
                    <div
                      key={item.title}
                      className="scroll-reveal-scale"
                      style={{ transitionDelay: `${100 + idx * 50}ms` }}
                    >
                      <div className="group flex flex-col items-center gap-2">
                        <div className="rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition hover:-translate-y-1 hover:border-(--accent) hover:shadow-(--accent)/20">
                          <item.icon className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                        </div>
                        <span className="text-xs font-medium text-(--primary)">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3
                className="scroll-reveal mb-2 text-center text-xl font-semibold text-(--foreground)"
                style={{ transitionDelay: "100ms" }}
              >
                Frameworks
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {frameworkIcons
                  .filter((item) => item.visible != false)
                  .map((item, idx) => (
                    <div
                      key={item.title}
                      className="scroll-reveal-scale"
                      style={{ transitionDelay: `${150 + idx * 50}ms` }}
                    >
                      <div className="group flex flex-col items-center gap-2">
                        <div className="rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition hover:-translate-y-1 hover:border-(--accent) hover:shadow-(--accent)/20">
                          <item.icon className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                        </div>
                        <span className="text-xs font-medium text-(--primary)">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3
                className="scroll-reveal mb-2 text-center text-xl font-semibold text-(--foreground)"
                style={{ transitionDelay: "200ms" }}
              >
                Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {toolsIcons
                  .filter((item) => item.visible != false)
                  .map((item, idx) => (
                    <div
                      key={item.title}
                      className="scroll-reveal-scale"
                      style={{ transitionDelay: `${250 + idx * 50}ms` }}
                    >
                      <div className="group flex flex-col items-center gap-2">
                        <div className="rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition hover:-translate-y-1 hover:border-(--accent) hover:shadow-(--accent)/20">
                          <item.icon className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                        </div>
                        <span className="text-xs font-medium text-(--primary)">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
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

export default AboutPage
