<template>
  <main class="news-page">

<header
  class="news-hero"
  :style="heroPhoto ? {
    backgroundImage: `linear-gradient(90deg, rgba(4,29,19,.78), rgba(4,29,19,.12)), url('${heroPhoto}')`
  } : {}"
>
  <div class="container hero-layout">
    <div class="hero-copy">
      <span class="eyebrow eyebrow-light">
        <span class="eyebrow-dot"></span>
        LA VIDA DE ÁLAMOS 260
      </span>

      <h1>Lo que pasa <em>en Álamos.</em></h1>

      <p>
        Actividades, celebraciones, avisos y toda la
        información que conecta a nuestro grupo con las familias.
      </p>
    </div>
  </div>
</header>


    <section id="cronogramas" class="container schedules-section" aria-labelledby="schedules-title">
      <div class="schedule-panel">
        <div class="section-top">
          <div>
            <span class="eyebrow">INFORMACIÓN PARA LAS FAMILIAS</span>
            <h2 id="schedules-title">Cronogramas <span>del trimestre</span></h2>
            <p>Encuentra rápidamente la planificación de tu sección y consúltala como imagen o descárgala.</p>
          </div>
          <span class="section-icon" aria-hidden="true">📅</span>
        </div>
        <div class="schedules-grid">
          <article v-for="seccion in cronogramas" :key="seccion.nombre" class="schedule-card">
            <div class="schedule-symbol" aria-hidden="true">{{ seccion.emoji }}</div>
            <div class="schedule-copy">
              <h3>{{ seccion.nombre }}</h3>
              <span>{{ seccion.url ? 'Imagen disponible' : 'Pendiente de publicar' }}</span>
            </div>
            <a v-if="seccion.url" class="schedule-download" :href="seccion.url" target="_blank" rel="noopener noreferrer" :aria-label="`Ver cronograma de ${seccion.nombre}`" title="Ver imagen completa">↗</a>
            <span v-else class="schedule-pending" aria-label="Próximamente">—</span>
          </article>
        </div>
        <p class="schedule-note">{{ trimestreActual }} · Las imágenes se actualizan cuando se publica una nueva planificación.</p>
      </div>
    </section>

    <section class="container news-section" aria-labelledby="news-title">
      <div class="section-top news-title-row">
        <div>
          <span class="eyebrow">NO TE PIERDAS NADA</span>
          <h2 id="news-title">Noticias <span>y eventos</span></h2>
          <p>Descubre lo próximo y revive los mejores momentos del grupo.</p>
        </div>
        <span class="news-total" v-if="noticiasOrdenadas.length">{{ noticiasOrdenadas.length }} publicaciones</span>
      </div>

      <template v-if="proximas.length">
        <div class="subsection-heading"><h3><span class="live-dot"></span> Próximamente</h3><span>¡Apúntalo en el calendario!</span></div>
        <div class="upcoming-grid">
          <article v-for="noticia in proximas" :key="noticia.id" class="upcoming-card" :class="{ 'upcoming-card-featured': noticia.destacada }">
            <div class="news-image" :class="{ 'image-placeholder': !noticia.imagen }">
              <img v-if="noticia.imagen" :src="noticia.imagen" :alt="noticia.titulo" loading="lazy" />
              <span v-else aria-hidden="true">🌲</span>
              <span class="category-tag">{{ noticia.categoria }}</span>
            </div>
            <div class="news-body">
              <span class="news-date">📅 {{ formatearFecha(noticia.fecha) }}<template v-if="noticia.hora"> · {{ noticia.hora }}</template></span>
              <h4>{{ noticia.titulo }}</h4>
              <p>{{ noticia.descripcion }}</p>
              <span v-if="noticia.lugar" class="news-location">📍 {{ noticia.lugar }}</span>
            </div>
          </article>
        </div>
      </template>

      <div v-if="pasadas.length" class="past-section">
        <div class="subsection-heading"><h3>Últimas noticias</h3><span>La historia que seguimos construyendo</span></div>
        <div class="past-grid">
          <article v-for="noticia in pasadasVisibles" :key="noticia.id" class="past-card">
            <div class="past-image" :class="{ 'image-placeholder': !noticia.imagen }">
              <img v-if="noticia.imagen" :src="noticia.imagen" :alt="noticia.titulo" loading="lazy" />
              <span v-else aria-hidden="true">🌿</span>
            </div>
            <div class="past-body">
              <span class="past-meta">{{ noticia.categoria }} · {{ formatearFecha(noticia.fecha) }}</span>
              <h4>{{ noticia.titulo }}</h4>
              <p>{{ noticia.descripcion }}</p>
              <span v-if="noticia.lugar" class="news-location">📍 {{ noticia.lugar }}</span>
            </div>
          </article>
        </div>
        <div v-if="pasadas.length > limitePasadas" class="show-more-wrap">
          <button type="button" class="show-more" @click="mostrarTodas = !mostrarTodas">{{ mostrarTodas ? 'Mostrar menos' : `Ver todas las noticias (${pasadas.length})` }} <span aria-hidden="true">{{ mostrarTodas ? '↑' : '↓' }}</span></button>
        </div>
      </div>

      <div v-if="!noticiasOrdenadas.length" class="empty-news">
        <span aria-hidden="true">📰</span><h3>Pronto habrá novedades</h3>
        <p>Cuando publiquemos actividades o noticias del grupo, las encontrarás aquí.</p>
      </div>
    </section>

    <section class="container contact-section">
      <div class="contact-banner">
        <div><span class="eyebrow eyebrow-light">ESTAMOS CERCA</span><h2>¿Tienes alguna duda?</h2><p>Si necesitas más información sobre una actividad o un cronograma, puedes escribirnos.</p></div>
        <RouterLink to="/contacto" class="contact-button">Contactar con el grupo <span aria-hidden="true">↗</span></RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { noticias } from './noticias'
