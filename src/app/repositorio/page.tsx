// src/app/repositorio/page.tsx
import Navigation from "@/components/navigation";
import { FileText } from "lucide-react";
import { getRepositorioFromNotion } from "@/lib/repositorio-notion";

export const revalidate = 60;

export default async function RepositorioPage() {
  const items = await getRepositorioFromNotion();

  const porTipo = items.reduce<Record<string, typeof items>>((acc, item) => {
    const key = item.tipo;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Repositorio
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            Tesis, artículos e informes vinculados a la memoria del Sindicato Afrodita,
            disponibles para consulta y descarga.
          </p>
        </div>

        {items.length === 0 && (
          <p className="text-neutral-600">Aún no hay documentos publicados.</p>
        )}

        {Object.entries(porTipo).map(([tipo, docs]) => (
          <section key={tipo} className="mb-16">
            <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-8">
              {tipo}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {docs.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.archivoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-white border border-neutral-200 hover:border-neutral-400 transition-colors"
                >
                  <FileText className="h-6 w-6 text-neutral-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-semibold text-neutral-900 mb-1">
                      {doc.titulo}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-2">
                      {doc.autor}
                      {doc.anio ? ` · ${doc.anio}` : ""}
                    </p>
                    {doc.descripcion && (
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {doc.descripcion}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
