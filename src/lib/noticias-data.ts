// lib/noticias-data.ts

export type Noticia = {
  id: number;
  slug: string;
  type: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  image: string;
  content: string;
  fullContent: string;
  status: string;
  galeria: string[];
};

export const noticias: Noticia[] = [
  {
    id: 1,
    slug: "amores-trans-taller-memorias-afectivas-resistencia",
    type: "Publicación",
    title: 'Amores Trans*',
    date: "2025-12-10",
    location: "Valparaíso",
    excerpt: "En cinco sesiones, socias del Sindicato Afrodita, mujeres travesti-trans adultas mayores, reconstruyeron sus historias de primer amor, grandes amores, amores imposibles y vínculos disidentes. La actividad generó un archivo audiovisual y una serie de objetos simbólicos.",
    image: "https://cdn.archivoafrodita.cl/imagenes-noticias/amores-trans/1.webp",
    content: "La organización llevó adelante el taller \"Amores Trans*\", una propuesta de memorias afectivas dirigida a mujeres travesti-trans, en su mayoría adultas mayores, socias del Sindicato Afrodita.",
    fullContent: `La organización llevó adelante el taller "Amores Trans*", una propuesta de memorias afectivas dirigida a mujeres travesti-trans, en su mayoría adultas mayores, socias del Sindicato Afrodita. A lo largo de cinco encuentros, las participantes exploraron colectivamente el primer amor, el gran amor, los amores imposibles y la diversidad de vínculos afectivos que atravesaron sus vidas.

Mediante conversaciones grupales, música, movimiento, creación de postales, líneas de tiempo y rituales, el taller rescató experiencias que suelen quedar invisibilizadas por narrativas centradas únicamente por la espectacularización de las experiencias travesti-trans. La actividad se enmarcó en el trabajo con el Archivo Histórico de la organización, lo que permitió generar un registro audiovisual de los testimonios, así como una serie de objetos simbólicos creados por las propias participantes.

El resultado es un material enriquecedor, sensible y políticamente valioso: memorias del amor como resistencia, alegría, pérdida y transformación. El principal impacto de "Amores Trans" es visibilizar los amores trans como territorios de resistencia y existencia plena, contrarrestando representaciones mediáticas que suelen asociar las experiencias travesti-trans a la violencia, la discriminación y la muerte.

A través del archivo y la difusión de estas memorias afectivas, la organización busca sustentar con dignidad, complejidad y alegría las historias personales y comunitarias de sus socias.

"Amores Trans*" reafirma que el amor también es un territorio de lucha, memoria y potencia política.`,
    status: "Disponible",
    galeria: ["https://cdn.archivoafrodita.cl/imagenes-noticias/amores-trans/1.webp"],
  },
  {
    id: 2,
    slug: "inicio-de-ano-sindicato-afrodita-2026",
    type: "Actualidad",
    title: "Inicio de Año en el Sindicato Afrodita",
    date: "2026-03-29",
    location: "Valparaíso",
    excerpt: "Entre pescado frito, abrazos y mucha alegría, las socias compartieron el primer gran momento del año. Además, se sumaron alumnas en práctica de Trabajo Social, Psicología e Historia, fortaleciendo el trabajo colectivo desde distintas miradas.",
    image: "https://cdn.archivoafrodita.cl/imagenes-noticias/inicio-a%C3%B1o/1.webp",
    content: "Con un cálido almuerzo compartido, el Sindicato Afrodita dio inicio formal a las actividades del 2026. La propuesta fue sencilla y poderosa: reencontrarse.",
    fullContent: `Con un cálido almuerzo compartido, el Sindicato Afrodita dio inicio formal a las actividades del 2026. La propuesta fue sencilla y poderosa: reencontrarse. En torno a un rico pescado frito, preparado por las talentosas cocineras estrellas de la casa, las socias compartieron una hermosa jornada que buscó empezar el año con ánimo, afecto y mucha energía.

El encuentro no sólo significó el regreso a la rutina colectiva, sino también la reafirmación de los vínculos que sostienen al Sindicato Afrodita como un espacio de cuidado mutuo, alegría y pertenencia.

Pero el inicio del 2026 también trajo novedades en el plano formativo. En esta primera jornada se presentaron oficialmente las alumnas en práctica de Trabajo Social, Psicología y Licenciatura en Historia, provenientes de distintas casas de estudio. Las futuras profesionales se sumarán a distintas áreas de trabajo del Sindicato, acompañando procesos de archivo, acompañamiento psicosocial y registro de memorias, en un intercambio que enriquece tanto a la organización como a su formación académica.

De esta manera, el Sindicato arranca el año con el pie derecho: con el sabor de un pescado frito compartido, la calidez de los vínculos que se renuevan, y la llegada de nuevas miradas jóvenes que vienen a aprender y a aportar.

El 2026 promete ser un año de mucho trabajo, mucho amor y más actividades.`,
    status: "Disponible",
    galeria: ["https://cdn.archivoafrodita.cl/imagenes-noticias/inicio-a%C3%B1o/1.webp"],
  },

];

export function getNoticiaBySlug(slug: string): Noticia | undefined {
  return noticias.find(n => n.slug === slug);
}

export function getAllNoticias(): Noticia[] {
  return noticias;
}