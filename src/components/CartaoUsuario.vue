<template>
  <BCard class="cartao-hover d-flex flex-column flex-sm-row align-items-sm-center gap-3 p-3">
    <a class="avatar-wrap" :href="usuario.html_url" target="_blank" rel="noopener">
      <span class="avatar-brilho" aria-hidden="true"></span>
      <img
        :src="usuario.avatar_url"
        :alt="usuario.login"
        class="rounded-circle"
        width="80"
        height="80"
      />
    </a>
    <div>
      <a :href="usuario.html_url" target="_blank" rel="noopener" class="text-decoration-none">
        <h5 class="mb-0 fonte-titulo text-body">{{ usuario.name || usuario.login }}</h5>
        <p class="text-success mono mb-2">@{{ usuario.login }}</p>
      </a>
      <p v-if="usuario.bio" class="text-body-secondary small mb-2">{{ usuario.bio }}</p>

      <div class="d-flex flex-wrap gap-3 text-muted small mb-2">
        <span v-if="usuario.location"><i class="bi bi-geo-alt"></i> {{ usuario.location }}</span>
        <span v-if="usuario.company"><i class="bi bi-building"></i> {{ usuario.company }}</span>
        <a v-if="usuario.blog" :href="linkSite" target="_blank" rel="noopener" class="text-muted">
          <i class="bi bi-link-45deg"></i> {{ usuario.blog }}
        </a>
        <a
          v-if="usuario.twitter_username"
          :href="`https://twitter.com/${usuario.twitter_username}`"
          target="_blank"
          rel="noopener"
          class="text-muted"
        >
          <i class="bi bi-twitter-x"></i> @{{ usuario.twitter_username }}
        </a>
      </div>

      <div class="d-flex gap-3 text-muted small mono">
        <span>{{ usuario.public_repos }} repositórios</span>
        <span>{{ usuario.followers }} seguidores</span>
        <span>{{ usuario.following }} seguindo</span>
      </div>
    </div>
  </BCard>
</template>

<script>
import { defineComponent } from 'vue'
import { BCard } from 'bootstrap-vue-next'

export default defineComponent({
  name: 'CartaoUsuario',
  components: { BCard },
  props: {
    usuario: { type: Object, required: true },
  },
  computed: {
    linkSite() {
      const blog = this.usuario.blog
      return blog.startsWith('http') ? blog : `https://${blog}`
    },
  },
})
</script>
