// app/actualidad/page.tsx
import CategoryFeed from "@/components/CategoryFeed";
import CategoryHero from "@/components/CategoryHero";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { getAllNoticias } from "@/lib/noticias-data";

export default function ActualidadPage() {
  const noticias = getAllNoticias();

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Actualidad
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            Noticias, exposiciones, publicaciones y eventos relacionados con el archivo y
            las prácticas artísticas de resistencia contemporáneas. Mantente informado sobre
            las actividades y proyectos en curso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Noticias principales */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-8">
              Noticias Recientes
            </h2>

            <div className="space-y-12">
              {noticias.map((noticia, index) => (
                <article key={noticia.id} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Imagen */}
                    <div className="md:col-span-1">
                      <Link href={`/actualidad/${noticia.slug}`}>
                        <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100 cursor-pointer">
                          <Image
                            src={noticia.image}
                            alt={noticia.title}
                            fill
                            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </Link>
                    </div>

                    {/* Contenido */}
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="px-2 py-1 text-xs bg-neutral-900 text-neutral-50">
                            {noticia.type}
                          </span>
                          <span className={`px-2 py-1 text-xs ${
                            noticia.status === 'En curso' ? 'bg-green-100 text-green-800' :
                            noticia.status === 'Próximamente' ? 'bg-blue-100 text-blue-800' :
                            noticia.status === 'Disponible' ? 'bg-purple-100 text-purple-800' :
                            'bg-neutral-200 text-neutral-700'
                          }`}>
                            {noticia.status}
                          </span>
                        </div>

                        <Link href={`/actualidad/${noticia.slug}`}>
                          <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3 hover:text-neutral-600 transition-colors cursor-pointer">
                            {noticia.title}
                          </h3>
                        </Link>

                        <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(noticia.date).toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {noticia.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {noticia.excerpt}
                      </p>

                      <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                        {noticia.content}
                      </p>

                      <Link
                        href={`/actualidad/${noticia.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                      >
                        Leer más
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar con enlaces */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Enlaces rápidos */}
              <div>
                <h3 className="font-serif font-semibold text-neutral-900 mb-4">
                  Enlaces de Interés
                </h3>
                <div className="space-y-2">
                  <Link href="/archivo" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    → Explorar el archivo completo
                  </Link>
                  <Link href="/cronologia" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    → Cronología del movimiento
                  </Link>
                  <Link href="/participantes" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    → Biografías de participantes
                  </Link>
                  <Link href="/contacto" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    → Contacto y colaboraciones
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </main>
    </div>
  );
}