import { secciones, trimestreActual } from './cronogramas'
import imagenPortada from '@/assets/Noticias/Imagen_Portada.jpeg'

// Vite detecta automáticamente imágenes de cronogramas.
// Si una imagen no existe, se muestra 'Pendiente de publicar'.
const heroPhoto = imagenPortada
const archivosImagen = import.meta.glob('/src/assets/Noticias/Cronogramas/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const cronogramas = computed(() => secciones.map(seccion => ({
  ...seccion,
  url: archivosImagen[`/src/assets/Noticias/Cronogramas/${seccion.archivo}`] ?? null,
})))

// Evitamos comparar fechas usando UTC para no cambiar de día por la zona horaria.
const hoy = new Date()
const fechaHoy = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`
const noticiasOrdenadas = computed(() => [...noticias].sort((a, b) => b.fecha.localeCompare(a.fecha)))
const proximas = computed(() => noticiasOrdenadas.value.filter(n => n.fecha >= fechaHoy).sort((a, b) => a.fecha.localeCompare(b.fecha) || Number(!!b.destacada) - Number(!!a.destacada)))
const pasadas = computed(() => noticiasOrdenadas.value.filter(n => n.fecha < fechaHoy))
const mostrarTodas = ref(false)
const limitePasadas = 6
const pasadasVisibles = computed(() => mostrarTodas.value ? pasadas.value : pasadas.value.slice(0, limitePasadas))

function formatearFecha(fecha: string) {
  const [year, month, day] = fecha.split('-').map(Number)
  if (!year || !month || !day) return fecha
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(year, month - 1, day))
}
</script>

<style scoped>
.news-page{background:#f8faf8;color:#19382b;overflow:hidden;padding-bottom:2rem}.news-hero{position:relative;background:linear-gradient(115deg,#0a3e2b 0%,#126b49 70%,#21845d 100%);color:#fff;overflow:hidden}.hero-layout{min-height:385px;display:flex;align-items:center;position:relative;padding-top:78px;padding-bottom:88px}.hero-copy{position:relative;z-index:2;max-width:690px}.eyebrow{display:inline-flex;align-items:center;gap:9px;font-size:.73rem;letter-spacing:.13em;font-weight:850;color:#178553}.eyebrow-light{color:#b6e6cb}.eyebrow-dot,.live-dot{width:8px;height:8px;border-radius:50%;background:#8bd3a8;display:inline-block}.news-hero h1{font-size:clamp(2.7rem,5.5vw,5rem);line-height:1.05;font-weight:850;letter-spacing:-.045em;margin:18px 0}.news-hero h1 em{font-style:normal;color:#b8e8c6}.news-hero p{font-size:1.08rem;max-width:540px;line-height:1.7;color:#e1f0e7}.hero-action{display:inline-flex;gap:18px;align-items:center;background:#fff;color:#155d3d;padding:13px 22px;border-radius:50px;font-weight:800;text-decoration:none;margin-top:13px;transition:transform .2s}.hero-action:hover{color:#155d3d;transform:translateY(-2px)}.hero-decoration{position:absolute;inset:0;pointer-events:none}.decor-circle{position:absolute;border:1px solid rgba(255,255,255,.15);border-radius:50%}.decor-one{width:440px;height:440px;right:-100px;top:-190px}.decor-two{width:320px;height:320px;right:90px;bottom:-200px}.hero-sticker{position:absolute;right:6%;top:35%;transform:rotate(10deg);width:170px;height:170px;border:2px dashed rgba(255,255,255,.4);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;gap:8px;color:#e6f6e9}.hero-sticker span{font-size:2.5rem}.hero-sticker strong{font-size:1rem;line-height:1.3}.schedules-section{position:relative;margin-top:-38px;z-index:3}.schedule-panel{background:#fff;border-radius:24px;box-shadow:0 15px 45px rgba(16,59,39,.1);padding:36px 36px 24px;border:1px solid #edf2ed}.section-top{display:flex;align-items:flex-start;justify-content:space-between;gap:20px}.section-top h2{font-size:clamp(1.7rem,3vw,2.6rem);letter-spacing:-.035em;font-weight:850;margin:9px 0}.section-top h2 span{color:#188254}.section-top p{color:#708278;line-height:1.7;margin-bottom:24px}.section-icon{display:grid;place-items:center;background:#edf8f0;border-radius:16px;width:60px;height:60px;font-size:1.7rem;flex-shrink:0}.schedules-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.schedule-card{background:#f7faf8;border:1px solid #e9f0eb;border-radius:15px;display:flex;align-items:center;gap:12px;padding:17px 15px;min-width:0}.schedule-symbol{font-size:1.6rem;flex-shrink:0}.schedule-copy{min-width:0;flex:1}.schedule-copy h3{font-size:1rem;font-weight:800;margin:0 0 4px}.schedule-copy span{display:block;font-size:.76rem;color:#7d8f84}.schedule-download{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:#16794f;color:#fff;text-decoration:none;font-size:1.3rem;font-weight:800;flex-shrink:0}.schedule-download:hover{background:#0c5336;color:#fff}.schedule-pending{color:#9faea5;padding:0 10px}.schedule-note{font-size:.79rem;color:#8b9a90;margin:18px 0 0}.news-section{padding-top:72px;padding-bottom:68px}.news-title-row{margin-bottom:24px}.news-total{border-radius:40px;background:#e9f4ed;color:#216b49;padding:8px 15px;font-size:.8rem;font-weight:800;white-space:nowrap}.subsection-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:32px 0 18px}.subsection-heading h3{font-size:1.3rem;font-weight:850;display:flex;align-items:center;gap:10px;margin:0}.live-dot{background:#24a268}.subsection-heading>span{color:#8a9b91;font-size:.87rem}.upcoming-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}.upcoming-card,.past-card{overflow:hidden;background:#fff;border:1px solid #e9f0eb;border-radius:20px;box-shadow:0 8px 26px rgba(12,60,37,.04)}.news-image{height:240px;position:relative;overflow:hidden;background:#e0eee5}.news-image img,.past-image img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s}.upcoming-card:hover img,.past-card:hover img{transform:scale(1.04)}.image-placeholder{display:grid;place-items:center}.image-placeholder>span{font-size:3rem}.category-tag{position:absolute;left:18px;top:18px;border-radius:40px;background:#fff;color:#186c48;padding:7px 14px;font-size:.78rem;font-weight:850}.news-body{padding:23px}.news-date{font-size:.84rem;color:#22805a;font-weight:800}.news-body h4,.past-body h4{font-size:1.4rem;font-weight:850;letter-spacing:-.02em;margin:11px 0}.news-body p,.past-body p{color:#72857a;line-height:1.7;margin:0 0 12px}.news-location{color:#557365;font-size:.83rem;font-weight:700}.past-section{margin-top:50px}.past-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.past-image{height:170px;overflow:hidden;background:#e0eee5}.past-body{padding:19px}.past-meta{color:#218052;font-size:.76rem;font-weight:850}.past-body h4{font-size:1.16rem}.past-body p{font-size:.92rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.show-more-wrap{text-align:center;margin-top:30px}.show-more{border:1px solid #cbded1;border-radius:50px;padding:12px 24px;background:white;color:#176e48;font-weight:800}.show-more:hover{background:#eaf6ee}.empty-news{background:white;border:1px dashed #cdded3;text-align:center;border-radius:20px;padding:55px 20px;margin-top:20px}.empty-news>span{font-size:2.5rem}.empty-news h3{font-weight:800;margin-top:12px}.empty-news p{color:#708278}.contact-section{padding-bottom:20px}.contact-banner{background:linear-gradient(115deg,#0c5237,#198754);color:white;border-radius:22px;padding:35px 42px;display:flex;align-items:center;justify-content:space-between;gap:25px}.contact-banner h2{font-weight:850;margin:9px 0}.contact-banner p{color:#d9f0e3;max-width:570px;margin:0}.contact-button{background:#fff;color:#135c3c;text-decoration:none;font-weight:850;padding:13px 20px;border-radius:40px;white-space:nowrap}.contact-button:hover{color:#135c3c;background:#e7f5ec}@media(max-width:991px){.schedules-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.past-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.hero-sticker{right:0;opacity:.5}}@media(max-width:767px){.hero-layout{min-height:330px;padding-top:60px;padding-bottom:80px}.hero-sticker{display:none}.schedules-section{margin-top:-25px}.schedule-panel{padding:24px 18px}.upcoming-grid,.past-grid{grid-template-columns:1fr}.news-image{height:225px}.past-card{display:grid;grid-template-columns:130px 1fr}.past-image{height:100%;min-height:160px}.past-body{padding:16px}.past-body h4{font-size:1.07rem}.contact-banner{display:block;padding:27px}.contact-button{display:inline-block;margin-top:20px;white-space:normal}}@media(max-width:520px){.schedules-grid{grid-template-columns:1fr}.schedule-card{padding:14px}.section-icon{display:none}.news-total,.subsection-heading>span{display:none}.news-section{padding-top:52px;padding-bottom:48px}.past-card{grid-template-columns:100px 1fr}.past-image{min-height:145px}.past-body p{font-size:.85rem;-webkit-line-clamp:2}.news-hero h1{font-size:2.8rem}}@media(prefers-reduced-motion:reduce){.news-image img,.past-image img,.hero-action{transition:none}}
.news-hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
