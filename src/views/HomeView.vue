<template>
  <div class="home-page">
    <!-- CARRUSEL -->
    <section class="py-6 bg-dark text-white position-relative overflow-hidden">
      <div class="container">
        <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>

          <div class="carousel-inner rounded-4 overflow-hidden shadow-lg">
            <div class="carousel-item active">
              <img :src="Carrusel1" class="d-block w-100" alt="Slide 1">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                <h3 class="fw-bold text-white">¡Diversión y Aprendizaje!</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="Carrusel2" class="d-block w-100" alt="Slide 2">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                <h3 class="fw-bold text-white">Aventura en la Naturaleza</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="Carrusel3" class="d-block w-100" alt="Slide 3">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                <h3 class="fw-bold text-white">Liderazgo y Valores</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="Carrusel4" class="d-block w-100" alt="Slide 4">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                <h3 class="fw-bold text-white">Creatividad y Juego</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="Carrusel5" class="d-block w-100" alt="Slide 5">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                <h3 class="fw-bold text-white">Amistad y Compañerismo</h3>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>

    <!-- TARJETAS -->
    <section class="py-6 bg-light position-relative">
      <div class="container">
        <div class="text-center mb-6">
          <h2 class="display-5 fw-bold mb-3">Descubre Álamos 260</h2>
          <p class="text-muted fs-5">
            Todo lo importante del grupo en una experiencia clara, interactiva y moderna
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-xl-3">
            <div
              class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover card-clickable"
              :class="{ 'card-desktop-clickable': isDesktop }"
              @click="handleCardClick('/historia')"
            >
              <div
                class="position-relative overflow-hidden card-top-gradient"
                style="height: 12rem; background: linear-gradient(135deg, #198754, #0f5f3f);"
              >
                <div class="position-absolute top-50 start-50 translate-middle fs-1 card-top-icon">
                  👥
                </div>
              </div>
              <div class="card-body p-4 d-flex flex-column">
                <h5 class="fw-bold mb-3">El Grupo</h5>
                <p class="text-muted mb-4 flex-grow-1">
                  Nuestra historia, valores y el recorrido de Álamos 260 a lo largo de 48 años.
                </p>
                <RouterLink
                  to="/historia"
                  class="card-cta card-cta-success"
                  @click.stop
                >
                  Descubrir
                  <span class="card-cta-arrow">→</span>
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-3">
            <div
              class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover card-clickable"
              :class="{ 'card-desktop-clickable': isDesktop }"
              @click="handleCardClick('/secciones')"
            >
              <div
                class="position-relative overflow-hidden card-top-gradient"
                style="height: 12rem; background: linear-gradient(135deg, #0dcaf0, #084c7f);"
              >
                <div class="position-absolute top-50 start-50 translate-middle fs-1 card-top-icon">
                  🧭
                </div>
              </div>
              <div class="card-body p-4 d-flex flex-column">
                <h5 class="fw-bold mb-3">Secciones</h5>
                <p class="text-muted mb-4 flex-grow-1">
                  Conoce las distintas ramas del grupo, adaptadas a cada etapa educativa.
                </p>
                <RouterLink
                  to="/secciones"
                  class="card-cta card-cta-info"
                  @click.stop
                >
                  Explorar
                  <span class="card-cta-arrow">→</span>
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-3">
            <div
              class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover card-clickable"
              :class="{ 'card-desktop-clickable': isDesktop }"
              @click="handleCardClick('/documentacion')"
            >
              <div
                class="position-relative overflow-hidden card-top-gradient"
                style="height: 12rem; background: linear-gradient(135deg, #fd7e14, #dc5a0f);"
              >
                <div class="position-absolute top-50 start-50 translate-middle fs-1 card-top-icon">
                  📋
                </div>
              </div>
              <div class="card-body p-4 d-flex flex-column">
                <h5 class="fw-bold mb-3">Documentos</h5>
                <p class="text-muted mb-4 flex-grow-1">
                  Formularios, documentos legales e información útil para familias.
                </p>
                <RouterLink
                  to="/documentacion"
                  class="card-cta card-cta-warning"
                  @click.stop
                >
                  Acceder
                  <span class="card-cta-arrow">→</span>
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-3">
            <div
              class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover card-clickable"
              :class="{ 'card-desktop-clickable': isDesktop }"
              @click="handleCardClick('/contacto')"
            >
              <div
                class="position-relative overflow-hidden card-top-gradient"
                style="height: 12rem; background: linear-gradient(135deg, #6f42c1, #482a73);"
              >
                <div class="position-absolute top-50 start-50 translate-middle fs-1 card-top-icon">
                  ✉️
                </div>
              </div>
              <div class="card-body p-4 d-flex flex-column">
                <h5 class="fw-bold mb-3">Contacto</h5>
                <p class="text-muted mb-4 flex-grow-1">
                  Escríbenos, resuelve dudas e inicia tu proceso de inscripción ahora.
                </p>
                <RouterLink
                  to="/contacto"
                  class="card-cta card-cta-primary"
                  @click.stop
                >
                  Contactar
                  <span class="card-cta-arrow">→</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- QUIÉNES SOMOS -->
    <section class="py-6">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-5">
            <div class="position-relative">
              <div class="card border-0 shadow-lg rounded-5 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&w=1200&q=80"
                  class="img-fluid w-100"
                  alt="Grupo de jóvenes en actividad al aire libre"
                />
              </div>
              <div class="position-absolute bottom-0 end-0 bg-success text-white p-4 rounded-4 shadow-lg" style="width: 200px; margin: 2rem; margin-bottom: -3rem;">
                <div class="fs-5 fw-bold">+1000 jóvenes</div>
                <small>han sido parte del grupo</small>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="mb-4">
              <span class="badge bg-success-subtle text-success fw-semibold fs-6 px-3 py-2">
                📖 NUESTRA HISTORIA
              </span>
            </div>

            <h2 class="display-5 fw-bold mb-4">Mucho más que scouting</h2>
            <p class="fs-5 text-muted mb-4 lh-lg">
              Álamos 260 lleva décadas ofreciendo una alternativa educativa integral en el barrio. Más que campamentos y actividades, somos una comunidad que forma a jóvenes líderes con valores, responsabilidad y compromiso social.
            </p>

            <div class="row g-3 mt-5">
              <div class="col-sm-6">
                <div class="p-4 bg-success bg-opacity-10 rounded-4 border border-success border-opacity-25">
                  <h4 class="fw-bold text-success mb-2">1975</h4>
                  <p class="mb-0 text-muted small">Año de fundación</p>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 bg-info bg-opacity-10 rounded-4 border border-info border-opacity-25">
                  <h4 class="fw-bold text-info mb-2">1992</h4>
                  <p class="mb-0 text-muted small">Inauguración sede propia</p>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 bg-warning bg-opacity-10 rounded-4 border border-warning border-opacity-25">
                  <h4 class="fw-bold text-warning mb-2">5</h4>
                  <p class="mb-0 text-muted small">Secciones activas</p>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 bg-purple bg-opacity-10 rounded-4 border border-purple border-opacity-25">
                  <h4 class="fw-bold text-primary mb-2">∞</h4>
                  <p class="mb-0 text-muted small">Historias de crecimiento</p>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <RouterLink to="/historia" class="btn btn-success btn-lg fw-semibold shadow-sm hover-lift">
                Conoce nuestra historia completa →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIONES -->
    <section class="py-6 bg-light position-relative overflow-hidden">
      <div class="container">
        <div class="text-center mb-6">
          <h2 class="display-5 fw-bold mb-3">Nuestras secciones</h2>
          <p class="text-muted fs-5">
            Un recorrido educativo adaptado a cada etapa de crecimiento
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="(section, idx) in sections" :key="section.name">
            <div class="card border-0 shadow-sm h-100 rounded-4 overflow-hidden section-card" :data-index="idx">
              <div class="card-body p-5">
                <div class="section-icon mb-3" :style="{ color: section.color }">
                  <span :class="section.emoji" style="font-size: 2.5rem;">{{ section.emoji }}</span>
                </div>
                <h5 class="fw-bold mb-3">{{ section.name }}</h5>
                <p class="text-muted lh-lg mb-0">{{ section.description }}</p>
                <small class="text-muted d-block mt-3">
                  <i class="bi bi-arrow-right"></i> Edades: {{ section.ages }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="py-6 position-relative overflow-hidden">
      <div class="container">
        <div class="p-6 bg-gradient rounded-5 shadow-lg position-relative overflow-hidden text-center" style="background: linear-gradient(135deg, #198754 0%, #0f5f3f 100%);">
          <div class="position-absolute top-0 start-0 opacity-10" style="font-size: 15rem;">🏕️</div>
          <div class="position-absolute bottom-0 end-0 opacity-10" style="font-size: 12rem;">⛺</div>

          <div class="position-relative z-2">
            <h2 class="display-4 fw-bold mb-4 text-white">
              ¿Quieres formar parte de esta aventura?
            </h2>
            <p class="lead text-white-50 fs-5 mb-5 mx-auto" style="max-width: 600px;">
              Únete a cientos de jóvenes que ya son parte de Álamos 260 y vive experiencias que transformarán tu vida.
            </p>
            <div class="d-flex justify-content-center gap-3 flex-wrap">
              <RouterLink to="/contacto" class="btn btn-light btn-lg fw-semibold px-5 shadow-sm hover-lift">
                📝 Inscribirse ahora
              </RouterLink>
              <a href="mailto:alamos260@gmail.com" class="btn btn-outline-light btn-lg fw-semibold px-5 hover-lift">
                💬 Consultas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Carrusel1 from '@/assets/Imagen_Castores_1.jpeg'
import Carrusel2 from '@/assets/Imagen_Manada_1.jpeg'
import Carrusel3 from '@/assets/Imagen_UE_1.jpeg'
import Carrusel4 from '@/assets/Imagen_Castores_2.jpeg'
import Carrusel5 from '@/assets/Imagen_Castores_3.jpeg'

const router = useRouter()
const isDesktop = ref(false)

const updateIsDesktop = () => {
  isDesktop.value = window.innerWidth >= 768
}

const handleCardClick = (route) => {
  if (isDesktop.value) {
    router.push(route)
  }
}

onMounted(() => {
  updateIsDesktop()
  window.addEventListener('resize', updateIsDesktop)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsDesktop)
})

