"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="p-10">
        <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
        <p className="mt-2 text-gray-700">
          We hit an unexpected issue. Try again or return to the dashboard.
        </p>

        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
