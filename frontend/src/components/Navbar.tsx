'use client'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'

export default function Navbar({ user }: { user: User }) {
  return (
    <nav className="flex justify-between p-4 border-b">
      <span>Welcome, {user?.name}</span>
      <button
        onClick={() => signOut({ callbackUrl: '/signin' })}
        className="text-red-500"
      >
        Logout
      </button>
    </nav>
  )
}
