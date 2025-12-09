import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from "@/components/layout"
import { getMeData } from "@/data"
import { frameworkIcons, languageIcons, toolsIcons } from "@/utils/icons-map"

gsap.registerPlugin(ScrollTrigger)

const AboutPage: React.FC = () => {
  const me = getMeData()
  const comp = useRef(null)

  useLayoutEffect(() => {
    const scrollContainer = document.querySelector(".overflow-y-auto")

    const ctx = gsap.context(() => {
      gsap.from(".animate-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".animate-desc p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      })

      gsap.from(".animate-edu .edu-card", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animate-edu",
          start: "top 80%",
          scroller: scrollContainer,
        },
      })

      gsap.from(".animate-skills .skill-item", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".animate-skills",
          start: "top 80%",
          scroller: scrollContainer,
        },
      })
    }, comp)
    return () => ctx.revert()
  }, [])

  if (!me) return null

  return (
    <Layout>
      <div ref={comp} className="min-h-screen w-full px-8 pt-24 pb-16 md:px-16">
        <div className="animate-header mb-16 flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold text-(--foreground)">About Me</h1>
          <div className="h-1 w-24 rounded-full bg-(--accent)"></div>
        </div>
        <div className="animate-desc mx-auto mb-20 flex max-w-4xl flex-col gap-6 text-justify text-lg leading-relaxed text-(--primary)">
          {me.description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
        <div className="animate-edu mx-auto mb-20 max-w-5xl">
          <h2 className="mb-8 flex items-center justify-center gap-3 text-center text-3xl font-bold text-(--foreground)">
            <span className="h-px w-12 bg-(--primary)/30"></span>
            Education
            <span className="h-px w-12 bg-(--primary)/30"></span>
          </h2>
          <div className="md:ml-1/2 relative ml-4 md:translate-x-[-1px]">
            <div className="absolute top-0 right-1/2 bottom-0 left-1/2 w-0.5 bg-(--accent)/30"></div>
            {me.study.map((edu, index) => (
              <div
                key={index}
                className={`edu-card relative mb-12 flex flex-col gap-8 md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute top-1.5 left-[-9px] h-4 w-4 rounded-full bg-(--accent) md:left-1/2 md:translate-x-[-50%]" />
                <div
                  className={`flex flex-col md:w-1/2 ${index % 2 === 0 ? "md:items-start" : "md:items-end"} pl-8 md:pl-0`}
                >
                  <span className="mb-2 w-fit rounded-full bg-(--accent)/10 px-3 py-1 text-sm font-bold text-(--accent)">
                    {edu.start} - {edu.end}
                  </span>
                </div>
                <div
                  className={`pl-8 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
                >
                  <h3 className="text-xl font-bold text-(--foreground)">
                    {edu.name}
                  </h3>
                  {edu.specialist && (
                    <p className="mb-2 font-medium text-(--accent)">
                      {edu.specialist}
                    </p>
                  )}
                  <p className="text-justify text-sm leading-relaxed text-(--primary)">
                    {edu.description}
                  </p>
                  {edu.image && (
                    <img
                      src={edu.image}
                      alt={edu.name}
                      className="mt-4 inline-block h-32 w-full rounded-lg border border-(--primary)/10 object-cover shadow-md md:w-48"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-skills mx-auto max-w-5xl">
          <h2 className="mb-12 flex items-center justify-center gap-3 text-center text-3xl font-bold text-(--foreground)">
            <span className="h-px w-12 bg-(--primary)/30"></span>
            My Toolbox
            <span className="h-px w-12 bg-(--primary)/30"></span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h3 className="mb-4 text-center text-xl font-semibold text-(--foreground)">
                Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {languageIcons.map((item) => (
                  <div
                    key={item.title}
                    className="skill-item group flex flex-col items-center gap-2"
                  >
                    <div className="rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition group-hover:-translate-y-1 group-hover:border-(--accent) group-hover:shadow-(--accent)/20">
                      <item.icon className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                    </div>
                    <span className="text-xs font-medium text-(--primary)">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="mb-4 text-center text-xl font-semibold text-(--foreground)">
                Frameworks
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {frameworkIcons.map((item) => (
                  <div
                    key={item.title}
                    className="skill-item group flex flex-col items-center gap-2"
                  >
                    <div className="rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition group-hover:-translate-y-1 group-hover:border-(--accent) group-hover:shadow-(--accent)/20">
                      <item.icon className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                    </div>
                    <span className="text-xs font-medium text-(--primary)">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="mb-4 text-center text-xl font-semibold text-(--foreground)">
                Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {toolsIcons.map((item) => (
                  <div
                    key={item.title}
                    className="skill-item group flex flex-col items-center gap-2"
                  >
                    <div className="rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition group-hover:-translate-y-1 group-hover:border-(--accent) group-hover:shadow-(--accent)/20">
                      <item.icon className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                    </div>
                    <span className="text-xs font-medium text-(--primary)">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
