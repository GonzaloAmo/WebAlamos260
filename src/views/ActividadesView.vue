<template>
  <div class="actividades-page">
    <!-- HERO -->
    <section class="hero-section text-white position-relative overflow-hidden">
      <img :src="PortadaActividades" alt="" class="hero-background" />
      <div class="hero-overlay"></div>
      <div class="container position-relative hero-content py-5">
        <div class="row">
          <div class="col-lg-8 col-xl-7">
            <span class="hero-eyebrow">Naturaleza · Aventura · Aprendizaje</span>
            <h1 class="display-2 fw-bold mb-4">Mucho más que<br />una aventura</h1>
            <p class="lead hero-description mb-4">Aprendemos, compartimos y crecemos a través de nuevas experiencias.</p>
            <a href="#actividades" class="btn btn-light text-success fw-semibold rounded-pill px-4 py-3">
              Descubre lo que hacemos <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRODUCCIÓN -->
    <section class="intro-section py-5 bg-white">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-9">
            <span class="section-kicker">Descubre lo que hacemos</span>
            <h2 class="section-title fw-bold mb-4">Una aventura en cada actividad</h2>
            <p class="intro-copy text-muted lh-lg mb-0">En el Grupo Scout Álamos 260 entendemos las actividades como oportunidades para descubrir, convivir y aprender. A través del juego, la naturaleza y los proyectos compartidos, los niños, niñas y jóvenes desarrollan habilidades y crean recuerdos que les acompañan durante años.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ACTIVIDADES PRINCIPALES -->
    <section id="actividades" class="activities-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-kicker">Nuestro día a día</span>
          <h2 class="section-title fw-bold">¿Qué actividades realizamos?</h2>
          <p class="text-muted mx-auto" style="max-width: 680px">Cada actividad es una oportunidad para disfrutar, colaborar y descubrir algo nuevo.</p>
        </div>
        <div class="row g-4">
          <div v-for="actividad in actividades" :key="actividad.titulo" class="col-md-6 col-xl-3">
            <article class="activity-card h-100">
              <div class="activity-icon" aria-hidden="true">
                <span>{{ actividad.icono }}</span>
              </div>
              <span class="activity-number" aria-hidden="true">{{ actividad.numero }}</span>
              <h3 class="h5 fw-bold mb-3">{{ actividad.titulo }}</h3>
              <p class="text-muted lh-lg mb-0">{{ actividad.descripcion }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- CAMPAMENTOS -->
    <section class="camp-section feature-section py-5 bg-white">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5">
            <span class="section-kicker">Momentos especiales</span>
            <h2 class="section-title fw-bold mb-4">Los campamentos: experiencias que dejan huella</h2>
            <p class="text-muted lh-lg">Los campamentos permiten disfrutar de la naturaleza, convivir y poner en práctica lo aprendido durante las actividades del grupo.</p>
            <p class="text-muted lh-lg mb-0">Entre juegos, rutas y momentos compartidos, cada participante encuentra nuevas oportunidades para ganar autonomía, colaborar y disfrutar de la aventura.</p>
          </div>
          <div class="col-lg-7">
            <figure class="camp-photo mb-0">
              <img :src="Campamento" alt="El grupo comparte una experiencia al aire libre durante el campamento" />
              <figcaption>
                <span class="camp-photo-icon" aria-hidden="true">⛺</span>
                <span>Convivir, aprender y crecer juntos.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- RUTAS Y EXCURSIONES -->
    <section id="rutas" class="feature-section feature-section--tint py-5">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-7">
            <figure class="camp-photo mb-0">
              <img :src="Rutas" alt="Scouts recorriendo juntos un camino en plena naturaleza" />
              <figcaption>
                <span class="camp-photo-icon" aria-hidden="true">🥾</span>
                <span>Cada paso nos descubre algo nuevo.</span>
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-5">
            <span class="section-kicker">Explorar y descubrir</span>
            <h2 class="section-title fw-bold mb-4">Rutas y excursiones: el camino también es aventura</h2>
            <p class="text-muted lh-lg">Salimos a caminar para conocer nuevos lugares, disfrutar del entorno y vivir la naturaleza de cerca. Una ruta es mucho más que llegar a un destino: es observar lo que nos rodea, afrontar pequeños retos y compartir el camino con el grupo.</p>
            <p class="text-muted lh-lg mb-0">Durante las excursiones ponemos en práctica la autonomía y la colaboración. Cada persona aporta, aprende a cuidar el entorno y descubre que, cuando avanzamos juntos, podemos llegar mucho más lejos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- JUEGOS EN LAS RONDAS -->
    <section id="juegos" class="feature-section py-5 bg-white">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5">
            <span class="section-kicker">Aprender jugando</span>
            <h2 class="section-title fw-bold mb-4">En las rondas, cada juego nos une</h2>
            <p class="text-muted lh-lg">En nuestras rondas, los juegos llenan de energía el encuentro y nos ayudan a conocernos mejor. Hay juegos de movimiento, de ingenio, de imaginación y de equipo: propuestas para reír, participar y descubrir nuevas maneras de colaborar.</p>
            <p class="text-muted lh-lg mb-0">Jugando aprendemos a respetar las reglas, escuchar a los demás, resolver retos y celebrar los logros compartidos. Lo importante no es solo quién gana, sino todo lo que construimos juntos mientras jugamos.</p>
          </div>
          <div class="col-lg-7">
            <figure class="camp-photo mb-0">
              <img :src="Juegos" alt="Jóvenes scouts participan en una actividad de juego al aire libre" />
              <figcaption>
                <span class="camp-photo-icon" aria-hidden="true">🎲</span>
                <span>Jugamos en equipo, crecemos en equipo.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICIO Y COMUNIDAD -->
    <section id="servicio" class="feature-section feature-section--tint py-5">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-7 order-2 order-lg-1">
            <figure class="camp-photo mb-0">
              <img :src="Servicio" alt="Scouts colaboran en una tarea compartida durante una actividad" />
              <figcaption>
                <span class="camp-photo-icon" aria-hidden="true">🤝</span>
                <span>Pequeñas acciones, grandes aportaciones.</span>
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-5 order-1 order-lg-2">
            <span class="section-kicker">Compromiso que se comparte</span>
            <h2 class="section-title fw-bold mb-4">Servicio y comunidad: estar ahí para los demás</h2>
            <p class="text-muted lh-lg">Ser scout también significa mirar alrededor y preguntarnos cómo podemos ayudar. A través de proyectos de servicio, aprendemos a implicarnos, sumar esfuerzos y poner nuestras capacidades al servicio de otras personas.</p>
            <p class="text-muted lh-lg mb-0">Cada iniciativa es una oportunidad para colaborar con nuestro entorno, responder a necesidades reales y demostrar que, cuando muchas personas aportan un poco, podemos generar un cambio positivo. Así crecemos como grupo y contribuimos a una comunidad más solidaria.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VALORES -->
    <section class="values-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-kicker">Nuestra forma de aprender</span>
          <h2 class="section-title fw-bold">Aprender haciendo</h2>
          <p class="text-muted mx-auto" style="max-width: 700px">Más allá de la diversión, cada experiencia es una ocasión para crecer.</p>
        </div>
        <div class="row g-4">
          <div v-for="valor in valores" :key="valor.titulo" class="col-md-6 col-lg-3">
            <div class="value-card h-100 text-center">
              <div class="value-icon" aria-hidden="true">{{ valor.icono }}</div>
              <h3 class="h5 fw-bold">{{ valor.titulo }}</h3>
              <p class="text-muted mb-0">{{ valor.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CIERRE -->
    <section class="closing-section py-5 text-white">
      <div class="container">
        <div class="closing-box text-center mx-auto">
          <span class="badge bg-light text-success fw-semibold px-3 py-2 mb-3">Forma parte de la aventura</span>
          <h2 class="fw-bold mb-3">¿Te gustaría vivirlo?</h2>
          <p class="text-white-50 mb-4">Conoce las distintas secciones del Grupo Scout Álamos 260 y descubre cómo participar.</p>
          <!-- Cambia el destino si tu ruta de secciones es diferente -->
          <RouterLink to="/secciones" class="btn btn-light text-success fw-semibold px-4 py-2">Conoce nuestras secciones</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PortadaActividades from '@/assets/Imagen_Campa_3.jpeg'
import Campamento from '@/assets/Imagen_Campa_2.jpeg'
import Rutas from '@/assets/Imagen_Ruta_Tropa_2.jpeg'
import Juegos from '@/assets/Imagen_Ronda_1.jpeg'
import Servicio from '@/assets/Imagen_Proyecto.jpeg'

const actividades = [
  { numero: '01', icono: '⛺', titulo: 'Campamentos', descripcion: 'Días de convivencia, juegos y aprendizaje en contacto con la naturaleza.' },
  { numero: '02', icono: '🥾', titulo: 'Rutas y excursiones', descripcion: 'Salidas para explorar el entorno, descubrir nuevos lugares y compartir retos.' },
  { numero: '03', icono: '🧩', titulo: 'Juegos y talleres', descripcion: 'Actividades creativas y participativas para aprender mientras nos divertimos.' },
  { numero: '04', icono: '🤝', titulo: 'Servicio y comunidad', descripcion: 'Iniciativas para colaborar con otras personas y participar en nuestro entorno.' },
]

const valores = [
  { icono: '🤝', titulo: 'Trabajo en equipo', descripcion: 'Aprendemos a colaborar, escuchar y ayudarnos mutuamente.' },
  { icono: '🧭', titulo: 'Autonomía', descripcion: 'Asumimos responsabilidades y ganamos confianza.' },
  { icono: '🌱', titulo: 'Respeto', descripcion: 'Cuidamos a las personas y el entorno natural.' },
  { icono: '💚', titulo: 'Convivencia', descripcion: 'Construimos amistades y compartimos experiencias.' },
]
</script>

<style scoped>
.actividades-page {
  --forest: #174c36;
  --leaf: #248354;
  overflow-x: hidden;
  background: #fff;
}

.hero-section {
  min-height: min(690px, 78vh);
  display: flex;
  align-items: center;
  background: var(--forest);
}

.hero-background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 46%;
  animation: hero-arrive 1.2s ease-out both;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(10, 38, 27, .88) 0%, rgba(14, 57, 39, .72) 48%, rgba(14, 57, 39, .16) 100%);
}

.hero-content {
  z-index: 2;
  padding-top: 6rem !important;
  padding-bottom: 6rem !important;
}

.hero-eyebrow {
  display: inline-flex;
  margin-bottom: 1.4rem;
  padding: .6rem 1rem;
  border: 1px solid rgba(255, 255, 255, .4);
  border-radius: 999px;
  background: rgba(255, 255, 255, .12);
  color: #fff;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
}

.hero-content h1 {
  max-width: 720px;
  line-height: 1.04;
  letter-spacing: -.045em;
  text-wrap: balance;
}

.hero-description {
  max-width: 560px;
  color: rgba(255, 255, 255, .86);
}

.hero-content .btn {
  box-shadow: 0 10px 30px rgba(0, 0, 0, .16);
  transition: transform .2s ease, box-shadow .2s ease;
}

.hero-content .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, .22);
}

