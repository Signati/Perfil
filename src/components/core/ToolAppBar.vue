<template>
  <v-app-bar
      elevation="1"
      fixed
      color="white"
      app
  >
    <v-btn class="d-none d-sm-flex d-lg-none" @click="open" icon><v-icon>mdi-menu</v-icon></v-btn>
    <v-toolbar-title>AMIR MARIN</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-hover v-slot="{ hover }"
             v-for="(m,i) of menu"
             :key="i"
             class="d-md-none d-sm-none d-lg-flex"
    >
      <v-btn text :href="m.href">
        <strong>
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
  props: {
    value: {}
  },
  setup(props, context) {
    const propMenu = computed(() => {
      return props.value
    })
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
    const open = () => {
      context.emit('open', !propMenu.value)
    }
    return {
      currentRoute,
      menu,
      open
    };
  }
});
export default ToolAppBar
</script>

<style scoped>

</style>
