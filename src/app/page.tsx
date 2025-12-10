import Navigation from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 py-16 lg:py-24">
          {/* Imagen principal */}
          <div className="fade-in">
            <div className="aspect-[4/5] relative overflow-hidden bg-neutral-100">
              <Image
                src="/media/home/1.jpg"
                alt="Archivo de memoria cultural"
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>

          {/* Texto introductorio */}
          <div className="flex flex-col justify-center fade-in">
            <div className="prose-editorial">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-8 text-balance">
                ARCHIVO SINDICATO AFRODITA
              </h1>

              <p className="text-lg leading-relaxed mb-6">
                El Sindicato de Trabajadoras Independientes Travestis Afrodita, se conformó el 23 de agosto del año 2000 
                en la ciudad de Valparaíso (Chile) con el objeto de defender el derecho a ejercer el trabajo sexual y 
                contribuir a construir las condiciones de una vida digna para el colectivo travesti-trans. 
              </p>

              <p className="mb-6">
                Su archivo está compuesto por dos grandes secciones: el Archivo Sindical y los Fondos Personales de 
                quienes lo han integrado desde sus inicios hasta el presente. A su vez, resguarda testimonios orales como 
                complemento del Archivo documental.  
              </p>

              <p className="mb-8">
                Este sitio Web socializa parte de ese acervo documental para ponerlo en acceso a la comunidad 
              travesti-trans y al público en general. 
              </p>

              <div className="pt-6">
                <Link
                  href="/archivo"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-neutral-50 bg-neutral-900 hover:bg-neutral-700 transition-colors"
                >
                  Explorar el Archivo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secciones principales */}
        <section className="py-16 lg:py-24 border-t border-neutral-200">
          <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-12 text-center">
            Secciones del Archivo
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Archivo */}
            <Link href="/archivo" className="group">
              <div className="aspect-[3/2] relative overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src="/media/home/2.jpg"
                  alt="Archivo de documentos"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-serif font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                Archivo Sindical
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                El Fondo Sindical del Archivo Histórico del Sindicato Afrodita está conformado por cerca de 1250 documentos físicos.
              </p>
            </Link>

            {/* Cronología */}
            <Link href="/cronologia" className="group">
              <div className="aspect-[3/2] relative overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src="/media/home/3.jpg"
                  alt="Línea de tiempo"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-serif font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                Cronología
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Recorrido histórico del Sindicato Afrodita desde su fundación hasta la actualidad.
              </p>
            </Link>
          </div>
        </section>

        {/* Footer info */}
        <footer className="py-12 border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Logo institucional */}
              <div className="flex-shrink-0">
                <Image
                  src="/media/home/4.png"
                  alt="Gobierno de Chile"
                  width={260}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* Texto */}
              <p className="text-sm text-neutral-500 text-center md:text-right">
                Proyecto financiado por el Fondo Nacional de Desarrollo Cultural y las Artes (FONDART)
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}