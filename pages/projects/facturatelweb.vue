<template>
  <v-container>
    <Description :data="state"></Description>
  </v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';
import Description from '~/components/apps/Description.vue';
import { Project } from '~/types/project';

const facturatelweb = defineComponent({
  components: {
    Description
  },
  props: {},
  setup() {
    const state: Project = {
      title: 'Sistema de Facturacion',
      business: 'Meguz Telecom',
      img: 'facturacion/app.png',
      about: 'sistema para facturar mensualidad de clientes',
      private: true,
      gallery: [
        { img: 'facturacion/dash.png' },
        { img: 'facturacion/facturar.png' },
        { img: 'facturacion/capture.png' },
        { img: 'facturacion/reporte.png' },
        { img: 'facturacion/pdf.png' },
        { img: 'facturacion/excel.png' }
      ],
      description: 'Genera Facturas 3.3 del SAT',
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
      ]


    }
    return {
      state
    };
  }
});
export default facturatelweb
</script>

<style scoped>

</style>
