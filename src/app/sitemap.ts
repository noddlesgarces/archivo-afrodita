import type { MetadataRoute } from "next";

const base = "https://www.archivoafrodita.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/inicio",
    "/archivo",
    "/fondos-personales",
    "/cronologia",
    "/actualidad",
    "/repositorio",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
