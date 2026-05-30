"use client";

import { Share2 } from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
  return (
    <button
      onClick={() =>
        navigator.share
          ? navigator.share({ title, url: window.location.href })
          : navigator.clipboard
              .writeText(window.location.href)
              .then(() => alert("Enlace copiado"))
      }
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 border border-neutral-300 hover:bg-neutral-50 transition-colors"
    >
      <Share2 className="h-4 w-4" />
      Compartir
    </button>
  );
}