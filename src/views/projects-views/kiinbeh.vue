<template>
	<v-container>
		<Description :data="state"></Description>
	</v-container>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Description from '@/components/apps/Description.vue'
import { Project } from '@/type/project';
const kiinbeh = defineComponent({
    components: {
        Description
    },
    props: {},
    setup() {
        const state: Project = {
            title: 'Sistema de Cobranza Escolar',
            business: 'kiinbeh',
            img: 'kiinbeh/login.png',
            about: '\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec maximus curs us pulvinar.\n' +
                '\t\t\t\t\tProin vehicula eros mauris, sit amet rutrum libero vestibulum ac. Morbi ullamcorper eu lacus vulputate consect.\n' +
                '\t\t\t\t\tEtur vivamus sagittis accumsan quam eu malesuada. Proin et ante vel libero ultrices cursus. Donec felis leo, cu\n' +
                '\t\t\t\t\trsus eget hendrerit at, congue nec enim.',
            private: true,
            gallery: [
                {img: 'kiinbeh/conceptos.png'},
                {img: 'kiinbeh/login.png'},
                {img: 'kiinbeh/conceptos.png'},
                {img: 'kiinbeh/conceptos.png'},
                {img: 'kiinbeh/conceptos.png'},
                {img: 'kiinbeh/conceptos.png'}
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
export default kiinbeh
</script>

