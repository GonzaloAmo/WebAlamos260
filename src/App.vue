<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import logoScouts from '@/assets/logo-scouts.jpg'
</script>

<template>
  <div class="app-layout">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand d-flex align-items-center gap-2">
          <img
            :src="logoScouts"
            alt="Logo del Grupo Scout Álamos 260"
            class="navbar-logo"
          />
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink to="/historia" class="nav-link fw-semibold">📖 El Grupo</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/actividades" class="nav-link fw-semibold">🏕️ Actividades</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/secciones" class="nav-link fw-semibold">🧭 Secciones</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/galeria" class="nav-link fw-semibold">🖼️ Galería</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/galeria" class="nav-link fw-semibold">📰 Blog/Noticias</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/documentacion" class="nav-link fw-semibold">📄 Documentación</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contacto" class="nav-link fw-semibold text-success">✉️ Contacto</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Navbar Styles */
.navbar-brand {
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.navbar-logo {
  height: auto;
  width: 400px;
  object-fit: contain;
  transition: all 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.navbar-brand:hover .navbar-logo {
  filter: brightness(0.9);
}

.nav-link {
  transition: all 0.3s ease;
  color: #333 !important;
  position: relative;
  font-size: 1.4rem;
  font-weight: 600;
}

.nav-link:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #198754;
  transition: width 0.3s ease;
}

.nav-link:hover:after {
  width: 100%;
}

.nav-link.text-success {
  color: #198754 !important;
}

/* Responsive Navbar */
@media (max-width: 1200px) {
  .navbar-logo {
    width: 180px;
  }

  .nav-link {
    font-size: 0.95rem;
    padding: 0.4rem 0.6rem !important;
  }
}

@media (max-width: 992px) {
  .navbar {
    padding: 0.5rem 0;
  }

  .navbar-logo {
    width: 150px;
  }

  .navbar-collapse {
    margin-top: 0.5rem;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 0.5rem 0 !important;
    margin: 0.25rem 0;
  }
}

@media (max-width: 576px) {
  .navbar-logo {
    width: 120px;
  }

  .nav-link {
    font-size: 0.85rem;
    padding: 0.4rem 0 !important;
  }

  .container-fluid {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>