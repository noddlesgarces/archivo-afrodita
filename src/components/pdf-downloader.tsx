"use client";

import { useState } from "react";

/**
 * Tipo mínimo que usa este componente.
 * Ajusta/expande si tu dato real tiene más campos.
 */
type PDFDocumentLite = {
  title: string;
  downloadUrl: string;
  fileName?: string; // opcional: si quieres forzar un nombre distinto
};

export default function PdfDownloader({
  document: pdf,
}: {
  document: PDFDocumentLite;
}) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    // Evita ejecutar en SSR
    if (typeof window === "undefined") return;

    try {
      setDownloading(true);

      // ⚠️ ¡OJO!: usamos window.document para no chocar con la prop "document"
      const a = window.document.createElement("a");
      a.href = pdf.downloadUrl;
      a.download = `${pdf.fileName ?? pdf.title}.pdf`;
      a.rel = "noopener";

      window.document.body.appendChild(a);
      a.click();
      window.document.body.removeChild(a);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={downloading}
      className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 hover:bg-neutral-100 disabled:opacity-60 disabled:cursor-not-allowed"
      aria-label={`Descargar ${pdf.fileName ?? pdf.title}.pdf`}
    >
      {downloading ? "Preparando…" : "Descargar PDF"}
    </button>
  );
}