const sections = [
  {
    name: 'Manada Wakanda',
    emoji: '🐺',
    description: 'La etapa donde se aprende jugando, compartiendo y creciendo en grupo. Énfasis en la integración y diversión.',
    ages: '6-8 años',
    color: '#ffc107'
  },
  {
    name: 'Tropa Scout Indio Seattle',
    emoji: '🏹',
    description: 'Aventura, autonomía y primeros grandes retos en la vida scout. Desarrollo de habilidades.',
    ages: '9-12 años',
    color: '#198754'
  },
  {
    name: 'Unidad Esculta Valhalla',
    emoji: '⚔️',
    description: 'Compromiso, trabajo en equipo y experiencias más intensas. Formación de liderazgo.',
    ages: '13-16 años',
    color: '#0dcaf0'
  },
  {
    name: 'Clan Arwen',
    emoji: '🌟',
    description: 'Servicio, proyecto personal y cierre de la etapa educativa scout. Mentoría comunitaria.',
    ages: '17-20 años',
    color: '#6f42c1'
  },
  {
    name: 'Kraal',
    emoji: '👨‍🏫',
    description: 'El equipo de scouters y responsables que hacen posible el proyecto. Educadores voluntarios.',
    ages: '+21 años',
    color: '#fd7e14'
  }
]
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
}

