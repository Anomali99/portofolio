import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "@/router"
import LandingPage from "@/pages/landing-page"
import AboutPage from "@/pages/about-page"
import ProjectsPage from "@/pages/projects-page"
import ProjectDetailPage from "@/pages/project-detail"
import DocumentPage from "@/pages/document-page"

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

export const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/project/$slug",
  component: ProjectDetailPage,
})

export const documentDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/project/$slug/document/$filename",
  component: DocumentPage,
})
