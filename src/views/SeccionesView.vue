<template>
  <div class="secciones-page">
    <!-- HERO SECCIÓN -->
    <section class="hero-section text-white position-relative overflow-hidden">
      <div class="hero-overlay"></div>
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
        alt="Montañas y naturaleza"
        class="hero-bg"
      />
      <div class="container position-relative hero-content py-5 text-center">
        <h1 class="display-3 fw-bold mb-3">Nuestras Secciones</h1>
        <p class="lead text-white-50 mx-auto px-3" style="max-width: 700px;">
          Un camino de crecimiento, valores y aventura adaptado a cada etapa de la vida.
        </p>
      </div>
    </section>

    <!-- INTRODUCCIÓN -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row justify-content-center text-center mb-5">
          <div class="col-lg-8">
            <span class="badge bg-success-subtle text-success px-3 py-2 rounded-pill mb-3 fw-bold">METODOLOGÍA</span>
            <h2 class="fw-bold mb-4">¿Cómo nos organizamos aquí?</h2>
            <p class="text-muted fs-5 lh-lg">
              Desde los 8 años de un lobato hasta los 20 años aproximadamente que tiene un miembro del clan, 
              el scout va pasando por distintas secciones. Una vez terminan su etapa en el Clan, 
              pueden decidir formar parte del <strong>Kraal de Scouters</strong>, y pasar de ser educandos 
              a ser educadores o educadoras.
            </p>
          </div>
        </div>

        <!-- GRID DE SECCIONES -->
        <div class="row g-3 g-md-4 justify-content-center">
          <div v-for="seccion in secciones" :key="seccion.id" class="col-12 col-sm-6 col-lg-4">
            <div 
              class="card h-100 border-0 shadow-sm section-card"
              @click="goToSection(seccion.path)"
            >
              <div class="card-img-container">
                <img :src="seccion.image" :alt="seccion.nombre" class="card-img-top">
                <div class="section-badge" :style="{ backgroundColor: seccion.color }">
                  {{ seccion.edades }}
                </div>
              </div>
              <div class="card-body p-3 p-md-4 text-center">
                <div class="icon-wrapper mb-3" :style="{ color: seccion.color }">
                  <span class="fs-1">{{ seccion.emoji }}</span>
                </div>
                <h3 class="fw-bold h4 mb-2">{{ seccion.nombre }}</h3>
                <p class="text-secondary small mb-2 mb-md-3">{{ seccion.subtitulo }}</p>
                <p class="text-muted mb-3 mb-md-4">{{ seccion.descripcion }}</p>
                <button class="btn btn-outline-success rounded-pill px-4">
                  Ver más detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- KRAAL SECTION -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="kraal-banner p-4 p-md-5 rounded-4 rounded-md-5 shadow-lg text-white position-relative overflow-hidden" 
             style="background: linear-gradient(135deg, #198754 0%, #0b462c 100%);">
          <div class="row align-items-center position-relative z-1">
            <div class="col-lg-8">
              <h2 class="display-5 fw-bold mb-2 mb-md-3">KRAAL</h2>
              <p class="lead mb-0 opacity-90 fs-6 fs-md-5">
                El equipo de responsables y educadores. El paso final donde el compromiso se convierte en servicio para guiar a las nuevas generaciones.
              </p>
            </div>
            <div class="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <button @click="goToSection('/secciones/kraal')" class="btn btn-light btn-lg px-4 px-md-5 rounded-pill fw-bold hover-lift w-100 w-lg-auto">
                Conoce al Kraal
              </button>
            </div>
          </div>
          <div class="position-absolute end-0 bottom-0 opacity-10" style="font-size: 10rem; transform: translate(20%, 20%)">
            ⚜️
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import logoCastores from '../assets/logoCastores.png'
import logoManada from '../assets/logoManada.png'
import logoTropa from '../assets/logoTropa.png'
import logoUE from '../assets/logoUE.png'
import logoClan from '../assets/logoClan.png'
const router = useRouter()

const secciones = [
  {
    id: 0,
    nombre: 'Castores',
    subtitulo: 'Colonia de Castores',
    edades: '6 a 8 años',
    emoji: '🦦',
    color: '#0dcaf0',
    path: '/secciones/castores',
    image: logoCastores,
    descripcion: 'Nuestra primera aventura. Aprendemos a compartir y jugar en la naturaleza.'
  },
  {
    id: 1,
    nombre: 'Manada',
    subtitulo: 'Lobatos y lobatas',
    edades: '8 a 11 años',
    emoji: '🐺',
    color: '#ffc107',
    path: '/secciones/manada',
    image: logoManada,
    descripcion: 'Aprendemos a convivir en la selva a través del juego y la imaginación.'
  },
  {
    id: 2,
    nombre: 'Tropa',
    subtitulo: 'Troperos y troperas',
    edades: '11 a 14 años',
    emoji: '🏹',
    color: '#198754',
    path: '/secciones/tropa',
    image: logoTropa,
    descripcion: 'La aventura de la autonomía y el trabajo en patrullas.'
  },
  {
    id: 3,
    nombre: 'UE (Unidad Esculta)',
    subtitulo: 'Escultas',
    edades: '14 a 17 años',
    emoji: '⚔️',
    color: '#dc3545',
    path: '/secciones/unidad-esculta',
    image: logoUE,
    descripcion: 'Emprendemos proyectos propios y descubrimos nuestro potencial.'
  },
  {
    id: 4,
    nombre: 'Clan',
    subtitulo: 'Rovers',
    edades: '17 a 20 años',
    emoji: '🌟',
    color: '#6f42c1',
    path: '/secciones/clan',
    image: logoClan,
    descripcion: 'Servicio a la comunidad y construcción del proyecto de vida.'
  }
]

const goToSection = (path) => {
  router.push(path)
}
</script>

<style scoped>
.hero-section {
  min-height: 40vh;
  display: flex;
  align-items: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4));
  z-index: 1;
}

.hero-content {
  z-index: 2;
}

.section-card {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1.5rem;
  overflow: hidden;
}

.section-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 3rem rgba(0,0,0,0.15) !important;
}

.card-img-container {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #f8f9fa;
  transition: transform 0.5s ease;
}

@media (min-width: 768px) {
  .card-img-container {
    height: 220px;
  }
}

.section-card:hover .card-img-top {
  transform: scale(1.1);
}

.section-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.icon-wrapper {
  transition: transform 0.3s ease;
}

.section-card:hover .icon-wrapper {
  transform: scale(1.2) rotate(5deg);
}

.hover-lift {
  transition: transform 0.2s ease;
}

.hover-lift:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .display-3 {
    font-size: 2.5rem;
  }
  .fs-5 {
    font-size: 1.1rem !important;
  }
  .kraal-banner {
    padding: 2.5rem 1.5rem !important;
    text-align: center;
  }
}
</style>
