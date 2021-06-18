<template>
	<v-container>
		<Description :data="state"></Description>
	</v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Description from '~/components/apps/Description.vue'
import { Project } from '~/types/project';

const kiinbeh = defineComponent({
    components: {
        Description
    },
    props: {},
    setup() {
        const state: Project = {
            title: 'Sistema de Cobranza Escolar',
            business: 'Fundacion Kiinbeh',
            img: 'kiinbeh/dashboard.png',
            about: `Se requeria un control de cobranza de mensualidades de colegiaturas de alumnos,
                    el cual contemplara todas las caracteristicas de un control escolar, becas, descuentos y recargos.
                    `,
            private: true,
            gallery: [
                {img: 'kiinbeh/login.png'},
                {img: 'kiinbeh/dashboard.png'},
                {img: 'kiinbeh/conceptos.png'},
                {img: 'kiinbeh/terminal.png'},
                {img: 'kiinbeh/roles.png'},
                {img: 'kiinbeh/reportes.png'},
                {img: 'kiinbeh/factura.png'}

            ],
            description: `La aplicacion contempla el incio de sesion seguro con JWT y una api echa en laravel 5.5`,
            features: [
                {text: 'Inicio de sesion con JWT'},
                {text: 'Paginacion de informacion'},
                {text: 'Reportes en Excel'},
                {text: 'Facturacion 3.3'},
                {text: 'Envio de correos'},
                {text: 'Business intelligence'},
                {text: 'Single Page App'},
                {text: 'Roles de usuarios'},
                {text: 'Terminal Punto de venta'},
                {text: 'Cruds [Alumnos, Usuarios, Niveles, Ciclos, Planteles, Mensualidades,]'},
            ],
            tools: [
                {text: 'Laravel'},
                {text: 'ORM Eloquent'},
                {text: 'Mysql'},
                {text: 'Vue js'},
                {text: 'Vuetify 1.5'},
                {text: 'JWT'},
            ],
            repo: {
                link: '',
                text: 'Github'
            }


        }
        return {
            state
        };
    }
});
export default kiinbeh
</script>

