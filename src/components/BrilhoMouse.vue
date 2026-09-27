<template>
  <div ref="brilho" class="brilho-mouse" aria-hidden="true"></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrilhoMouse',
  data() {
    return {
      frame: null,
      x: 0,
      y: 0,
    }
  },
  mounted() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    window.addEventListener('pointermove', this.mover, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('pointermove', this.mover)
    if (this.frame !== null) cancelAnimationFrame(this.frame)
  },
  methods: {
    mover(evento) {
      this.x = evento.clientX
      this.y = evento.clientY
      if (this.frame !== null) return

      this.frame = requestAnimationFrame(() => {
        this.frame = null
        const el = this.$refs.brilho
        if (!el) return
        el.style.opacity = '1'
        el.style.transform = `translate(${this.x}px, ${this.y}px)`
      })
    },
  },
})
</script>
