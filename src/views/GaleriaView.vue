<template>
  <main class="gallery-page">
    <section class="gallery-hero" :style="heroPhoto ? { backgroundImage: `linear-gradient(90deg, rgba(4,29,19,.78), rgba(4,29,19,.12)), url('${heroPhoto}')` } : {}">
      <div class="container hero-inner">
        <span class="eyebrow light">📷 NUESTROS RECUERDOS</span>
        <h1>Galería de<br><span>momentos</span></h1>
        <p>Cada aventura tiene una historia que contar.</p>
      </div>
    </section>

    <section class="gallery-content container py-5">
      <div class="intro mb-4">
        <span class="eyebrow">EXPLORA NUESTRA HISTORIA</span>
        <h2>Momentos que nos unen</h2>
        <p>Una colección de campamentos, excursiones, actividades y recuerdos que forman parte de la vida del Grupo Scout Álamos 260.</p>
      </div>

      <div class="filters mb-5" role="group" aria-label="Filtrar fotografías">
        <button v-for="filter in filters" :key="filter" type="button" :class="['filter-button', { active: selectedCategory === filter }]" :aria-pressed="selectedCategory === filter" @click="selectedCategory = filter">{{ filter }}</button>
      </div>

      <section v-if="featuredPhotos.length" class="mb-5" aria-labelledby="featured-heading">
        <div class="section-heading"><div><span class="eyebrow">PARA RECORDAR</span><h2 id="featured-heading">⭐ Destacados</h2><p>Algunos de nuestros momentos más especiales.</p></div></div>
        <div class="featured-grid">
          <button v-for="photo in featuredPhotos" :key="photo.src" class="featured-card" type="button" @click="openPhoto(photo)">
            <img :src="photo.src" :alt="photo.alt" loading="lazy" />
            <div class="featured-info"><span class="photo-category">{{ photo.category }}</span><h3>{{ photo.title }}</h3><span class="view-photo">Ver fotografía ↗</span></div>
          </button>
        </div>
      </section>

      <section v-if="photos.length" aria-labelledby="all-heading">
        <div class="section-heading"><div><span class="eyebrow">NUESTRO ÁLBUM</span><h2 id="all-heading">📸 Todas las fotos</h2><p>Explora nuestra galería y revive grandes momentos.</p></div><span class="photo-count">{{ filteredPhotos.length }} fotos</span></div>
        <div v-if="filteredPhotos.length" class="photo-grid">
          <button v-for="photo in filteredPhotos" :key="photo.src" class="photo-tile" type="button" :aria-label="`Ampliar: ${photo.title}`" @click="openPhoto(photo)">
            <img :src="photo.src" :alt="photo.alt" loading="lazy" />
            <span class="tile-caption">{{ photo.title }} <span>↗</span></span>
          </button>
        </div>
        <div v-else class="empty-state">Todavía no hay fotografías en esta categoría.</div>
      </section>
    </section>

    <section class="share-section container mb-5"><div class="share-box"><div><span class="eyebrow light">UNA HISTORIA COMPARTIDA</span><h2>¿Tienes fotos que compartir?</h2><p>Si tienes fotografías de campamentos, excursiones o actividades del grupo, ¡nos encantaría añadirlas a la galería!</p></div><RouterLink to="/contacto" class="share-link">Contactar con el grupo →</RouterLink></div></section>

    <div v-if="activePhoto" class="lightbox" role="dialog" aria-modal="true" aria-label="Visor de fotografías" @click.self="closePhoto">
      <button class="lightbox-close" type="button" aria-label="Cerrar visor" @click="closePhoto">✕</button>
      <button class="lightbox-arrow previous" type="button" aria-label="Fotografía anterior" @click="stepPhoto(-1)">‹</button>
      <figure class="lightbox-figure"><img :src="activePhoto.src" :alt="activePhoto.alt" /><figcaption>{{ activePhoto.title }} · {{ activePhoto.category }} <span>({{ activeIndex + 1 }}/{{ filteredPhotos.length }})</span></figcaption></figure>
      <button class="lightbox-arrow next" type="button" aria-label="Fotografía siguiente" @click="stepPhoto(1)">›</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import imagenPortada from '@/assets/Galeria/Imagen_Portada.jpeg'
type Category = 'Campamentos' | 'Excursiones' | 'Actividades' | 'Vida de grupo' | 'Entorno'
type Photo = { src: string; alt: string; title: string; category: Category; featured: boolean; number: number }

