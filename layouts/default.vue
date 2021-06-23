<template>
  <v-app id="app">
    <tool-app-bar :value="menu" @open="open" />
      <v-main style="background-color: #F2F5F8;">
        <nuxt />
      </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import MenuNav from '../components/core/MenuNav.vue'
import ToolAppBar from '~/components/core/ToolAppBar.vue'

export default defineComponent({
  components: {
    MenuNav,
    ToolAppBar
  },
  setup () {
    const menu = ref(false)
    const open = (data: boolean) => {
      menu.value = data
    }
    return {
      menu,
      open
    }
  }
})
</script>
