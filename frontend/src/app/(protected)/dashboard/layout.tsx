// src/app/(protected)/layout.tsx
import { getServerSession } from "next-auth";
import DashboardShell from "./dashboard-shell";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  // Middleware already guarantees a session exists
  return <DashboardShell session={session}>{children}</DashboardShell>;
}
