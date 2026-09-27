<template>
  <footer class="rodape mono">
    Feito com Vue 3, Bootstrap e Axios ·
    <a href="https://github.com/Cdepaulla" target="_blank" rel="noopener">Cdepaulla</a>
    — {{ ano }}
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Rodape',
  data() {
    return {
      ano: new Date().getFullYear(),
    }
  },
})
</script>

<style scoped>
.rodape {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  color: var(--cor-texto-fraco);
  font-size: 0.82rem;
  border-top: 1px solid var(--cor-borda);
}

.rodape a {
  color: var(--cor-destaque);
  text-decoration: none;
}

.rodape a:hover {
  color: var(--cor-destaque-clara);
}
</style>
