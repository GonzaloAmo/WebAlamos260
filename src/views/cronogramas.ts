/**
 * Guarda las imágenes en src/assets/Cronogramas/.
 * Nombres: Castores.jpeg, Manada.jpeg, Tropa.jpeg, Esculta.jpeg, Clan.jpeg.
 * El glob de NoticiasView.vue detecta los archivos existentes automáticamente.
 * Cambia los nombres aquí si tus secciones tienen otros nombres.
 */
export const secciones = [
  { nombre: 'Castores', emoji: '🦫', archivo: 'Castores.jpeg' },
  { nombre: 'Manada', emoji: '🐺', archivo: 'Manada.jpeg' },
  { nombre: 'Tropa', emoji: '⚜️', archivo: 'Tropa.jpeg' },
  { nombre: 'Esculta', emoji: '🏕️', archivo: 'Esculta.jpeg' },
  { nombre: 'Clan', emoji: '🧭', archivo: 'Clan.jpeg' },
] as const

// Edita este texto al empezar un trimestre nuevo.
export const trimestreActual = 'Cronogramas del 1er trimestre'
