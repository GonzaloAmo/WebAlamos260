<template>
  <main class="documentation-page">
    <section class="page-heading">
      <div class="container">
        <span class="eyebrow">GRUPO SCOUT ÁLAMOS 260</span>
        <h1>Documentación <span>importante</span></h1>
        <p>Consulta y descarga los documentos del grupo de forma rápida y sencilla.</p>
      </div>
    </section>

    <section class="container documents-section" aria-labelledby="documents-title">
      <div class="section-heading">
        <div>
          <h2 id="documents-title">Documentos del grupo</h2>
          <p>Información de referencia para las familias y miembros del grupo.</p>
        </div>
        <span class="document-count">{{ availableCount }} de {{ documents.length }} disponibles</span>
      </div>

      <div class="documents-list">
        <article v-for="document in documents" :key="document.file" class="document-row">
          <div class="document-icon" aria-hidden="true">📄</div>
          <div class="document-info">
            <h3>{{ document.title }}</h3>
            <p>{{ document.description }}</p>
          </div>
          <div class="document-actions">
            <template v-if="document.url">
              <a class="view-link" :href="document.url" target="_blank" rel="noopener noreferrer" :aria-label="`Ver ${document.title}`">Ver</a>
              <a class="download-link" :href="document.url" :download="document.file" :aria-label="`Descargar ${document.title}`">Descargar <span aria-hidden="true">↓</span></a>
            </template>
            <span v-else class="pending-label">Pendiente de publicar</span>
          </div>
        </article>
      </div>

      <p class="help-note">¿Necesitas ayuda con algún documento? <RouterLink to="/contacto">Contacta con el grupo →</RouterLink></p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Los archivos se detectan automáticamente dentro de src/assets/Documentacion/.
// Los nombres deben coincidir con la propiedad "file" de cada documento.

const documentFiles = import.meta.glob('/src/assets/Documentacion/*.{pdf,PDF}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

type DocumentEntry = {
  title: string
  description: string
  file: string
  url: string | null
}

const definitions = [
  { title: 'Estatutos del Grupo Scout Álamos 260', description: 'Normas y organización del grupo.', file: 'Estatutos.pdf' },
  { title: 'Manual para Familias Grupo Scout Álamos 260', description: 'Información práctica para las familias.', file: 'Manual_Familias_Grupo_Scout_Alamos_260.pdf' },
  { title: 'Póster del método Scout', description: 'Resumen visual del método scout.', file: 'Poster_Metodo_Scout.pdf' },
  { title: 'Método Scout y estrategias importantes', description: 'Principios y herramientas educativas.', file: 'Metodo_Scout.pdf' },
  { title: 'Código de conducta', description: 'Pautas de comportamiento y convivencia.', file: 'Codigo_Conducta.pdf' },
  { title: 'Política de buen trato', description: 'Compromisos para un entorno seguro y respetuoso.', file: 'Politica_Buen_Trato.pdf' },
  { title: 'Plan de respuesta', description: 'Procedimientos y medidas de actuación.', file: 'Plan_Respuesta.pdf' },
] as const

const documents = computed<DocumentEntry[]>(() => definitions.map(document => ({
  ...document,
  url: documentFiles[`/src/assets/Documentacion/${document.file}`] ?? null,
})))

const availableCount = computed(() => documents.value.filter(document => document.url).length)
</script>

<style scoped>
.documentation-page{min-height:100vh;background:#f8faf9;color:#173a2b;padding-bottom:80px}
.page-heading{background:linear-gradient(115deg,#eaf5ee,#f8faf9);border-bottom:1px solid #e1ebe4;padding:70px 0 60px}
.eyebrow{font-size:.75rem;letter-spacing:.13em;font-weight:800;color:#198754}
.page-heading h1{font-size:clamp(2.2rem,5vw,3.5rem);font-weight:850;letter-spacing:-.04em;margin:12px 0 14px}
.page-heading h1 span{color:#198754}
.page-heading p{font-size:1.05rem;color:#62776a;margin:0;max-width:650px;line-height:1.65}
.documents-section{max-width:1040px;padding-top:50px}
.section-heading{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:24px}
.section-heading h2{font-size:1.65rem;font-weight:800;margin:0 0 7px}
.section-heading p{margin:0;color:#708176}
.document-count{font-size:.85rem;color:#5e7769;white-space:nowrap}
.documents-list{border:1px solid #e4ece6;border-radius:20px;overflow:hidden;background:#fff;box-shadow:0 12px 38px rgba(24,64,42,.045)}
.document-row{display:flex;align-items:center;gap:18px;padding:22px 26px;border-bottom:1px solid #e9efeb}
.document-row:last-child{border-bottom:0}
.document-icon{flex:0 0 48px;width:48px;height:48px;border-radius:13px;background:#edf7f0;display:grid;place-items:center;font-size:1.4rem}
.document-info{flex:1;min-width:0}
.document-info h3{font-size:1rem;font-weight:750;margin:0 0 5px}
.document-info p{font-size:.86rem;color:#718378;margin:0;line-height:1.5}
.document-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;flex-wrap:wrap}
.view-link{color:#146b45;font-weight:700;text-decoration:none;padding:10px 8px}
.view-link:hover{text-decoration:underline}
.download-link{background:#176c48;color:white;padding:11px 17px;border-radius:10px;font-size:.88rem;font-weight:750;text-decoration:none;white-space:nowrap;transition:background .2s}
.download-link:hover{background:#105638;color:white}
.download-link span{margin-left:7px}
.pending-label{color:#89978e;font-size:.83rem;white-space:nowrap}
.help-note{text-align:center;margin:30px 0 0;color:#708176;font-size:.92rem}
.help-note a{color:#13764b;font-weight:700;text-decoration:none}
.help-note a:hover{text-decoration:underline}
@media(max-width:650px){.page-heading{padding:48px 0}.documents-section{padding-top:35px}.section-heading{align-items:start;flex-direction:column;gap:8px}.document-row{padding:18px 15px;gap:12px;align-items:flex-start;flex-wrap:wrap}.document-icon{width:42px;height:42px;flex-basis:42px}.document-info{flex-basis:calc(100% - 60px)}.document-actions{width:100%;justify-content:flex-start;padding-left:54px}.pending-label{white-space:normal}}
@media(prefers-reduced-motion:reduce){.download-link{transition:none}}
</style>
