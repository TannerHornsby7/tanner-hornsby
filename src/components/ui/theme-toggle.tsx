"use client"
 
import * as React from "react"
// import sun and moon icons from lucide-react
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
 
  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), [])
 
  if (!mounted) return null
 
  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </Button>
  )
}