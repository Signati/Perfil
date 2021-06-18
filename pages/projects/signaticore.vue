<template>
  <v-container>
    <Description :data="state"></Description>
  </v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';
import Description from '~/components/apps/Description.vue';
import { Project } from '~/types/project';

const signaticore = defineComponent({
  components: {
    Description
  },
  props: {},
  setup() {
    const state: Project = {
      title: 'Signati/Core',
      business: 'Siganti',
      img: 'signati/core.png',
      about: 'Este módulo genera un CFDI a partir de clases lo que facilita la creacion de XMl y sellarlo sin nigun problema de compatibilidad de las versiones 2.0.',
      private: false,
      gallery: [
        { img: 'signati/complementos.png' },
        { img: 'signati/structura.png' },
        { img: 'signati/emisor.png' },
        { img: 'signati/receptor.png' },
        { img: 'signati/relacionado.png' },
        { img: 'signati/conceptos.png' },
        { img: 'signati/impuestos.png' },
      ],
      description: 'Liberia para facilitar la creacion de xml para el SAT Mexico',
      features: [
        { text: 'Soportar multiples complementos' },
        { text: 'Certifica el XML' },
        { text: 'Sella el XML' },
        { text: 'Soporta TypeScript' },
        { text: 'Mantenimiento constante' },
        { text: 'SEO Ready' },

      ],
      repo: {
        text: 'Signati',
        link: 'https://github.com/Signati/core'
      }


    }
    return {
      state
    };
  }
});
export default signaticore
</script>

<style scoped>

</style>
