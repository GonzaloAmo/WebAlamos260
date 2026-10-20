<template>
  <main class="contact-page">
    <section class="container contact-container" aria-labelledby="contact-title">
      <div class="intro">
        <span class="eyebrow">GRUPO SCOUT ÁLAMOS 260</span>
        <h1 id="contact-title">Estamos <span>en contacto.</span></h1>
        <p>¿Tienes alguna duda o quieres saber más sobre nuestro grupo? Escríbenos y estaremos encantados de ayudarte.</p>
      </div>

      <div class="contact-card">
        <div class="mail-icon" aria-hidden="true">✉</div>
        <span class="card-label">NUESTRO CORREO ELECTRÓNICO</span>
        <a class="email-address" :href="`mailto:${email}`">{{ email }}</a>
        <p>Para consultas sobre inscripciones, actividades, cronogramas o cualquier información del grupo.</p>
        <div class="actions">
          <a class="primary-action" :href="`mailto:${email}`">✉&nbsp; Enviar un correo <span aria-hidden="true">↗</span></a>
          <button type="button" class="secondary-action" @click="copyEmail">{{ copied ? '✓ Correo copiado' : '⧉ Copiar dirección' }}</button>
        </div>
        <span v-if="copyError" class="copy-error" role="status">No se ha podido copiar automáticamente. Selecciona la dirección de arriba para copiarla.</span>
      </div>

      <div class="help-note">
        <span class="help-icon" aria-hidden="true">💬</span>
        <div>
          <h2>¿Sobre qué puedes escribirnos?</h2>
          <p>Inscripciones y nuevas incorporaciones, horarios, actividades, documentación y cualquier duda relacionada con Álamos 260.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const email = 'alamos260@gmail.com'
const copied = ref(false)
const copyError = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  if (resetTimer) clearTimeout(resetTimer)
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    copyError.value = false
    resetTimer = setTimeout(() => { copied.value = false }, 2500)
  } catch {
    copied.value = false
    copyError.value = true
  }
}

onUnmounted(() => { if (resetTimer) clearTimeout(resetTimer) })
</script>

<style scoped>
.contact-page{background:#f7faf8;color:#173c2c;min-height:calc(100vh - 130px)}
.contact-container{max-width:980px;padding-top:clamp(65px,8vw,110px);padding-bottom:clamp(70px,9vw,120px)}
.intro{text-align:center;max-width:680px;margin:0 auto 38px}
.eyebrow{display:block;font-size:.76rem;letter-spacing:.14em;font-weight:800;color:#198754;margin-bottom:16px}
.intro h1{font-size:clamp(2.5rem,5vw,4rem);font-weight:850;letter-spacing:-.04em;line-height:1.1;margin:0 0 18px}
.intro h1 span{color:#198754}
.intro p{color:#64786e;font-size:1.06rem;line-height:1.75;margin:0}
.contact-card{background:#fff;border:1px solid #e5eee8;border-radius:25px;padding:clamp(28px,6vw,62px);box-shadow:0 18px 45px rgba(21,65,42,.07);display:flex;align-items:center;flex-direction:column;text-align:center}
.mail-icon{width:70px;height:70px;border-radius:20px;background:#e8f6ed;color:#16754c;display:grid;place-items:center;font-size:2rem;margin-bottom:25px}
.card-label{font-size:.76rem;letter-spacing:.13em;font-weight:800;color:#618071;margin-bottom:12px}
.email-address{font-size:clamp(1.5rem,4vw,2.7rem);font-weight:850;letter-spacing:-.035em;color:#155c3c;text-decoration:none;overflow-wrap:anywhere}
.email-address:hover{text-decoration:underline}
.contact-card>p{max-width:540px;color:#6a7e73;line-height:1.7;margin:18px 0 28px}
.actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
.primary-action,.secondary-action{border-radius:50px;padding:14px 25px;font-weight:750;font-size:.96rem;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:8px;transition:transform .2s,background-color .2s}
.primary-action{background:#16774d;color:white;border:1px solid #16774d}
.primary-action:hover{background:#105d3c;color:white;transform:translateY(-2px)}
.secondary-action{background:#fff;color:#155c3c;border:1px solid #c9ddd0;cursor:pointer}
.secondary-action:hover{background:#f0f8f3}
.copy-error{color:#9c482b;font-size:.82rem;margin-top:12px}
.help-note{display:flex;gap:18px;align-items:flex-start;max-width:710px;margin:32px auto 0;padding:0 10px}
.help-icon{background:#e6f2e9;border-radius:14px;width:48px;height:48px;flex:0 0 48px;display:grid;place-items:center;font-size:1.35rem}
.help-note h2{font-size:1.05rem;font-weight:800;margin:3px 0 6px}
.help-note p{color:#718278;line-height:1.7;margin:0;font-size:.94rem}
@media(max-width:575px){.contact-container{padding-top:55px}.contact-card{border-radius:20px}.actions{width:100%;flex-direction:column}.primary-action,.secondary-action{width:100%}.help-note{gap:12px}}
@media(prefers-reduced-motion:reduce){.primary-action,.secondary-action{transition:none}}
</style>
