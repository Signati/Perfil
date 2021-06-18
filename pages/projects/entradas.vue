<template>
  <v-container>
    <Description :data="state"></Description>
  </v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';
import Description from '~/components/apps/Description.vue';
import { Project } from '~/types/project';

const entradas = defineComponent({
  components: {
    Description
  },
  props: {},
  setup() {
    const state: Project = {
      title: 'Sistema de Control de Ingresos',
      business: 'kiinbeh',
      img: 'ingress/ingress.png',
      about: 'Solicitada por el Colegio Ingles, se realizo para el control de accesos a departamentos.',
      private: true,
      gallery: [
        { img: 'ingress/dash.png' },
        { img: 'ingress/users.png' },
        { img: 'ingress/dept.png' },
        { img: 'ingress/login.png' },
        { img: 'ingress/checkout.png' },
        { img: 'ingress/capture.png' },
        { img: 'ingress/firma.png' }
      ],
      description: 'Permite tener el control de accesos de personas sustituyendo una bitacora',
      features: [
        { text: 'Business intelligence' },
        { text: 'Single Page App' },
        { text: 'Reportes en Excel' },
        { text: 'Single Page App' },
        { text: 'Roles de usuarios' },
      ],
      tools: [
        { text: 'React JS' },
        { text: 'Materia Ui' },
        { text: 'Postgress' },
      ]


    }
    return {
      state
    };
  }
});
export default entradas
</script>

<style scoped>

</style>
