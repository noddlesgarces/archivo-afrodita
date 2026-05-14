"use client";

import Navigation from "@/components/navigation";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, Calendar, MapPin, Users } from "lucide-react";

/* Blur ultra liviano SIN Buffer */
const shimmer = (w: number, h: number) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
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
  )}`;

/** Asegura ruta local bajo /public/media/cronologia */
function localSrc(file: string) {
  return file.startsWith("/") ? file : `/media/cronologia/${file}`;
}

/* ====== TUS HITOS ====== */
const timelineEvents = [
  {
    id: 1,
    year: 1999,
    title: "Motín en la Cárcel La Pólvora",
    date: "31 de diciembre de 1999",
    location: "Valparaíso",
    description:
      'El principal antecedente de la formación del Sindicato Afrodita fue un acto de desobediencia carcelaria:  Detenidas en la calle después de la Navidad y tras días de abandono sin comida en el calabozo, el 31 de diciembre de 1999 Vanessa, Simson, Patty, Meluar, Yayo, Karen, Ximena y Claudia, prendieron fuego a los colchones para exigir el traslado a la cárcel de Quillota donde podían contar con mejores condiciones. Al salir de la cárcel surgió el impulso de organizarse y la forma de hacerlo: a través de un sindicato.',
    participants: ["Vanessa", "Simson", "Patty", "Meluar", "Yayo", "Karen", "Ximena", "Claudia"],
    image: "1999/1.jpg",
  },
  {
    id: 2,
    year: 2000,
    title: "Constitución del sindicato Afrodita de Valparaíso",
    date: "22 de Agosto del 2000",
    location: "Valparaíso",
    description:
      'El acto de constitución del Sindicato Afrodita fue el 22 de agosto del año 2000 en la sede de la Central Única de Trabajadores de Valparaíso ubicada en la calle Blanco. Concurrieron 32 trabajadoras sexuales travestis y estuvieron presentes el dirigente de la CUT Miguel Vargas, la Ministra de Fe Silvia Vallejos, la funcionaria Adriana Mella de la Inspección del Trabajo y la presidenta del Sindicato de Trabajadoras sexuales Independiente Ateneus, Claudia Valle San Martín. En esta instancia se presentaron los estatutos y se votó la primera directiva.',
    participants: [],
    image: "2000/1.jpg",
  },
  {
    id: 3,
    year: 2001,
    title: "Primer plato unico y Miss Afrodita",
    date: "1 de diciembre del 2001",
    location: "Valparaíso",
    description:
      'El 1 de diciembre del año 2001 (Día internacional del VIH), antes de tener sede propia, el Sindicato Afrodita realizó su primer Plato Único en un local de la calle Canciani en Valparaíso. Desde sus inicios, el sindicato ha recurrido a la economía de la fiesta y a la comida como una forma de encuentro. En esta primera versión se realizaron diferentes shows y se hizo la primera elección de Miss Afrodita. En el muro junto al escenario, puede distinguirse el primer lienzo del Sindicato pintado para salir a protestar en una marcha donde las compañeras del Sindicato estuvieron con Gladys Marin.',
    participants: [],
    image: "2001/1.png",
  },
  {
    id: 4,
    year: 2003,
    title: "Inauguracion de sede Colón",
    date: "Agosto del 2003",
    location: "Valparaíso",
    description:
      'Tras numerosas gestiones con la Seremi de Bienes Nacionales de la V Región, el Sindicato Afrodita logra obtener una subvención para arrendar su primera sede en una casa ubicada en Av. Colón en Valparaíso. La inauguración fue en agosto del año 2003 para su tercer aniversario. Tener un espacio físico, permitió no sólo contar con un lugar para realizar talleres y reuniones, si no que la sede se constituyó a la vez como hogar, escuela y comedor comunitario, un espacio de sociabilidad y celebración.  Diversas autoridades, activistas y amistades concurrieron al acto de inauguración. La casa fue bendecida por el Padre Pepo, sacerdote a cargo de la Iglesia de la Matriz, quien acogió velorios y ceremonias de despedida de compañeras travesti y trans* en sus propios términos, incluso aunque no tuvieran su identidad legalizada.',
    participants: [],
    image: "Agosto2003/1.jpg",
  },
  {
    id: 5,
    year: 2003,
    title: "Primera ramada del sindicato Afrodita",
    date: "Septiembre del 2003",
    location: "Valparaíso",
    description:
      'En Septiembre del año 2003 el Sindicato Afrodita realiza su primera Ramada en el Parque Alejo Barrios. Espacio laboral y a la vez ocasión para la fiesta temática y el show nocturno, la Ramada del Sindicato Afrodita se convirtió, por años, en un lugar de referencia para la celebración de las fiestas patrias en la ciudad de Valparaíso.',
    participants: [],
    image: "Septiembre2003/1.png",
  },
  {
    id: 6,
    year: 2006,
    title: "Inauguración sede Av. España",
    date: "Octubre de 2006",
    location: "Valparaíso",
    description:
      'Debido a que no era posible asegurar la continuidad de la subvención para el arriendo de su sede, desde el año 2004, el Sindicato Afrodita interpuso diferentes solicitudes dirigidas a diferentes instancias municipales y regionales pidiendo un espacio en comodato.  En febrero del año 2006 se logra la concesión en comodato de su actual casa ubicada en Av. España, que fue inaugurada en octubre del año 2006. ',
    participants: [],
    image: "2006/1.jpg",
  },
  {
    id: 7,
    year: 2020,
    title: "Las Sobrevivientes",
    date: "Diciembre de 2020",
    location: "Valparaíso",
    description: 'Se conforma la sub-agrupación "Las Sobrevivientes" del Sindicato Afrodita, constituyendo así el primer club de adultas mayores trans del país.',
    participants: [],
    image: "2020/1.jpg",
  },
  {
    id: 8,
    year: 2024,
    title: "Lanzamiento del sitio Web Archivo de Memorias Sindicato Afrodita",
    date: "Agosto de 2024",
    location: "Valparaíso",
    description:
      'Este lunes 26 de agosto de 2024, se presentó en la Biblioteca Santiago Severín, en Valparaíso, la primera fase del proyecto de reconstrucción de la memoria histórica del Sindicato Afrodita con el lanzamiento de un sitio web que el Sindicato Afrodita desarrolló especialmente para albergar el proyecto, que contó con una Subvención Presidencial.',
    participants: [],
    image: "2024/1.jpg",
  },
  {
    id: 9,
    year: 2025,
    title: "Aniversario 25 años de vida del Sindicato Afrodita",
    date: "2025",
    location: "Valparaíso",
    description:
      'Con una pequeña muestra de lo que fue la exposición en el Archivo Nacional, un stand con el Fotolibro “La Celebración”, homenajes a socias que ya no están y la participación de otras organizaciones regionales por los derechos de la comunidad trans se celebró el Aniversario n° 25 del sindicato.',
    participants: [],
    image: "2025/1.jpg",
  },
];

export default function CronologiaClient() {
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[0]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Cronología
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            Línea de tiempo que documenta los hitos y eventos fundamentales en la
            historia del movimiento cultural. Cada momento marca una transformación en
            las prácticas artísticas y sus formas de intervención social.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline lateral */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-lg font-serif font-semibold text-neutral-900 mb-6">
                Eventos principales
              </h2>

              <div className="space-y-4">
                {timelineEvents.map((ev, index) => (
                  <div key={ev.id} className="relative">
                    {/* Línea conectora */}
                    {index < timelineEvents.length - 1 && (
                      <div className="absolute left-4 top-8 bottom-0 w-px bg-neutral-300" />
                    )}

                    <button
                      onClick={() => setSelectedEvent(ev)}
                      className={`flex items-start gap-4 p-3 w-full text-left transition-all duration-300 hover:bg-neutral-100 ${selectedEvent.id === ev.id ? "bg-neutral-100" : ""
                        }`}
                    >
                      {/* Punto */}
                      <div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors ${selectedEvent.id === ev.id ? "bg-neutral-900" : "bg-neutral-400"
                          }`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-neutral-900">{ev.year}</span>
                          {selectedEvent.id === ev.id && (
                            <ChevronRight className="h-3 w-3 text-neutral-500" />
                          )}
                        </div>
                        <h3 className="font-serif text-sm font-medium text-neutral-700 leading-tight">
                          {ev.title}
                        </h3>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detalle del evento seleccionado */}
          <div className="lg:col-span-2">
            <div className="fade-in" key={selectedEvent.id}>
              {/* Imagen */}
              <div className="aspect-[16/10] relative overflow-hidden bg-neutral-100 mb-8">
                <Image
                  src={localSrc(selectedEvent.image)}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover filter grayscale"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  placeholder="blur"
                  blurDataURL={shimmer(800, 500)}
                  priority
                />
              </div>

              {/* Información */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
                    {selectedEvent.title}
                  </h1>

                  <div className="flex flex-wrap gap-6 text-sm text-neutral-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {selectedEvent.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {selectedEvent.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {selectedEvent.participants?.length
                        ? selectedEvent.participants?.join(", ")
                        : "—"}
                    </div>
                  </div>
                </div>

                <div className="prose-editorial">
                  <p className="text-lg leading-relaxed mb-6">{selectedEvent.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navegación entre eventos */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-neutral-200">
          <button
            onClick={() => {
              const i = timelineEvents.findIndex((e) => e.id === selectedEvent.id);
              if (i > 0) setSelectedEvent(timelineEvents[i - 1]);
            }}
            disabled={timelineEvents.findIndex((e) => e.id === selectedEvent.id) === 0}
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Anterior
          </button>

          <span className="text-sm text-neutral-500">
            {timelineEvents.findIndex((e) => e.id === selectedEvent.id) + 1} de {timelineEvents.length}
          </span>

          <button
            onClick={() => {
              const i = timelineEvents.findIndex((e) => e.id === selectedEvent.id);
              if (i < timelineEvents.length - 1) setSelectedEvent(timelineEvents[i + 1]);
            }}
            disabled={
              timelineEvents.findIndex((e) => e.id === selectedEvent.id) === timelineEvents.length - 1
            }
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
