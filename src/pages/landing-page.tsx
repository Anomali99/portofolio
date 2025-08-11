import React from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa6"
import Layout from "@/components/layout"
import { getMeData } from "@/data"
import { languageIcons } from "@/utils/icons-map"

const LandingPage: React.FC = () => {
  const meData = getMeData()

  return (
    <Layout>
      <section
        id="home"
        className="flex h-dvh w-full flex-row items-center justify-center"
      >
        <div className="flex h-full w-1/2 flex-col justify-center gap-4">
          <h3 className="text-5xl font-semibold text-(--accent)">
            {meData?.name}
          </h3>
          <h1 className="text-9xl font-bold text-(--foreground)">
            {meData?.title}
          </h1>
          <div className="flex w-full flex-row gap-2.5">
            {languageIcons.map((item) => {
              const Icon = item.icon
              return (
                <div className="rounded-md bg-(--accent)/20 p-1.5">
                  <Icon className="size-10 text-(--accent)" />
                </div>
              )
            })}
          </div>
          <p className="text-2xl text-(--primary)">
            {meData?.short_description}
          </p>
        </div>
        <div className="flex h-full w-1/2 flex-col items-end justify-center">
          <img
            className="aspect-2/3 w-96 rounded-md object-cover grayscale transition hover:grayscale-0"
            src="/images/me/profile.jpeg"
            alt="profile"
          />
        </div>
      </section>
      <section
        id="about"
        className="flex h-dvh w-full flex-row items-center justify-center"
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
            src="/images/me/about-img.jpeg"
            alt=""
            className="aspect-4/5 w-3/4 object-cover grayscale hover:grayscale-0"
          />
        </div>
      </section>
      <section
        id="project"
        className="flex h-dvh w-full flex-row items-center justify-center"
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
            src="/images/me/project-img.jpg"
            alt="my project"
            className="aspect-4/5 w-3/4 object-cover grayscale hover:grayscale-0"
          />
        </div>
      </section>
      <section
        id="contact"
        className="flex h-dvh w-full flex-row items-center justify-center"
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
                href={meData.email}
                className="rounded-md bg-(--accent)/20 p-1.5"
              >
                <MdEmail className="size-10 text-(--accent)" />
              </a>
            )}
            {meData?.github && (
              <a
                href={meData.github}
                className="rounded-md bg-(--accent)/20 p-1.5"
              >
                <FaGithub className="size-10 text-(--accent)" />
              </a>
            )}
            {meData?.linkedin && (
              <a
                href={meData.linkedin}
                className="rounded-md bg-(--accent)/20 p-1.5"
              >
                <FaLinkedin className="size-10 text-(--accent)" />
              </a>
            )}
            {meData?.facebook && (
              <a
                href={meData.facebook}
                className="rounded-md bg-(--accent)/20 p-1.5"
              >
                <FaFacebookF className="size-10 text-(--accent)" />
              </a>
            )}
            {meData?.instagram && (
              <a
                href={meData.instagram}
                className="rounded-md bg-(--accent)/20 p-1.5"
              >
                <FaInstagram className="size-10 text-(--accent)" />
              </a>
            )}
          </div>
        </div>
        <div className="flex h-full w-1/2 flex-col items-end justify-center">
          <img
            src="/images/me/setup.jpeg"
            alt="my setup"
            className="aspect-4/5 w-3/4 object-cover grayscale hover:grayscale-0"
          />
        </div>
      </section>
    </Layout>
  )
}

export default LandingPage
