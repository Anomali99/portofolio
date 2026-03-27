import React, { useEffect, useRef } from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa6"
import Layout from "@/components/layout"
import { getMeData } from "@/data"
import { languageIcons } from "@/utils/icons-map"

const LandingPage: React.FC = () => {
  const meData = getMeData()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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
        root: scrollContainerRef.current,
        threshold: 0.15,
      },
    )

    const elements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-scale",
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <Layout>
      <div
        ref={scrollContainerRef}
        className="no-scrollbar mx-auto h-full w-full max-w-7xl snap-y snap-mandatory overflow-y-scroll scroll-auto px-6 md:px-12 lg:px-0"
      >
        <section
          id="home"
          className="flex h-full w-full snap-start flex-col-reverse items-center justify-center gap-6 py-12 md:flex-row md:gap-10"
        >
          <div className="flex w-full flex-col justify-center gap-3 text-center md:w-1/2 md:gap-4 md:text-left">
            <h3
              className="scroll-reveal text-3xl font-semibold text-(--accent) md:text-4xl lg:text-5xl"
              style={{ transitionDelay: "0ms" }}
            >
              {meData?.name}
            </h3>
            <h1
              className="scroll-reveal text-2xl leading-tight font-bold text-(--foreground) md:text-5xl lg:text-8xl"
              style={{ transitionDelay: "100ms" }}
            >
              {meData?.title}
            </h1>
            <div className="mt-2 flex w-full flex-wrap justify-center gap-2.5 md:justify-start">
              {languageIcons
                .filter((item) => item.visible != false)
                .map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="scroll-reveal-scale rounded-xl border border-(--accent) bg-(--card) p-3 shadow-(--accent)/20 md:p-4"
                      style={{ transitionDelay: `${200 + index * 50}ms` }}
                    >
                      <Icon className="size-6 text-(--accent) md:size-8" />
                    </div>
                  )
                })}
            </div>
            <p
              className="scroll-reveal mt-2 text-center text-sm text-(--primary) md:mt-4 md:text-justify md:text-xl"
              style={{ transitionDelay: "400ms" }}
            >
              {meData?.short_description}
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center md:w-1/2 md:items-end">
            <div className="scroll-reveal" style={{ transitionDelay: "0ms" }}>
              <img
                className="aspect-square w-48 rounded-full object-cover object-top shadow-lg transition hover:grayscale md:aspect-2/3 md:w-80 md:rounded-md lg:w-96"
                src="/images/me/profile.webp"
                alt="profile"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="flex h-full w-full snap-start flex-col items-center justify-center gap-6 py-12 md:flex-row md:gap-10"
        >
          <div className="flex w-full flex-col items-center justify-center gap-3 text-center md:w-1/2 md:items-start md:gap-4 md:text-left">
            <h1
              className="scroll-reveal text-4xl font-bold text-(--foreground) md:text-5xl lg:text-8xl"
              style={{ transitionDelay: "0ms" }}
            >
              About Me
            </h1>
            <p
              className="scroll-reveal max-w-3xs text-sm text-(--primary) md:max-w-none md:text-xl lg:text-2xl"
              style={{ transitionDelay: "100ms" }}
            >
              Pengenalan singkat tentang saya dan minat saya.
            </p>
            <div
              className="scroll-reveal-scale mt-2 text-sm md:mt-4 md:text-xl lg:text-2xl"
              style={{ transitionDelay: "200ms" }}
            >
              <a
                href="/about"
                className="inline-block w-max rounded-md bg-(--accent)/20 px-3 py-1.5 font-semibold text-(--accent) transition hover:bg-(--accent) hover:text-(--background) md:px-6 md:py-2.5"
              >
                Selengkapnya
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center md:w-1/2 md:items-end">
            <div
              className="scroll-reveal flex w-full flex-col items-end justify-center"
              style={{ transitionDelay: "0ms" }}
            >
              <img
                src="/images/me/about-img.webp"
                alt="about"
                className="aspect-video w-full max-w-md rounded-md object-cover shadow-lg transition hover:grayscale md:aspect-4/5 md:w-3/4 md:max-w-none"
              />
            </div>
          </div>
        </section>

        <section
          id="project"
          className="flex h-full w-full snap-start flex-col items-center justify-center gap-6 py-12 md:flex-row md:gap-10"
        >
          <div className="flex w-full flex-col items-center justify-center gap-3 text-center md:w-1/2 md:items-start md:gap-4 md:text-left">
            <h1
              className="scroll-reveal text-4xl leading-tight font-bold text-(--foreground) md:text-5xl lg:text-8xl"
              style={{ transitionDelay: "0ms" }}
            >
              My Projects
            </h1>
            <p
              className="scroll-reveal max-w-3xs text-sm text-(--primary) md:max-w-none md:text-xl lg:text-2xl"
              style={{ transitionDelay: "100ms" }}
            >
              Ini adalah beberapa proyek yang telah saya buat.
            </p>
            <div
              className="scroll-reveal-scale mt-2 text-sm md:mt-4 md:text-xl lg:text-2xl"
              style={{ transitionDelay: "200ms" }}
            >
              <a
                href="/project"
                className="inline-block w-max rounded-md bg-(--accent)/20 px-3 py-1.5 font-semibold text-(--accent) transition hover:bg-(--accent) hover:text-(--background) md:px-6 md:py-2.5"
              >
                Selengkapnya
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center md:w-1/2 md:items-end">
            <div
              className="scroll-reveal flex w-full flex-col items-end justify-center"
              style={{ transitionDelay: "0ms" }}
            >
              <img
                src="/images/me/project-img.webp"
                alt="my project"
                className="aspect-video w-full max-w-md rounded-md object-cover shadow-lg transition hover:grayscale md:aspect-4/5 md:w-3/4 md:max-w-none"
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="flex h-full w-full snap-start flex-col items-center justify-center gap-6 py-12 md:flex-row md:gap-10"
        >
          <div className="flex w-full flex-col items-center justify-center gap-3 text-center md:w-1/2 md:items-start md:gap-4 md:text-left">
            <h1
              className="scroll-reveal text-4xl leading-tight font-bold text-(--foreground) md:text-5xl lg:text-8xl"
              style={{ transitionDelay: "0ms" }}
            >
              Get In Touch
            </h1>
            <p
              className="scroll-reveal max-w-3xs text-sm text-(--primary) md:max-w-none md:text-xl lg:text-2xl"
              style={{ transitionDelay: "100ms" }}
            >
              Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan
              atau hanya ingin menyapa.
            </p>
            <div className="mt-4 flex w-full flex-wrap justify-center gap-3 md:justify-start md:gap-4">
              {meData?.email && (
                <div
                  className="scroll-reveal-scale"
                  style={{ transitionDelay: "200ms" }}
                >
                  <a
                    href={`mailto:${meData.email}`}
                    className="group flex rounded-xl border border-(--primary)/10 bg-(--card) p-3 shadow-sm transition hover:-translate-y-1 hover:border-(--accent) hover:shadow-(--accent)/20 md:p-4"
                  >
                    <MdEmail className="size-6 text-(--primary) transition group-hover:text-(--accent) md:size-8" />
                  </a>
                </div>
              )}
              {meData?.github && (
                <div
                  className="scroll-reveal-scale"
                  style={{ transitionDelay: "250ms" }}
                >
                  <a
                    href={meData.github}
                    className="group flex rounded-xl border border-(--primary)/10 bg-(--card) p-3 shadow-sm transition hover:-translate-y-1 hover:border-(--accent) hover:shadow-(--accent)/20 md:p-4"
                  >
                    <FaGithub className="size-6 text-(--primary) transition group-hover:text-(--accent) md:size-8" />
                  </a>
                </div>
              )}
              {meData?.linkedin && (
                <div
                  className="scroll-reveal-scale"
                  style={{ transitionDelay: "300ms" }}
                >
                  <a
                    href={meData.linkedin}
                    className="group flex rounded-xl border border-(--primary)/10 bg-(--card) p-3 shadow-sm transition hover:-translate-y-1 hover:border-(--accent) hover:shadow-(--accent)/20 md:p-4"
                  >
                    <FaLinkedin className="size-6 text-(--primary) transition group-hover:text-(--accent) md:size-8" />
                  </a>
                </div>
              )}
              {meData?.facebook && (
                <div
                  className="scroll-reveal-scale"
                  style={{ transitionDelay: "350ms" }}
                >
                  <a
                    href={meData.facebook}
                    className="group flex rounded-xl border border-(--primary)/10 bg-(--card) p-3 shadow-sm transition hover:-translate-y-1 hover:border-(--accent) hover:shadow-(--accent)/20 md:p-4"
                  >
                    <FaFacebookF className="size-6 text-(--primary) transition group-hover:text-(--accent) md:size-8" />
                  </a>
                </div>
              )}
              {meData?.instagram && (
                <div
                  className="scroll-reveal-scale"
                  style={{ transitionDelay: "400ms" }}
                >
                  <a
                    href={meData.instagram}
                    className="group flex rounded-xl border border-(--primary)/10 bg-(--card) p-3 shadow-sm transition hover:-translate-y-1 hover:border-(--accent) hover:shadow-(--accent)/20 md:p-4"
                  >
                    <FaInstagram className="size-6 text-(--primary) transition group-hover:text-(--accent) md:size-8" />
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center md:w-1/2 md:items-end">
            <div
              className="scroll-reveal flex w-full flex-col items-end justify-center"
              style={{ transitionDelay: "0ms" }}
            >
              <img
                id="contact-img"
                src="/images/me/setup.webp"
                alt="my setup"
                className="aspect-video w-full max-w-md rounded-md object-cover shadow-lg transition hover:grayscale md:aspect-4/5 md:w-3/4 md:max-w-none"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default LandingPage
