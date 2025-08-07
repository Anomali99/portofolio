import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "@/router"
import LandingPage from "@/pages/landing-page"
import AboutPage from "@/pages/about-page"
import ProjectsPage from "@/pages/projects-page"

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
})

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
})

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/project",
  component: ProjectsPage,
})
