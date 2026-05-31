// app/actualidad/[slug]/page.tsx
import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getNoticiasFromNotion, getNoticiaFromNotion } from "@/lib/notion";
import ShareButton from "./ShareButton";

export const revalidate = 60;

export async function generateStaticParams() {
  const noticias = await getNoticiasFromNotion();
  return noticias.map((noticia) => ({ slug: noticia.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const noticia = await getNoticiaFromNotion(slug);
  if (!noticia) return { title: "Noticia no encontrada" };
  return {
    title: `${noticia.title} - Actualidad`,
    description: noticia.excerpt,
  };
}

export default async function NoticiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const noticia = await getNoticiaFromNotion(slug);
  if (!noticia) notFound();

  const todasNoticias = await getNoticiasFromNotion();
  const noticiasRelacionadas = todasNoticias.filter(n => n.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/actualidad" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Volver a Actualidad
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="bg-white">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm bg-neutral-900 text-neutral-50">{noticia!.type}</span>
                  <span className={`px-3 py-1 text-sm ${
                    noticia!.status === 'En curso' ? 'bg-green-100 text-green-800' :
                    noticia!.status === 'Próximamente' ? 'bg-blue-100 text-blue-800' :
                    noticia!.status === 'Disponible' ? 'bg-purple-100 text-purple-800' :
                    'bg-neutral-200 text-neutral-700'
                  }`}>{noticia!.status}</span>
                </div>

                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-6">{noticia!.title}</h1>

                <div className="flex items-center gap-6 text-sm text-neutral-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(noticia!.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {noticia!.location}
                  </div>
                </div>

                <p className="text-lg text-neutral-700 leading-relaxed">{noticia!.excerpt}</p>
              </div>

              <div className="aspect-[16/9] relative overflow-hidden bg-neutral-100 mb-8">
                <Image src={noticia!.image} alt={noticia!.title} fill className="object-cover" priority />
              </div>

              <div className="prose prose-neutral max-w-none mb-12">
                {noticia!.fullContent.split('\n\n').map((paragraph, index) => {
                  if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                    return <h2 key={index} className="text-2xl font-serif font-semibold text-neutral-900 mt-8 mb-4">{paragraph.replace(/\*\*/g, '')}</h2>;
                  }
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                    return (
                      <p key={index} className="text-neutral-700 leading-relaxed mb-6">
                        {parts.map((part, i) => part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.replace(/\*\*/g, '')}</strong> : part)}
                      </p>
                    );
                  }
                  if (paragraph.trim().startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
                    return <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-neutral-700">{items.map((item, i) => <li key={i}>{item.replace('- ', '')}</li>)}</ul>;
                  }
                  return <p key={index} className="text-neutral-700 leading-relaxed mb-6">{paragraph}</p>;
                })}
              </div>

              <div className="pt-8 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Compartir esta noticia</span>
                  <ShareButton title={noticia!.title} />
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div>
                <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-6">Más Noticias</h3>
                <div className="space-y-6">
                  {noticiasRelacionadas.map((noticiaRel) => (
                    <Link key={noticiaRel.slug} href={`/actualidad/${noticiaRel.slug}`} className="block group">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 relative overflow-hidden bg-neutral-100 flex-shrink-0">
                          <Image src={noticiaRel.image} alt={noticiaRel.title} fill className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-neutral-500 uppercase tracking-wide">{noticiaRel.type}</span>
                          <h4 className="font-serif font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors line-clamp-2 mt-1">{noticiaRel.title}</h4>
                          <div className="flex items-center gap-1 text-xs text-neutral-500 mt-2">
                            <Calendar className="h-3 w-3" />
                            {new Date(noticiaRel.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif font-semibold text-neutral-900 mb-4">Explora Más</h3>
                <div className="space-y-2">
                  <Link href="/archivo" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">→ Archivo completo</Link>
                  <Link href="/cronologia" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">→ Cronología</Link>
                  <Link href="/fondos-personales" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">→ Fondos Personales</Link>
                  <Link href="/actualidad" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">→ Todas las noticias</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}