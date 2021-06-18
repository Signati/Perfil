<template>
  <div>
    <span class="display-1">{{ state.title }}</span>
    <v-row dense>
      <v-col cols="8">
        <img width="100%" :src="'/'+state.img" height="100%">
      </v-col>
      <v-col cols="4">
        <span class="title">{{ state.business }}</span>
        <p>
          {{ state.about }}
        </p>
      </v-col>
      <v-col cols="12">
        Gallery
      </v-col>
      <v-col cols="12">
        <ViewImg :pictures="state.gallery"></ViewImg>
      </v-col>
      <v-col cols="12">
        Description
        <p>
          {{ state.description }}
        </p>

        Caracteristicas

        <ul>
          <li v-for="(feature,i) of state.features" v-bind:key="i">
            {{ feature.text }}
          </li>
        </ul>

      </v-col>

      <v-col cols="12">
        Tools
        <ul>
          <li v-for="(tool,i) of state.tools" v-bind:key="i">
            {{ tool.text }}
          </li>
        </ul>
      </v-col>
      <v-col cols="12">
        Repository
        <br>
        <v-chip v-if="state.private" outlined label color="orange">Private</v-chip>
        <v-btn v-else color="primary" :href="state.repo.link">
          <v-icon class="mr-2">mdi-github</v-icon>
          {{ state.repo.text }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import {Project} from '~/types/project';
import ViewImg from '~/components/apps/ViewImg.vue'

const Description = defineComponent({
  components: {
    ViewImg
  },
  props: {
    data: {
      required: false
    },
  },
  setup({data}) {
    const state: Project = data as Project
    return {
      state
    };
  }
});
export default Description
</script>

<style scoped>

</style>
