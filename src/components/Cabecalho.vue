<template>
  <header class="cabecalho">
    <div class="cabecalho__interno">
      <a href="#top" class="cabecalho__marca">
        <img :src="logo" alt="RepoScope" class="cabecalho__logo" />
      </a>
      <a class="cabecalho__link mono" href="https://github.com/Cdepaulla" target="_blank" rel="noopener">
        GitHub ↗
      </a>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import logo from '../assets/Imagem_logo_repo_Scope2.png'

export default defineComponent({
  name: 'Cabecalho',
  data() {
    return {
      logo,
    }
  },
})
</script>

<style scoped>
.cabecalho {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10, 10, 10, 0.78);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--cor-borda);
  margin-bottom: 2rem;
}

.cabecalho__interno {
  max-width: 700px;
  margin: 0 auto;
  padding: 0.6rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.cabecalho__marca {
  display: flex;
  align-items: center;
}

.cabecalho__logo {
  height: 100px;
  width: 140px;
  object-fit: cover;
  border-radius: 10px;
}

.cabecalho__link {
  font-size: 0.82rem;
  border: 1px solid var(--cor-borda);
  border-radius: 8px;
  padding: 0.4rem 0.75rem;
  color: var(--cor-texto-fraco);
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.cabecalho__link:hover {
  border-color: var(--cor-destaque-forte);
  color: var(--cor-destaque);
}
</style>
