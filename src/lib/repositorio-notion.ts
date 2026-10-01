// src/lib/repositorio-notion.ts
// Mismo patrón que src/lib/notion.ts (fetch directo, sin SDK oficial)

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const REPOSITORIO_DATABASE_ID = process.env.NOTION_REPOSITORIO_DATABASE_ID!;

export interface RepositorioItem {
  id: string;
  titulo: string;
  autor: string;
  tipo: string; // "Tesis" | "Artículo" | "Informe" | "Otro"
  anio: string;
  descripcion: string;
  archivoUrl: string;
}

function getText(prop: any): string {
  if (!prop) return "";
  if (prop.type === "title") return prop.title?.[0]?.plain_text ?? "";
  if (prop.type === "rich_text") return prop.rich_text?.[0]?.plain_text ?? "";
  if (prop.type === "select") return prop.select?.name ?? "";
  if (prop.type === "number") return prop.number?.toString() ?? "";
  if (prop.type === "url") return prop.url ?? "";
  if (prop.type === "checkbox") return prop.checkbox ? "true" : "false";
  return "";
}

async function queryRepositorio() {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${REPOSITORIO_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          property: "Publicado",
          checkbox: { equals: true },
        },
        sorts: [{ property: "Anio", direction: "descending" }],
      }),
      next: { revalidate: 60 },
    }
  );
  return response.json();
}

export async function getRepositorioFromNotion(): Promise<RepositorioItem[]> {
  const data = await queryRepositorio();

  return (data.results ?? []).map((page: any) => {
    const props = page.properties;

    return {
      id: page.id,
      titulo: getText(props["Titulo"]),
      autor: getText(props["Autor"]),
      tipo: getText(props["Tipo"]) || "Otro",
      anio: getText(props["Anio"]),
      descripcion: getText(props["Descripcion"]),
      archivoUrl: getText(props["ArchivoUrl"]),
    };
  });
}
