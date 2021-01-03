<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-h4 font-weight-bold blue--text">
          Proyectos
        </div>
      </v-col>
      <v-col v-for="(project,i) of projects" :key="i" cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card style="border-radius: 10px">
          <v-img :src="require('../assets/'+ project.picture)" height="200px"></v-img>
          <v-card-title>
            {{ project.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ project.subtitle }}
          </v-card-subtitle>

          <v-card-actions>
            <v-chip outlined
                    label
                    small
                    :color="project.private ? 'orange' : 'purple'">
              {{ project.private ? 'Private' : 'Public' }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-btn
                color="blue"
                text
                :to="project.to"
            >
              Explore
            </v-btn>
<!--            <v-btn-->
<!--                icon-->
<!--                @click="project.open = !project.open"-->
<!--            >-->
<!--              <v-icon>{{ project.open ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>-->
<!--            </v-btn>-->
          </v-card-actions>

          <v-expand-transition>
            <div v-show=" project.open">
              <v-divider></v-divider>

              <v-card-text>
                {{ project.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from '@vue/composition-api';
import { projects } from '@/utils/projects';

const Projects = defineComponent({
  components: {},
  props: {},
  setup() {
    const show = ref(false);
    return {
      show,
      projects
    };
  }
});
export default Projects
</script>

<style scoped>

</style>
