"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { getFondo, FondoImage } from "@/content/fondosPersonales";

const shimmer = (w: number, h: number) =>
  `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${w}" height="${h}" fill="#f3f4f6"/>
    </svg>`
  ).toString("base64")}`;

export default function FondoPersonalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const fondo = getFondo(slug);
  const [selected, setSelected] = useState<FondoImage | null>(null);

  if (!fondo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-500">Fondo no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Volver */}
        <div className="mb-8">
          <Link
            href="/fondos-personales"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            ← Volver a Fondos Personales
          </Link>
        </div>

        {/* Título */}
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-10 uppercase tracking-wide">
          Fondo {fondo.nombre} {fondo.apellido}
        </h1>

        {/* Foto principal + Video */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Foto izquierda */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-200">
            <Image
              src={fondo.fotoPrincipal}
              alt={`${fondo.nombre} ${fondo.apellido}`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={shimmer(600, 800)}
              priority
            />
          </div>

          {/* Video YouTube derecha */}
          {fondo.videoYoutube && (
            <div className="flex items-center">
              <div className="w-full aspect-video rounded-lg overflow-hidden bg-neutral-900">
                <iframe
                  src={`https://www.youtube.com/embed/${fondo.videoYoutube}`}
                  title={`Video de ${fondo.nombre} ${fondo.apellido}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* Galería */}
        {fondo.images.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-8 border-t border-neutral-200 pt-8">
              Galería
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {fondo.images.map((img, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <button
                    onClick={() => setSelected(img)}
                    className="relative aspect-[3/4] rounded-lg overflow-hidden bg-neutral-200 group"
                    aria-label={img.title ?? "Imagen"}
                  >
                    <Image
                      src={img.src}
                      alt={img.title ?? `Imagen ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      placeholder="blur"
                      blurDataURL={shimmer(300, 400)}
                      loading={idx < 3 ? "eager" : "lazy"}
                    />
                  </button>
                  <div className="px-1 text-sm text-neutral-700 space-y-0.5">
                    {img.title && (
                      <p className="font-serif font-semibold text-neutral-900">{img.title}</p>
                    )}
                    {img.fecha && (
                      <p><span className="text-neutral-500">Fecha:</span> {img.fecha}</p>
                    )}
                    {img.descripcion && (
                      <p><span className="text-neutral-500">Descripción:</span> {img.descripcion}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative w-full max-w-5xl aspect-[3/2] bg-black rounded-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.title ?? "Vista ampliada"}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 bg-white/90 hover:bg-white text-neutral-900 text-xs px-2 py-1 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}