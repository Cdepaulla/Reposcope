<template>
  <div class="app-raiz">
    <div class="fundo" aria-hidden="true">
      <div class="fundo__grade"></div>
      <span class="fundo__mancha fundo__mancha--1"></span>
      <span class="fundo__mancha fundo__mancha--2"></span>
    </div>

    <BrilhoMouse />
    <Cabecalho />

    <BContainer
      class="d-flex flex-column align-items-center gap-4 pb-5"
      style="max-width: 700px; position: relative; z-index: 1"
    >
      <div class="titulo-secao">
        <span class="titulo-secao__anotacao mono">api pública do github</span>
        <h1 class="titulo-secao__titulo">
          Explorador de <span class="text-success">Repositórios</span>
        </h1>
        <p class="text-body-secondary mb-0">Busque um usuário e veja os repositórios públicos dele.</p>
      </div>

      <FormularioBusca @buscar="buscar" />

      <EsqueletoCarregamento v-if="carregando" />
      <div v-else-if="erro" class="alert alert-danger w-100" role="alert">{{ erro }}</div>

      <template v-else-if="usuario">
        <CartaoUsuario :usuario="usuario" class="w-100" />
        <ListaRepositorios :repositorios="repositorios" />
      </template>
    </BContainer>

    <Rodape />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { BContainer } from 'bootstrap-vue-next'
import BrilhoMouse from './components/BrilhoMouse.vue'
import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
import FormularioBusca from './components/FormularioBusca.vue'
import CartaoUsuario from './components/CartaoUsuario.vue'
import ListaRepositorios from './components/ListaRepositorios.vue'
import EsqueletoCarregamento from './components/EsqueletoCarregamento.vue'
import { buscarUsuario, buscarRepositorios } from './services/github'

export default defineComponent({
  name: 'App',
  components: {
    BContainer,
    BrilhoMouse,
    Cabecalho,
    Rodape,
    FormularioBusca,
    CartaoUsuario,
    ListaRepositorios,
    EsqueletoCarregamento,
  },
  data() {
    return {
      carregando: false,
      erro: '',
      usuario: null,
      repositorios: [],
    }
  },
  methods: {
    async buscar(nomeUsuario) {
      this.carregando = true
      this.erro = ''
      this.usuario = null
      this.repositorios = []

      try {
        const [usuario, repositorios] = await Promise.all([
          buscarUsuario(nomeUsuario),
          buscarRepositorios(nomeUsuario),
        ])
        this.usuario = usuario
        this.repositorios = repositorios
      } catch (erro) {
        this.erro = erro.message || 'Erro inesperado.'
      } finally {
        this.carregando = false
      }
    },
  },
})
</script>

<style scoped>
.app-raiz {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