.hero-content .btn span {
  margin-left: .5rem;
}

.intro-section,
.camp-section,
.feature-section {
  padding-top: 6rem !important;
  padding-bottom: 6rem !important;
}

.section-kicker {
  display: inline-block;
  margin-bottom: .75rem;
  color: var(--leaf);
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.section-title {
  color: #20352a;
  letter-spacing: -.035em;
  text-wrap: balance;
}

.intro-copy {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  font-size: 1.08rem;
}

.activities-section,
.values-section {
  background: #f5f7f3 !important;
}

.feature-section--tint {
  background: #f5f7f3;
}

.activities-section,
.values-section,
.feature-section,
.closing-section {
  padding-top: 5.5rem !important;
  padding-bottom: 5.5rem !important;
}

.activity-card,
.value-card {
  position: relative;
  padding: 2rem;
  overflow: hidden;
  border: 1px solid rgba(31, 75, 51, .08);
  border-radius: 1.35rem;
  background: #fff;
  box-shadow: 0 8px 26px rgba(27, 55, 38, .055);
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}

.activity-card:hover,
.value-card:hover {
  transform: translateY(-6px);
  border-color: rgba(36, 131, 84, .24);
  box-shadow: 0 18px 38px rgba(27, 55, 38, .11);
}

.activity-card {
  min-height: 270px;
}

.activity-icon {
  display: grid;
  width: 58px;
  height: 58px;
  margin-bottom: 1.5rem;
  place-items: center;
  border-radius: 18px;
  background: #edf5ee;
  font-size: 1.9rem;
}

.activity-number {
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;
  color: #dce9df;
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: .08em;
}

.activity-card h3,
.value-card h3 {
  color: #20352a;
}

.value-card {
  padding: 2rem 1.5rem;
  border-top: 3px solid #8ab89a;
}

.value-icon {
  display: inline-grid;
  width: 66px;
  height: 66px;
  margin-bottom: 1.25rem;
  place-items: center;
  border-radius: 50%;
  background: #edf5ee;
  font-size: 2rem;
}

.camp-photo {
  position: relative;
  min-height: 390px;
  overflow: hidden;
  border-radius: 1.75rem;
  background: #dce8de;
  box-shadow: 0 22px 55px rgba(28, 57, 38, .16);
}

.camp-photo::after {
  position: absolute;
  inset: 45% 0 0;
  background: linear-gradient(180deg, transparent, rgba(12, 34, 24, .72));
  content: '';
}

.camp-photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
  transition: transform .6s ease;
}

