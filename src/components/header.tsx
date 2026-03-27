import React, { useEffect, useState } from "react"
import { useLottie } from "lottie-react"
import darkModeAnimation from "@/assets/animation/dark-mode-toggle.json"
import { useTheme } from "@/context/theme-context"
import ThemeSwitcher from "@/components/theme-switcher"

const Header: React.FC = () => {
  const { isLight, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="absolute top-0 z-10 w-full bg-(--background) px-4 py-4 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-semibold text-(--foreground)">
            Anomali99
          </h1>

          <nav className="hidden gap-5 md:flex md:flex-row">
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

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeSwitcher />

          <div
            onClick={handleToggle}
            className="flex h-10 w-10 cursor-pointer items-center justify-center"
          >
            {View}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-2 flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`h-[2px] w-6 bg-(--foreground) transition-all duration-300 ${isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] w-6 bg-(--foreground) transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] w-6 bg-(--foreground) transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`mx-auto w-full max-w-7xl overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "mt-4 max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 border-t border-(--primary)/20 pt-4 pb-2">
          <a
            href="/#home"
            onClick={closeMenu}
            className="block text-lg text-(--primary) hover:text-(--accent) hover:underline"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={closeMenu}
            className="block text-lg text-(--primary) hover:text-(--accent) hover:underline"
          >
            About
          </a>
          <a
            href="/project"
            onClick={closeMenu}
            className="block text-lg text-(--primary) hover:text-(--accent) hover:underline"
          >
            Project
          </a>
          <a
            href="/#contact"
            onClick={closeMenu}
            className="block text-lg text-(--primary) hover:text-(--accent) hover:underline"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
