import React, { useEffect, useState } from "react"
import { useLottie } from "lottie-react"
import darkModeAnimation from "@/assets/animation/dark-mode-toggle.json"

const Header: React.FC = () => {
  const [isLight, setIsLight] = useState(true)

  const { View, playSegments } = useLottie({
    animationData: darkModeAnimation,
    loop: false,
    autoplay: false,
  })

  const toggleTheme = () => {
    if (isLight) {
      playSegments([0, 90], true)
    } else {
      playSegments([90, 180], true)
    }
    setIsLight((prev) => !prev)
  }

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }, [isLight])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsLight(!e.matches)
      playSegments(!e.matches ? [90, 180] : [0, 90], true)
    }
    setIsLight(!mediaQuery.matches)
    playSegments(!mediaQuery.matches ? [90, 180] : [0, 90], true)

    mediaQuery.addEventListener("change", handleThemeChange)

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange)
    }
  }, [])

  return (
    <header className="absolute top-0 z-10 flex w-full max-w-full flex-row items-center justify-between bg-(--background) px-4 py-4 md:px-8 lg:max-w-7xl lg:px-0">
      <div className="flex flex-row items-center gap-10">
        <h1 className="text-2xl font-semibold text-(--foreground)">
          Anomali99
        </h1>
        <nav className="flex flex-row gap-5">
          <a
            href="/#home"
            className="text-xl text-(--primary) hover:text-(--accent) hover:underline"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-xl text-(--primary) hover:text-(--accent) hover:underline"
          >
            About
          </a>
          <a
            href="/project"
            className="text-xl text-(--primary) hover:text-(--accent) hover:underline"
          >
            Project
          </a>
          <a
            href="/#contact"
            className="text-xl text-(--primary) hover:text-(--accent) hover:underline"
          >
            Contact
          </a>
        </nav>
      </div>
      <div onClick={toggleTheme} className="h-10 cursor-pointer">
        {View}
      </div>
    </header>
  )
}

export default Header
