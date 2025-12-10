"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/navigation";
import { Search } from "lucide-react";
import {
  archivoSections,
  type Section,
  type SectionImage,
} from "@/content/archivoSindical";

// 💡 FIX APLICADO: Asegura que la ruta devuelva siempre una STRING válida ("" si es null/undefined)
const ensureLeadingSlash = (path: string | undefined): string => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("//")) return path;
  return path.startsWith("/") ? path : `/${path}`;
};

type ImageHit = {
  slug: string; // sección
  sectionTitle: string; // nombre visible de la sección
  index: number; // índice dentro de la sección
  src: string; // url miniatura (usa poster si es video)
  title: string; // título de la imagen
  media?: "image" | "video";
  poster?: string;
};

// Mini helper: si es video, usa poster; si no, usa src
function thumbFor(img: { src: string; media?: string; poster?: string }) {
  return img.media === "video" ? (img.poster || img.src) : img.src;
}

export default function ArchivoPage() {
  const [q, setQ] = useState("");

  // ✅ CORREGIDO: Ya no usamos normalizeSection, lo hacemos directamente aquí
  const sectionsNormalized = useMemo<Section[]>(() => {
    return archivoSections.map((section) => ({
      ...section,
      images: section.images.map((img) => {
        const isVideo = /\.mp4(\?.*)?$/i.test(img.src);
        let poster = img.poster;
        
        // Si es video y no tiene poster, intentar inferir uno
        if (isVideo && !poster) {
          poster = img.src.replace(/\.mp4(\?.*)?$/i, ".png");
        }
        
        return {
          ...img,
          media: isVideo ? "video" : (img.media ?? "image"),
          poster,
        };
      }),
    }));
  }, []);

  // Resultados de imágenes por TÍTULO (case-insensitive)
  const imageHits: ImageHit[] = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];

    const hits: ImageHit[] = [];
    for (const sec of sectionsNormalized) {
      sec.images.forEach((img: SectionImage, idx: number) => {
        const t = (img.title || "").toLowerCase();
        if (t.includes(term)) {
          // 💡 FIX APLICADO: Aseguramos que la ruta comience con /
          const safeSrc = ensureLeadingSlash(thumbFor(img)); 

          hits.push({
            slug: sec.slug,
            sectionTitle: sec.title,
            index: idx,
            src: safeSrc, // <-- Usamos la ruta corregida y segura
            title: img.title || "Imagen",
            media: img.media,
            poster: img.poster,
          });
        }
      });
    }
    return hits;
  }, [q, sectionsNormalized]);

  // Para la vista de tarjetas de secciones (cuando no hay búsqueda)
  const sectionCount = sectionsNormalized.length;

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Header (misma estructura que te gustaba) */}
        <div className="mb-12 fade-in">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Archivo Sindical
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            El Fondo Sindical del Archivo Histórico del Sindicato Afrodita está conformado por cerca de 1250 
            documentos físicos entre los que se pueden encontrar cartas, ordenanzas, resoluciones, libros de actas, 
            libros de cuentas, prensa y otros documentos en papel, fotografías y videos, que dejan huella material de 
            distintos ciclos y etapas de la agrupación.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            Aquí compartimos una selección de documentos que dan cuenta de los antecedentes y la conformación de 
            los primeros años de vida del sindicato Afrodita, que hemos circunscrito desde el 2000 hasta el 2007, año 
            en el que logran la concesión de la sede actual ubicada en avenida España, en la ciudad de Valparaíso.  
          </p>
        </div>

        {/* Buscador */}
        <div className="mb-10 border-b border-neutral-200 pb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar por título de imagen…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none text-sm bg-white"
              />
            </div>
            <button
              onClick={() => setQ("")}
              className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Limpiar búsqueda
            </button>
          </div>

          <div className="text-sm text-neutral-500">
            {q
              ? <>Resultados de imágenes: <strong>{imageHits.length}</strong></>
              : <>Secciones disponibles: <strong>{sectionCount}</strong></>}
          </div>
        </div>

        {/* Si hay query → mostrar resultados de IMÁGENES; si no → tarjetas de SECCIONES */}
        {q ? (
          <>
            <h2 className="text-base uppercase tracking-wide text-neutral-500 mb-4">Resultados</h2>
            {imageHits.length === 0 ? (
              <p className="text-neutral-500">No se encontraron imágenes con ese título.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {imageHits.map((hit, idx) => (
                  <Link
                    key={`${hit.slug}-${hit.index}-${idx}`}
                    href={`/archivo/${hit.slug}#img-${hit.index}`}
                    className="group fade-in"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <div className="aspect-[3/4] relative overflow-hidden bg-neutral-100 mb-4 rounded-md">
                      <Image
                        src={hit.src}
                        alt={hit.title}
                        fill
                        className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                        <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm mb-2">{hit.title}</p>
                          <p className="text-xs leading-relaxed">{hit.sectionTitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-serif font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                        {hit.title}
                      </h3>
                      <span className="inline-block px-2 py-1 text-xs bg-neutral-200 text-neutral-700">
                        {hit.sectionTitle}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-base uppercase tracking-wide text-neutral-500 mb-4">Secciones</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {sectionsNormalized.map((sec: Section, index: number) => (
                <Link
                  key={sec.slug}
                  href={`/archivo/${sec.slug}`}
                  className="group fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-neutral-100 mb-4 rounded-md">
                    <Image
                      src={ensureLeadingSlash(sec.cover)} // 💡 FIX APLICADO: Aseguramos la barra en la portada
                      alt={sec.title}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                      <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm mb-2">
                          {sec.images.length} imagen{sec.images.length === 1 ? "" : "es"}
                        </p>
                        {sec.intro && (
                          <p className="text-xs leading-relaxed line-clamp-3">{sec.intro}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      {sec.title}
                    </h3>
                    <span className="inline-block px-2 py-1 text-xs bg-neutral-200 text-neutral-700">
                      Sección del archivo
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Sin backend por ahora */}
        {/* <CategoryHero slug="archivo" />
        <CategoryFeed category="archivo" title="Archivo" /> */}
      </main>
    </div>
  );
}