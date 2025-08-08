'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  name: string
  email: string
  avatarUrl?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // A fake users database
  const users = [
    { name: 'John Doe', email: '', password: '', avatarUrl: '/placeholder-user.jpg' },
    // add more users here
  ]

  function login(email: string, password: string) {
    const found = users.find(u => u.email === email && u.password === password)
    if (found) {
      setUser(found)
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