// Vite carga automáticamente los archivos de src/assets/Galeria y sus subcarpetas.
// Se admiten JPEG, JPG, PNG, WebP y HEIC no (convierte HEIC antes).
const imageModules = import.meta.glob('/src/assets/Galeria/**/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>

const categoryFolders: Record<string, Category> = {
  Campa: 'Campamentos',
  Excursiones: 'Excursiones',
  Actividades: 'Actividades',
  Grupo: 'Vida de grupo',
  Entorno: 'Entorno'
}

const categoryOrder: Category[] = ['Campamentos', 'Excursiones', 'Actividades', 'Vida de grupo', 'Entorno']

const photos: Photo[] = Object.entries(imageModules)
  .flatMap(([path, src]) => {
    const parts = path.split('/')
    const folder = parts[parts.length - 2] ?? ''
    const filename = parts[parts.length - 1] ?? ''
    const category = categoryFolders[folder]
    const match = filename.match(/^Imagen_(Actividades|Campa|Excursiones|Grupo|Entorno)_(\d+)\.(jpe?g|png|webp)$/i)
    if (!category || !match || match[1]?.toLowerCase() !== folder.toLowerCase()) return []
    const number = Number(match[2])
    return [{
      src,
      alt: `Fotografía de ${category.toLowerCase()} del Grupo Scout Álamos 260`,
      title: `${category} · Foto ${number}`,
      category,
      featured: number === 1,
      number
    }]
  })
  .sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) || a.number - b.number)

const filters = computed(() => [
  'Todas',
  ...categoryOrder.filter(category => photos.some(photo => photo.category === category))
] as Array<'Todas' | Category>)
const selectedCategory = ref<'Todas' | Category>('Todas')
const filteredPhotos = computed(() => selectedCategory.value === 'Todas' ? photos : photos.filter(p => p.category === selectedCategory.value))
const featuredPhotos = computed(() => filteredPhotos.value.filter(p => p.featured))
const heroPhoto = imagenPortada
const activePhoto = ref<Photo | null>(null)
const activeIndex = computed(() => activePhoto.value ? filteredPhotos.value.findIndex(p => p.src === activePhoto.value?.src) : -1)
function openPhoto(photo: Photo) { activePhoto.value = photo; document.body.style.overflow = 'hidden' }
function closePhoto() { activePhoto.value = null; document.body.style.overflow = '' }
function stepPhoto(direction: number) { const list = filteredPhotos.value; if (!list.length) return; const next = (activeIndex.value + direction + list.length) % list.length; activePhoto.value = list[next] ?? null }
function handleKeydown(event: KeyboardEvent) { if (!activePhoto.value) return; if (event.key === 'Escape') closePhoto(); if (event.key === 'ArrowLeft') stepPhoto(-1); if (event.key === 'ArrowRight') stepPhoto(1) }
onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => { window.removeEventListener('keydown', handleKeydown); document.body.style.overflow = '' })
</script>

