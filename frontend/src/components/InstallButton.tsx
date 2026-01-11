"use client";

import { useEffect, useState } from "react";

export default function InstallButton() {
  const [promptEvent, setPromptEvent] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!promptEvent) return null;

  return (
    <button
      onClick={() => {
        promptEvent.prompt();
        setPromptEvent(null);
      }}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Install Safeluno
    </button>
  );
}
