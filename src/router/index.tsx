import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import {
  aboutRoute,
  homeRoute,
  projectDetailRoute,
  projectsRoute,
} from "@/router/routes"

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    aboutRoute,
    projectsRoute,
    projectDetailRoute,
  ]),
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export function Router() {
  return <RouterProvider router={router} />
}
