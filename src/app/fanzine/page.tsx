import React from "react";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Masonry from "react-masonry-css";

const R2 = "https://cdn.archivoafrodita.cl";

export const metadata = {
    title: "Fanzine — Archivo Sindicato Afrodita",
    description: "Material ampliado del fanzine del Sindicato Afrodita.",
};

// Imágenes placeholder (solo src)
const galeria = [
    { src: `${R2}/organizacion-sindical/1.webp` },
    { src: `${R2}/organizacion-sindical/14.webp` },
    { src: `${R2}/organizacion-sindical/22.webp` },
    { src: `${R2}/organizacion-sindical/17.webp` },
    { src: `${R2}/organizacion-sindical/24.webp` },
    { src: `${R2}/organizacion-sindical/25.webp` },
    { src: `${R2}/organizacion-sindical/26.webp` },
    { src: `${R2}/organizacion-sindical/27.webp` },
    { src: `${R2}/organizacion-sindical/28.webp` },
    { src: `${R2}/organizacion-sindical/2.webp` },
    { src: `${R2}/organizacion-sindical/4.webp` },
    { src: `${R2}/organizacion-sindical/7.webp` },
    { src: `${R2}/organizacion-sindical/10.webp` },
];

// Breakpoints para el masonry
const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    480: 2,
};

export default function FanzinePage(): React.ReactElement {
    // Función para generar alturas aleatorias pero consistentes
    const getHeight = (index: number) => {
        const heights = [
            "h-64", "h-80", "h-56", "h-96",
            "h-72", "h-64", "h-88", "h-60",
            "h-80", "h-72", "h-96", "h-64",
            "h-56", "h-84", "h-68", "h-92",
            "h-76", "h-60", "h-88", "h-72"
        ];
        return heights[index % heights.length];
    };

    // Función para generar spans de columna aleatorios (algunas imágenes más anchas)
    const getSpan = (index: number) => {
        // Cada 4ta imagen ocupa 2 columnas (más ancha)
        if (index % 4 === 0) return "md:col-span-2";
        return "md:col-span-1";
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <Navigation />

            <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* ============================================ */}
                {/* HEADER                                      */}
                {/* ============================================ */}
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

                {/* ============================================ */}
                {/* PIEZAS SELECCIONADAS                         */}
                {/* ============================================ */}
                <section className="py-12 md:py-16">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8 pb-3 border-b border-neutral-200">
                        Piezas seleccionadas
                    </p>

                    {/* BLOQUE 1 */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 border-l-4 border-neutral-900 pl-4 md:pl-6">
                        <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                            <Image
                                src={galeria[0].src}
                                alt=""
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-4 py-2 tracking-wide">
                                Título de la fotografía · Ciudad, año · Colección
                            </div>
                        </div>
                        <div className="pt-1">
                            <h2 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mb-3 leading-snug">
                                Nombre del evento, persona o momento retratado
                            </h2>
                            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                                Texto curatorial de dos a cuatro líneas. Describe qué muestra la
                                imagen, quién aparece, en qué contexto fue tomada y por qué
                                importa dentro del tema del fanzine.
                            </p>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Si hay una segunda capa de lectura — un detalle visual, un dato
                                histórico — va acá, también breve.
                            </p>
                            <div className="mt-5 pt-4 border-t border-neutral-200 text-xs text-neutral-500 space-y-1">
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Fecha</span><span>[día mes año]</span></div>
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Colección</span><span>Fondo Sindical · Sección [nombre]</span></div>
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
                                Puede ser una cita, una anécdota, una fecha que ancla el contexto.
                            </p>
                            <div className="mt-5 pt-4 border-t border-neutral-200 text-xs text-neutral-500 space-y-1">
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Fecha</span><span>[día mes año]</span></div>
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Colección</span><span>Fondo Personal · [Nombre]</span></div>
                                <div className="flex gap-4"><span className="w-20 text-neutral-400">Tipo</span><span>Fotografía analógica</span></div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] bg-neutral-200 overflow-hidden order-1 md:order-2">
                            <Image
                                src={galeria[1].src}
                                alt=""
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-4 py-2 tracking-wide">
                                Título de la fotografía · Ciudad, año · Colección
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================ */}
                {/* GALERÍA DINÁMICA - MASONRY REAL              */}
                {/* ============================================ */}
                <section className="py-8 border-t border-neutral-200">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8 pb-3 border-b border-neutral-200">
                        Galería · Material adicional
                    </p>

                    {/* Masonry con react-masonry-css */}
                    <Masonry
                        breakpointCols={breakpointColumns}
                        className="flex w-auto -ml-4"
                        columnClassName="pl-4 bg-clip-padding"
                    >
                        {galeria.map((img, index) => (
                            <div
                                key={index}
                                className={`relative w-full ${getHeight(index)} bg-neutral-200 overflow-hidden mb-4 group`}
                            >
                                <Image
                                    src={img.src}
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="w-full bg-black/70 text-white text-xs px-3 py-2">
                                        <span className="block font-medium">Descripción breve de la imagen</span>
                                        <span className="text-neutral-300">Valparaíso, [año]</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Masonry>

                    {/* Versión alternativa sin librería (CSS Grid con spans) */}
                    {/* 
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {galeria.map((img, index) => (
                            <div
                                key={index}
                                className={`relative ${getSpan(index)} bg-neutral-200 overflow-hidden group`}
                                style={{
                                    gridRow: `span ${Math.floor(Math.random() * 3) + 1}`,
                                }}
                            >
                                <Image
                                    src={img.src}
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="w-full bg-black/70 text-white text-xs px-3 py-2">
                                        <span className="block font-medium">Descripción breve de la imagen</span>
                                        <span className="text-neutral-300">Valparaíso, [año]</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    */}
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
        </div>
    );
}