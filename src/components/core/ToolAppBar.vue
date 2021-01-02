<template>
  <v-app-bar
      elevation="1"
      fixed
      color="white"
      app
  >
    <v-toolbar-title>{{ currentRoute }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-hover v-slot="{ hover }"
             v-for="(m,i) of menu"
             :key="i"
    >
      <v-btn text :href="m.href">
        <strong :class="{'purple--text': hover}">
          {{ m.text }}
        </strong>
      </v-btn>
    </v-hover>
  </v-app-bar>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from '@vue/composition-api';

const ToolAppBar = defineComponent({
  components: {},
  props: {},
  setup(props, context) {
    const currentRoute = computed(() => {
      return context.root.$route.name
    })

    const menu = [
      {
        text: 'Acerca de mí',
        href: '#profile',
      },
      {
        text: 'Proyectos',
        href: '#projects'
      },
      {
        text: 'Habilidades',
        href: '#skills'
      },
      {
        text: 'Comunidad',
        href: '#community'
      }
    ]
    onMounted(() => {
      console.log('0')
    })
    return {
      currentRoute,
      menu,
    };
  }
});
export default ToolAppBar
</script>

<style scoped>

</style>
