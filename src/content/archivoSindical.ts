// src/content/archivoSindical.ts

export type SectionImage = {
  src: string;
  title?: string;
  serie?: string;
  actividad?: string;
  fecha?: string;
  productor?:string;
  lugar?: string;
  

  // ✅ usamos "descripcion" como campo principal en la UI
  descripcion?: string;

  // alias opcional (por si alguien escribe "description" por costumbre)
  description?: string;

  // opcionales para video (si los usas)
  media?: "image" | "video";
  poster?: string;
};

export type Section = {
  slug: string;
  title: string;
  cover: string;
  intro?: string;
  images: SectionImage[];
};

// ======== TUS SECCIONES (las dejo tal cual me las pasaste) ========
export const archivoSections: Section[] = [
  {
    slug: "organizacion-sindical",
    title: "Organización Sindical",
    cover: "/media/archivo-sindical/org.jpg",
    intro: "Esta sección reúne documentación relativa a la asamblea de socias del Sindicato Afrodita, órgano deliberativo que toma las decisiones de la organización. Reúne documentos que dan cuenta de la constitución, registro y funcionamiento del sindicato Afrodita, e incluye el acta de constitución, los estatutos y documentación vinculada a las sedes del Sindicato Afrodita.",
    images: [
      {
        src: "/media/archivo-sindical/organizacion-sindical/1.webp",
        title: "Casa de Carampangue",
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "Circa 2000",
        lugar: "Valparaíso",
        productor:"Fondo Clara Andrade",
        descripcion:"Clara y Vanessa en la casa de Carampangue donde se realizaron las primeras reuniones del sindicato"
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/2.webp",
        title: "Invitación",
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "Julio 2000",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion:" Primera invitación a reunión informativa con la CUT para conformar un sindicato."
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/3.webp",
        title: 'Acta de Constitución',
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "22 de agosto de 2000",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:'Acta de constitución del Sindicato de Trabajadoras Independientes Travestis "Afrodita".'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/4.webp",
        title: "Estatutos",
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "22 de agosto del 2000",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:"Estatutos  del Sindicato de Trabajadores Independientes Travestis Afroditas V Región que indican que el sindicato fue fundado en Valparaíso con fecha 22 de agosto del año 2000."
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/5.webp",
        title: "Primera directiva del sindicato",
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "Circa 2000",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:"Fotografía de primera directiva del Sindicato Afrodita de Valparaíso. De izquierda a derecha Meruan, Vanessa y Claudia."
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/6.webp",
        title: "Travestis de Valparaíso se convierten en los primeros del país en sindicalizarse",
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "23 de agosto del 2000",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:"Diario La Estrella, 23 agosto 2000. Pag. 13."
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/7.webp",
        title: "Circular",
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "Septiembre del 2000",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:"Circular informativa de la constitución de la organización y los objetivos planteados. "
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/8.webp",
        title: 'Carta al Seremi del Trabajo de la V Región',
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "07 de septiembre del 2000",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:'Carta firmada por Moises Rebolledo Ponce Presidente Sindicato de Trabajadoras Independientes Travestis "Afrodita" al Sr. José Manuel Mancilla López Seremi de Salud, para solicitarle una audiencia.'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/9.webp",
        title: 'Carta al Alcalde de la Ilustre Municipalidad de Valparaíso',
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "07 de septiembre del 2000",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:'Carta de Moises Rebolledo Ponce Presidente, Sr. Meluar Solano Muñoz Secretario y Manuel Orellana Sierra Tesorero del Sindicato de Trabajadoras Independientes Travestis "Afrodita" al Alcalde de la Ilustre Municipalidad de Valparaíso, Hernán Pinto Miranda, solicitando entrevista.'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/10.webp",
        title: 'Carta al Jefe de la Segunda Comisaría Central de Valparaiso',
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "07 de septiembre del 2000",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:'Carta de Moises Rebolledo Ponce Presidente, Sr. Meluar Solano Muñoz Secretario y Manuel Orellana Sierra Tesorero del Sindicato de Trabajadoras Independientes Travestis "Afrodita" al Mayor Carlos Cádiz Jefe de la Segunda Comisaría Central de Valparaiso, solicitando entrevista.'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/11.webp",
        title: 'Carta  al Director Regional del Servicio Nacional de Salud de la V Región',
        serie: "Organización Sindical",
        actividad: "Constitución del Sindicato",
        fecha: "07 de Septiembre de 2000",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:'Carta de Moises Rebolledo Ponce Presidente, Sr. Meluar Solano Muñoz Secretario y Manuel Orellana Sierra Tesorero del Sindicato de Trabajadoras Independientes Travestis "Afrodita" al Director Regional del Servicio Nacional de Salud de Valparaiso - San Antonio V Región, Daniel Verdechiz solicitando entrevista.'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/12.webp",
        title: "Primer carné Sindicato Afrodita",
        serie: "Organización Sindical",
        actividad:'Constitución del sindicato',
        fecha: "2000",
        lugar: "Valparaíso",
        productor:'Archivo Sindicato Afrodita',
        descripcion:'Carné del Sindicato Afrodita de la socia n°2 Sandra Peña'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/13.webp",
        title: "Socias - inauguración sede Colón",
        serie: "Organización Sindical",
        fecha: "Agosto de 2003",
        lugar: "Valparaíso",
        productor:'Archivo Sindicato Afrodita',
        descripcion:'Inaugutación sede Colón - Fundadoras del Sindicato: Paloma, Morin, Zuliana, Cristina, Giovana, Ale, Dayana, Camilo, Patty'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/14.webp",
        title: "Bandera - inauguración sede Colón",
        serie: "Organización Sindical",
        actividad: "Actividades en sede",
        fecha: "Agosto de 2003",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:'Zuliana con la primera bandera confeccionada por Pika para una marcha con Gladys Marin del PC Chileno.'
      },
      {
         src: "/media/archivo-sindical/organizacion-sindical/15.webp",
        title: "Bendición Padre Pepo - inauguración sede Colón",
        serie: "Organización Sindical",
        actividad: "Actividades en sede",
        fecha: "Agosto de 2003",
        lugar: "Valparaíso",
        productor:'Archivo Sindicato Afrodita',
        descripcion:'Ceremonia de inauguración de la sede Colón. De izquierda a derecha: Padre Pepo de la Iglesia La Matriz, Marcelo Aguilar de Acción Gay y Zuliana.'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/16.webp",
        title: "Alcalde - inauguración sede Colón",
        serie: "Organización Sindical",
        actividad: "Actividades en sede",
        fecha: "Agosto de 2003",
        lugar: "Valparaíso",
        productor:'Archivo Sindicato Afrodita',
        descripcion:'En la fotografía aparece Zuliana junto al alcalde de Valparaíso, Sr. Jorge Castro.'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/17.webp",
        title: "Socias ante lienzo- inauguración sede Colón",
        serie: "Organización Sindical",
        actividad: "Actividades en sede",
        fecha: "Agosto del 2003",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:"En la fotografía de izquierda a derecha: Camilo, Zuliana  Yhoana, Denis, Jimena y Alejandro, integrantes de la directiva del momento, de rojo está Tania, en ese momento integrante del sindicato Atheneus. "
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/18.webp",
        title: "Travestis inaugiran sede",
        serie: "Organización Sindical",
        actividad: "Actividades en sede",
        fecha: "circa 2003",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:"Recorte de prensa s/f, periodico no identificado,  que da cuenta de la inauguración de la sede Colón"
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/19.webp",
        title: "Estatutos",
        serie: "Organización Sindical",
        actividad: "Reforma de estatutos",
        fecha: "17 de diciembre de 2003",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:" Estatutos que modifican algunos articulos y formalizan el cambio de nombre de la organización"
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/20.webp",
        title: "Jornadas de trabajo en sede de la organización",
        serie: "Organización Sindical",
        actividad: "Actividades en sede",
        fecha: "circa 2004",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:"Fotogragía de integrantes del sindicato, en primera linea Clara, Vanesa, Zuliana, Valeria. Atrás se ve el lienzo del Sindicato de Trabajadoras Independientes Travestis Afrodita"
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/21.webp",
        title: "Travestis piden casa fiscal y CORES dicen ¡No, hacen puras cochinadas!",
        serie: "Organización Sindical",
        actividad: "Gestiones por sede Avenida España",
        fecha: "s/f",
        lugar: "Valparaíso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:"Recorte de prensa s/f, periodico no identificado, sobre la solicitud a Bienes Nacionales de una propiedad para ser usada como sede social"
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/22.webp",
        title: "Conferencia de prensa - inauguración sede Av. España",
        serie: "Organización Sindical",
        actividad: "Inauguración sede Avenida España",
        fecha: "2006",
        lugar: "Valparaíso",
        productor:'Archivo Sindicato Afrodita',
        descripcion:'Inauguración de la sede de Avenida España. En la fotografía se aprecia a Valeria en el patio trasero junto a diversas autoridades.'
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/23.webp",
        title: "Valeria Bustos y  Marcelo Aguilar - inauguración sede Av. España",
        serie: "Organización Sindical",
        actividad: "Inauguración sede Avenida España",
        fecha: "2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Inauguración de la sede de Avenida España. En la fotografía se aprecia a Valeria, Marcelo Aguilar, autoridades y prensa."
      },
      {
        src: "/media/archivo-sindical/organizacion-sindical/24.mp4",
        title: "Sindicalilzar la esquina",
        serie: "Organización Sindical",
        actividad: "Exposición Fuerza Travesti Organizada",
        fecha: "2025",
        lugar: "Valparaiso",
        productor:"Archivo Sindicato Afrodita- Editado por Lucas Disalvo",
        descripcion:"Video de la historia del Sindicato Afrodita, realización de Lucas M. Disalvo",
        poster: "/media/archivo-sindical/organizacion-sindical/27.png",
        media: "video"
      },
    ],
  },
  {
    slug: "trabajo-sexual",
    title: "Trabajo Sexual",
    cover: "/media/archivo-sindical/trs.jpg",
    intro: "Esta sección del archivo documenta las formas de negociación con autoridades municipales, y regionales, funcionarios de la policía y de gendarmería, así como  acciones en defensa del derecho a ejercer el trabajo sexual y por la mejora de condiciones carcelarias, denuncias por casos de discriminación, violencia policial o ataques neonazis.",
    images: [
      {
        src: "/media/archivo-sindical/trabajo-sexual/1.webp",
        title: "Amenazan de muerte a travestis de Viña",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Neonazis",
        fecha: "14 diciembre 1999",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, portada, 14 diciembre 1999"
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/2.webp",
        title: "A botellazos desfiguraron el rostro a travesti porteño",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Neonazis",
        fecha: "12 enero 2002",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 12 enero 2002, p.15. Noticia relata el brutal ataque neonazi que afectó a Valeria."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/3.webp",
        title: "Barrio Rojo: Agita las aguas en Viña del Mar",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Conflicto con Municipio",
        fecha: "4 octubre 2002",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Recorte de prensa, diario desconocido, 4 octubre 2002. Disputa entre sindicato, vecinos y municipio ante la posibilidad de instalar un Barrio Rojo en la comuna de Viña del Mar."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/4.webp",
        title: "Travestis dicen que se defenderán con palabras frente a evangélicos",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Conflicto con evangélicos",
        fecha: "16 de diciembre de 2002",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'La Estrella de Valparaiso, 16 diciembre 2002, p.3. La nota señala que el grupo "Los valientes de David" se proponen combatir el trabajo sexual callejero a través de la evangelización.'
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/5.webp",
        title: "Nuestras unicas armas son la palabra y el amor de Dios",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Inauguración sede Avenida España",
        fecha: "18 de diciembre de 2002",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'La Estrella de Valparaiso, 18 diciembre 2002, p. 4. Líder del grupo evangélico "Los Valientes de David" señala que sólo abordarán a travestis por medio de la palabra de Dios, desmintiendo supuestas agresiones a la comunidad travesti.'
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/6.webp",
        title: "Travestis viñamarinos dicen que enfrentaran evangélicos con besos, toqueteos y desnudos",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Conflicto con evangélicos",
        fecha: "23 de diciembre de 2002",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'La Estrella de Valparaíso, 23 diciembre 2002, p. 5. Respuesta del Sindicato Afrodita a las intenciones del grupo evangélico "Los Valientes de David". Señalan que les responderán con besos y desnudos.'
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/7.webp",
        title: "Sida en travestis causaría ataques",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Los Andes",
        fecha: "31 de diciembre de 2002",
        lugar: "Valparaíso - Los Andes",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Diario el Trabajo, portada, 31 diciembre 2002. Titulares del conflicto entre Carabineros y población travesti de Los Andes."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/8.webp",
        title: "Travestis infectados con sida podría ser el origen de los ataques",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Los Andes",
        fecha: "31 de diciembre de 2002",
        lugar: "Valparaíso - Los Andes",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Diario el Trabajo, 31 diciembre 2002, p. 6. Entrevista a prefecto de carabineros de Aconcagua, coronel Jorge Alvarez sobre la seguidilla de agresiones hacia la población travesti."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/9.webp",
        title: "Amenazan de muerte a travestis de Viña",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Los Andes",
        fecha: "14 diciembre 1999",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Comunicado de prensa firmado por Zuliana Araya denunciando agresiones hacia Pamela Allende en Los Andes que le causaron graves lesiones."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/10.webp",
        title: "Carta del Coronel de Carabineros",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Los Andes",
        fecha: "14 diciembre 1999",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'Respuesta del coronel de carabineros Heriberto Bustos dirigida al Señor  Enrique Alejandro Araya Gutiérrez  Presidente de Sindicato de Trabajadores Independientes Travestis "Afrodita" por la denuncia del Sindicato Afrodita hacia los dichos del coronel Alvarez.'
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/11.webp",
        title: "Carta al Gobernador de Los Andes",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Los Andes",
        fecha: "Febrero 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'Carta de  Zuliana Araya Presidenta de Sindicato Independiente de Travestis - Afrodita al Gobernador de Los Andes Benigno Retamal Rodríguez  denunciando actos de tortura hacia compañeras que fueron detenidas en Los Andes.'
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/12.webp",
        title: "Carta de la Ministra de Defensa Nacional",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Los Andes",
        fecha: "4 de marzo de 2003",
        lugar: "Santiago",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'Respuesta de la ministra de defensa nacional, Sra. Michel Bachelet Jeria dirigida al Sindicato Afrodita para comunicar las acciones tomadas por esa repartición pública ante las denuncias por el caso Los Andes.'
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/13.webp",
        title: "Carta al Ministro de Justicia",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "11 Marzo 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Zuliana, presidenta del Sindicato Afrodita al Ministro de Justicia, Sr. Luis Bastes Hidalgo que denuncia la discriminación a presos homosexuales en cárcel de San Miguel y solicitud de audiencia."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/14.webp",
        title: "Carta manuscrita de internos homsexuales de la cárcel de Quillota",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "5 de agosto 2003",
        lugar: "Quillota",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta manuscrita de los internos de la sección  especial del CDP de Quillota al Sindicato Afrodita."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/15.webp",
        title: "Carta al Gobernador de Valparaíso",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "circa 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Zuliana Araya, presidenta del Sindicato Afrodita a Gobernador de Valparaíso, Sr. Iván de la Maza denunciando por condiciones carcelarias en el complejo penal de Valparaíso."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/16.webp",
        title: "Grace y otras compañeras en la Carcel de Valparaiso",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "s/f",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "En esta fotografía, al interior de una celda de la cárcel de Valparaiso en la calle Dinamarca. De izquierda a derecha: Claudia, dos mujeres monitoras, Marcia Alejandra (la masca lata), Grace y el Che Antonio."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/17.webp",
        title: "Carta del Subsecretario de Justicia",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "29 de Agosto de 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'Carta del Subsecretario de Justicia Jaime Arellano Quintana al Sr.Enrique Alejandro Araya Gutiérrez "Zuliana" Presidenta de Sindicato de Trabajadores Independientes Travestis - Afrodita ante las denuncias realizadas por el sindicato.'
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/18.webp",
        title: "Carta de Director de Gendarmería",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: " Lucha anticarcelaria",
        fecha: "5 Septiembre 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Respuesta del Director de Gendarmería, Sr. Juan Carlo Pérez Contreras a Zuliana Araya, Presidenta del Sindicato Afrodita de Valparaíso en respuesta a las denuncias por discriminación a la población travesti en cárceles de Valparaíso."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/19.webp",
        title: "Carta al Director Regional de Gendarmería.",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "25 septiembre 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Zuliana Araya, Presidenta del Sindicato Afrodita  al Director Regional de Gendarmería solicitando visita a centros penitenciarios para verificar las condiciones de la población travesti."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/20.webp",
        title: "Autorización de Gendarmería",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "15 de Octubre 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Autorización de Horacio Gallo Brochon, Inspector Director Regional de Gendarmería de Chile a Zuliana Araya, Presidenta del Sindicato Afrodita de Valparaíso para al CDP de Quillota."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/21.webp",
        title: "En la cárcel porteña Acusan discriminación a los presos con Sida",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "28 de Octubre 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaiso, 23 de octubre de 2003, p.7. Nota periodística que aborda las denuncias del sindicato en relación con el trato vejatorio al que estarían siendo sometidas las compañeras portadoras del VIH en la cárcel de Valparaíso"
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/22.webp",
        title: "Carta al Jefe del Complejo Valparaíso",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "13 noviembre 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Zuliana Araya, Presidenta del Sindicato Afrodita al Jefe del Complejo Valparaíso, Sr. Jorge Castillo, solicitando permiso para visitar y verificar las condiciones del módulo 112."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/23.webp",
        title: 'Instalar un "Barrio Rojo" sería la forma de terminar con el problema travesti en Viña',
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Conflicto con Municipio",
        fecha: "14 Abril 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 14 de abril, p. 17. La nota relata la creación de una Mesa de Trabajo entre sindicato, vecinos y Municipio para evaluar posible instalación de Barrio Rojo."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/24.webp",
        title: 'Alcaldesa Reginato no quiere "Barrio Rojo" en Viña del Mar',
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Conflicto con Municipio",
        fecha: "16 abril 2025",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Recorte de prensa, periodico no identificado, 16 abril 2005. Nota que señala que Alcaldesa de Viña del Mar no se muestra de acuerdo con la idea de levantar un Barrio Rojo en su comuna."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/25.webp",
        title: '"Estamos siendo utilizadas. Nos sentimos engañadas y estafadas"',
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Conflicto con Municipio",
        fecha: "12 Julio 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 12 julio 2005, p. 3. La nota da cuenta de la desconfomidad de los sindicatos de trabajadoras sexuales con el Municipio viñamarino."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/26.webp",
        title: '"Jamas ofrecimos plata a los travestis"',
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Conflicto con Municipio",
        fecha: "13 julio 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 13 julio 2005, p.4. Nota que registra la respuesta de la Alcaldesa Reginato ante denuncia de sindicatos de trabajadoras sexuales sobre dinero y capacitación."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/27.webp",
        title: "5 travestis muertos por grupo neonazi",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Neonazis",
        fecha: "19 julio 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, portada, 19 julio 2005. Titular señala que el último fin de semana, la población travesti habría sufrido un nuevo ataque neonazi."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/28.webp",
        title: "Cinco muertos por grupo de neonazis",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Neonazis",
        fecha: "19 julio 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 19 julio 2005, p. 4. En la nota, Zuliana denuncia ataques reiterados de neonazis y poca credibilidad por parte de las policias. Cuenta sobre ataque que afectó a Michel en zalles céntricas de Viña del Mar."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/29.webp",
        title: '"Cada vez que nos pegan nos atienden horrible"',
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Derechos sexuales",
        fecha: "14 Julio 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Diario El Observador, 14 julio 2006, p. 5. La nota cubre el seminario de prevención del SIDA y revisión de la situación actual de la población trangénera."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/30.webp",
        title: "Lider travesti muere después de ser atendida 6 veces en hospital",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Wendy",
        fecha: "14 julio 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Recorte de prensa, El Observador, 14 julio 2006, s/p. Noticia sobre supuesta negligencia médica en la atención de Wendy en Hospital Van Buren en Valparaíso."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/31.webp",
        title: "Carta a Nelson Avila Senador de la República",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Wendy",
        fecha: "14 diciembre 1999",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Zuliana Araya de Alianza Trans, de Ximena Soto Sindicato Afrodita y Marcelo Aguilar de Sidacción a Nelson Avila Senador de la República denunciado la discriminación y negligencia médica hacia Wendy en Hospital Carlos Van Buren."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/32.webp",
        title: "Oficio de Nélson Avila a Directora del Hospital Carlos Van Buren",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Wendy",
        fecha: "25 de julio de 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Oficio de Nélson Avila a Dafne Secul, Directora del Hospital Carlos Van Buren. Oficio a directora del Hospital Van Buren por caso de Wendy solicitando mayores antecedentes del caso."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/33.webp",
        title: "Fotografía de Wendy",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Wendy",
        fecha: "s/f",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "En la fotografía se aprecia a Zuliana a la izquierda, compañera no identificada y Wendy a la derecha."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/34.webp",
        title: ' Batallón de travestis "atacará" a Unitas',
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Unitas",
        fecha: " 1 agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, portada, 1° agosto 2006. Sindicato solicita que les controlen antes no durante la visita de los marinos de Unitas."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/35.webp",
        title: "Travestis tienen un batallón listo para esperar a los marinos de la Unitas.",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Unitas",
        fecha: "14 diciembre 1999",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 1° agosto 2006, p. 2. En a nota, Valeria Bustos, entonces presidenta del Sindicato Afrodita, señala su preocupación por los controles policiales a los que pueden ser sometidas cuando llegan los marinos de Unitas."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/36.webp",
        title: "¡Travestis con el trasero a dos manos! Temen por el ataque de grupos neonazis.",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Neonazis",
        fecha: "2 Agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 2 agosto 2006, p.5. En la nota, ante la llegada de los marinos de Unitas, las integrantes del sindicato afrodiita manifiestan sus temores ante posibles ataques de grupos neonazis."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/37.webp",
        title: 'Diario La Estrella de Valparaíso. Interior: Travestis amenazan con hacerle "turumba" a negritos de la Unitas',
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Unitas",
        fecha: "3 agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Nota donde Zuliana comparte experiencias con marinos Unitas."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/38.webp",
        title: '"Hasta me hicieron perro muerto"',
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Unitas",
        fecha: "5 agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 5 agosto 2006, p.12. Nota de prensa sobre visita de marinos Unitas a Valparaíso. Entrevista a Zuliana."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/39.webp",
        title: "Repudio total al crimen de travesti.",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "7 agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, portada, 7 agosto 2006. Diario local publica la noticia del asesinato de Viviana, la Champú."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/40.webp",
        title: "Descartan acción de neonazis en atroz crimen de travesti",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "7 agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso 7 agosto 2006, p.2-3. La nota señala que según Fiscalía y el sindicato, se descarta que el crimen contra Viviana sea un ataque neonazi."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/41.webp",
        title: "Guardia sospechoso n°1 De crimen del travesti",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "08 Agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella, portada, 8 agosto 2006 Titular sobre único sospechoso en el crímen de Viviana, la Champú."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/42.webp",
        title: "Sospechoso n°1 sería un guardia de supermercado",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "08 Agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 8 agosto 2006, p. 2-3. Nota periodística que aborda los detalles que se conocen del brutal asesinato a Viviana, la Champú."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/43.webp",
        title: "Carta al Alcalde de Valparaíso",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "8 agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Zuliana Araya, Presidenta del Sindicato Afrodita al Alcalde de Valparaíso, Sr. Aldo Cornejo para solicitar apoyo para sepultar a Viviana, la champú."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/44.webp",
        title: "Carta a Aldo Cornejo Alcalde de la Municipalidad de Valparaiso",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "18 Agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Valeria Bustos Tello, Presidenta del Sindicato Afrodita a Aldo Cornejo Alcalde de la Municipalidad de Valparaiso para agradecer por cesión de terreno para sepultar a Viviana, la Champú."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/45.webp",
        title: "Carta a Octavio Salvo.",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "18 agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Valeria Bustos Tello, Presidenta del Sindicato Afrodita a Octavio Salvo en agradecimiento por cesión de terreno para sepultar a Viviana, la Champú"
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/46.webp",
        title: "Escabrosos detalles en crimen del travesti",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "19 agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso. portada, 19 agosto 2006."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/47.webp",
        title: "Sordidos entretelones del asesinato del travesti",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "19 Agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 19 agosto 2006, p. 2-3. La nota señala que el ex guardia de supermercado habría discutido y luego asesinado a Viviana, la Champú, por desacuerdos en el pago de los servicios."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/48.webp",
        title: "Comunicado de Prensa",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "21 Agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Denuncia de discriminación por parte del fiscal Claudio Uribe por el trato hacia el caso de Viviana, la Champú."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/49.webp",
        title: "Carta a Fiscal Regional",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "22 Agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Agrupación Trans hace la Fuerza , firmada por Zuliana Araya a Fiscal Regional, Sr. Jorge Abbot. Denuncia por discriminación del Fiscal a cargo del caso de Viviana, la champú."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/50.webp",
        title: "Travestis: La Fiscalía nos discrimina",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Caso Champú",
        fecha: "26 agosto 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 26 de agosto 2006,  p.5. Zuliana junto a otras compañeras denuncia malos tratos y discriminación por parte del Fiscal a cargo del caso de Viviana, la Champú."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/51.webp",
        title: "Ordenanza del Director Regional de Gendarmería de Chile",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "8 febrero 2008",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Ordenanza del Director Regional de Gendarmería de Chile, región de Valparaíso a Secretario Regional de Justicia. Informe sobre visita del Director del Gendarme a módulo 117 del Complejo Penitenciario de Valparaíso."
      },
      {
        src: "/media/archivo-sindical/trabajo-sexual/52.webp",
        title: "Ordenanza de Secretario Regional Ministerial de Salud",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Lucha anticarcelaria",
        fecha: "7 marzo 2008",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Ordenanza 0479 de Secretario Regional Ministerial de Salud, Sr. Fernando Olmedo a Presidenta del Sindicato Afrodita, Sra. Zuliana Araya. Respuesta del Seremi de Salud en relación con la situación de los internos del módulo 117 del Complejo Penitenciario de Valparaíso"
      },
      {
        src:"/media/archivo-sindical/trabajo-sexual/53.mp4",
        title: "Afrodita News",
        serie: "Labor Sindical por el Trabajo Sexual",
        actividad: "Exposición Fuerza Travesti Organizada",
        fecha: "2025",
        lugar: "Valparaiso",
        productor:"Archivo Sindicato Afrodita",
        descripcion:" Video realizado para la exposición Fuerza Travesti Organizada, 20 de marzo 2025",
        poster: "/media/archivo-sindical/trabajo-sexual/Barbara.webp",
        media: "video"
      },
    ],
  },
  {
    slug: "actividades-ciclicas",
    title: "Actividades Cíclicas",
    cover: "/media/archivo-sindical/ac.jpg",
    intro: "Esta sección reúne documentación de las actividades cíclicas que el Sindicato Afrodita  ha realizado regularmente a lo largo del tiempo, como parte de su funcionamiento y objetivos.  La organización de platos únicos, las ramadas, la celebración de navidades, el certámen de belleza Miss Afrodita, han sido actividades estaban destinadas a reunir fondos propios y a crear instancias de sociabilidad y encuentro para la comunidad travesti-trans.",
    images: [
      {
        src: "/media/archivo-sindical/actividades-ciclicas/1.webp",
        title: "Carta al Alcalde Hernan Pinto",
        serie: "Actividades cíclicas",
        actividad: "Plato único",
        fecha: "22 de noviembre 2001",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de solicitud de permiso para realizar plato único en Canciani, evento de recaudación de dinero."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/2.webp",
        title: "Plato único - Canciani",
        serie: "Actividades cíclicas",
        actividad: "Plato único",
        fecha: "1 de diciembre de 2001",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Espectáculo que animaba al plato único realizado en Canciani en Valparaíso."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/3.webp",
        title: "Maciel - Canciani",
        serie: "Actividades cíclicas",
        actividad: "Plato único",
        fecha: "1 de diciembre de 2001",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Espectáculo en el plato único realizado en Canciani en Valparaíso. En la fotografía Masiel."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/4.webp",
        title: "Nicole - Canciani",
        serie: "Actividades cíclicas",
        actividad: "Plato único",
        fecha: "1 de diciembre de 2001",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Momento bailable del plato único en Canciani. En la fotografía se puede apreciar a Nicole."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/5.webp",
        title: "Ramada travesti es un éxito en parque Alejo Barrios",
        serie: "Actividades cíclicas",
        actividad: "Ramadas",
        fecha: "20 de septiembre de 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 20 de septiembre de 2003, p.16. Nota sobre la primera ramada del sindicato Afrodita en el Parque Alejo Barrios en Valparaíso."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/6.webp",
        title: "Travestis fueron los que más vendieron",
        serie: "Actividades cíclicas",
        actividad: "Ramadas",
        fecha: "22 de septiembre de 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'Diario La Estrella de Valparaíso, 22 de septiembe de 2003, p. 12. "Nota sobre el éxito de la primera ramada travesti en el Alejo Barrío de Valparaíso.'
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/7.webp",
        title: 'Travestis tendrán su propia ramada y se llamará "Machos, machos, machos menos"',
        serie: "Actividades cíclicas",
        actividad: "Ramadas",
        fecha: "16 de septiembre de 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "La Estrella de Valparaíso, 16 de septiembe de 2003, p.5. La nota hace un llamado de Zuliana a visitar la primera ramada travesti en el Alejo Barrio."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/8.webp",
        title: "Carta a Alcalde de la Municipalidad de Viña del Mar",
        serie: "Actividades cíclicas",
        actividad: "Navidades",
        fecha: "21 de noviembre de 2003",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Zuliana Araya, Presidenta del Sindicato Afrodita de Valparaíso a Sr. Jorge Kaplan Meyer, alcalde de la Municipalidad de Viña del Mar, solicitando aportes para celebrar la navidad con las socias y sus sobrinos."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/9.webp",
        title: "Ramadas 2004",
        serie: "Actividades cíclicas",
        actividad: "Ramadas",
        fecha: "Septiembre de 2004",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Espectáculo en ramada  del Parque Alejo Barrio, Valparaíso. Aparecen en la fotografía Pirilacha, Rumpy, Zuliana y Jiohana"
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/10.webp",
        title: "Ramada 2004 - 2",
        serie: "Actividades cíclicas",
        actividad: "Ramadas",
        fecha: "Septiembre de 2004",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Ramada en Alejo Barrio, Valparaíso. En ella aparece Ramón Raman, Zuliana y Marisela."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/11.webp",
        title: "Ramada 2004 - 3",
        serie: "Actividades cíclicas",
        actividad: "Ramadas",
        fecha: "Septiembre de 2004",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Grupo de compañeras en la ramada del Parque Alejo Barrio en Valparaíso. En la fotografía aparecen Ximena, Zuliana y Maricela."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/12.webp",
        title: "Celebración Navidad",
        serie: "Actividades cíclicas",
        actividad: "Navidad",
        fecha: "circa 2002 - 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Celebración de la navidad en la sede Colón del Sindicato Afrodita. De izquierda a derecha: Johana, Ximena, Nicol, Andrea."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/13.webp",
        title: "Celebracion Navidad - 2",
        serie: "Actividades cíclicas",
        actividad: "Navidad",
        fecha: "circa 2002 - 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Celebración de navidad en la sede Colón del Sindicato Afrodita. En la fotografía aparece Zuliana junto al árbol."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/14.webp",
        title: "Celebración Navidad - 3",
        serie: "Actividades cíclicas",
        actividad: "Navidad",
        fecha: "circa 2002 - 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Panorámica de la celebración de la navidad en la sede del Sindicato Afrodita.  Aparecen Paty, Cintya,  Brau, Tito, Cler, Ximena, Yhoana, Nicol y Marisela."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/15.webp",
        title: "Celebración Navidad - 4",
        serie: "Actividades cíclicas",
        actividad: "Navidad",
        fecha: "circa 2002 - 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Mesa navideña en sede del Sindicato Afrodita."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/16.webp",
        title: "Celebración Navidad - 5",
        serie: "Actividades cíclicas",
        actividad: "Navidad",
        fecha: "circa 2002 - 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Mesa navideña en sede del Sindicato Afrodita."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/17.webp",
        title: "Carta a Alcalde de Valparaíso",
        serie: "Actividades cíclicas",
        actividad: "Navidad",
        fecha: "15 de diciembre de 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta de Ximena Soto, secretaria del Sindicato Afrodita al Alcalde de Valparaíso a Sr. Jorge Castro  solicitando apoyo para celebrar Navidad con sobrinos y pequeños."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/18.webp",
        title: "Miss Afrodita",
        serie: "Actividades cíclicas",
        actividad: "Miss Trans",
        fecha: "circa 2010",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Coronación de Miss Transgénero Afrodita. En la fotografía aparecen Alexandra, Juliana, Zuliana y Luna Dimauri, en segundo plano Marcelo."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/19.webp",
        title: "A todo trapo fue la elección de nueva reina porteña de Miss Afrodita 2011",
        serie: "Actividades cíclicas",
        actividad: "Miss Trans",
        fecha: "circa 2011",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Recorte de prensa s/f, periodico no identificado, Gran evento para elegir a la nueva Miss Afrodita 2011."
      },
      {
        src: "/media/archivo-sindical/actividades-ciclicas/20.webp",
        title: "Fonderos se pelean por ser vecinos de travestis",
        serie: "Actividades cíclicas",
        actividad: "Ramadas",
        fecha: "20 de agosto de 2014",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Recorte de prensa, 20 de agosto de 2014, periodico no identificado. Encargado de fondas da cuenta de cómo a cambiado el panorama desde la llegada de la fonda de las travestis."
      },
    ],
  },
  {
    slug: "alianzas-trans",
    title: "Alianzas Trans",
    cover: "/media/archivo-sindical/atr.jpg",
    intro: "Documentación de articulaciones, encuentros, marchas y colaboraciones con diversas organizaciones trans y aliadas en Valparaíso y Santiago entre 2002 y 2015.",
    images: [
      {
        src: "/media/archivo-sindical/alianzas-trans/1.webp",
        title: 'Comunidad Gay recordó a victimas de la discoteca Divine',
        serie: "Alianzas Políticas",
        actividad: "Marchas",
        fecha: "5 de septiembre de 2002",
        lugar: "Valparaíso",
        productor:'Archivo Sindicato Afrodita',
        descripcion:'El Mercurio de Valparaiso, 5 de septiembe de 2002, p. 7. Conmemoración incendio de la Disco Divine, piden reapertura del caso.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/2.webp",
        title: "Travestis porteños desfilan en santiago.",
        serie: "Alianzas Políticas",
        actividad: "Marchas",
        fecha: "27 de septiembre de 2003",
        lugar: "Valparaíso",
        productor:'Sindicato Archivo Afrodita',
        descripcion:'Diario La Estrella de Valparaíso,27 de septiembre de 2003, p. 4. Más de veinte integrantes viajan a participar de la Marcha del Orgullos en Santiago.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/3.webp",
        title: "Reunión entre dirigentas de diversas organizaciones trans.",
        serie: "Alianzas Políticas",
        actividad: "Articulaciones",
        fecha: "circa 2003",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'En la fotografía junto a Zuliana se puede apreciar a compañeras de  la Agrupación Corazones Solidarios de Quillota'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/4.webp",
        title: "Marcha en Santiago",
        serie: "Actividades cíclicas",
        actividad: "Marcha",
        fecha: "octubre de 2004",
        lugar: "Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Marcha en defensa de las diversidades en el marco de un encuentro de organizaciones en el centro de Santiago sosteniendo un lienzo en favor de las diversidades sexuales.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/5.webp",
        title: "Comunicado en apoyo a Karen Atala",
        serie: "Actividades cíclicas",
        actividad: "Articulaciones",
        fecha: "circa 2004",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Comunicado en conjunto con Católicas por el Derecho a Decidir, Batucada Kanaima, Sindicato Afrodita y Corporación Chilena de Prevención del SIDA en apoyo por fallo en contra a la jueza Karen Atala respecto a la tenencia de sus hijas por su orientación sexual.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/6.webp",
        title: "Segundo Encuentro Transgénero de Valparaíso.",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "11 de julio de 2006",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Compañeras reunidas en el Primer Encuentro Transgénero en Valparaíso. En la fotografía es posible reconocer a Alejandra y Krishna.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/7.webp",
        title: "Segundo Encuentro Transgénero de Valparaíso. - 2",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "11 de julio de 2006",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'En el Primer Encuentro Transgénero en Valparaíso. En la fotografía, Patricia y Krishna de Amanda Jofré.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/8.webp",
        title: "Segundo Encuentro Transgenero de Valparaiso - 3",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "11 de julio de 2006",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Colaboración de diversas organizaciones trans, en la fotografía Ximena,la Yayo y Valeria.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/9.webp",
        title: "Segundo Encuentro Transgenero de Valparaiso - 4",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "11 de julio de 2006",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Preparación del Segundo Encuentro Trans en Chile.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/10.webp",
        title: "Segundo Encuentro Transgenero de Chile - 5",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "11 de julio de 2006",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Compañeras de diversas organizaciones participando del Encuentro Trans en Valparaíso.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/11.webp",
        title: "Congreso Nancional de Organizaciones Transfeministas",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "Septiembre de 2006",
        lugar: "Santiago",
        productor: 'Archivo Sindicato Afrodita.',
        descripcion: 'Tríptico con información sobre el Congreso Nacional de Organizaciones Transfemeninas.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/12.webp",
        title: "Congreso Nancional de Organizaciones Transfeministas",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "Septiembre de 2006",
        lugar: "Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Tríptico con información sobre el Congreso Nacional de Organizaciones Transfemeninas.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/13.webp",
        title: "Congreso Transfeminista en Universidad Arcis",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "Septiembre de 2006",
        lugar: "Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Panel del Congreso Nacional de Organizaciones Transfemeninas realizado en Universidad Arcis en sede Libertad.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/14.webp",
        title: "Arriba del camión durante marcha en Santiago.",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "Septiembre de 2006",
        lugar: "Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Espectáculo artístico en el Congreso Nacional de Organizaciones Transfemeninas realizado en Universidad Arcis en sede Libertad.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/15.webp",
        title: "Viaje a marcha del orgullo en Santiago",
        serie: "Actividades cíclicas",
        actividad: "Marcha",
        fecha: "circa 2006",
        lugar: "Valparaíso - Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Compañeras en viaje de Valparaíso a Santiago para participar de la marcha por el orgullo, disfrazadas de Afrdotia, durante la presidencia de Valeria Bustos. Se puede distinguir en primer plano a Marisela.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/16.webp",
        title: "Arriba del camión en la marcha de Santiago",
        serie: "Actividades cíclicas",
        actividad: "Marcha",
        fecha: "circa 2006",
        lugar: "Valparaíso - Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Bailando en marcha por el orgullo en Santiago. En la fotografía se puede apreciar a Marisela.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/17.webp",
        title: "Escenario marcha del orgullo",
        serie: "Actividades cíclicas",
        actividad: "Marcha",
        fecha: "circa 2006",
        lugar: "Valparaíso - Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Zuliana, Abigail y Camila sobre el escenario prinicpal de la marcha por el orgullo. En manos de Zuliana se aprecia cartel que señala "Fin al 373"'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/18.webp",
        title: "Marcha del orgullo en Santiago",
        serie: "Actividades cíclicas",
        actividad: "Marcha",
        fecha: "circa 2006",
        lugar: "Valparaíso - Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'En la marcha por el orgullo en Santiago. Se puede apreciar a Sandra Peña, Guajachi, Pty, Susy Cuatro y Ximena.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/19.webp",
        title: "Marcha del orgullo en Santiago - 2",
        serie: "Actividades cíclicas",
        actividad: "Marcha",
        fecha: "circa 2006",
        lugar: "Valparaíso - Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Compañeras bailan sobre el carro alegórico en Marcha del Orgullo.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/20.webp",
        title: "Marcha del orgullo en Santiago - 3",
        serie: "Actividades cíclicas",
        actividad: "Encuentros Trans",
        fecha: "circa 2007",
        lugar: "Valparaíso - Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Compañeras bailan sobre el carro alegórico en Marcha del Orgullo.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/21.webp",
        title: "Bus de regreso a Valparaiso",
        serie: "Actividades cíclicas",
        actividad: "Encuentros Trans",
        fecha: "circa 2007",
        lugar: "Valparaíso - Santiago",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'De regreso a Valparaíso después de participar de la Marcha por el Orgullo en Santiago.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/22.webp",
        title: "Segundo Encuentro Transgenero de Chile",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "circa 2007",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Planificación del Segundo Encuentro Trans en Chile.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/23.webp",
        title: "Segundo Encuentro Transgenero de Chile - 2",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "circa 2007",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Material de trabajo para el 2° Encuentro Nacional Trans.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/24.webp",
        title: ' "Bolocazzo" encendió carnaval gay de Valparaíso',
        serie: "Alianzas Políticas",
        actividad: "Marchas",
        fecha: "29 junio 2007",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Las Últimas Noticias. 29 de junio de 2007, s/p. Nota sobre primera marcha con desfile en Valparaíso.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/25.webp",
        title: "En Marcha por el Orgullo en Valparaíso",
        serie: "Alianzas Políticas",
        actividad: "Marchas",
        fecha: "junio 2007",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Paulina Kournikova en la Marcha del Orgullo en Valparaíso.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/26.webp",
        title: "En Marcha por el Orgullo en Valparaíso - 2",
        serie: "Alianzas Políticas",
        actividad: "Marchas",
        fecha: "junio 2007",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Paulina Kournikova en la Marcha del Orgullo en Valparaíso.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/27.webp",
        title: "En Marcha por el Orgullo en Valparaíso - 3",
        serie: "Alianzas Políticas",
        actividad: "Marchas",
        fecha: "junio 2007",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'En la fotografía, entre otros, aparece Ziuliana, Marcelo Aguilar de Acción Gay y la concejala Laura Soto.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/28.webp",
        title: "En Marcha por el Orgullo en Valparaíso - 4",
        serie: "Alianzas Políticas",
        actividad: "Marchas",
        fecha: "junio 2007",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'En la fotografía aparece Ziuliana, Marcelo Aguilar de Acción Gay y la concejala Laura Soto.'
      },
      {
        src: "/media/archivo-sindical/alianzas-trans/29.webp",
        title: "Protocolo de colaboración",
        serie: "Alianzas Políticas",
        actividad: "Encuentros Trans",
        fecha: "2015",
        lugar: "Valparaíso",
        productor: 'Archivo Sindicato Afrodita',
        descripcion: 'Protocolo de colaboración para las buenas prácticas laborales'
      }
    ]
  },
  {
    slug: "capacitaciones",
    title: "Capacitaciones",
    cover: "/media/archivo-sindical/c.jpg",
    intro: "La serie sobre talleres y capacitaciones incluye diferentes experiencias de formación que atravesaron al sindicato vinculadas tanto al aprendizaje de oficios como banquetería, peluquería o costura, como capacitaciones ligadas a formación en salud ligadas al VIH, ETS o salud trans.",
    images: [
      {
        src: "/media/archivo-sindical/capacitaciones/1.webp",
        title: "Capacitacion Fosis",
        serie: "Talleres y capacitaciones",
        actividad: "Capacitaciones",
        fecha: "circa 2002 - 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "En una capacitación de FOSIS. En la fotografía aparece Zuliana y Vanessa junto a concejales de la época."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/2.webp",
        title: "Capacitacion Fosis -2",
        serie: "Talleres y capacitaciones",
        actividad: "Capacitaciones",
        fecha: "circa 2002 - 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "En una capacitación de FOSIS. En la fotografía aparece Vanessa junto a otras compañeras"
      },
      {
        src: "/media/archivo-sindical/capacitaciones/3.webp",
        title: "Capacitacion Sede Colón",
        serie: "Talleres y capacitaciones",
        actividad: "Capacitaciones",
        fecha: " circa 2003-2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "En capacitaciones y talleres. En la fotografía aparecen Karen, Michel, Peluca, Sandra, Grace, Clara,  Jhoana y Esdrupy"
      },
      {
        src: "/media/archivo-sindical/capacitaciones/4.webp",
        title: "Carta Embajador de Alemania",
        serie: "Talleres y capacitaciones",
        actividad: "Comedor Abierto",
        fecha: "circa 2004",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'Carta de Enrique Alejandro Araya Gutiérrez "Zuliana", Presidenta del Sindicato de Trabajadoras Independientes Travestis - Afrodita al Embajador de alemania para solicitar apoyo a Embajada para mantener en funcionamiento comedor solidario el cual cubre a 77 socias que trabajan en la calle y 42 socias retiradas mayores de 50 años. Dice que tienen hasta enero de 2005 tienen pagado el arriendo de la sede.'
      },
      {
        src: "/media/archivo-sindical/capacitaciones/5.webp",
        title: "Almuerzo sede Colón",
        serie: "Talleres y capacitaciones",
        actividad: "Comedor Abierto",
        fecha: "circa 2003 - 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Capacitación sede Colón"
      },
      {
        src: "/media/archivo-sindical/capacitaciones/6.webp",
        title: "Tomando Once en sede Colón",
        serie: "Talleres y capacitaciones",
        actividad: "Comedor Abierto",
        fecha: "circa 2003 - 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Compartiendo una onces en la sede del sindicato probablemente después de una capacitación. En la pared fotos y notas de prensa. Algunas compañeras que aparecen en la fotografía: Dayana, Nicol, Karen, Zuliana, Maricela, Jhoana."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/7.webp",
        title: "Carta a Jorge Correa Sutil",
        serie: "Talleres y capacitaciones",
        actividad: "Por el derecho a conocer otras formas de vida",
        fecha: "junio 2004",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'Carta de Enrique Araya Gutierrez a Jorge Correa Sutil donde se informa que presentaron el proyecto "Por el derecho a conocer otras formas de vida".Enrique Araya presenta el trabajo del Sindicato, señalando que cuentan con 4000 socias inscritas y 40 activas. Argumenta que el proyecto es necesario para aportar herramientas a las compañeras que ejercen el comercio sexual. Se trata de un taller de repostería.'
      },
      {
        src: "/media/archivo-sindical/capacitaciones/8.webp",
        title: "Oficio N° 992  emitido por el Gobernador Provincial de Valparaíso",
        serie: "Talleres y capacitaciones",
        actividad: "Por el derecho a conocer otras formas de vida",
        fecha: "19 de julio 2004",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'Oficio N° 992  emitido por Sr. Iván de la Maza Maillet Gobernador Provincial de Valparaíso a Sr. Jorge Correa Sutil, Subsecretario del Interior que presenta el proyecto "Por el derecho a conocer otras formas de vida".'
      },
      {
        src: "/media/archivo-sindical/capacitaciones/9.webp",
        title: "Carta a Embajada de Suiza",
        serie: "Talleres y capacitaciones",
        actividad: "Capacitaciones banquetería",
        fecha: "1 de marzo de 2005",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta a de Sindicato Afrodita a Sr. Encargado de Proyecto Embajada de Suiza, solicita apyo para crear un taller de gastronomia para que las integrantes del sindicato puedan salir de la calle y crear una Microempresa."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/10.webp",
        title: "Taller Cocina Interncional y Banquetería",
        serie: "Talleres y capacitaciones",
        actividad: "Taller Cocina Interncional y Banquetería Esilex - Programa SENCE",
        fecha: "circa abril 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Registro de la formación teórica del taller en Cocina Interncional y Banquetería Esilex. En la fotografía Morin, Karen, Javiera y Grace dibujan en papelógrafo una píramide de alimentos."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/11.webp",
        title: "Taller Cocina Interncional y Banquetería - 2",
        serie: "Talleres y capacitaciones",
        actividad: "Taller Cocina Interncional y Banquetería Esilex - Programa SENCE",
        fecha: "circa abril 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Registro de la formación teórica del Taller en Cocina Interncional y Banquetería. En la fotografía se ve a Javiera, Sandra, Grace y Nicole."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/12.webp",
        title: "Taller Cocina Interncional y Banquetería - 3",
        serie: "Talleres y capacitaciones",
        actividad: "Taller Cocina Interncional y Banquetería Esilex - Programa SENCE",
        fecha: "circa abril 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Registro de la formación práctica del Taller Cocina Interncional y Banquetería Esilex."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/13.webp",
        title: "Taller Cocina Interncional y Banquetería - 4",
        serie: "Talleres y capacitaciones",
        actividad: "Taller Cocina Interncional y Banquetería Esilex - Programa SENCE",
        fecha: "circa abril 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Registro de la formación práctica del Taller Cocina Interncional y Banquetería Esilex."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/14.webp",
        title: "Taller Cocina Interncional y Banquetería - 5",
        serie: "Talleres y capacitaciones",
        actividad: "Taller Cocina Interncional y Banquetería Esilex - Programa SENCE",
        fecha: "circa abril 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Registro de la formación práctica del Taller Cocina Interncional y Banquetería Esilex."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/15.webp",
        title: "Taller Cocina Interncional y Banquetería - 6",
        serie: "Talleres y capacitaciones",
        actividad: "Taller Cocina Interncional y Banquetería Esilex - Programa SENCE",
        fecha: "circa abril 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "En Taller de Cocina Interncional y Banquetería Esilex. Aparecen Javiera, Mourine, Karen, la profesora Maria, Morin y Peluca"
      },
      {
        src: "/media/archivo-sindical/capacitaciones/16.webp",
        title: 'Travestis se preparan para ser cocineras, "No se nos quemará el arroz", dicen.',
        serie: "Talleres y capacitaciones",
        actividad: "Taller Cocina Interncional y Banquetería Esilex - Programa SENCE",
        fecha: "1 de abril de 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: 'La Estrella de Valparaíso, portada, 1 de abril, 2006.  Titular sobre capacitación en banquetería de las integrantes del Sindicato Afrodita, haciendo referencia al dicho popular "se le quema el arroz" utilizado en Chile para referirse a las personas homosexules.'
      },
      {
        src: "/media/archivo-sindical/capacitaciones/17.webp",
        title: "Travestis serán cocineras y barwomen",
        serie: "Talleres y capacitaciones",
        actividad: "Taller Cocina Interncional y Banquetería Esilex - Programa SENCE",
        fecha: "1 de abril de 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Diario La Estrella de Valparaíso, 1° abril 2006, p.14. La nota cuenta que el Sindicato Afrodita a través del SENCE (servicio nacional de Capacitación) capacita a sus integrantes en banquetería y reposteria y las certifica como manipuladoras de alimentos. La nota señala que la entidad se comprometió a conseguirles prácticas en empresas."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/18.webp",
        title: "Denuncia pública al Diario La Estrella",
        serie: "Talleres y capacitaciones",
        actividad: "Conflicto Diario La Estrella talleres de banquetería",
        fecha: "abril de 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta al Diario La Estrella manifestando molestia por un reportaje publicado el 01 de abril de 2006. Esperan algún tipo de disculpa."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/19.webp",
        title: "Denuncia pública directorio Diario La Estrella",
        serie: "Talleres y capacitaciones",
        actividad: "Conflicto Diario La Estrella talleres de banquetería",
        fecha: "13 de abril de 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Carta al directorio del Diario La Estrella de Valparaíso para manifestar su molestia por un reportaje publicado el 01 de abril de 2006 donde se burlaban de la orientación sexual e integridad de las personas travestis y homosexuales. Piden una disculpa."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/20.webp",
        title: "Entrega de diplomas",
        serie: "Talleres y capacitaciones",
        actividad: "Taller Cocina Interncional y Banquetería Esilex - Programa SENCE",
        fecha: "19 de mayo de 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Recibiendo certificaciones de Taller Cocina Interncional y Banquetería dictado por la Escuela Internacional Esilex en el marco del programa del Servicio Nacional de Capacitación y Empleo (SENCE). En la fotografía es posible reconocer a Pilar, Grace, Morin y Nicol."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/21.webp",
        title: "Capacitacion gastronomía sede Av. España",
        serie: "Talleres y capacitaciones",
        actividad: "Capacitaciones",
        fecha: "circa 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Taller gastronomía en sede Av. España"
      },
      {
        src: "/media/archivo-sindical/capacitaciones/22.webp",
        title: "Capacitación Peluquería sede Av. España",
        serie: "Talleres y capacitaciones",
        actividad: "Capacitaciones",
        fecha: "circa 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Claudia mostrando las máquinas de implementación del taller de peluquería."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/23.webp",
        title: "Capacitacion peluquería sede Av. España",
        serie: "Talleres y capacitaciones",
        actividad: "Capacitaciones",
        fecha: "circa 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Paulina peinando a Dayana en un curso de peluquería en la sede social del sindicato."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/24.webp",
        title: " Capacitación Corte y Confección sede Av. España",
        serie: "Talleres y capacitaciones",
        actividad: "Capacitaciones",
        fecha: "circa 2006",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "Paulina enseña a la prensa los conocimientos adquiridos en el taller de costura."
      },
      {
        src: "/media/archivo-sindical/capacitaciones/25.webp",
        title: "Capacitación en sede de Avenida España",
        serie: "Talleres y capacitaciones",
        actividad: "Capacitaciones",
        fecha: "circa 2007",
        lugar: "Valparaíso",
        productor: "Archivo Sindicato Afrodita",
        descripcion: "En una sesión de alguno de los talleres realizados en el Sindicato. Se puede apreciar a Andrea, Clara, Dana y Sandra, entre otras."
      },
    ],
  },
];



// Buscar una sección por slug
export function getSection(slug: string): Section | undefined {
  const section = archivoSections.find((s) => s.slug === slug);
  if (!section) return undefined;

  // Normalizar videos: detectar por extensión .mp4
  return {
    ...section,
    images: section.images.map((img) => {
      const isVideo = /\.mp4(\?.*)?$/i.test(img.src);
      
      // Si es video y no tiene poster, intentar inferir uno
      let poster = img.poster;
      if (isVideo && !poster) {
        poster = img.src.replace(/\.mp4(\?.*)?$/i, ".png");
      }
      
      return {
        ...img,
        media: isVideo ? "video" : (img.media ?? "image"),
        poster,
      };
    }),
  };
}
