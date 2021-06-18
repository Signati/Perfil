<template>
  <v-navigation-drawer
    v-model="drawer"
    permanent
    app
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Search from "~/components/Search.vue";

export default defineComponent({
  name: 'Menu',
  components: {
    Search
  },
  setup () {
    const drawer = ref<boolean>(true)
    const items = [
      { title: 'Home', icon: 'mdi-view-dashboard' },
      { title: 'About', icon: 'mdi-forum' }
    ]
    return {
      items,
      drawer
    }
  }
})
</script>

<style scoped>

</style>