.camp-photo:hover img {
  transform: scale(1.04);
}

.camp-photo figcaption {
  position: absolute;
  z-index: 1;
  right: 1.75rem;
  bottom: 1.6rem;
  left: 1.75rem;
  display: flex;
  align-items: center;
  gap: .8rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
}

.camp-photo-icon {
  display: grid;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, .45);
  border-radius: 50%;
  background: rgba(255, 255, 255, .16);
  backdrop-filter: blur(8px);
}

.closing-section {
  background:
    radial-gradient(ellipse at top right, rgba(148, 199, 142, .22), transparent 44%),
    linear-gradient(135deg, #174c36, #103b2a);
}

.closing-box {
  max-width: 850px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, .18);
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, .07);
  backdrop-filter: blur(8px);
}

.closing-box h2 {
  letter-spacing: -.035em;
}

.closing-box .btn {
  transition: transform .2s ease, box-shadow .2s ease;
}

.closing-box .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, .16);
}

@keyframes hero-arrive {
  from { transform: scale(1.035); }
  to { transform: scale(1); }
}

@media (max-width: 991px) {
  .hero-section {
    min-height: 60vh;
  }

  .hero-overlay {
    background: linear-gradient(90deg, rgba(10, 38, 27, .84), rgba(14, 57, 39, .48));
  }

  .camp-photo {
    min-height: 340px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 590px;
  }

  .hero-background {
    object-position: 58% center;
  }

  .hero-content {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  .hero-content h1 {
    font-size: clamp(2.7rem, 12vw, 4.25rem);
  }

  .hero-overlay {
    background: linear-gradient(90deg, rgba(10, 38, 27, .82), rgba(14, 57, 39, .42));
  }

  .intro-section,
  .camp-section,
  .feature-section,
  .activities-section,
  .values-section,
  .closing-section {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  .activity-card {
    min-height: 245px;
    padding: 1.5rem;
  }

  .camp-photo {
    min-height: 280px;
    border-radius: 1.25rem;
  }

  .closing-box {
    padding: 2rem 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
</style>
