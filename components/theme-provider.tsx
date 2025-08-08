'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="flex flex-col min-h-screen">{children}</div>
  }

  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="light" // Force light mode as default
      enableSystem={false} // Disable system preference detection
      storageKey="lian-tech-theme" // Unique key for localStorage
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}