<template>
  <div class="w-100">
    <BPlaceholderCard no-img no-button animation="wave" class="mb-4" />
    <BRow class="g-3">
      <BCol v-for="n in 4" :key="n" cols="12" sm="6">
        <BPlaceholderCard no-img no-button animation="wave" />
      </BCol>
    </BRow>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { BPlaceholderCard, BRow, BCol } from 'bootstrap-vue-next'

export default defineComponent({
  name: 'EsqueletoCarregamento',
  components: { BPlaceholderCard, BRow, BCol },
})
</script>
