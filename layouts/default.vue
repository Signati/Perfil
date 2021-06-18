<template>
  <v-app id="app">
    <tool-app-bar :value="menu" @open="open" />
<!--    <v-navigation-drawer-->
<!--      v-model="menu"-->
<!--      app-->
<!--    >-->
<!--      <v-list>-->
<!--        <v-list-item href="#profile">-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>Acerca de mi</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->

<!--        <v-list-item href="#projects">-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>Proyectos</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->

<!--        <v-list-item href="#skills">-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>Habilidades</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->

<!--        <v-list-item href="#community">-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>Comunidad</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->
    <v-main>
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
