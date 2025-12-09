import React from "react"
import Header from "@/components/header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="no-scrollbar flex h-dvh w-dvw flex-col items-center justify-start overflow-y-auto bg-(--background)">
      <Header />
      <div className="w-full max-w-full px-4 md:px-8 lg:max-w-7xl lg:px-0">
        {children}
      </div>
    </div>
  )
}

export default Layout
