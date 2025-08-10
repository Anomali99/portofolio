import React from "react"
import Header from "@/components/header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-start overflow-y-auto bg-(--background)">
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout
