import React from "react";
import Navigation from "@/components/navigation";

export const metadata = {
    title: "Fanzine — Archivo Sindicato Afrodita",
    description: "Material ampliado del fanzine del Sindicato Afrodita.",
};

const galeria = [0, 1, 2, 3, 4, 5];

const documentos = [
    { tipo: "PDF", titulo: "Carta / acta / resolución sobre [tema]", meta: "Documento oficial · [año] · Fondo Sindical" },
    { tipo: "PDF", titulo: "Recorte de prensa — [nombre del medio]", meta: "Prensa escrita · [año] · Fondo Sindical" },
    { tipo: "IMG", titulo: "Volante / afiche de [actividad o campaña]", meta: "Material gráfico · [año] · Fondo Sindical" },
    { tipo: "IMG", titulo: "Registro de [acto o movilización]", meta: "Fotografía · [año] · Fondo Personal [Nombre]" },
];

export default function FanzinePage(): React.ReactElement {
    return (
        <div className="min-h-screen bg-neutral-50">
            <Navigation />

            <main className="mx-auto max-w-4xl px-6 lg:px-8">

                {/* Entrada */}
                <div className="py-12 border-b border-neutral-200">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">
                        Desde el fanzine · 2025
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6 max-w-xl leading-tight">
                        Título del tema central del fanzine
                    </h1>
                    <p className="text-base text-neutral-600 leading-relaxed max-w-lg">
                        Dos frases que sitúan al lector que llegó desde el papel. Qué va a
                        encontrar acá, por qué este material existe y qué lo conecta con lo
                        que ya leyó.
                    </p>
                </div>

                {/* Piezas seleccionadas */}
                <section className="py-16">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-10 pb-4 border-b border-neutral-200">
                        Piezas seleccionadas
                    </p>

                    {/* Bloque 1 — foto izquierda */}
                    <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                        <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                            {/* <Image src="..." alt="..." fill className="object-cover filter grayscale" /> */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-4 py-2 tracking-wide">
                                Título de la fotografía · Ciudad, año · Colección
                            </div>
                        </div>
                        <div className="pt-2">
                            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4 leading-snug">
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
                            <div className="mt-6 pt-4 border-t border-neutral-200 text-xs text-neutral-400 space-y-1">
                                <div className="flex gap-3"><span className="w-20 text-neutral-300">Fecha</span><span className="text-neutral-500">[día mes año]</span></div>
                                <div className="flex gap-3"><span className="w-20 text-neutral-300">Colección</span><span className="text-neutral-500">Fondo Sindical · Sección [nombre]</span></div>
                                <div className="flex gap-3"><span className="w-20 text-neutral-300">Tipo</span><span className="text-neutral-500">Fotografía analógica</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Bloque 2 — foto derecha */}
                    <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                        <div className="pt-2 order-2 md:order-1">
                            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4 leading-snug">
                                Segunda pieza: otro momento del mismo tema
                            </h2>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Texto curatorial que pone en diálogo esta imagen con la anterior.
                                Puede ser una cita, una anécdota, una fecha que ancla el contexto.
                            </p>
                            <div className="mt-6 pt-4 border-t border-neutral-200 text-xs text-neutral-400 space-y-1">
                                <div className="flex gap-3"><span className="w-20 text-neutral-300">Fecha</span><span className="text-neutral-500">[día mes año]</span></div>
                                <div className="flex gap-3"><span className="w-20 text-neutral-300">Colección</span><span className="text-neutral-500">Fondo Personal · [Nombre]</span></div>
                                <div className="flex gap-3"><span className="w-20 text-neutral-300">Tipo</span><span className="text-neutral-500">Fotografía analógica</span></div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] bg-neutral-200 overflow-hidden order-1 md:order-2">
                            {/* <Image src="..." alt="..." fill className="object-cover filter grayscale" /> */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-4 py-2 tracking-wide">
                                Título de la fotografía · Ciudad, año · Colección
                            </div>
                        </div>
                    </div>
                </section>

                {/* Galería */}
                <section className="py-8 border-t border-neutral-200">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-10 pb-4 border-b border-neutral-200">
                        Galería · Material adicional
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galeria.map((i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="aspect-square bg-neutral-200 overflow-hidden">
                                    {/* <Image src="..." alt="..." fill className="object-cover filter grayscale" /> */}
                                </div>
                                <p className="text-xs text-neutral-600">Descripción breve de la imagen</p>
                                <p className="text-xs text-neutral-400">Valparaíso, [año]</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Documentos */}
                <section className="py-16 border-t border-neutral-200">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-10 pb-4 border-b border-neutral-200">
                        Documentos relacionados
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {documentos.map((doc, i) => (
                            <div key={i} className="flex gap-4 items-start p-5 border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer">
                                <div className="w-9 h-11 bg-neutral-900 text-neutral-50 flex items-center justify-center text-xs font-medium flex-shrink-0">
                                    {doc.tipo}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-neutral-900 mb-1 leading-snug">{doc.titulo}</p>
                                    <p className="text-xs text-neutral-400">{doc.meta}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="my-16 p-10 border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
                            Hay más en el archivo
                        </h3>
                        <p className="text-sm text-neutral-500">
                            Esta selección es una entrada. El archivo tiene más de X documentos
                            digitalizados disponibles para explorar.
                        </p>
                    </div>

                   <a href="/archivo" className="...">Explorar el archivo completo →</a>
                </div>

            </main>
        </div>
    );
}