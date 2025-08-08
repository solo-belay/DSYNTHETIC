// store/auth.ts
import { create } from 'zustand'

type User = {
  id: string
  name: string
  email: string
  avatarUrl: string
}

type AuthState = {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}))
