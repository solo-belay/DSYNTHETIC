'use client'

import { useTheme as useNextTheme } from 'next-themes'

export function useTheme() {
  const { theme, setTheme } = useNextTheme()
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return [theme === 'dark' ? 'dark' : 'light', toggleTheme] as const
}