<template>
  <v-container>
    <Description :data="state"></Description>
  </v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';
import { Project } from '~/types/project';
import Description from '~/components/apps/Description.vue';

const ondinas = defineComponent({
  components: {
    Description
  },
  props: {},
  setup() {
    const state: Project = {
      title: 'Delivery App Ondinas',
      business: 'Meguz Telecom',
      img: 'ondinas/dash.png',
      about: 'App creada para la gestion de ventas y entrega a clientes generando la mejor ruta con google maps',
      private: true,
      gallery: [
        { img: 'ondinas/dash2.png' },
        { img: 'ondinas/clientes.png' },
        { img: 'ondinas/mapa.png' },
        { img: 'ondinas/tablas.png' },
        { img: 'ondinas/reporte.png' },
        { img: 'ondinas/reporte2.png' }
      ],
      description: 'Aplicacion',
      features: [
        { text: 'Business intelligence' },
        { text: 'Single Page App' },
        { text: 'Reportes en Excel' },
        { text: 'Facturacion 3.3' },
        { text: 'Envio de correos' },
        { text: 'Business intelligence' },
        { text: 'Single Page App' },
        { text: 'Roles de usuarios' },
        { text: 'Terminal Punto de venta' },
      ],
      tools: [
        { text: 'React JS' },
        { text: 'Materia Ui' },
        { text: 'Postgress' },
        { text: 'Postgress' },
      ]


    }
    return {
      state
    };
  }
});
export default ondinas
</script>

<style scoped>

</style>
