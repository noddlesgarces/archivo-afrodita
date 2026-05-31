import { Client } from "@notionhq/client";
import { Noticia } from "./noticias-data";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

function getText(prop: any): string {
  if (!prop) return "";
  if (prop.type === "title") return prop.title?.[0]?.plain_text ?? "";
  if (prop.type === "rich_text") return prop.rich_text?.[0]?.plain_text ?? "";
  if (prop.type === "select") return prop.select?.name ?? "";
  if (prop.type === "date") return prop.date?.start ?? "";
  return "";
}

export async function getNoticiasFromNotion(): Promise<Noticia[]> {
  const response = await (notion.databases as any).query({
    database_id: DATABASE_ID,
    sorts: [{ property: "Fecha", direction: "descending" }],
  });

  return response.results.map((page: any, index: number) => {
    const props = page.properties;
    const fullContent = getText(props["Contenido completo"]);

    return {
      id: index + 1,
      slug: getText(props["Slug"]),
      type: getText(props["Tipo"]),
      title: getText(props["Nombre"]),
      date: getText(props["Fecha"]),
      location: getText(props["Lugar"]),
      excerpt: getText(props["Excerpt"]),
      image: getText(props["Imagen"]),
      content: fullContent.substring(0, 200) + "...",
      fullContent,
      status: getText(props["Estado"]),
      galeria: [],
    };
  });
}

export async function getNoticiaFromNotion(slug: string): Promise<Noticia | undefined> {
  const noticias = await getNoticiasFromNotion();
  return noticias.find((n) => n.slug === slug);
}