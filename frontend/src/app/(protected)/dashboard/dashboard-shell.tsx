'use client'

import { Session, User } from 'next-auth'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function DashboardShell({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar user={session.user as User} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
