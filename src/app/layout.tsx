import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
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
        url: "https://pub-60ba8de670c44a5ba2f735f42b706058.r2.dev/imagenes/1.webp",
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
    images: ["https://pub-60ba8de670c44a5ba2f735f42b706058.r2.dev/imagenes/1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${crimsonText.variable}`}>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
