"use client";

import { use, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { getSection, SectionImage, getYoutubeId } from "@/content/archivoSindical";

const PLACEHOLDER =
  "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IBQAAAAQAAAAMwAAQUxQSAwAAAAQAgCdASoQABAABUB8JbACdDBgABAAA=";

const shimmer = (w: number, h: number) =>
  `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f3f4f6" offset="20%" />
          <stop stop-color="#e5e7eb" offset="50%" />
          <stop stop-color="#f3f4f6" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f3f4f6" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
    </svg>`
  ).toString("base64")}`;

const ensureLeadingSlash = (path: string | undefined): string => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("//")) return path;
  return path.startsWith("/") ? path : `/${path}`;
};

const isValidImageSrc = (src: string): boolean => {
  if (!src || src === "" || src === PLACEHOLDER) return false;
  return src.startsWith("/") || src.startsWith("http");
};

type ModalMedia =
  | { kind: "image"; src: string; title?: string; poster?: string }
  | { kind: "video"; src: string; poster?: string; title?: string };

export default function ArchivoSectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const section = getSection(slug);
  const [selected, setSelected] = useState<ModalMedia | null>(null);
  const [modalLoading, setModalLoading] = useState(false);
  const preloaded = useRef<Set<string>>(new Set());

  const preloadSrc = (src?: string) => {
    const safeSrc = ensureLeadingSlash(src);
    if (!safeSrc || safeSrc === "" || preloaded.current.has(safeSrc) || typeof window === "undefined") {
      return;
    }
    const img = new window.Image();
    img.src = safeSrc;
    preloaded.current.add(safeSrc);
  };

  const items = useMemo(() => {
    const data = section?.images ?? [];
    return data.map((it, idx) => {
      const isVideo = it.media === "video" || /\.mp4(\?.*)?$/i.test(it.src || "") || getYoutubeId(it.src) !== null;
      const rawSrc = isVideo ? (it.poster || it.src) : it.src;
      let thumb = ensureLeadingSlash(rawSrc);
      if (isVideo && it.poster) {
        const posterPath = ensureLeadingSlash(it.poster);
        thumb = isValidImageSrc(posterPath) ? posterPath : PLACEHOLDER;
      } else if (!isValidImageSrc(thumb)) {
        thumb = PLACEHOLDER;
      }
      const src = ensureLeadingSlash(it.src) || PLACEHOLDER;
      return {
        ...it,
        _idx: idx,
        _isVideo: isVideo,
        _thumb: thumb,
        _src: src,
      } as SectionImage & {
        _idx: number;
        _isVideo: boolean;
        _thumb: string;
        _src: string;
      };
    });
  }, [section]);

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!section || typeof window === "undefined") return;
    const match = /^#img-(\d+)$/.exec(window.location.hash);
    if (!match) return;
    const idx = parseInt(match[1], 10);
    const it = items[idx];
    if (!it) return;
    setModalLoading(true);
    if (it._isVideo) {
      const safePoster = ensureLeadingSlash(it.poster);
      const validPoster = isValidImageSrc(safePoster) ? safePoster : undefined;
      setSelected({ kind: "video", src: it._src, poster: validPoster, title: it.title });
    } else {
      preloadSrc(it._src);
      setSelected({ kind: "image", src: it._src, title: it.title, poster: it.poster });
    }
    const el = gridRef.current?.querySelector(`[data-idx="${idx}"]`);
    if (el && "scrollIntoView" in el) {
      (el as HTMLElement).scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [section, items]);

  if (!section) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-500">Sección no encontrada.</p>
      </div>
    );
  }

  const coverSrc = ensureLeadingSlash(section.cover) || PLACEHOLDER;

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/archivo" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            ← Volver a Archivo Sindical
          </Link>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
            {section.title}
          </h1>
          {section.intro && (
            <p className="text-lg text-neutral-600 mt-3 max-w-3xl">{section.intro}</p>
          )}
        </header>

        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-neutral-200 mb-10">
          <Image
            src={coverSrc}
            alt={section.title}
            fill
            className="object-cover content-auto"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={shimmer(1200, 500)}
            priority
          />
        </div>

        {items.length === 0 ? (
          <div className="rounded-xl border border-dashed p-10 text-center text-neutral-500 bg-white">
            Aún no hay imágenes en esta sección.
          </div>
        ) : (
          <section ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((it, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <button
                  data-idx={idx}
                  onMouseEnter={() => preloadSrc(it._isVideo ? it.poster : it._src)}
                  onFocus={() => preloadSrc(it._isVideo ? it.poster : it._src)}
                  onClick={() => {
                    setModalLoading(true);
                    if (it._isVideo) {
                      const safePoster = ensureLeadingSlash(it.poster);
                      const validPoster = isValidImageSrc(safePoster) ? safePoster : undefined;
                      setSelected({ kind: "video", src: it._src, poster: validPoster, title: it.title });
                    } else {
                      preloadSrc(it._src);
                      setSelected({ kind: "image", src: it._src, title: it.title, poster: it.poster });
                    }
                  }}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden bg-neutral-200 group"
                  aria-label={it.title ?? (it._isVideo ? "Video" : "Imagen")}
                >
                  <Image
                    id={`img-${idx}`}
                    src={it._thumb}
                    alt={it.title ?? section.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={shimmer(300, 400)}
                    loading={idx < 3 ? "eager" : "lazy"}
                    priority={idx < 3}
                  />
                  {it._isVideo && (
                    <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-1 rounded">
                      ▶ Video
                    </span>
                  )}
                </button>

                <div className="px-1">
                  {it.title && (
                    <h3 className="font-serif font-semibold text-neutral-900">{it.title}</h3>
                  )}
                  <div className="mt-1 text-sm leading-6 text-neutral-700 space-y-0.5">
                    {it.serie && <p><span className="text-neutral-500">Serie:</span> {it.serie}</p>}
                    {it.actividad && <p><span className="text-neutral-500">Actividad:</span> {it.actividad}</p>}
                    {it.fecha && <p><span className="text-neutral-500">Fecha:</span> {it.fecha}</p>}
                    {it.lugar && <p><span className="text-neutral-500">Lugar:</span> {it.lugar}</p>}
                    {it.productor && <p><span className="text-neutral-500">Productor:</span> {it.productor}</p>}
                    {it.descripcion && <p><span className="text-neutral-500">Descripción:</span> {it.descripcion}</p>}
                  </div>
                </div>
              </div>
            ))}
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
              {modalLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                </div>
              )}

              {selected.kind === "image" ? (
                <Image
                  src={selected.src || PLACEHOLDER}
                  alt={selected.title ?? "Vista ampliada"}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL={shimmer(800, 534)}
                  onLoad={() => setModalLoading(false)}
                />
              ) : (
                (() => {
                  const ytId = getYoutubeId(selected.src);
                  return ytId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${ytId}`}
                      className="w-full h-full"
                      allowFullScreen
                      onLoad={() => setModalLoading(false)}
                    />
                  ) : (
                    <video
                      src={selected.src}
                      poster={selected.poster}
                      controls
                      preload="metadata"
                      className="w-full h-full object-contain"
                      onLoadedData={() => setModalLoading(false)}
                    />
                  );
                })()
              )}

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