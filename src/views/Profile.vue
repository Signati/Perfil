<template>
	<v-container>
		<v-row dense>
			<v-col cols="12">
				<v-card class="mt-5" style="border-radius: 10px">
					<v-toolbar elevation="0">
						<v-avatar size="100">
							<v-img src="https://avatars3.githubusercontent.com/u/19777772?s=460&u=87fc35b3653f982164b57ec2e5aa97a58a5deef6&v=4"></v-img>
						</v-avatar>
						<v-toolbar-title class="ml-3">
							Amir Misael Marin Coh
						</v-toolbar-title>
					</v-toolbar>
					<br>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-subtitle>Lic. en Ingeniería en Tecnologías de la
							                      Información
							</v-list-item-subtitle>
							<v-list-item-subtitle>TSU en Tecnologías de la Información</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					
					
					<v-card-text>
						<v-list dense>
							<v-list-item style="height: 10px !important; max-height: 10px; min-height: 0px">
								<v-list-item-action>
									<v-btn icon color="red">
										<v-icon>mdi-gmail</v-icon>
									</v-btn>
								</v-list-item-action>
								<v-list-item-content>
									
									<v-list-item-title>amisael.amir.misael@gmail.com</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
							<v-list-item>
								<v-list-item-action>
									<v-btn icon color="green">
										<v-icon>mdi-whatsapp</v-icon>
									</v-btn>
								</v-list-item-action>
								<v-list-item-content>
									<v-list-item-title>984 120 3483</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>
						
						
						Ingeniero en tecnologías de la información y comunicaciones con 4 años de experiencia.
					</v-card-text>
					
					<v-card-actions>
						<v-spacer></v-spacer>
						
						<v-btn icon color="blue"
						       href="https://www.facebook.com/amirmisael.marincoh"
						       target="_blank"
						>
							<v-icon>mdi-facebook</v-icon>
						</v-btn>
						<v-btn icon color="blue darken-4"
						       href="https://www.linkedin.com/in/misael-marin-59551b11b/"
						       target="_blank"
						>
							<v-icon>mdi-linkedin</v-icon>
						</v-btn>
						<v-btn icon color="black"
						       href="https://github.com/MisaelMa"
						       target="_blank"
						>
							<v-icon>mdi-github</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col cols="12">
				<span class="title">Experiencia profesional</span>
				<v-sheet v-for="(cvworks,i) of curriculum.works"
				         :key="i"
				         style="border-radius: 10px"
				         class="mt-2 pa-1">
					<v-row>
						<v-col cols="12" sm="12" md="3" lg="3" xl="3" style="border-right: 1px solid gray">
							<v-icon>{{cvworks.icon}}</v-icon>
							<span class="pl-2">{{cvworks.title}}</span>
						</v-col>
						<v-col cols="12" sm="12" md="9" lg="9" xl="9">
							<span class="subtitle-1 black--text">{{cvworks.subtitle}}</span>
							<br>
							{{cvworks.description}}
						</v-col>
					</v-row>
				</v-sheet>
			</v-col>
			<v-col cols="12">
				<span class="title">Educación</span>
				<v-sheet v-for="(cv,j) of curriculum.school"
				         :key="j"
				         style="border-radius: 10px"
				         class="mt-2 pa-1">
					<v-row>
						<v-col cols="12" sm="12" md="3" lg="3" xl="3" style="border-right: 1px solid gray">
							<v-icon>{{cv.icon}}</v-icon>
							<span class="pl-2">{{cv.title}}</span>
						</v-col>
						<v-col cols="12" sm="12" md="9" lg="9" xl="9">
							<span class="subtitle-1 black--text">{{cv.subtitle}}</span>
							<br>
							{{cv.description}}
						</v-col>
					</v-row>
				</v-sheet>
			</v-col>
		</v-row>
	
	</v-container>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

const Profile = defineComponent({
    components: {},
    props: {},
    setup() {
        const curriculum = reactive({
            school: [
                {
                    icon: 'mdi-school',
                    title: 'Universidad Tecnológica de la Riviera Maya 2017 - 2019',
                    description: 'Prácticas profecionales para obtener el título de ingeniería en tecnologías de la información,realizadas en el párque ecoturistico Xcaret\'',
                    subtitle: 'Ingeniería en Tecnologías de la información',
                    subtitle2: ' cédula profesional XXXXXX '

                },
                {
                    icon: 'mdi-school',
                    title: 'Universidad Tecnológica de la Riviera Maya 2015 - 2017',
                    description: 'Prácticas profecionales para obtener el título de ingeniería en tecnologías de la información,realizadas en el párque ecoturistico Xcaret\'',
                    subtitle: 'TSU en Tecnologías de la información Títulado',
                    subtitle2: ' cédula profesional XXXXXX '
                },
                {
                    icon: 'mdi-school',
                    title: 'EMSAD X-PICHIL 2012 - 2015',
                    description: 'Escuela Media Superior a Distancia especialidad en Informatica ',
                    subtitle: 'Bachillerato',
                    subtitle2: ' cédula profesional XXXXXX '
                },

            ],
            works: [
                {
                    icon: 'mdi-briefcase-check',
                    title: 'Webtel 2018-2020',
                    description: 'Bachillerato Tecnológico en el área fisico metemático carrera, electrónica.',
                    subtitle: 'TSU en Tecnologías de la información Títulado',
                    subtitle2: ' cédula profesional XXXXXX '
                },
                {
                    icon: 'mdi-briefcase-check',
                    title: 'Enlaces Playa 2018',
                    description: 'Bachillerato Tecnológico en el área fisico metemático carrera, electrónica.',
                    subtitle: 'TSU en Tecnologías de la información Títulado',
                    subtitle2: ' cédula profesional XXXXXX '
                },
                {
                    icon: 'mdi-briefcase-check',
                    title: 'Colegio Ingles 2017-2018',
                    description: 'Bachillerato Tecnológico en el área fisico metemático carrera, electrónica.',
                    subtitle: 'TSU en Tecnologías de la información Títulado',
                    subtitle2: ' cédula profesional XXXXXX '
                },
                
                
            ]
        })
        return {
            curriculum
        };
    }
});
export default Profile
</script>

<style scoped>

</style>
