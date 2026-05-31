import { Noticia } from "./noticias-data";

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

function getText(prop: any): string {
  if (!prop) return "";
  if (prop.type === "title") return prop.title?.[0]?.plain_text ?? "";
  if (prop.type === "rich_text") return prop.rich_text?.[0]?.plain_text ?? "";
  if (prop.type === "select") return prop.select?.name ?? "";
  if (prop.type === "date") return prop.date?.start ?? "";
  return "";
}

async function queryNotion() {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sorts: [{ property: "Fecha", direction: "descending" }],
      }),
      next: { revalidate: 60 },
    }
  );
  return response.json();
}

export async function getNoticiasFromNotion(): Promise<Noticia[]> {
  const data = await queryNotion();

  return (data.results ?? []).map((page: any, index: number) => {
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