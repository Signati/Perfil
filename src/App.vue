<template>
  <v-app id="app">

    <tool-app-bar :value="menu" @open="open"/>

    <v-navigation-drawer
        v-model="menu"
        app
    >
      <v-list>

        <v-list-item href="#profile">
          <v-list-item-content>
            <v-list-item-title>Acerca de mi</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="#projects">
          <v-list-item-content>
            <v-list-item-title>Proyectos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="#skills">
          <v-list-item-content>
            <v-list-item-title>Habilidades</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="#community">
          <v-list-item-content>
            <v-list-item-title>Comunidad</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      {{menu}}
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from '@vue/composition-api';
import MenuNav from '@/components/core/MenuNav.vue'
import ToolAppBar from '@/components/core/ToolAppBar.vue'

const App = defineComponent({
  components: {
    MenuNav,
    ToolAppBar
  },
  props: {},
  setup() {
    const menu = ref(false)
    const open = (data: boolean) => {
      menu.value = data
    }
    return {
      menu,
      open
    };
  }
});
export default App
</script>
<style>
#app {
  font-family: ‘Quicksand’, sans-serif;
  color: #2c3e50;
  background-color: #F3F7F9;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50%;
  background-size: cover;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
