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

/** Navegación principal. La usan el header, el menú móvil y el footer. */
export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/origen', label: 'Origen' },
  { href: '/modo-tiburon', label: 'Modo Tiburón' },
  { href: '/ecosistema', label: 'Ecosistema' },
  { href: '/coleccion-legado', label: 'Colección Legado' },
  { href: '/vision-2029', label: 'Visión 2029' },
] as const;

export const social = {
  instagram: 'https://www.instagram.com/konstadeportista',
  tiktok: 'https://www.tiktok.com/@konstadeportista',
} as const;

/** WhatsApp del equipo de gestión (Colombia, +57). */
export const whatsapp = {
  numero: '573148739193',
  visible: '+57 314 873 9193',
} as const;

/** Enlace con mensaje inicial según el idioma. */
export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;
}

export const links = {
  /** TODO: apuntar al PDF del brochure de patrocinio. */
  brochure: '#',
  /** TODO: apuntar al catálogo / checkout de la Colección Legado. */
  coleccion: '/ser-aliado',
  contacto: 'mailto:hola@konstadeportista.com',
  aliados: '/ser-aliado',
} as const;
