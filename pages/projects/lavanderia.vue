<template>
  <v-container>
    <Description :data="state"></Description>
  </v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';
import Description from '~/components/apps/Description.vue';
import { Project } from '~/types/project';

const lavanderia = defineComponent({
  components: {
    Description
  },
  props: {},
  setup() {
    const state: Project = {
      title: 'Tendero',
      business: 'Meguz Telecom',
      img: 'lavanderia/dash.png',
      about: 'Sistema punto de venta para lavanderias',
      private: true,
      gallery: [
        { img: 'lavanderia/boxclose.png' },
        { img: 'lavanderia/tpv.png' },
        { img: 'lavanderia/pedidos.png' },
        { img: 'lavanderia/productos.png' },
        { img: 'lavanderia/variantes.png' },
        { img: 'lavanderia/roles.png' },
        { img: 'lavanderia/reportes.png' }
      ],
      description: 'Lleva el contro de las ventas y el proceso en el que se encuntra su prenda mandando correo al cliente si esta finalizada su lavado',
      features: [
        { text: 'Built with Vuetify component framework' },
        { text: 'Single Page App with Vue js' },
        { text: 'Firebase' },
        { text: 'CRUD users' },
        { text: 'CRUD ventas' },
        { text: 'CRUD roles' },
        { text: 'CRUD productos' },
        { text: 'CRUD variantes de productos' },
        { text: 'CRUD categorias' },
      ]


    }
    return {
      state
    };
  }
});
export default lavanderia
</script>

<style scoped>

</style>
