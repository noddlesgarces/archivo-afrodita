// app/actualidad/[slug]/page.tsx
import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowLeft, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { getNoticiaBySlug, getAllNoticias } from "@/lib/noticias-data";

// Generar las rutas estáticas
export async function generateStaticParams() {
  const noticias = getAllNoticias();
  return noticias.map((noticia) => ({
    slug: noticia.slug,
  }));
}

// Metadata dinámica
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const noticia = getNoticiaBySlug(params.slug);
  
  if (!noticia) {
    return {
      title: "Noticia no encontrada",
    };
  }

  return {
    title: `${noticia.title} - Actualidad`,
    description: noticia.excerpt,
  };
}

export default function NoticiaPage({ params }: { params: { slug: string } }) {
  const noticia = getNoticiaBySlug(params.slug);

  // Si no existe la noticia, mostrar 404
  if (!noticia) {
    notFound();
  }

  // Obtener noticias relacionadas (las últimas 3 excepto la actual)
  const noticiasRelacionadas = getAllNoticias()
    .filter(n => n.id !== noticia.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Breadcrumb y botón volver */}
        <div className="mb-8">
          <Link 
            href="/actualidad" 
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Actualidad
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            <article className="bg-white">
              {/* Header del artículo */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm bg-neutral-900 text-neutral-50">
                    {noticia.type}
                  </span>
                  <span className={`px-3 py-1 text-sm ${
                    noticia.status === 'En curso' ? 'bg-green-100 text-green-800' :
                    noticia.status === 'Próximamente' ? 'bg-blue-100 text-blue-800' :
                    noticia.status === 'Disponible' ? 'bg-purple-100 text-purple-800' :
                    'bg-neutral-200 text-neutral-700'
                  }`}>
                    {noticia.status}
                  </span>
                </div>

                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-6">
                  {noticia.title}
                </h1>

                <div className="flex items-center gap-6 text-sm text-neutral-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(noticia.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {noticia.location}
                  </div>
                </div>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  {noticia.excerpt}
                </p>
              </div>

              {/* Imagen principal */}
              <div className="aspect-[16/9] relative overflow-hidden bg-neutral-100 mb-8">
                <Image
                  src={noticia.image}
                  alt={noticia.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Contenido completo */}
              <div className="prose prose-neutral max-w-none mb-12">
                {noticia.fullContent.split('\n\n').map((paragraph, index) => {
                  // Si el párrafo empieza con **, es un subtítulo
                  if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                    const title = paragraph.replace(/\*\*/g, '');
                    return (
                      <h2 key={index} className="text-2xl font-serif font-semibold text-neutral-900 mt-8 mb-4">
                        {title}
                      </h2>
                    );
                  }
                  
                  // Si el párrafo contiene negrita inline
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                    return (
                      <p key={index} className="text-neutral-700 leading-relaxed mb-6">
                        {parts.map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>;
                          }
                          return part;
                        })}
                      </p>
                    );
                  }

                  // Si es un párrafo con lista (contiene '- ')
                  if (paragraph.trim().startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-neutral-700">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }

                  // Párrafo normal
                  return (
                    <p key={index} className="text-neutral-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Galería de imágenes adicionales */}
              {noticia.galeria && noticia.galeria.length > 1 && (
                <div className="mb-12">
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-6">
                    Galería
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {noticia.galeria.slice(1).map((imagen, index) => (
                      <div key={index} className="aspect-[4/3] relative overflow-hidden bg-neutral-100">
                        <Image
                          src={imagen}
                          alt={`${noticia.title} - Imagen ${index + 2}`}
                          fill
                          className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Compartir */}
              <div className="pt-8 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Compartir esta noticia</span>
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 border border-neutral-300 hover:bg-neutral-50 transition-colors">
                    <Share2 className="h-4 w-4" />
                    Compartir
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Resumen destacado */}
              

              {/* Noticias relacionadas */}
              <div>
                <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-6">
                  Más Noticias
                </h3>
                <div className="space-y-6">
                  {noticiasRelacionadas.map((noticiaRel) => (
                    <Link 
                      key={noticiaRel.id}
                      href={`/actualidad/${noticiaRel.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-4">
                        <div className="w-24 h-24 relative overflow-hidden bg-neutral-100 flex-shrink-0">
                          <Image
                            src={noticiaRel.image}
                            alt={noticiaRel.title}
                            fill
                            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-neutral-500 uppercase tracking-wide">
                            {noticiaRel.type}
                          </span>
                          <h4 className="font-serif font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors line-clamp-2 mt-1">
                            {noticiaRel.title}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-neutral-500 mt-2">
                            <Calendar className="h-3 w-3" />
                            {new Date(noticiaRel.date).toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

          

              {/* Enlaces rápidos */}
              <div>
                <h3 className="font-serif font-semibold text-neutral-900 mb-4">
                  Explora Más
                </h3>
                <div className="space-y-2">
                  <Link href="/archivo" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    → Archivo completo
                  </Link>
                  <Link href="/cronologia" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    → Cronología
                  </Link>
                  <Link href="/participantes" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    → Participantes
                  </Link>
                  <Link href="/actualidad" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    → Todas las noticias
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