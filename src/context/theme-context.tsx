import React, { createContext, useContext, useEffect, useState } from "react"

export type Theme = "slate" | "zinc" | "stone" | "rose" | "violet" | "amber"

interface ThemeContextType {
  isLight: boolean
  toggleTheme: () => void
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme")
      if (storedTheme) {
        return storedTheme === "light"
      }
      return false
    }
    return false
  })

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("color-theme")
      if (
        stored === "slate" ||
        stored === "zinc" ||
        stored === "stone" ||
        stored === "rose" ||
        stored === "violet" ||
        stored === "amber"
      ) {
        return stored
      }
    }
    return "slate"
  })

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }, [isLight])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("color-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setIsLight((prev) => !prev)
  }

  const setTheme = (t: Theme) => {
    setThemeState(t)
  }

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
