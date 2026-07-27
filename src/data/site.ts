/**
 * Enlaces y datos de contacto del sitio.
 * TODO cliente: reemplazar los perfiles sociales, el PDF del brochure
 * y la URL del catálogo por las definitivas.
 */
export const site = {
  name: 'Konsta',
  domain: 'www.konstadeportista.com',
  title: 'KONSTA — La excelencia es un ritual',
  description:
    'Proyecto Konsta: monoaleta de alto rendimiento en Colombia. Disciplina, familia y legado camino a The World Games 2029. Alianzas de marca y Colección Legado.',
} as const;

export const social = {
  instagram: 'https://instagram.com',
  tiktok: 'https://tiktok.com',
  youtube: 'https://youtube.com',
} as const;

export const links = {
  /** TODO: apuntar al PDF del brochure de patrocinio. */
  brochure: '#',
  /** TODO: apuntar al catálogo / checkout de la Colección Legado. */
  coleccion: '#aliados',
  contacto: 'mailto:hola@konstadeportista.com',
} as const;
