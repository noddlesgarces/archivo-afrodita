export type FondoImage = {
  src: string;
  title?: string;
  fecha?: string;
  descripcion?: string;
};

export type FondoPersonal = {
  slug: string;
  nombre: string;
  apellido: string;
  fotoPrincipal: string;
  videoYoutube?: string; // ID del video, ej: "dQw4w9WgXcQ"
  images: FondoImage[];
};

export const fondosPersonales: FondoPersonal[] = [
  {
    slug: "zuliana-araya",
    nombre: "Zuliana",
    apellido: "Araya",
    fotoPrincipal: "/media/fondos-personales/zuliana-araya/portada.webp",
    videoYoutube: "ID_DEL_VIDEO",
    images: [
      {
        src: "/media/fondos-personales/zuliana-araya/1.webp",
        title: "Ejemplo",
        fecha: "2000",
        descripcion: "Descripción de ejemplo",
      },
    ],
  },
];

export function getFondo(slug: string): FondoPersonal | undefined {
  return fondosPersonales.find((f) => f.slug === slug);
}