/* Email Bar */
.bg-dark {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.bg-dark a {
  transition: all 0.3s ease;
}

.bg-dark a:hover {
  text-decoration: underline !important;
  opacity: 0.8;
}

/* Email Contact Box in Hero */
.email-contact {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  max-width: 300px;
}

.email-contact:hover {
  background: rgba(255, 255, 255, 0.15) !important;
  transform: translateY(-2px);
}

.email-contact a:hover {
  opacity: 0.9;
}

/* TARJETAS CLICKABLES Y BOTONES MEJORADOS */
.card-clickable {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-desktop-clickable {
  cursor: pointer;
}

.card-cta {
  position: relative;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.78rem 1.15rem;
  min-height: 46px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1;
  transition: all 0.25s ease;
  border: 1px solid transparent;
  box-shadow: 0 0.45rem 1rem rgba(0, 0, 0, 0.08);
}

.card-cta-arrow {
  transition: transform 0.25s ease;
}

.card-cta:hover .card-cta-arrow {
  transform: translateX(4px);
}

.card-cta-success {
  background: linear-gradient(135deg, #198754, #157347);
  color: #fff;
}

.card-cta-success:hover {
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 0.7rem 1.4rem rgba(25, 135, 84, 0.25);
}

.card-cta-info {
  background: linear-gradient(135deg, #0dcaf0, #0b9fbe);
  color: #062c33;
}

.card-cta-info:hover {
  color: #062c33;
  transform: translateY(-2px);
  box-shadow: 0 0.7rem 1.4rem rgba(13, 202, 240, 0.25);
}

.card-cta-warning {
  background: linear-gradient(135deg, #fd7e14, #dc5a0f);
  color: #fff;
}

.card-cta-warning:hover {
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 0.7rem 1.4rem rgba(253, 126, 20, 0.25);
}

.card-cta-primary {
  background: linear-gradient(135deg, #6f42c1, #482a73);
  color: #fff;
}

.card-cta-primary:hover {
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 0.7rem 1.4rem rgba(111, 66, 193, 0.25);
}

.card-top-icon {
  transition: transform 0.25s ease;
}

.card-clickable:hover .card-top-icon {
  transform: translate(-50%, -50%) scale(1.08);
}

@media (max-width: 767.98px) {
  .card-cta {
    width: 100%;
  }
}

/* Contact Card */
.contact-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 1.25rem 1.75rem;
  max-width: 380px;
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 1px rgba(255, 255, 255, 0.4);
  cursor: pointer;
}

.contact-card:hover {
  transform: translateX(8px) translateY(-4px);
  border-color: rgba(255, 255, 255, 0.5);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 100%);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.5);
}

.contact-card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.contact-icon {
  font-size: 1.75rem;
  color: #ffc107;
  animation: iconBounce 2s ease-in-out infinite;
}

.contact-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-email {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: block;
}

.contact-card:hover .contact-email {
  color: #ffc107;
}

.contact-arrow {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  margin-left: 1rem;
}

.contact-card:hover .contact-arrow {
  color: #ffc107;
  transform: translateX(4px);
}

@keyframes iconBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* Logo Container */
.logo-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.logo-frame {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 1px rgba(255, 255, 255, 0.3);
}

.logo-frame:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2),
              inset 0 1px 1px rgba(255, 255, 255, 0.4);
}

.logo-frame img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.4s ease;
}

