import React, { useLayoutEffect, useRef } from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa6"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from "@/components/layout"
import { getMeData } from "@/data"
import { languageIcons } from "@/utils/icons-map"

gsap.registerPlugin(ScrollTrigger)

const LandingPage: React.FC = () => {
  const meData = getMeData()
  const comp = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
          scroller: comp.current,
        },
      })

      tl.from("#home h3", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          "#home h1",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          "#home .icons-container > div",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )
        .from(
          "#home p",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .fromTo(
          "#home img",
          {
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=1",
        )

      gsap.from("#about > div", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#about",
          start: "top 60%",
          toggleActions: "play reverse play reverse",
          scroller: comp.current,
        },
      })

      gsap.from("#project > div", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#project",
          start: "top 60%",
          toggleActions: "play reverse play reverse",
          scroller: comp.current,
        },
      })

      gsap.from("#contact > div", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 60%",
          toggleActions: "play reverse play reverse",
          scroller: comp.current,
        },
      })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <Layout>
      <div
        ref={comp}
        className="no-scrollbar h-[calc(100vh-3.5rem)] w-full snap-y snap-mandatory overflow-y-scroll scroll-auto"
      >
        <section
          id="home"
          className="flex h-full w-full snap-start flex-row items-center justify-center"
        >
          <div className="flex h-full w-1/2 flex-col justify-center gap-4">
            <h3 className="text-5xl font-semibold text-(--accent)">
              {meData?.name}
            </h3>
            <h1 className="text-9xl font-bold text-(--foreground)">
              {meData?.title}
            </h1>
            <div className="icons-container flex w-full flex-row gap-2.5">
              {languageIcons.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-(--accent) bg-(--card) p-4 shadow-(--accent)/20"
                  >
                    <Icon className="size-8 text-(--accent)" />
                  </div>
                )
              })}
            </div>
            <p className="text-justify text-2xl text-(--primary)">
              {meData?.short_description}
            </p>
          </div>
          <div className="flex h-full w-1/2 flex-col items-end justify-center">
            <img
              className="aspect-2/3 w-96 rounded-md object-cover transition hover:grayscale"
              src="/images/me/profile.webp"
              alt="profile"
            />
          </div>
        </section>
        <section
          id="about"
          className="flex h-full w-full snap-start flex-row items-center justify-center"
        >
          <div className="flex h-full w-1/2 flex-col justify-center gap-4">
            <h1 className="text-8xl font-bold text-(--foreground)">About Me</h1>
            <p className="text-2xl text-(--primary)">
              Pengenalan singkat tentang saya dan minat saya.
            </p>
            <button className="w-max rounded-md bg-(--accent)/20 px-3 py-1.5 font-semibold text-(--accent) hover:bg-(--accent) hover:text-(--background)">
              <a href="/about">Selengkapnya</a>
            </button>
          </div>
          <div className="flex h-full w-1/2 flex-col items-end justify-center">
            <img
              src="/images/me/about-img.webp"
              alt=""
              className="aspect-4/5 w-3/4 rounded-md object-cover transition hover:grayscale"
            />
          </div>
        </section>
        <section
          id="project"
          className="flex h-full w-full snap-start flex-row items-center justify-center"
        >
          <div className="flex h-full w-1/2 flex-col justify-center gap-4">
            <h1 className="text-8xl font-bold text-(--foreground)">
              My Projects
            </h1>
            <p className="text-2xl text-(--primary)">
              Ini adalah beberapa proyek yang telah saya buat.
            </p>
            <button className="w-max rounded-md bg-(--accent)/20 px-3 py-1.5 font-semibold text-(--accent) hover:bg-(--accent) hover:text-(--background)">
              <a href="/project">Selengkapnya</a>
            </button>
          </div>
          <div className="flex h-full w-1/2 flex-col items-end justify-center">
            <img
              src="/images/me/project-img.webp"
              alt="my project"
              className="aspect-4/5 w-3/4 rounded-md object-cover transition hover:grayscale"
            />
          </div>
        </section>
        <section
          id="contact"
          className="flex h-full w-full snap-start flex-row items-center justify-center"
        >
          <div className="flex h-full w-1/2 flex-col justify-center gap-4">
            <h1 className="text-8xl font-bold text-(--foreground)">
              Get In Touch
            </h1>
            <p className="text-2xl text-(--primary)">
              Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan
              atau hanya ingin menyapa.
            </p>
            <div className="flex w-full flex-row gap-2.5">
              {meData?.email && (
                <a
                  href={`mailto:${meData.email}`}
                  className="group rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition group-hover:-translate-y-1 group-hover:border-(--accent) group-hover:shadow-(--accent)/20"
                >
                  <MdEmail className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                </a>
              )}
              {meData?.github && (
                <a
                  href={meData.github}
                  className="group rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition group-hover:-translate-y-1 group-hover:border-(--accent) group-hover:shadow-(--accent)/20"
                >
                  <FaGithub className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                </a>
              )}
              {meData?.linkedin && (
                <a
                  href={meData.linkedin}
                  className="group rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition group-hover:-translate-y-1 group-hover:border-(--accent) group-hover:shadow-(--accent)/20"
                >
                  <FaLinkedin className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                </a>
              )}
              {meData?.facebook && (
                <a
                  href={meData.facebook}
                  className="group rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition group-hover:-translate-y-1 group-hover:border-(--accent) group-hover:shadow-(--accent)/20"
                >
                  <FaFacebookF className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                </a>
              )}
              {meData?.instagram && (
                <a
                  href={meData.instagram}
                  className="group rounded-xl border border-(--primary)/10 bg-(--card) p-4 shadow-sm transition group-hover:-translate-y-1 group-hover:border-(--accent) group-hover:shadow-(--accent)/20"
                >
                  <FaInstagram className="size-8 text-(--primary) transition group-hover:text-(--accent)" />
                </a>
              )}
            </div>
          </div>
          <div className="flex h-full w-1/2 flex-col items-end justify-center">
            <img
              src="/images/me/setup.webp"
              alt="my setup"
              className="aspect-4/5 w-3/4 rounded-md object-cover transition hover:grayscale"
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default LandingPage
