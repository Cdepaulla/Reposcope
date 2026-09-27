<template>
  <a :href="repositorio.html_url" target="_blank" rel="noopener" class="text-decoration-none">
    <BCard class="h-100 cartao-hover">
      <span class="selo-numero mb-2" style="width: fit-content">{{ numeroFormatado }}</span>
      <h6 class="fw-semibold fonte-titulo text-body">{{ repositorio.name }}</h6>
      <p class="text-body-secondary small">
        {{ repositorio.description || 'Sem descrição.' }}
      </p>

      <div v-if="repositorio.topics?.length" class="d-flex flex-wrap gap-1 mb-2">
        <span v-for="topico in repositorio.topics" :key="topico" class="pill">{{ topico }}</span>
      </div>

      <div class="d-flex align-items-center gap-3 text-muted small mono">
        <span v-if="repositorio.language" class="d-flex align-items-center gap-1">
          <span class="rounded-circle bg-success" style="width: 8px; height: 8px"></span>
          {{ repositorio.language }}
        </span>
        <span><i class="bi bi-star-fill"></i> {{ repositorio.stargazers_count }}</span>
        <span><i class="bi bi-diagram-2-fill"></i> {{ repositorio.forks_count }}</span>
      </div>
    </BCard>
  </a>
</template>

<script>
import { defineComponent } from 'vue'
import { BCard } from 'bootstrap-vue-next'

export default defineComponent({
  name: 'CartaoRepositorio',
  components: { BCard },
  props: {
    repositorio: { type: Object, required: true },
    indice: { type: Number, required: true },
  },
  computed: {
    numeroFormatado() {
      return String(this.indice + 1).padStart(2, '0')
    },
  },
})
</script>
