import Navigation from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";
import { fondosPersonales } from "@/content/fondosPersonales";

export default function FondosPersonalesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Fondos Personales
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            Archivos personales de quienes han integrado el Sindicato Afrodita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {fondosPersonales.map((fondo, index) => (
            <Link
              key={fondo.slug}
              href={`/fondos-personales/${fondo.slug}`}
              className="group fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-neutral-100 mb-4 rounded-md">
                <Image
                  src={fondo.fotoPrincipal}
                  alt={`${fondo.nombre} ${fondo.apellido}`}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">{fondo.images.length} imagen{fondo.images.length === 1 ? "" : "es"}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-serif font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Fondo {fondo.nombre} {fondo.apellido}
              </h3>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}