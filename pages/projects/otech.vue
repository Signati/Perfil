<template>
	<v-container>
		<Description :data="state"></Description>
	</v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';
import Description from '~/components/apps/Description.vue';
import { Project } from '~/types/project';

const otech =  defineComponent({
    components: {
        Description
    },
    props: {},
    setup() {
        const state: Project = {
            title: 'Otech Diseño',
            business: 'Otech',
            img: 'otech/dash.png',
            about: 'diseño de maquetacion solicitado',
            private: true,
            gallery: [
                {img: 'otech/dash2.png'},
                {img: 'otech/dash3.png'},
                {img: 'otech/detalle.png'},
                {img: 'otech/documentos.png'},
                {img: 'otech/estrangulador.png'},
                {img: 'otech/login.png'}
            ],
            description: 'SPA realizado en Angular 9 ',
            features: [],
            tools:[
              {text: 'Angular 9'},
            ]

        }
        return {
            state
        };
    }
});
export default otech
</script>

<style scoped>

</style>