.logo-frame:hover img {
  transform: scale(1.05);
}

.logo-container-side {
  margin-bottom: 0;
}

.logo-frame-large {
  padding: 2rem;
  min-height: 320px;
}

.logo-frame-large img {
  max-height: 280px;
  object-fit: contain;
}

.logo-badge {
  position: absolute;
  top: 2rem;
  right: 2rem;
  animation: badgePulse 2s ease-in-out infinite;
}

.logo-badge .badge {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(25, 135, 84, 0.3);
}

@keyframes badgePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Hero Title */
.hero-title-container {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  animation: titleSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-title-container h1 {
  color: white;
  position: relative;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-highlight {
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  animation: highlightPulse 3s ease-in-out infinite;
}

.title-underline {
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #ffc107 0%, #ff9800 50%, transparent 100%);
  border-radius: 2px;
  width: 0;
  animation: underlineExpand 1.2s ease-out 0.3s forwards;
  box-shadow: 0 2px 10px rgba(255, 152, 0, 0.4);
}

@keyframes titleSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes highlightPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
    text-shadow: 0 0 20px rgba(255, 193, 7, 0.5);
  }
}

@keyframes underlineExpand {
  from {
    width: 0;
  }
  to {
    width: 80%;
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 55vh;
  display: flex;
  align-items: center;
  padding-top: 2rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-image-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease !important;
}

.hero-image-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.15) !important;
}

