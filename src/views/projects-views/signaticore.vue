<template>
	<v-container>
		<Description :data="state"></Description>
	</v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api';
import Description from '@/components/apps/Description.vue';
import { Project } from '@/type/project';

const signaticore =  defineComponent({
    components: {
        Description
    },
    props: {},
    setup() {
        const state: Project = {
            title: 'Signati/Core',
            business: 'Siganti',
            img: 'signati/core.png',
            about: '',
            private: true,
            gallery: [
                {img: 'signati/complementos.png'},
                {img: 'signati/structura.png'},
                {img: 'signati/emisor.png'},
                {img: 'signati/receptor.png'},
                {img: 'signati/relacionado.png'},
                {img: 'signati/conceptos.png'},
                {img: 'signati/impuestos.png'},
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
export default signaticore
</script>

<style scoped>

</style>
