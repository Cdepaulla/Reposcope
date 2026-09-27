<template>
  <div v-if="repositorios.length" class="w-100">
    <div class="d-flex flex-wrap gap-2 justify-content-between mb-3">
      <BFormSelect v-model="ordenarPor" :options="opcoesOrdenacao" style="max-width: 200px" />
      <BFormSelect v-model="linguagem" :options="opcoesLinguagem" style="max-width: 200px" />
    </div>

    <BRow v-if="repositoriosFiltrados.length" class="g-3 mx-0">
      <BCol
        v-for="(repositorio, indice) in repositoriosFiltrados"
        :key="repositorio.id"
        cols="12"
        sm="6"
      >
        <CartaoRepositorio :repositorio="repositorio" :indice="indice" />
      </BCol>
    </BRow>
    <p v-else class="text-body-secondary">Nenhum repositório encontrado com esse filtro.</p>
  </div>
  <p v-else class="text-body-secondary">Este usuário ainda não tem repositórios públicos.</p>
</template>

<script>
import { defineComponent } from 'vue'
import { BRow, BCol, BFormSelect } from 'bootstrap-vue-next'
import CartaoRepositorio from './CartaoRepositorio.vue'

export default defineComponent({
  name: 'ListaRepositorios',
  components: { BRow, BCol, BFormSelect, CartaoRepositorio },
  props: {
    repositorios: { type: Array, required: true },
  },
  data() {
    return {
      ordenarPor: 'atualizado',
      linguagem: 'todas',
      opcoesOrdenacao: [
        { value: 'atualizado', text: 'Mais recentes' },
        { value: 'estrelas', text: 'Mais estrelas' },
        { value: 'nome', text: 'Nome (A-Z)' },
      ],
    }
  },
  computed: {
    opcoesLinguagem() {
      const linguagens = [...new Set(this.repositorios.map((r) => r.language).filter(Boolean))].sort()
      return [
        { value: 'todas', text: 'Todas as linguagens' },
        ...linguagens.map((linguagem) => ({ value: linguagem, text: linguagem })),
      ]
    },
    repositoriosFiltrados() {
      let lista = this.repositorios
      if (this.linguagem !== 'todas') {
        lista = lista.filter((repositorio) => repositorio.language === this.linguagem)
      }

      lista = [...lista]
      if (this.ordenarPor === 'estrelas') {
        lista.sort((a, b) => b.stargazers_count - a.stargazers_count)
      } else if (this.ordenarPor === 'nome') {
        lista.sort((a, b) => a.name.localeCompare(b.name))
      } else {
        lista.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      }
      return lista
    },
  },
  watch: {
    repositorios() {
      this.linguagem = 'todas'
    },
  },
})
</script>
