export type User = {
  id: number
  name: string
  email: string
  password: string
  avatarUrl: string
}

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123", // In real life, never store plain passwords
    avatarUrl: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "mypassword",
    avatarUrl: "/avatar2.jpg",
  },
]
