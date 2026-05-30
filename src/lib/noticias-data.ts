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
    title: '"Amores Trans*": un taller de memorias afectivas para visibilizar el amor como resistencia y existencia plena',
    date: "2025-12-10",
    location: "Valparaíso",
    excerpt: "En cinco sesiones, socias del Sindicato Afrodita, mujeres travesti-trans adultas mayores, reconstruyeron sus historias de primer amor, grandes amores, amores imposibles y vínculos disidentes. La actividad generó un archivo audiovisual y una serie de objetos simbólicos.",
    image: "URL_IMAGEN",
    content: "La organización llevó adelante el taller \"Amores Trans*\", una propuesta de memorias afectivas dirigida a mujeres travesti-trans, en su mayoría adultas mayores, socias del Sindicato Afrodita.",
    fullContent: `La organización llevó adelante el taller "Amores Trans*", una propuesta de memorias afectivas dirigida a mujeres travesti-trans, en su mayoría adultas mayores, socias del Sindicato Afrodita. A lo largo de cinco encuentros, las participantes exploraron colectivamente el primer amor, el gran amor, los amores imposibles y la diversidad de vínculos afectivos que atravesaron sus vidas.

Mediante conversaciones grupales, música, movimiento, creación de postales, líneas de tiempo y rituales, el taller rescató experiencias que suelen quedar invisibilizadas por narrativas centradas únicamente por la espectacularización de las experiencias travesti-trans. La actividad se enmarcó en el trabajo con el Archivo Histórico de la organización, lo que permitió generar un registro audiovisual de los testimonios, así como una serie de objetos simbólicos creados por las propias participantes.

El resultado es un material enriquecedor, sensible y políticamente valioso: memorias del amor como resistencia, alegría, pérdida y transformación. El principal impacto de "Amores Trans" es visibilizar los amores trans como territorios de resistencia y existencia plena, contrarrestando representaciones mediáticas que suelen asociar las experiencias travesti-trans a la violencia, la discriminación y la muerte.

A través del archivo y la difusión de estas memorias afectivas, la organización busca sustentar con dignidad, complejidad y alegría las historias personales y comunitarias de sus socias.

"Amores Trans*" reafirma que el amor también es un territorio de lucha, memoria y potencia política.`,
    status: "Disponible",
    galeria: ["https://pub-60ba8de670c44a5ba2f735f42b706058.r2.dev/imagenes-noticias/amores-trans/1.webp"],
  },
  {
    id: 2,
    slug: "amores-trans-taller-memorias-afectivas-resistencia",
    type: "Publicación",
    title: '"Amores Trans*": un taller de memorias afectivas para visibilizar el amor como resistencia y existencia plena',
    date: "2025-12-10",
    location: "Valparaíso",
    excerpt: "En cinco sesiones, socias del Sindicato Afrodita, mujeres travesti-trans adultas mayores, reconstruyeron sus historias de primer amor, grandes amores, amores imposibles y vínculos disidentes. La actividad generó un archivo audiovisual y una serie de objetos simbólicos.",
    image: "URL_IMAGEN",
    content: "La organización llevó adelante el taller \"Amores Trans*\", una propuesta de memorias afectivas dirigida a mujeres travesti-trans, en su mayoría adultas mayores, socias del Sindicato Afrodita.",
    fullContent: `La organización llevó adelante el taller "Amores Trans*", una propuesta de memorias afectivas dirigida a mujeres travesti-trans, en su mayoría adultas mayores, socias del Sindicato Afrodita. A lo largo de cinco encuentros, las participantes exploraron colectivamente el primer amor, el gran amor, los amores imposibles y la diversidad de vínculos afectivos que atravesaron sus vidas.
 
Mediante conversaciones grupales, música, movimiento, creación de postales, líneas de tiempo y rituales, el taller rescató experiencias que suelen quedar invisibilizadas por narrativas centradas únicamente por la espectacularización de las experiencias travesti-trans. La actividad se enmarcó en el trabajo con el Archivo Histórico de la organización, lo que permitió generar un registro audiovisual de los testimonios, así como una serie de objetos simbólicos creados por las propias participantes.
 
El resultado es un material enriquecedor, sensible y políticamente valioso: memorias del amor como resistencia, alegría, pérdida y transformación. El principal impacto de "Amores Trans" es visibilizar los amores trans como territorios de resistencia y existencia plena, contrarrestando representaciones mediáticas que suelen asociar las experiencias travesti-trans a la violencia, la discriminación y la muerte.
 
A través del archivo y la difusión de estas memorias afectivas, la organización busca sustentar con dignidad, complejidad y alegría las historias personales y comunitarias de sus socias.
 
"Amores Trans*" reafirma que el amor también es un territorio de lucha, memoria y potencia política.`,
    status: "Disponible",
    galeria: ["https://pub-60ba8de670c44a5ba2f735f42b706058.r2.dev/imagenes-noticias/inicio-a%C3%B1o/1.webp"],
  },

];

export function getNoticiaBySlug(slug: string): Noticia | undefined {
  return noticias.find(n => n.slug === slug);
}

export function getAllNoticias(): Noticia[] {
  return noticias;
}