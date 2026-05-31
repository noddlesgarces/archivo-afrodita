import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Archivo Sindicato Afrodita",
  description: "Repositorio digital del Archivo histórico del Sindicato Afrodita de Valparaíso, selección de documentos y fotografías de la organización",
  openGraph: {
    title: "Archivo Sindicato Afrodita",
    description: "Repositorio digital del Archivo histórico del Sindicato Afrodita de Valparaíso, selección de documentos y fotografías de la organización",
    url: "https://archivo-afrodita-22ze.vercel.app",
    siteName: "Archivo Sindicato Afrodita",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://cdn.archivoafrodita.cl/imagenes/1.webp",
        width: 1200,
        height: 630,
        alt: "Archivo Sindicato Afrodita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archivo Sindicato Afrodita",
    description: "Repositorio digital del Archivo histórico del Sindicato Afrodita de Valparaíso",
    images: ["https://cdn.archivoafrodita.cl/imagenes/1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${crimsonText.variable}`}>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900 flex flex-col min-h-screen">
        <div className="flex-1">
          {children}
        </div>

        <footer className="py-12 border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="https://cdn.archivoafrodita.cl/imagenes/4.png"
                  alt="Gobierno de Chile"
                  width={260}
                  height={130}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center md:items-end gap-1">
                <p className="text-sm text-neutral-500 text-center md:text-right">
                  Proyecto financiado por el Fondo Nacional de Desarrollo Cultural y las Artes (FONDART)
                </p>
                <p className="text-xs text-neutral-400 text-center md:text-right">
                  © 2025 Sindicato Afrodita — Valparaíso, Chile | Contenido bajo licencia CC BY-NC 4.0
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}