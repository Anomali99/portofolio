import React, { useEffect, useRef, useState } from "react"
import { IoColorPalette } from "react-icons/io5"
import type { Theme } from "@/context/theme-context"
import { useTheme } from "@/context/theme-context"

interface ThemeOption {
  value: Theme
  label: string
  color: string
}

const themes: Array<ThemeOption> = [
  { value: "slate", label: "Slate", color: "rgb(71, 85, 105)" },
  { value: "zinc", label: "Zinc", color: "rgb(39, 39, 42)" },
  { value: "stone", label: "Stone", color: "rgb(120, 113, 108)" },
  { value: "rose", label: "Rose", color: "rgb(225, 29, 72)" },
  { value: "violet", label: "Violet", color: "rgb(124, 58, 237)" },
  { value: "amber", label: "Amber", color: "rgb(217, 119, 6)" },
]

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-(--card) text-(--foreground) shadow-md transition hover:bg-(--accent)/10"
        aria-label="Toggle theme menu"
      >
        <IoColorPalette size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 flex w-48 flex-col gap-1 rounded-xl border border-(--primary)/10 bg-(--card) p-2 shadow-xl">
          <span className="mb-2 px-2 text-xs font-semibold text-(--primary)/50 uppercase">
            Select Theme
          </span>
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value)
                setIsOpen(false)
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                theme === t.value
                  ? "bg-(--accent)/10 text-(--accent)"
                  : "text-(--foreground) hover:bg-(--primary)/5"
              }`}
            >
              <span
                className="h-4 w-4 rounded-full border border-black/10 shadow-sm"
                style={{ backgroundColor: t.color }}
              />
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher
