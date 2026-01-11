"use client";

import InstallButton from "@/components/InstallButton";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className="p-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Safeluno</h1>
      <p className="text-gray-600">Your secure digital vault.</p>

      <button
        onClick={() => signIn()}
        className="px-4 py-2 bg-blue-600 text-white rounded w-fit"
      >
        Sign in
      </button>
      <InstallButton />
    </main>
  );
}
