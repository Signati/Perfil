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
    <section id="future">
      <ToDo></ToDo>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Profile from './Profile.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'
import ToDo from './ToDo.vue'

const Home = defineComponent({
  components: {
    Profile,
    Projects,
    Skills,
    ToDo
  },
  props: {},
  setup() {
    return {};
  }
});
export default Home
</script>