<style scoped>
.gallery-page{background:#f8fbf9;color:#142c24;overflow:hidden}.gallery-hero{min-height:440px;background-color:#145c3d;background-position:center;background-size:cover;display:flex;align-items:center}.hero-inner{padding-top:90px;padding-bottom:90px}.eyebrow{display:inline-block;font-size:.78rem;letter-spacing:.12em;font-weight:800;color:#198754}.eyebrow.light{color:#c7f0d6}.gallery-hero h1{font-size:clamp(3rem,6vw,5.5rem);font-weight:850;line-height:1.03;color:#fff;margin:20px 0}.gallery-hero h1 span{color:#b8e6bd}.gallery-hero p{color:#f0f7f2;font-size:1.15rem}.intro{max-width:760px}.intro h2,.section-heading h2{font-size:clamp(1.7rem,3vw,2.5rem);font-weight:800;margin:12px 0}.intro p,.section-heading p{color:#687d74;line-height:1.75}.filters{display:flex;gap:10px;flex-wrap:wrap}.filter-button{border:1px solid #e6eee8;border-radius:100px;padding:11px 19px;background:#fff;color:#26483b;font-weight:650;transition:.2s}.filter-button:hover{border-color:#198754}.filter-button.active{background:#116c46;border-color:#116c46;color:#fff}.section-heading{display:flex;align-items:end;justify-content:space-between;gap:16px;margin-bottom:22px}.photo-count{white-space:nowrap;color:#688075}.featured-grid{display:grid;grid-template-columns:1.45fr 1fr 1fr;gap:16px}.featured-card{position:relative;min-height:310px;border:0;border-radius:20px;overflow:hidden;padding:0;text-align:left;background:#173b2b;cursor:pointer}.featured-card img,.photo-tile img{width:100%;height:100%;object-fit:cover;transition:transform .45s}.featured-card:hover img,.photo-tile:hover img{transform:scale(1.06)}.featured-card::after{content:'';position:absolute;inset:0;background:linear-gradient(transparent 35%,rgba(0,0,0,.78))}.featured-info{position:absolute;z-index:1;bottom:20px;left:20px;right:20px;color:white}.photo-category{display:inline-block;padding:6px 12px;border-radius:100px;background:rgba(18,96,62,.88);font-size:.72rem;font-weight:700;margin-bottom:12px}.featured-info h3{font-size:1.3rem;font-weight:800}.view-photo{font-size:.85rem}.photo-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-flow:dense;grid-auto-rows:165px;gap:12px}.photo-tile{position:relative;grid-row:span 2;border:0;border-radius:15px;overflow:hidden;padding:0;background:#e0e9e3;cursor:pointer}.photo-tile:nth-child(7n + 1){grid-column:span 2;grid-row:span 2}.photo-tile:nth-child(7n + 4){grid-row:span 1}.tile-caption{position:absolute;inset:auto 0 0;padding:28px 16px 14px;background:linear-gradient(transparent,rgba(0,0,0,.68));color:white;text-align:left;font-weight:700;display:flex;justify-content:space-between;gap:10px;opacity:0;transition:opacity .2s}.photo-tile:hover .tile-caption,.photo-tile:focus-visible .tile-caption{opacity:1}.empty-state{text-align:center;padding:65px 20px;border-radius:20px;background:white;color:#6a7c72}.share-box{background:linear-gradient(110deg,#0b5b3d,#198754);border-radius:24px;padding:45px;display:flex;align-items:center;justify-content:space-between;gap:25px;color:white}.share-box h2{font-weight:800;margin:12px 0}.share-box p{max-width:650px;margin:0;color:#e3f2e9}.share-link{background:white;color:#0c6440;padding:14px 24px;border-radius:50px;text-decoration:none;font-weight:800;white-space:nowrap}.share-link:hover{background:#e7f7ed;color:#0c6440}.lightbox{position:fixed;inset:0;z-index:9999;background:rgba(5,15,11,.96);display:flex;align-items:center;justify-content:center;padding:55px 65px}.lightbox-figure{margin:0;max-width:100%;text-align:center}.lightbox-figure img{display:block;max-width:100%;max-height:calc(100vh - 130px);object-fit:contain;margin:auto}.lightbox-figure figcaption{color:white;margin-top:12px}.lightbox-figure figcaption span{color:#a7c1b3}.lightbox-close,.lightbox-arrow{position:absolute;border:0;background:rgba(255,255,255,.13);color:white;border-radius:50%;display:grid;place-items:center;cursor:pointer}.lightbox-close{top:16px;right:18px;width:42px;height:42px}.lightbox-arrow{top:50%;transform:translateY(-50%);width:45px;height:45px;font-size:2rem}.lightbox-arrow.previous{left:14px}.lightbox-arrow.next{right:14px}@media(max-width:991px){.featured-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.featured-card:first-child{grid-column:span 2}.photo-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.share-box{padding:30px}}@media(max-width:575px){.gallery-hero{min-height:340px}.hero-inner{padding-top:65px;padding-bottom:65px}.gallery-hero h1{font-size:3rem}.featured-grid{grid-template-columns:1fr}.featured-card,.featured-card:first-child{grid-column:auto;min-height:245px}.photo-grid{gap:8px;grid-auto-rows:120px}.photo-tile{border-radius:11px}.photo-tile:nth-child(7n + 1){grid-column:span 2}.share-box{display:block;padding:25px}.share-link{display:inline-block;margin-top:20px;white-space:normal}.lightbox{padding:60px 45px}.lightbox-arrow{width:34px;height:34px}.lightbox-arrow.previous{left:5px}.lightbox-arrow.next{right:5px}}@media(prefers-reduced-motion:reduce){.featured-card img,.photo-tile img,.tile-caption{transition:none}}
</style>
