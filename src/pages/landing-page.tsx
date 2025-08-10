import React from "react"
import Layout from "@/components/layout"

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <section
        id="home"
        className="flex h-dvh w-full flex-col items-center justify-center"
      >
        home
      </section>
      <section
        id="about"
        className="flex h-dvh w-full flex-col items-center justify-center"
      >
        about
      </section>
      <section
        id="project"
        className="flex h-dvh w-full flex-col items-center justify-center"
      >
        project
      </section>
      <section
        id="contact"
        className="flex h-dvh w-full flex-col items-center justify-center"
      >
        contact
      </section>
    </Layout>
  )
}

export default LandingPage
