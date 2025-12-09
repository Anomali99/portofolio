import React, { useEffect } from "react"
import { useLottie } from "lottie-react"
import darkModeAnimation from "@/assets/animation/dark-mode-toggle.json"
import { useTheme } from "@/context/theme-context"
import ThemeSwitcher from "@/components/theme-switcher"

const Header: React.FC = () => {
  const { isLight, toggleTheme } = useTheme()

  const { View, playSegments, goToAndStop } = useLottie({
    animationData: darkModeAnimation,
    loop: false,
    autoplay: false,
  })

  useEffect(() => {
    if (isLight) {
      goToAndStop(0, true)
    } else {
      goToAndStop(90, true)
    }
  }, [])

  const handleToggle = () => {
    if (isLight) {
      playSegments([0, 90], true)
    } else {
      playSegments([90, 180], true)
    }
    toggleTheme()
  }

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
      <div className="flex flex-row items-center gap-4">
        <ThemeSwitcher />
        <div onClick={handleToggle} className="h-10 cursor-pointer">
          {View}
        </div>
      </div>
    </header>
  )
}

export default Header
