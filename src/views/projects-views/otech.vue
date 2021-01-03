<template>
	<v-container>
		<Description :data="state"></Description>
	</v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api';
import Description from '@/components/apps/Description.vue';
import { Project } from '@/type/project';

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
            about: '\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec maximus curs us pulvinar.\n' +
                '\t\t\t\t\tProin vehicula eros mauris, sit amet rutrum libero vestibulum ac. Morbi ullamcorper eu lacus vulputate consect.\n' +
                '\t\t\t\t\tEtur vivamus sagittis accumsan quam eu malesuada. Proin et ante vel libero ultrices cursus. Donec felis leo, cu\n' +
                '\t\t\t\t\trsus eget hendrerit at, congue nec enim.',
            private: true,
            gallery: [
                {img: 'otech/dash2.png'},
                {img: 'otech/dash3.png'},
                {img: 'otech/detalle.png'},
                {img: 'otech/documentos.png'},
                {img: 'otech/estrangulador.png'},
                {img: 'otech/login.png'}
            ],
            description: 'A beautiful blog built using Vue, Vuetify, powered by the Cosmic JS Headless CMS. Read about how it\'s built.',
            features: [
                {text: 'Built with Vuetify component framework'},
                {text: 'Settings configured within Cosmic JS'},
                {text: 'Moderated commenting system (Un-moderated by default)'},
                {text: 'Social share buttons'},
                {text: 'Social profile icons'},
                {text: ' SEO Ready'},
                {text: 'Integrated content management system (Cosmic JS)'},
                {text: 'Single Page App'},
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
