"use client";

import React, { useState, useEffect, useRef } from "react";
import Navigation from "@/components/navigation";
import Image from "next/image";

// Configuración R2
const R2 = "https://cdn.archivoafrodita.cl";

export const metadata = {
    title: "Fanzine — Archivo Sindicato Afrodita",
    description: "Material ampliado del fanzine del Sindicato Afrodita.",
};

// Solo los src, nada más
const galeria = [
    `${R2}/organizacion-sindical/1.webp`,
    `${R2}/organizacion-sindical/14.webp`,
    `${R2}/organizacion-sindical/22.webp`,
    `${R2}/organizacion-sindical/17.webp`,
    `${R2}/organizacion-sindical/24.webp`,
    `${R2}/organizacion-sindical/25.webp`,
    `${R2}/organizacion-sindical/26.webp`,
    `${R2}/organizacion-sindical/27.webp`,
    `${R2}/organizacion-sindical/28.webp`,
    `${R2}/organizacion-sindical/2.webp`,
    `${R2}/organizacion-sindical/4.webp`,
    `${R2}/organizacion-sindical/7.webp`,
    `${R2}/organizacion-sindical/10.webp`,
];

// Shimmer para placeholder
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

export default function FanzinePage(): React.ReactElement {
    const [selected, setSelected] = useState<string | null>(null);
    const [modalLoading, setModalLoading] = useState(true);
    const preloaded = useRef<Set<string>>(new Set());

    const preloadSrc = (src: string) => {
        if (preloaded.current.has(src) || typeof window === "undefined") return;
        const img = new window.Image();
        img.src = src;
        preloaded.current.add(src);
    };

    // Cerrar con Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelected(null);
                setModalLoading(true);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-neutral-50">
            <Navigation />

            <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="py-8 md:py-12 border-b border-neutral-200">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
                        Desde el fanzine · 2025
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4 leading-tight max-w-3xl">
                        Título del tema central del fanzine
                    </h1>
                    <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
                        Dos frases que sitúan al lector que llegó desde el papel. Qué va a
                        encontrar acá, por qué este material existe y qué lo conecta con lo
                        que ya leyó.
                    </p>
                </div>

                {/* PIEZAS SELECCIONADAS */}
                <section className="py-12 md:py-16">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8 pb-3 border-b border-neutral-200">
                        Piezas seleccionadas
                    </p>

                    {/* BLOQUE 1 */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 border-l-4 border-neutral-900 pl-4 md:pl-6">
                        <button
                            className="relative aspect-[4/3] bg-neutral-200 overflow-hidden group w-full text-left"
                            onClick={() => {
                                setModalLoading(true);
                                preloadSrc(galeria[0]);
                                setSelected(galeria[0]);
                            }}
                        >
                            <Image
                                src={galeria[0]}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                placeholder="blur"
                                blurDataURL={shimmer(600, 450)}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                                <div className="w-full bg-black/70 text-white text-xs px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="block font-medium">Ver detalle →</span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-4 py-2 tracking-wide pointer-events-none">
                                Título de la fotografía · Ciudad, año · Colección
                            </div>
                        </button>
                        <div className="pt-1">
                            <h2 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mb-3 leading-snug">
                                Nombre del evento, persona o momento retratado
                            </h2>
                            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                                Texto curatorial de dos a cuatro líneas.
                            </p>
                            <div className="mt-5 pt-4 border-t border-neutral-200 text-xs text-neutral-500 space-y-1">
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Fecha</span><span>[día mes año]</span></div>
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Colección</span><span>Fondo Sindical</span></div>
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Tipo</span><span>Fotografía analógica</span></div>
                            </div>
                        </div>
                    </div>

                    {/* BLOQUE 2 */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 border-l-4 border-neutral-900 pl-4 md:pl-6">
                        <div className="pt-1 order-2 md:order-1">
                            <h2 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mb-3 leading-snug">
                                Segunda pieza: otro momento del mismo tema
                            </h2>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Texto curatorial que pone en diálogo esta imagen con la anterior.
                            </p>
                            <div className="mt-5 pt-4 border-t border-neutral-200 text-xs text-neutral-500 space-y-1">
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Fecha</span><span>[día mes año]</span></div>
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Colección</span><span>Fondo Personal</span></div>
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Tipo</span><span>Fotografía analógica</span></div>
                            </div>
                        </div>
                        <button
                            className="relative aspect-[4/5] bg-neutral-200 overflow-hidden group w-full text-left order-1 md:order-2"
                            onClick={() => {
                                setModalLoading(true);
                                preloadSrc(galeria[1]);
                                setSelected(galeria[1]);
                            }}
                        >
                            <Image
                                src={galeria[1]}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                placeholder="blur"
                                blurDataURL={shimmer(600, 750)}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                                <div className="w-full bg-black/70 text-white text-xs px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="block font-medium">Ver detalle →</span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-4 py-2 tracking-wide pointer-events-none">
                                Título de la fotografía · Ciudad, año · Colección
                            </div>
                        </button>
                    </div>
                </section>

                {/* ============================================ */}
                {/* GALERÍA DINÁMICA - CSS GRID CON SPANS        */}
                {/* ============================================ */}
                <section className="py-8 border-t border-neutral-200">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8 pb-3 border-b border-neutral-200">
                        Galería · Material adicional
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        {galeria.map((src, index) => {
                            // Spans aleatorios para efecto masonry
                            const rowSpan = Math.floor(Math.random() * 3) + 1;
                            const colSpan = index % 3 === 0 ? "md:col-span-2" : "md:col-span-1";

                            return (
                                <button
                                    key={index}
                                    className={`relative ${colSpan} bg-neutral-200 overflow-hidden group w-full text-left`}
                                    style={{
                                        gridRow: `span ${rowSpan}`,
                                        minHeight: `${rowSpan * 100}px`,
                                    }}
                                    onClick={() => {
                                        setModalLoading(true);
                                        preloadSrc(src);
                                        setSelected(src);
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt=""
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        placeholder="blur"
                                        blurDataURL={shimmer(300, 400)}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                                        <div className="w-full bg-black/70 text-white text-[10px] md:text-xs px-2 md:px-3 py-1.5 md:py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="block font-medium">Ver detalle →</span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* ============================================ */}
                {/* DOCUMENTOS Y CTA                             */}
                {/* ============================================ */}
                <section className="py-12 md:py-16 border-t border-neutral-200">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8 pb-3 border-b border-neutral-200">
                        Documentos relacionados
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { tipo: "PDF", titulo: "Carta / acta / resolución sobre [tema]", meta: "Documento oficial · [año] · Fondo Sindical" },
                            { tipo: "PDF", titulo: "Recorte de prensa — [nombre del medio]", meta: "Prensa escrita · [año] · Fondo Sindical" },
                            { tipo: "IMG", titulo: "Volante / afiche de [actividad o campaña]", meta: "Material gráfico · [año] · Fondo Sindical" },
                            { tipo: "IMG", titulo: "Registro de [acto o movilización]", meta: "Fotografía · [año] · Fondo Personal [Nombre]" },
                        ].map((doc, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer">
                                <div className="w-8 h-10 bg-neutral-900 text-neutral-50 flex items-center justify-center text-xs font-medium flex-shrink-0">
                                    {doc.tipo}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-neutral-900 mb-0.5 leading-snug">{doc.titulo}</p>
                                    <p className="text-xs text-neutral-400">{doc.meta}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="my-12 md:my-16 p-6 md:p-10 border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-neutral-50">
                    <div>
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mb-1">
                            Hay más en el archivo
                        </h3>
                        <p className="text-sm text-neutral-500">
                            Esta selección es una entrada. El archivo tiene más de X documentos
                            digitalizados disponibles para explorar.
                        </p>
                    </div>
                    <a
                        href="/archivo"
                        className="bg-neutral-900 text-neutral-50 px-6 py-3 text-sm font-medium hover:bg-neutral-700 transition-colors whitespace-nowrap flex-shrink-0"
                    >
                        Explorar el archivo completo →
                    </a>
                </div>

            </main>

            {/* ============================================ */}
            {/* MODAL                                        */}
            {/* ============================================ */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => {
                        setSelected(null);
                        setModalLoading(true);
                    }}
                >
                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] bg-black rounded-md overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {modalLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            </div>
                        )}

                        <div className="relative w-full h-full min-h-[50vh] max-h-[80vh]">
                            <Image
                                src={selected}
                                alt=""
                                fill
                                className="object-contain"
                                sizes="100vw"
                                onLoad={() => setModalLoading(false)}
                            />
                        </div>

                        <button
                            onClick={() => {
                                setSelected(null);
                                setModalLoading(true);
                            }}
                            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-neutral-900 text-xs px-3 py-1.5 rounded transition-colors"
                        >
                            ✕ Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}