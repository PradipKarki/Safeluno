"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  async function loginTestUser() {
    const res = await signIn("credentials", {
      username: "Test User",
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-semibold">Sign in to Safeluno</h1>

      <button
        onClick={loginTestUser}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Sign in as Test User
      </button>

      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Sign in with Google
      </button>

      <button
        onClick={() => signIn("apple")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Sign in with Apple
      </button>
    </div>
  );
}
