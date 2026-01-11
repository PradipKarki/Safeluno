"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardShell({ children, session }) {
  return (
    <div className="flex h-screen">
      <Sidebar user={session.user} />
      <div className="flex flex-col flex-1">
        <Navbar user={session.user} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
