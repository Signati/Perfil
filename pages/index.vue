<template>
  <div class="home">
    <section id="profile">
      <Profile></Profile>
    </section>
    <section id="projects">
      <Projects></Projects>
    </section>
    <section id="skills">
      <Skills></Skills>
    </section>
    <section id="community">
      <Ideas></Ideas>
    </section>
    <section id="future">
      <ToDo></ToDo>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from '@nuxtjs/composition-api'
import Profile from '~/components/views/Profile.vue'
import Projects from '~/components/views/Projects.vue'
import Skills from '~/components/views/Skills.vue'
import Ideas from '~/components/views/Ideas.vue'
import ToDo from '~/components/views/ToDo.vue'

export default defineComponent({
  components: {
    Profile,
    Projects,
    Skills,
    Ideas,
    ToDo
  },
  setup(_props, context) {

    return {
    }
  }
})
</script>
