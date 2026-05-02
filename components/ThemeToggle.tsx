"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-200 portfolio-card portfolio-card-hover"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? <Sun className="h-4 w-4 accent-text" /> : <Moon className="h-4 w-4 accent-text" />}
    </button>
  )
}
