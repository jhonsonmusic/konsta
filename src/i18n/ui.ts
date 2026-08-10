/**
 * Textos del sitio en español e inglés.
 * El español es el idioma principal; el inglés vive bajo /en/.
 */
export const idiomas = { es: 'ES', en: 'EN' } as const;
export type Idioma = keyof typeof idiomas;
export const idiomaPorDefecto: Idioma = 'es';

/** Deduce el idioma a partir de la ruta: /en/... es inglés. */
export function idiomaDeUrl(url: URL): Idioma {
  return url.pathname.startsWith('/en') ? 'en' : 'es';
}

/** Antepone /en a una ruta cuando el idioma lo requiere. */
export function ruta(idioma: Idioma, path: string): string {
  if (idioma === 'es') return path;
  return path === '/' ? '/en/' : `/en${path}`;
}

/** La misma página en el otro idioma. */
export function rutaAlterna(idioma: Idioma, url: URL): string {
  const limpia = url.pathname.replace(/^\/en/, '') || '/';
  return idioma === 'es' ? ruta('en', limpia) : limpia;
}

export const textos = {
  es: {
    meta: {
      inicio: {
        title: 'KONSTA — La excelencia es un ritual',
        description:
          'Proyecto Konsta: monoaleta de alto rendimiento en Colombia. Disciplina, familia y legado camino a The World Games 2029.',
      },
      origen: {
        title: 'Origen — Konsta',
        description:
          'Un camino forjado en la unión y la resiliencia: el origen del Proyecto Konsta y la familia que lo sostiene.',
      },
      tiburon: {
        title: 'Modo Tiburón — Konsta',
        description:
          'Modo Tiburón en acción: 4:00 a.m., agua fría y disciplina inquebrantable. El detrás de escena del entrenamiento de Konsta.',
      },
      ecosistema: {
        title: 'Ecosistema — Konsta',
        description:
          'Más allá de mi ondulación: impulsando el futuro de la monoaleta en Colombia. Manifiesto de compromiso del Proyecto Konsta.',
      },
      legado: {
        title: 'Colección Legado — Konsta',
        description:
          'Colección Legado: piezas de edición limitada que financian a atletas con potencial y recursos limitados.',
      },
      vision: {
        title: 'Visión 2029 — Konsta',
        description:
          'El horizonte: The World Games 2029 en Karlsruhe, Alemania. La hoja de ruta de Konsta año por año.',
      },
      aliado: {
        title: 'Ser aliado — Konsta',
        description:
          'Alianzas de marca con el Proyecto Konsta: brochure técnico de patrocinio y canal directo con el equipo de gestión.',
      },
    },
    nav: {
      inicio: 'Inicio',
      origen: 'Origen',
      tiburon: 'Modo Tiburón',
      ecosistema: 'Ecosistema',
      legado: 'Colección Legado',
      vision: 'Visión 2029',
      aliado: 'Ser aliado',
      principal: 'Principal',
      secundaria: 'Secundaria',
      abrirMenu: 'Abrir menú',
      cerrarMenu: 'Cerrar menú',
      inicioAria: 'Konsta — inicio',
      cambiarIdioma: 'Ver el sitio en inglés',
    },
    comun: {
      volverArriba: 'Volver arriba',
      continuaBajando: 'Continúa bajando',
      whatsapp: 'Escribir por WhatsApp',
      whatsappMensaje:
        'Hola, escribo desde konstadeportista.com. Quiero saber más sobre las alianzas con el Proyecto Konsta.',
      dominio: 'www.konstadeportista.com · Monoaleta',
      credito: 'Desarrollado por',
    },
    hero: {
      eyebrow: 'Monoaleta · Colombia',
      titulo1: 'KONSTA: LA',
      acento1: 'EXCELENCIA',
      titulo2: 'NO ES UN DON, ES UN',
      acento2: 'RITUAL.',
      lead: 'Más allá de la velocidad. Más allá de la medalla. Un proyecto de vida construido con disciplina implacable y el respaldo de un equipo que rompe límites.',
      cta: 'Conoce la historia',
      badge: 'Modo tiburón activo',
      valores: ['Disciplina', 'Familia', 'Legado'],
      fotoAlt: 'Konsta nadando estilo mariposa en la piscina',
      marquee: 'MODO TIBURÓN · DISCIPLINA IMPLACABLE · MODO TIBURÓN · SIN ATAJOS ·',
    },
    tiburonInicio: {
      lead: 'MUCHOS VEN EL SALTO. POCOS VEN LAS HORAS DE MADRUGONES, EL FRÍO, LA TÉCNICA Y LA CONVICCIÓN.',
      leadFuerte: 'ESTO NO ES SUERTE.',
      climax1: 'ESTO ES',
      climax2: 'MODO TIBURÓN.',
      cta: 'Únete al equipo (Patrocinios)',
      redes: 'Síguenos en nuestras redes',
      fotoAlt: 'Konsta sentado en el poyete, con monoaleta, antes de entrar al agua',
    },
    origen: {
      fotoAlt: 'Konsta sonriendo junto a la piscina',
      titulo1: 'UN CAMINO FORJADO EN LA',
      acento1: 'UNIÓN',
      titulo2: 'Y LA',
      acento2: 'RESILIENCIA',
      lead: 'Detrás de cada marca en el cronómetro, de cada salto y de cada medalla, hay una historia que no se ve en las piscinas. El camino de Konsta no ha sido una línea recta; se ha construido adaptándose a nuevos entornos, viviendo el deporte con una mentalidad global y entendiendo que el éxito real es el resultado de un esfuerzo compartido.',
      galeria: [
        'Isotipo de Konsta: aleta de tiburón en azul océano',
        'Dos niños con medallas sobre el podio de una competencia',
        'Dos nadadores entrenando con monoaleta y tabla en la piscina',
        'Konsta con cuatro medallas de competencia junto a la piscina de noche',
        'Konsta apoyado en el borde de la piscina junto a la tabla y la monoaleta',
        'Konsta ajustando la monoaleta sentado en el borde de la piscina',
      ],
    },
    familia: {
      fotoAlt: 'Konsta de niño junto a sus padres, sonriendo al aire libre',
      titulo1: 'LA',
      acento1: 'FAMILIA',
      titulo2: 'COMO EL',
      acento2: 'MOTOR',
      titulo3: 'DEL ALTO RENDIMIENTO',
      parrafo1:
        'En este proyecto no compite una sola persona. El verdadero núcleo de esta historia es un equipo incondicional: una familia que ha sabido estructurar los sueños de su hijo con disciplina, honestidad y un propósito humano inquebrantable.',
      parrafo2:
        'Para las marcas y aliados estratégicos que buscan asociarse con valores reales, el Proyecto Konsta representa transparencia, confianza institucional y un compromiso genuino con la excelencia. Aquí no solo apoyas a un deportista; respaldas un proyecto de vida íntegro que transforma el talento en un legado.',
    },
    accion: {
      titulo: 'MODO TIBURÓN',
      acento: 'EN ACCIÓN',
      copy1: 'Cuando el despertador suena a las 4:00 a.m., la mente intenta negociar. Pero la disciplina es inquebrantable. El agua fría no es un obstáculo, es el campo de entrenamiento donde se forja la resistencia. No compito contra otros nadadores;',
      copyFuerte: 'COMPITO',
      copy2: 'contra mi mejor versión de ayer. Cuando el cuerpo dice basta, mi mente responde: «Si lo hice antes, puedo hacerlo ahora». La medalla es solo el resultado inevitable de la constancia.',
      videoAlt: 'Konsta entrenando la ondulación bajo el agua',
      manadaTitulo: 'ÚNETE A LA MANADA: VIVE EL',
      manadaAcento: '#MODOTIBURÓN',
      manada1:
        'El rendimiento de élite no se detiene cuando salimos de la piscina. Cada entrenamiento, cada análisis estratégico y cada paso hacia el objetivo mundial se comparte en tiempo real.',
      manada2:
        'No te pierdas el detrás de escena de este viaje. Sígueme en Instagram y sé parte de mi día a día como un atleta que no conoce los límites.',
      manadaCta: 'Seguir en Instagram: @konstadeportista',
    },
    ecosistema: {
      titulo1: 'MÁS ALLÁ DE MI ONDULACIÓN: IMPULSANDO EL',
      acento1: 'FUTURO',
      titulo2: 'DE LA MONOALETA EN',
      acento2: 'COLOMBIA',
      parrafo1:
        'El talento en Colombia es inmenso, pero el deporte de élite es una carrera de resistencia financiera tanto como física. Al crecer en esta modalidad, he entendido que la excelencia no puede ser un camino solitario.',
      parrafo2:
        'Mi propósito no es solo llegar al podio; es abrir la puerta para que otros también lo hagan. Estamos creando un movimiento para apoyar a compañeros con alto potencial, porque la monoaleta es un deporte donde el éxito de uno eleva el nivel de todos.',
      parrafo3:
        'Las grandes marcas tienen el poder de transformar el deporte. Buscamos aliados visionarios que elijan apostar por el talento, respaldar el esfuerzo y convertirse en parte activa del desarrollo de la próxima generación de campeones mundiales colombianos.',
      cierre1: 'NO ES SOLO',
      cierreAcento1: 'PATROCINIO',
      cierre2: '; ES CONSTRUIR',
      cierreAcento2: 'LEGADOS JUNTOS',
      fotos: [
        'Grupo de deportistas de monoaleta reunido en el borde de la piscina antes de entrenar',
        'Dos deportistas ajustando la monoaleta al borde de la piscina',
        'Dos deportistas guardando las monoaletas y el equipo después del entrenamiento',
      ],
      manifiestoTitulo: 'MANIFIESTO DE',
      manifiestoAcento: 'COMPROMISO',
      citaInicio: '«He visto a grandes talentos dejar el agua porque los costos de los equipos los superaron. Eso no es falta de capacidad,',
      citaFuerte1: 'es falta de oportunidades',
      citaMedio: '. Mi visión es demostrar que el alto rendimiento es posible cuando unimos fuerzas.',
      citaFuerte2: 'Como equipo, somos imbatibles',
      citaFin: '.»',
      firma: '— Konsta',
      videoAlt: 'Manifiesto de compromiso de Konsta',
    },
    legado: {
      titulo: 'COLECCIÓN LEGADO: EL VALOR DE',
      acento: 'IMPULSAR A OTROS',
      parrafo1:
        'En el alto rendimiento, ningún campeón llega solo a la cima. Creemos firmemente que el verdadero liderazgo se mide por cuántos talentos logramos elevar junto a nosotros.',
      parrafo2:
        'La Colección Legado no es solo una serie de piezas exclusivas de edición limitada; es un puente financiero hacia el sueño de atletas con un potencial inmenso y recursos limitados. Cada artículo de esta serie de autor está diseñado con los estándares estéticos y técnicos del «Modo Tiburón».',
      sub: '¿CÓMO TRANSFORMAMOS TU COMPRA EN IMPACTO?',
      card1Label: '100% con propósito',
      card1Body:
        'Los fondos recaudados a través de estas ediciones limitadas se destinan directamente a financiar inscripciones, traslados e implementos de competencia para compañeros de la disciplina que necesitan un impulso en su carrera deportiva.',
      card2Label: 'Diseño de autor',
      card2Body:
        'Piezas numeradas y de tiraje exclusivo, creadas para coleccionistas, simpatizantes y marcas que entienden que el deporte es una herramienta de transformación social.',
      cierre:
        'Adquiere una pieza de esta colección exclusiva y sé parte activa del movimiento que está reescribiendo el futuro de la monoaleta en el país.',
      cta: 'Ver colección exclusiva y apoyar',
      reel1Alt: 'Piezas de la Colección Legado',
      reel2Alt: 'Colección Legado en movimiento',
    },
    vision: {
      titulo: 'EL HORIZONTE:',
      acento: 'THE WORLD GAMES 2029',
      entradilla:
        'El deporte olímpico de más rápido crecimiento en Suramérica tiene nombre colombiano. Este es el camino, paso a paso, hasta Karlsruhe, Alemania.',
      parrafo1:
        'El gran objetivo está marcado en el calendario: The World Games 2029, del 19 al 29 de julio de 2029 en Karlsruhe, Alemania. Pero mi visión va mucho más allá de competir; lo que más anhelo es llevar la tricolor a lo más alto, regalarle una alegría inmensa a mi Colombia y demostrarle al planeta entero el nivel y el talento extraordinario que hay en nuestro país.',
      parrafo2:
        'Para llegar con absoluta solidez a este escenario mundial, cada jornada se enfoca en superar mis propios límites, perfeccionar la técnica y ejecutar una estrategia milimétrica que parte desde la defensa del Ranking #1 departamental hasta la consolidación internacional. No espero que los resultados lleguen por casualidad; los construyo sesión tras sesión, elevando el estándar y rompiendo marcas.',
      hitos: [
        'Defensa del Ranking #1 departamental.',
        'Consolidación nacional y récords de la modalidad.',
        'Circuito internacional y clasificación.',
        'The World Games · Karlsruhe, Alemania · 19–29 de julio.',
      ],
      cta: 'Sé parte del camino a Karlsruhe',
      cierreFrase: 'REPRESENTAR A COLOMBIA',
      cierreAcento: 'ANTE EL MUNDO',
      cierreParrafo:
        'El alto rendimiento es un compromiso absoluto con el legado. Estamos construyendo una cultura, una disciplina y un ejemplo imborrable de integridad deportiva a través del trabajo duro y la superación constante, listos para representar con orgullo a Colombia ante el mundo.',
      medallasAlt: 'Medallas de oro, plata y bronce de The World Games',
      medallasPie: 'El metal que persigue cada madrugada de entrenamiento.',
      invitacion:
        '¿Tu marca quiere estar en esta historia? Konsta construye, jornada tras jornada, el camino de Colombia hacia The World Games 2029. Súmate como aliado y sé parte del legado.',
      invitacionCta: 'Quiero ser aliado',
      galeria: [
        'Konsta con el traje de competencia y la monoaleta al borde de la piscina',
        'Konsta en competencia de monoaleta',
        'Konsta durante una jornada de entrenamiento',
        'Konsta preparándose antes de una prueba',
        'Konsta en el agua con la monoaleta',
      ],
      fotoAnterior: 'Foto anterior',
      fotoSiguiente: 'Foto siguiente',
    },
    aliados: {
      titulo: 'SER PARTE DE KONSTA ES',
      acento: 'REDEFINIR LOS LÍMITES',
      copy: 'Al asociarte con este proyecto, tu marca no aparece únicamente en un uniforme de alta competición; entra a formar parte de un ecosistema donde el liderazgo, la gestión y el impacto social se unen. Konsta es el embajador de una disciplina en pleno crecimiento, un gestor que moviliza, inspira y lidera a la próxima generación de campeones mundiales colombianos.',
      firma: 'DETERMINACIÓN IMPARABLE.',
      pregunta: '¿TIENES LA VISIÓN CORPORATIVA PARA CONSTRUIR UN LEGADO QUE TRASCIENDA EL PODIO?',
      brochureLabel: 'Descargar brochure técnico de patrocinio',
      brochureSub: 'Dossier corporativo y ROI para marcas',
      contactoLabel: 'Contactar al equipo de gestión',
      contactoSub: 'Canal directo gestionado por CONEX1ON PSH',
      foto1Alt: 'Konsta entrenando en la piscina',
      foto2Alt: 'Konsta en una jornada de entrenamiento',
      foto3Alt: 'Konsta lanzándose al agua desde el borde de la piscina',
      formTitulo: 'HABLEMOS DE TU',
      formAcento: 'ALIANZA',
      formCopy:
        'Cuéntanos sobre tu marca y el equipo de gestión te contacta para armar juntos la propuesta.',
      formAria: 'Formulario de contacto para aliados',
    },
  },

  en: {
    meta: {
      inicio: {
        title: 'KONSTA — Excellence is a ritual',
        description:
          'Project Konsta: elite finswimming from Colombia. Discipline, family and legacy on the road to The World Games 2029.',
      },
      origen: {
        title: 'Origin — Konsta',
        description:
          'A path forged in unity and resilience: the origin of Project Konsta and the family behind it.',
      },
      tiburon: {
        title: 'Shark Mode — Konsta',
        description:
          'Shark Mode in action: 4:00 a.m., cold water and unbreakable discipline. Behind the scenes of Konsta’s training.',
      },
      ecosistema: {
        title: 'Ecosystem — Konsta',
        description:
          'Beyond my undulation: driving the future of finswimming in Colombia. Project Konsta’s manifesto of commitment.',
      },
      legado: {
        title: 'Legacy Collection — Konsta',
        description:
          'Legacy Collection: limited-edition pieces that fund athletes with great potential and limited resources.',
      },
      vision: {
        title: 'Vision 2029 — Konsta',
        description:
          'The horizon: The World Games 2029 in Karlsruhe, Germany. Konsta’s roadmap, year by year.',
      },
      aliado: {
        title: 'Become a partner — Konsta',
        description:
          'Brand partnerships with Project Konsta: technical sponsorship brochure and a direct line to the management team.',
      },
    },
    nav: {
      inicio: 'Home',
      origen: 'Origin',
      tiburon: 'Shark Mode',
      ecosistema: 'Ecosystem',
      legado: 'Legacy Collection',
      vision: 'Vision 2029',
      aliado: 'Become a partner',
      principal: 'Main',
      secundaria: 'Secondary',
      abrirMenu: 'Open menu',
      cerrarMenu: 'Close menu',
      inicioAria: 'Konsta — home',
      cambiarIdioma: 'View the site in Spanish',
    },
    comun: {
      volverArriba: 'Back to top',
      continuaBajando: 'Keep scrolling',
      whatsapp: 'Message us on WhatsApp',
      whatsappMensaje:
        'Hi, I am writing from konstadeportista.com. I would like to know more about partnering with Project Konsta.',
      dominio: 'www.konstadeportista.com · Finswimming',
      credito: 'Built by',
    },
    hero: {
      eyebrow: 'Finswimming · Colombia',
      titulo1: 'KONSTA:',
      acento1: 'EXCELLENCE',
      titulo2: 'IS NOT A GIFT, IT IS A',
      acento2: 'RITUAL.',
      lead: 'Beyond speed. Beyond the medal. A life project built on relentless discipline and a team that keeps breaking limits.',
      cta: 'Discover the story',
      badge: 'Shark mode on',
      valores: ['Discipline', 'Family', 'Legacy'],
      fotoAlt: 'Konsta swimming butterfly in the pool',
      marquee: 'SHARK MODE · RELENTLESS DISCIPLINE · SHARK MODE · NO SHORTCUTS ·',
    },
    tiburonInicio: {
      lead: 'MANY SEE THE START. FEW SEE THE EARLY MORNINGS, THE COLD, THE TECHNIQUE AND THE CONVICTION.',
      leadFuerte: 'THIS IS NOT LUCK.',
      climax1: 'THIS IS',
      climax2: 'SHARK MODE.',
      cta: 'Join the team (Sponsorship)',
      redes: 'Follow us',
      fotoAlt: 'Konsta sitting on the starting block with his monofin before entering the water',
    },
    origen: {
      fotoAlt: 'Konsta smiling by the pool',
      titulo1: 'A PATH FORGED IN',
      acento1: 'UNITY',
      titulo2: 'AND',
      acento2: 'RESILIENCE',
      lead: 'Behind every split on the clock, every start and every medal, there is a story you do not see at the pool. Konsta’s path has never been a straight line; it was built by adapting to new places, living the sport with a global mindset and understanding that real success is the result of a shared effort.',
      galeria: [
        'Konsta’s icon: a shark fin in ocean blue',
        'Two children with medals on a competition podium',
        'Two swimmers training with monofin and kickboard',
        'Konsta holding four competition medals by the pool at night',
        'Konsta leaning on the pool edge next to his board and monofin',
        'Konsta adjusting his monofin sitting on the pool edge',
      ],
    },
    familia: {
      fotoAlt: 'Konsta as a child with his parents, smiling outdoors',
      titulo1: 'THE',
      acento1: 'FAMILY',
      titulo2: 'AS THE',
      acento2: 'ENGINE',
      titulo3: 'OF ELITE PERFORMANCE',
      parrafo1:
        'This project is not one person competing. The true core of this story is an unconditional team: a family that has shaped their son’s dreams with discipline, honesty and an unshakeable human purpose.',
      parrafo2:
        'For brands and strategic partners looking to align with real values, Project Konsta stands for transparency, institutional trust and a genuine commitment to excellence. Here you are not only backing an athlete; you are backing a life project that turns talent into legacy.',
    },
    accion: {
      titulo: 'SHARK MODE',
      acento: 'IN ACTION',
      copy1: 'When the alarm goes off at 4:00 a.m., the mind tries to negotiate. But discipline is unbreakable. Cold water is not an obstacle, it is the training ground where endurance is forged. I do not compete against other swimmers;',
      copyFuerte: 'I COMPETE',
      copy2: 'against my best version from yesterday. When the body says enough, my mind answers: “If I did it before, I can do it now.” The medal is only the inevitable result of consistency.',
      videoAlt: 'Konsta training the undulation underwater',
      manadaTitulo: 'JOIN THE PACK: LIVE',
      manadaAcento: '#SHARKMODE',
      manada1:
        'Elite performance does not stop when we leave the pool. Every session, every strategic review and every step towards the world stage is shared in real time.',
      manada2:
        'Do not miss the behind the scenes of this journey. Follow me on Instagram and be part of my day to day as an athlete who knows no limits.',
      manadaCta: 'Follow on Instagram: @konstadeportista',
    },
    ecosistema: {
      titulo1: 'BEYOND MY UNDULATION: DRIVING THE',
      acento1: 'FUTURE',
      titulo2: 'OF FINSWIMMING IN',
      acento2: 'COLOMBIA',
      parrafo1:
        'Talent in Colombia is immense, but elite sport is a test of financial endurance as much as physical endurance. Growing up in this discipline, I have learned that excellence cannot be a solitary path.',
      parrafo2:
        'My purpose is not only to reach the podium; it is to open the door so others can reach it too. We are building a movement to support teammates with high potential, because finswimming is a sport where one athlete’s success raises everyone’s level.',
      parrafo3:
        'Great brands have the power to transform sport. We are looking for visionary partners who choose to bet on talent, back the effort and become an active part of developing Colombia’s next generation of world champions.',
      cierre1: 'THIS IS NOT JUST',
      cierreAcento1: 'SPONSORSHIP',
      cierre2: '; IT IS BUILDING',
      cierreAcento2: 'LEGACIES TOGETHER',
      fotos: [
        'A group of finswimmers gathered at the pool edge before training',
        'Two athletes adjusting a monofin at the pool edge',
        'Two athletes packing away monofins and gear after training',
      ],
      manifiestoTitulo: 'MANIFESTO OF',
      manifiestoAcento: 'COMMITMENT',
      citaInicio: '“I have seen great talents leave the water because the cost of the equipment beat them. That is not a lack of ability,',
      citaFuerte1: 'it is a lack of opportunity',
      citaMedio: '. My vision is to prove that elite performance is possible when we join forces.',
      citaFuerte2: 'As a team, we are unbeatable',
      citaFin: '.”',
      firma: '— Konsta',
      videoAlt: 'Konsta’s manifesto of commitment',
    },
    legado: {
      titulo: 'LEGACY COLLECTION: THE VALUE OF',
      acento: 'LIFTING OTHERS',
      parrafo1:
        'In elite sport, no champion reaches the top alone. We firmly believe that real leadership is measured by how many talents we lift alongside us.',
      parrafo2:
        'The Legacy Collection is not just a series of exclusive limited-edition pieces; it is a financial bridge towards the dream of athletes with immense potential and limited resources. Every item in this signature series is designed to the aesthetic and technical standards of “Shark Mode”.',
      sub: 'HOW DOES YOUR PURCHASE TURN INTO IMPACT?',
      card1Label: '100% with purpose',
      card1Body:
        'The funds raised through these limited editions go directly to entry fees, travel and competition gear for teammates in the discipline who need a push in their sporting career.',
      card2Label: 'Signature design',
      card2Body:
        'Numbered pieces in exclusive runs, created for collectors, supporters and brands that understand sport as a tool for social change.',
      cierre:
        'Get a piece from this exclusive collection and become an active part of the movement rewriting the future of finswimming in the country.',
      cta: 'See the collection and support',
      reel1Alt: 'Pieces from the Legacy Collection',
      reel2Alt: 'The Legacy Collection in motion',
    },
    vision: {
      titulo: 'THE HORIZON:',
      acento: 'THE WORLD GAMES 2029',
      entradilla:
        'The fastest growing Olympic sport in South America has a Colombian name. This is the path, step by step, to Karlsruhe, Germany.',
      parrafo1:
        'The big goal is marked on the calendar: The World Games 2029, from 19 to 29 July 2029 in Karlsruhe, Germany. But my vision goes far beyond competing; what I want most is to raise the Colombian flag as high as it goes, give my country an immense joy and show the whole planet the extraordinary level and talent we have here.',
      parrafo2:
        'To arrive at that world stage in top form, every day is focused on pushing my own limits, refining technique and executing a precise strategy that runs from defending the departmental #1 ranking to consolidating internationally. I do not wait for results to happen by chance; I build them session after session, raising the standard and breaking records.',
      hitos: [
        'Defending the departmental #1 ranking.',
        'National consolidation and discipline records.',
        'International circuit and qualification.',
        'The World Games · Karlsruhe, Germany · 19–29 July.',
      ],
      cta: 'Be part of the road to Karlsruhe',
      cierreFrase: 'REPRESENTING COLOMBIA',
      cierreAcento: 'BEFORE THE WORLD',
      cierreParrafo:
        'Elite performance is an absolute commitment to legacy. We are building a culture, a discipline and an indelible example of sporting integrity through hard work and constant improvement, ready to represent Colombia with pride before the world.',
      medallasAlt: 'Gold, silver and bronze medals of The World Games',
      medallasPie: 'The metal chased in every early morning session.',
      invitacion:
        'Does your brand want to be part of this story? Session after session, Konsta is building Colombia’s road to The World Games 2029. Join as a partner and be part of the legacy.',
      invitacionCta: 'I want to be a partner',
      galeria: [
        'Konsta in his racing suit holding the monofin at the pool edge',
        'Konsta competing in finswimming',
        'Konsta during a training session',
        'Konsta getting ready before a race',
        'Konsta in the water with his monofin',
      ],
      fotoAnterior: 'Previous photo',
      fotoSiguiente: 'Next photo',
    },
    aliados: {
      titulo: 'BEING PART OF KONSTA MEANS',
      acento: 'REDEFINING THE LIMITS',
      copy: 'By partnering with this project, your brand does not just appear on a racing suit; it becomes part of an ecosystem where leadership, management and social impact come together. Konsta is the ambassador of a fast-growing discipline, someone who mobilises, inspires and leads Colombia’s next generation of world champions.',
      firma: 'UNSTOPPABLE DETERMINATION.',
      pregunta: 'DOES YOUR COMPANY HAVE THE VISION TO BUILD A LEGACY BEYOND THE PODIUM?',
      brochureLabel: 'Download the technical sponsorship brochure',
      brochureSub: 'Corporate dossier and ROI for brands',
      contactoLabel: 'Contact the management team',
      contactoSub: 'Direct channel managed by CONEX1ON PSH',
      foto1Alt: 'Konsta training in the pool',
      foto2Alt: 'Konsta during a training session',
      foto3Alt: 'Konsta diving into the pool from the edge',
      formTitulo: 'LET’S TALK ABOUT YOUR',
      formAcento: 'PARTNERSHIP',
      formCopy:
        'Tell us about your brand and the management team will get in touch to build the proposal together.',
      formAria: 'Contact form for partners',
    },
  },
} as const;

export function t(idioma: Idioma) {
  return textos[idioma];
}
