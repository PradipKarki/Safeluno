import { getServerSession } from 'next-auth'

import DashboardShell from './dashboard-shell'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  if (!session) {
    return null
  }
  return <DashboardShell session={session}>{children}</DashboardShell>
}
