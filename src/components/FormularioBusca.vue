<template>
  <BForm class="d-flex gap-2 mx-auto" style="max-width: 32rem" @submit.prevent="enviar">
    <BFormInput v-model="nomeUsuario" placeholder="usuário do GitHub, ex: Cdepaulla" />
    <BButton type="submit" variant="success" :disabled="!nomeUsuario.trim()">
      Buscar
    </BButton>
  </BForm>
</template>

<script>
import { defineComponent } from 'vue'
import { BForm, BFormInput, BButton } from 'bootstrap-vue-next'

export default defineComponent({
  name: 'FormularioBusca',
  components: { BForm, BFormInput, BButton },
  emits: ['buscar'],
  data() {
    return {
      nomeUsuario: '',
    }
  },
  methods: {
    enviar() {
      const valor = this.nomeUsuario.trim()
      if (!valor) return
      this.$emit('buscar', valor)
    },
  },
})
</script>
