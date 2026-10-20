/**
 * Añade una noticia copiando uno de estos objetos.
 * Las imágenes se guardan en public/noticias/ y se referencian con /noticias/archivo.jpeg.
 * Las fechas se escriben como AAAA-MM-DD (hora opcional HH:mm).
 */
export type Noticia = {
  id: string
  titulo: string
  fecha: string
  imagen?: string
  descripcion: string
  categoria: 'Actividad' | 'Evento' | 'Aviso' | 'Celebración'
  lugar?: string
  hora?: string
  destacada?: boolean
}

export const noticias: Noticia[] = [
  // EJEMPLOS: sustituye o elimina estas entradas antes de publicar.
  // {
  //   id: 'paella-2026',
  //   titulo: 'Paella en el local',
  //   fecha: '2026-11-14',
  //   imagen: '/noticias/paella.jpeg',
  //   descripcion: 'Nos reunimos para compartir una jornada especial.',
  //   categoria: 'Evento',
  //   lugar: 'Local del grupo',
  //   hora: '14:00',
  //   destacada: true,
  // },
  {
    id: 'halloween-2026',
    titulo: 'Halloween 2026',
    fecha: '2026-10-31',
    imagen: '/noticias/halloween.jpeg',
    descripcion: 'Celebramos Halloween con juegos y disfraces.',
    categoria: 'Evento',
    lugar: 'Local del grupo',
    hora: '14:00',
    destacada: true,
  },
]
