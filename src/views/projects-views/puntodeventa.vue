<template>
  <v-container>
    <Description :data="state"></Description>
  </v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api';
import Description from '@/components/apps/Description.vue';
import { Project } from '@/type/project';

const puntodeventa = defineComponent({
  components: {
    Description
  },
  props: {},
  setup() {
    const state: Project = {
      title: 'Muunyal',
      business: 'Meguz Telecom',
      img: 'muunyal/muunyal.png',
      about: 'Sistema punto de venta web para facilitar el control de los productos y analisis de ingresos',
      private: true,
      gallery: [
        { img: 'muunyal/ptv.png' },
        { img: 'muunyal/dash.png' },
        { img: 'muunyal/dash2.png' },
        { img: 'muunyal/concepto.png' },
        { img: 'muunyal/reportes.png' },
        { img: 'muunyal/detalles.png' },
        { img: 'muunyal/recibo.png' },
        { img: 'muunyal/permisos.png' },
      ],
      description: 'A beautiful app built using Vue, Vuetify, Nest Js ',
      features: [
        { text: 'Built with Vuetify component framework' },
        { text: 'Integrated content management system (Cosmic JS)' },
        { text: 'Single Page App' },
      ]


    }
    return {
      state
    };
  }
});
export default puntodeventa
</script>

<style scoped>

</style>
