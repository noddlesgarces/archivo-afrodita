const R2 = "https://pub-60ba8de670c44a5ba2f735f42b706058.r2.dev/fondos-personales";

export type FondoImage = {
  src: string;
  title?: string;
  fecha?: string;
  descripcion?: string;
};

export type FondoPersonal = {
  slug: string;
  nombre: string;
  apellido?: string;
  fotoPrincipal: string;
  videoYoutube?: string;
  bio?: string;
  images: FondoImage[];
};

export const fondosPersonales: FondoPersonal[] = [
  {
    slug: "barbara-aracena",
    nombre: "Bárbara",
    apellido: "Aracena",
    fotoPrincipal: `${R2}/B%C3%A1rbara/1.webp`,
    videoYoutube: "QGSyCYTd8jw",
    bio: "Bárbara nació en 1965 en Quilpué, se ha dedicado al transformismo y al trabajo sexual, también trabajó como técnico en enfermería y actualmente estudia trabajo social. Se sumó al sindicato en el año 2020 y actualmente es directora vocera en la organización.",
    images: [
      { src: `${R2}/B%C3%A1rbara/1.webp` },
      { src: `${R2}/B%C3%A1rbara/2.webp` },
      { src: `${R2}/B%C3%A1rbara/3.webp` },
      { src: `${R2}/B%C3%A1rbara/4.webp` },
      { src: `${R2}/B%C3%A1rbara/5.webp` },
      { src: `${R2}/B%C3%A1rbara/6.webp` },
    ],
  },
  {
    slug: "carla-q",
    nombre: "Carla",
    apellido: "Q.",
    fotoPrincipal: `${R2}/Carla-Q/1.webp`,
    videoYoutube: "dpS40GscQoU",
    bio: "Carla nació el año 1942 en la ciudad de Valparaíso. A los 13 años se fue de su casa y comenzó el trabajo en la Casa Amarilla, histórico prostíbulo porteño. Actualmente es socia activa de la organización desde el año 2022.",
    images: [
      { src: `${R2}/Carla-Q/1.webp` },
      { src: `${R2}/Carla-Q/2.webp` },
      { src: `${R2}/Carla-Q/3.webp` },
    ],
  },
  {
    slug: "clara",
    nombre: "Clara",
    fotoPrincipal: `${R2}/Clara/1.webp`,
    videoYoutube: "otoj3MKRMe8",
    bio: "Clara nace en Los Andes en 1953. Temprano emigra a Valparaíso donde se desempeña como trabajadora sexual. Es una de las socias fundadoras del Sindicato Afrodita. Actualmente se desempeña como tesorera del Sindicato Afrodita.",
    images: [
      { src: `${R2}/Clara/1.webp` },
      { src: `${R2}/Clara/2.webp` },
      { src: `${R2}/Clara/3.webp` },
      { src: `${R2}/Clara/4.webp` },
      { src: `${R2}/Clara/5.webp` },
      { src: `${R2}/Clara/6.webp` },
      { src: `${R2}/Clara/7.webp` },
      { src: `${R2}/Clara/8.webp` },
      { src: `${R2}/Clara/9.webp` },
    ],
  },
  {
    slug: "claudia-d",
    nombre: "Claudia",
    apellido: "D.",
    fotoPrincipal: `${R2}/Claudia-D/1.webp`,
    videoYoutube: "UVhPQNd2PJk",
    bio: "Claudia nació el año 1947 y falleció a sus 73 años en la ciudad de Cartagena donde fue brutalmente asesinada el 11 de diciembre de 2022. En vida participó de diversas organizaciones sociales y vecinales. Era muy querida y admirada.",
    images: [
      { src: `${R2}/Claudia-D/1.webp` },
      { src: `${R2}/Claudia-D/2.webp` },
      { src: `${R2}/Claudia-D/3.webp` },
      { src: `${R2}/Claudia-D/4.webp` },
      { src: `${R2}/Claudia-D/5.webp` },
      { src: `${R2}/Claudia-D/6.webp` },
      { src: `${R2}/Claudia-D/7.webp` },
    ],
  },
  {
    slug: "coral",
    nombre: "Coral",
    fotoPrincipal: `${R2}/Coral/1.webp`,
    videoYoutube: "GABIagU_EP0",
    bio: "Teresa, más conocida como Coral, nació el año 1959 en Valparaíso. Siendo muy joven ingresa al mundo del comercio sexual. Actualmente sigue vinculada a sus amigas de la vida y participa activamente de las actividades del sindicato.",
    images: [
      { src: `${R2}/Coral/1.webp` },
    ],
  },
  {
    slug: "cristina-m",
    nombre: "Cristina",
    apellido: "M.",
    fotoPrincipal: `${R2}/Cristina-M/1.webp`,
    videoYoutube: "gGB3UhuknBM",
    bio: "Cristina nació en 1966 en Santiago, migró a Valparaíso donde se desempeñó como trabajadora sexual. Fue de las primeras en organizarse y constituir el Sindicato Afrodita, es una de sus fundadoras.",
    images: [
      { src: `${R2}/Cristina-M/1.webp` },
      { src: `${R2}/Cristina-M/2.webp` },
      { src: `${R2}/Cristina-M/3.webp` },
    ],
  },
  {
    slug: "dayana",
    nombre: "Dayana",
    fotoPrincipal: `${R2}/Dayana/1.webp`,
    videoYoutube: "qW5PnqRzLBQ",
    bio: "Dayana nació en Valparaíso en 1965. Se desempeñó como trabajadora sexual y se convirtió en una de las fundadoras del sindicato. Cuentan que es quien le puso el nombre de Afrodita.",
    images: [
      { src: `${R2}/Dayana/1.webp` },
      { src: `${R2}/Dayana/2.webp` },
      { src: `${R2}/Dayana/3.webp` },
      { src: `${R2}/Dayana/4.webp` },
      { src: `${R2}/Dayana/5.webp` },
      { src: `${R2}/Dayana/6.webp` },
      { src: `${R2}/Dayana/7.webp` },
      { src: `${R2}/Dayana/8.webp` },

    ],
  },
  {
    slug: "francisca",
    nombre: "Francisca",
    fotoPrincipal: `${R2}/Francisca/1.webp`,
    videoYoutube: "1W2V3LUjELU",
    bio: "Francisca nació en el año 1953 en Valparaíso. A lo largo de su vida hizo teatro, ballet, fue cocinera y trabajó en restaurantes. El oficio que ha cultivado a lo largo de su vida ha sido el de tarotista. Se sumó formalmente en el año 2020.",
    images: [
      { src: `${R2}/Francisca/1.webp` },
      { src: `${R2}/Francisca/2.webp` },
      { src: `${R2}/Francisca/3.webp` },
      { src: `${R2}/Francisca/4.webp` },
      { src: `${R2}/Francisca/5.webp` },
      { src: `${R2}/Francisca/6.webp` },
    ],
  },
  {
    slug: "fredy",
    nombre: "Fredy",
    fotoPrincipal: `${R2}/Fredy/1.webp`,
    videoYoutube: "UAzXQWCeZxQ",
    bio: "Freddy nació en el año 1945 en Valparaíso. Trabajó como empleada y más adelante instaló su propio almacén. Su afición y talento por el baile lo llevaron a frecuentar fiestas en prostíbulos y a participar de un grupo de transformistas inspirado en el Blue Ballet.",
    images: [
      { src: `${R2}/Fredy/1.webp` },
      { src: `${R2}/Fredy/2.webp` },
      { src: `${R2}/Fredy/3.webp` },
      { src: `${R2}/Fredy/4.webp` },
      { src: `${R2}/Fredy/5.webp` },
      { src: `${R2}/Fredy/6.webp` },
      { src: `${R2}/Fredy/7.webp` },
      { src: `${R2}/Fredy/8.webp` },
      { src: `${R2}/Fredy/9.webp` },
      { src: `${R2}/Fredy/10.webp` },
    ],
  },
  {
    slug: "grace",
    nombre: "Grace",
    fotoPrincipal: `${R2}/Grace/1.webp`,
    videoYoutube: "s76pwHTUmyk",
    bio: "Grace nació en 1966 en Valparaíso. Ejerció como trabajadora sexual y estuvo años en la ex cárcel de Valparaíso. Actualmente es trabajadora de la Municipalidad de Valparaíso.",
    images: [
      { src: `${R2}/Grace/1.webp` },
      { src: `${R2}/Grace/2.webp` },
      { src: `${R2}/Grace/3.webp` },
    ],
  },
  {
    slug: "karen",
    nombre: "Karen",
    fotoPrincipal: `${R2}/Karen/1.webp`,
    videoYoutube: "1I_CEZ7QD5w",
    bio: "Karen nació en Valparaíso el año 1963. Se ha desempeñado como trabajadora sexual en las calles porteñas y fue parte del grupo que se constituyó como Sindicato Afrodita en el año 2000.",
    images: [
      { src: `${R2}/Karen/1.webp` },
    ],
  },
  {
    slug: "maria-ester",
    nombre: "María Ester",
    apellido: "Calderón",
    fotoPrincipal: `${R2}/Maria%20Ester/1.webp`,
    videoYoutube: "RIb2o_3rjn8",
    bio: "María Ester nace en el año 1970. Migró a las calles de Valparaíso y se desempeñó como trabajadora sexual. Actualmente cada vez que hay reunión del sindicato, María Ester es la encargada de la cocina.",
    images: [
      { src: `${R2}/Maria%20Ester/1.webp` },
      { src: `${R2}/Maria%20Ester/2.webp` },
      { src: `${R2}/Maria%20Ester/3.webp` },
    ],
  },
  {
    slug: "marisela",
    nombre: "Marisela",
    fotoPrincipal: `${R2}/Marisela/1.webp`,
    videoYoutube: "gN_l9A5Mj0o",
    bio: "Marisela nació en el año 1973 en la ciudad de Viña del Mar. Se desempeñó como trabajadora sexual y formó parte de las fundadoras que iniciaron la organización.",
    images: [
      { src: `${R2}/Marisela/1.webp` },
      { src: `${R2}/Marisela/2.webp` },
      { src: `${R2}/Marisela/3.webp` },
    ],
  },
  {
    slug: "massiel",
    nombre: "Massiel",
    fotoPrincipal: `${R2}/Massiel/1.webp`,
    videoYoutube: "VoSxjnjVkCE",
    bio: "Massiel nació el año 1952 en Valparaíso. Desde temprana edad se dedicó al mundo del espectáculo nocturno. Se destacan sus aportes en fotografías y videos históricos que ha donado al archivo del sindicato.",
    images: [
      { src: `${R2}/Massiel/1.webp` },
      { src: `${R2}/Massiel/2.webp` },
      { src: `${R2}/Massiel/3.webp` },
      { src: `${R2}/Massiel/4.webp` },
      { src: `${R2}/Massiel/5.webp` },
      { src: `${R2}/Massiel/6.webp` },
      { src: `${R2}/Massiel/7.webp` },
      { src: `${R2}/Massiel/8.webp` },
      { src: `${R2}/Massiel/9.webp` },
      { src: `${R2}/Massiel/10.webp` },
      { src: `${R2}/Massiel/11.webp` },
    ],
  },
  {
    slug: "maureen-m",
    nombre: "Maureen",
    apellido: "M.",
    fotoPrincipal: `${R2}/Maureen-M/1.webp`,
    videoYoutube: "-7fn1qS4yLI",
    bio: "Maureen nació el año 1963 en la ciudad de Valparaíso. Dedicó gran parte de su juventud y adultez siendo artista circense. En el año 2000 fue parte del grupo de fundadoras que dieron inicio al Sindicato Afrodita.",
    images: [
      { src: `${R2}/Maureen-M/1.webp` },
      { src: `${R2}/Maureen-M/2.webp` },
      { src: `${R2}/Maureen-M/3.webp` },
      { src: `${R2}/Maureen-M/4.webp` },
      { src: `${R2}/Maureen-M/5.webp` },
      { src: `${R2}/Maureen-M/6.webp` },
      { src: `${R2}/Maureen-M/7.webp` },
      { src: `${R2}/Maureen-M/8.webp` },
    ],
  },
  {
    slug: "mourine-f",
    nombre: "Mourine",
    apellido: "F.",
    fotoPrincipal: `${R2}/Mourine-F/1.webp`,
    bio: "Mourine nació en el año 1980 en Valparaíso. Fue parte del ambiente como trabajadora sexual a la vez que entró a estudiar trabajo social. Fue integrante del sindicato desde su fundación en el año 2000.",
    images: [
      { src: `${R2}/Mourine-F/1.webp` },
      { src: `${R2}/Mourine-F/2.webp` },
      { src: `${R2}/Mourine-F/3.webp` },
      { src: `${R2}/Mourine-F/4.webp` },
      { src: `${R2}/Mourine-F/5.webp` },
      { src: `${R2}/Mourine-F/6.webp` },
      { src: `${R2}/Mourine-F/7.webp` },
    ],
  },
  {
    slug: "nicole-n",
    nombre: "Nicole",
    apellido: "N.",
    fotoPrincipal: `${R2}/Nicole-N/1.webp`,
    videoYoutube: "gN_l9A5Mj0o",
    bio: "Nicole nació en el año 1973, es una de las integrantes fundadoras del Sindicato. Actualmente tiene un microemprendimiento dedicado a preparar empanadas, pizzas y pasteles.",
    images: [
      { src: `${R2}/Nicole-N/1.webp` },
      { src: `${R2}/Nicole-N/2.webp` },
      { src: `${R2}/Nicole-N/3.webp` },
      { src: `${R2}/Nicole-N/4.webp` },
      { src: `${R2}/Nicole-N/5.webp` },
    ],
  },
  {
    slug: "sandra-paola",
    nombre: "Sandra",
    apellido: "Paola",
    fotoPrincipal: `${R2}/Sandra-Paola/1.webp`,
    videoYoutube: "Xy-UUMAftu0",
    bio: "Sandra Paola nace en el año 1957 en la ciudad de Valparaíso. Además del trabajo sexual, Sandra también se dedicó al diseño y la costura, siendo una de las modistas más codiciadas por el mundo artístico de la noche bohemia. Actualmente es la secretaria de la directiva.",
    images: [
      { src: `${R2}/Sandra-Paola/1.webp` },
      { src: `${R2}/Sandra-Paola/2.webp` },
      { src: `${R2}/Sandra-Paola/3.webp` },
      { src: `${R2}/Sandra-Paola/4.webp` },
    ],
  },
  {
    slug: "sandra-pena",
    nombre: "Sandra",
    apellido: "Peña",
    fotoPrincipal: `${R2}/Sandra-Pe%C3%B1a/1.webp`,
    bio: "Sandra nació en 1968 en Valparaíso. Siendo adolescente se fue de la casa y comenzó su periplo por las calles porteñas y viñamarinas. Actualmente Sandra es la presidenta de la organización.",
    images: [
      { src: `${R2}/Sandra-Pe%C3%B1a/1.webp` },
      { src: `${R2}/Sandra-Pe%C3%B1a/2.webp` },
      { src: `${R2}/Sandra-Pe%C3%B1a/3.webp` },
      { src: `${R2}/Sandra-Pe%C3%B1a/4.webp` },
      { src: `${R2}/Sandra-Pe%C3%B1a/5.webp` },
      { src: `${R2}/Sandra-Pe%C3%B1a/6.webp` },
      { src: `${R2}/Sandra-Pe%C3%B1a/7.webp` },
      { src: `${R2}/Sandra-Pe%C3%B1a/8.webp` },
      { src: `${R2}/Sandra-Pe%C3%B1a/9.webp` },
      { src: `${R2}/Sandra-Pe%C3%B1a/10.webp` },
    ],
  },
  {
    slug: "veronica",
    nombre: "Verónica",
    fotoPrincipal: `${R2}/Veronica/1.webp`,
    videoYoutube: "asZsPtK0MGE",
    bio: "Verónica nació en 1945 en Valparaíso. Entró en el ambiente en los años sesenta como regenta de prostíbulos del puerto. Trabajó como cocinera en el comedor de la Casa Amarilla, frecuentado por muchas de las travestis que luego integrarían el Sindicato Afrodita.",
    images: [
      { src: `${R2}/Veronica/1.webp` },
      { src: `${R2}/Veronica/2.webp` },
    ],
  },
];

export function getFondo(slug: string): FondoPersonal | undefined {
  return fondosPersonales.find((f) => f.slug === slug);
}

export function getYoutubeIdFondo(src: string): string | null {
  const match = src.match(/(?:v=|youtu\.be\/)([^&?]+)/);
  return match ? match[1] : null;
}