/* Carrusel en Hero */
.carousel-hero {
  overflow: visible !important;
  animation: slideInRight 0.6s ease-out;
}

.carousel-hero .carousel-item {
  min-height: 400px;
}

.carousel-hero .carousel-control-prev-icon,
.carousel-hero .carousel-control-next-icon {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.336));
}

.carousel-hero .carousel-caption {
  background: rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  border-radius: 0.5rem;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Padding utilities */
:deep(.py-6) {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}

:deep(.p-6) {
  padding: 4rem !important;
}

:deep(.mb-6) {
  margin-bottom: 4rem !important;
}

/* Responsive Padding */
@media (max-width: 768px) {
  :deep(.py-6) {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  :deep(.p-6) {
    padding: 2rem !important;
  }

  :deep(.mb-6) {
    margin-bottom: 2rem !important;
  }
}

@media (max-width: 576px) {
  :deep(.py-6) {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  :deep(.p-6) {
    padding: 1.5rem !important;
  }

  :deep(.mb-6) {
    margin-bottom: 1.5rem !important;
  }
}

/* Card Hover Effect */
.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 3px solid transparent !important;
}

.card-hover:hover {
  transform: translateY(-12px);
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.15) !important;
  border-bottom-color: var(--bs-success, #198754) !important;
}

.card-hover:hover .card-body {
  color: var(--bs-body-color);
}

/* Section Card */
.section-card {
  transition: all 0.3s ease;
  border-bottom: 4px solid transparent !important;
}

.section-card:hover {
  transform: translateY(-8px) translateX(4px);
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.1) !important;
}

.section-card[data-index="0"]:hover {
  border-bottom-color: #ffc107 !important;
}

.section-card[data-index="1"]:hover {
  border-bottom-color: #198754 !important;
}

.section-card[data-index="2"]:hover {
  border-bottom-color: #0dcaf0 !important;
}

.section-card[data-index="3"]:hover {
  border-bottom-color: #6f42c1 !important;
}

.section-card[data-index="4"]:hover {
  border-bottom-color: #fd7e14 !important;
}

.section-icon {
  transition: transform 0.3s ease;
  display: inline-block;
}

.section-card:hover .section-icon {
  transform: scale(1.2) rotate(5deg);
}

/* Hover Lift */
.hover-lift {
  transition: all 0.3s ease !important;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;
}

/* Gradient Enhancement */
.bg-gradient {
  background: linear-gradient(135deg, #198754 0%, #0f5f3f 100%) !important;
}

/* Text Effects */
.text-warning {
  transition: all 0.3s ease;
}

/* Line Height */
.lh-lg {
  line-height: 1.8 !important;
}

/* Icon Circle (for compatibility) */
.icon-circle {
  width: 52px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.card:hover .icon-circle {
  transform: scale(1.1);
}

/* Button Animations */
.btn {
  transition: all 0.3s ease !important;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding-top: 2rem;
  }

  .display-3 {
    font-size: 2rem !important;
  }

  .hero-title-container h1 {
    font-size: 1.75rem !important;
  }

  .title-underline {
    width: 60% !important;
  }

  .display-4,
  .display-5 {
    font-size: 1.75rem !important;
  }

  .carousel-hero .carousel-item {
    min-height: 250px;
  }

  .email-contact {
    max-width: 100%;
  }

  .contact-card {
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .logo-frame-large {
    padding: 1.5rem;
    min-height: auto;
  }

  .logo-frame-large img {
    max-height: 200px;
  }

  .fs-5 {
    font-size: 0.95rem !important;
  }

  .btn {
    font-size: 0.9rem;
    padding: 0.5rem 1rem !important;
  }

  .p-4,
  .p-5 {
    padding: 1.5rem !important;
  }
}

@media (max-width: 576px) {
  .display-4,
  .display-5 {
    font-size: 1.5rem !important;
  }

  .lead {
    font-size: 1rem !important;
  }

  .fs-5 {
    font-size: 0.85rem !important;
  }

  .card-body {
    padding: 1rem !important;
  }

  .btn-lg {
    padding: 0.5rem 1rem !important;
    font-size: 0.85rem !important;
  }

  .p-4,
  .p-5 {
    padding: 1rem !important;
  }

  .row.g-4,
  .row.g-3 {
    gap: 1rem !important;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

.hero-section {
  position: relative;
  min-height: 62vh;
  display: flex;
  align-items: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #198754 0%, #0f5f3f 100%);
  z-index: 1;
}

.hero-content {
  z-index: 2;
  width: 100%;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.hero-title {
  font-size: clamp(2.4rem, 5vw, 4.3rem);
  line-height: 1.05;
}

.title-highlight {
  color: #ffc107;
}

.title-underline {
  width: 220px;
  max-width: 100%;
  height: 4px;
  margin-top: 0.9rem;
  border-radius: 999px;
  background: linear-gradient(90deg, #ffc107, rgba(255, 193, 7, 0.05));
}

.hero-description {
  font-size: 1.15rem;
  line-height: 1.7;
  max-width: 560px;
}

.hero-right-block {
  width: 100%;
}

.logo-frame-large {
  position: relative;
  background: rgba(255, 255, 255, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.18);
  border-radius: 1.75rem;
  padding: 1.25rem;
  box-shadow: 0 1.2rem 2.5rem rgba(0, 0, 0, 0.12);
}

.hero-logo-img {
  width: 100%;
  display: block;
  border-radius: 1rem;
  background: white;
}

.logo-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.contact-card {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.4rem 1.25rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
}

.contact-card-content {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 1rem;
  background: rgba(255, 193, 7, 0.12);
  color: #ffc107;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contact-label {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
}

.contact-email {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  word-break: break-word;
}

.contact-email:hover {
  text-decoration: underline;
}

.contact-arrow {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.6rem;
  flex-shrink: 0;
}

.hover-lift {
  transition: all 0.3s ease !important;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.15) !important;
}

@media (max-width: 991px) {
  .hero-section {
    min-height: auto;
  }

  .hero-content {
    padding-top: 2.75rem;
    padding-bottom: 2.75rem;
  }

  .hero-title {
    font-size: 2.6rem;
  }

  .logo-frame-large {
    margin-top: 0.5rem;
  }

  .contact-card {
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .contact-card {
    padding: 1rem;
  }

  .contact-card-content {
    gap: 0.75rem;
  }

  .contact-icon {
    width: 46px;
    height: 46px;
    font-size: 1.25rem;
  }

  .contact-email {
    font-size: 0.95rem;
  }
}

/* Home Carousel - Imágenes uniformes y responsivas */
#homeCarousel .carousel-item img {
  height: 850px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  margin: 0 auto;
  display: block;
}

#homeCarousel .carousel-caption {
  background: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(5px);
  border-radius: 0.75rem;
  padding: 1rem 1.5rem !important;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  text-align: center;
  font-size: 1.25rem;
}

/* Carrusel Responsive */
@media (max-width: 1200px) {
  #homeCarousel .carousel-item img {
    height: 500px;
  }

  #homeCarousel .carousel-caption {
    font-size: 1.1rem;
    padding: 0.8rem 1.2rem !important;
  }
}

@media (max-width: 768px) {
  #homeCarousel .carousel-item img {
    height: 350px;
  }

  #homeCarousel .carousel-caption {
    font-size: 1rem;
    padding: 0.6rem 1rem !important;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
  }
}

@media (max-width: 576px) {
  #homeCarousel .carousel-item img {
    height: 250px;
  }

  #homeCarousel .carousel-caption {
    font-size: 0.85rem;
    padding: 0.5rem 0.8rem !important;
  }

  .carousel-indicators {
    bottom: 0.5rem;
  }
}
</style>