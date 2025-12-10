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
  title: "Archivo Cultural | Memoria y Resistencia",
  description: "Archivo digital para la preservación y difusión de material artístico, documentos, fotografías y textos de movimientos culturales contemporáneos.",
  keywords: "archivo, cultura, arte, memoria, documentos, fotografía, resistencia",
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
