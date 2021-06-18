<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <div class="text-h4 font-weight-bold blue--text">
          Acerca de mí
        </div>
      </v-col>
      <v-col cols="12">
        <v-card class="mt-5" style="border-radius: 10px">
          <v-toolbar elevation="0">
            <v-avatar size="100">
              <v-img
                  src="https://avatars3.githubusercontent.com/u/19777772?s=460&u=87fc35b3653f982164b57ec2e5aa97a58a5deef6&v=4"></v-img>
            </v-avatar>
            <v-toolbar-title class="ml-3">
              Amir Misael Marin Coh
            </v-toolbar-title>
            <v-spacer/>
            <a class="v-btn v-btn--contained v-btn--is-elevated v-btn--has-bg theme--dark v-size--default red"
               download="CV-AMIR-MARIN.pdf"
               href="cv-amir-marin.pdf"
            >
              Descargar CV
            </a>
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


            Ingeniero en tecnologías de la información y comunicaciones con 4 años de experiencia en el
            ambiente de desarrollo de sistemas empresariales e implementaciones.
            <br>Analista de informacion y planteamiento de soluciones
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
              <v-icon>{{ cvworks.icon }}</v-icon>
              <span class="pl-2">{{ cvworks.title }}</span>
            </v-col>
            <v-col cols="12" sm="12" md="9" lg="9" xl="9">
              <span class="subtitle-1 black--text">{{ cvworks.subtitle }}</span>
              <br>
              {{ cvworks.description }}
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
              <v-icon>{{ cv.icon }}</v-icon>
              <span class="pl-2">{{ cv.title }}</span>
            </v-col>
            <v-col cols="12" sm="12" md="9" lg="9" xl="9">
              <span class="subtitle-1 black--text">{{ cv.subtitle }}</span>
              <br>
              {{ cv.description }}
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-card rounded="lg">

          <v-card-title class="text--h3">Características Personales</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <ul>
                  <li>Actitud positiva</li>
                  <li>Apasionado por mi trabajo</li>
                  <li>Capacidad de comunicación</li>
                  <li>Confianza</li>
                  <li>Capacidad de análisis y resolución de problemas</li>
                </ul>
              </v-col>
              <v-col cols="6">
                <ul>
                  <li>Liderazgo</li>
                  <li>Trabajo en equipo</li>
                  <li>Honestidad</li>
                  <li>Autodidacta</li>
                </ul>
              </v-col>

            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const Profile = defineComponent({
  components: {},
  props: {},
  setup() {
    const curriculum = reactive({
      school: [
        {
          icon: 'mdi-school',
          title: 'Universidad Tecnológica de la Riviera Maya 2017 - 2019',
          description: `Prácticas profecionales para obtener el
                                 título de Ingeniería tecnologías de la información, realizadas en Enlaces Playa`,
          subtitle: 'Ingeniería en Tecnologías de la información',
          subtitle2: ' cédula profesional XXXXXX '

        },
        {
          icon: 'mdi-school',
          title: 'Universidad Tecnológica de la Riviera Maya 2015 - 2017',
          description: `Prácticas profecionales para obtener el
                                 título de Tecnico Superior Universitario en tecnologías de la información, realizadas en el Colegio Inglés`,
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
          description:
              `Asistir técnicamente a su equipo en la ejecución de sus tareas para poder cumplir con los objetivos del proyecto.
	                     Participar en los desarrollos de  programas y actividades del Departamento.
	                     Dar seguimiento a las actovidades plateadas
	                    `,
          subtitle: 'Desarrollado SR Node',
          subtitle2: ' cédula profesional XXXXXX '
        },
        {
          icon: 'mdi-briefcase-check',
          title: 'Enlaces Playa 2018',
          description:
              'Desarrollo de sistemas esenciales para la empresa y cubrir las necesidades emergentes con innovaciones',
          subtitle: 'Desarrollador JR',
          subtitle2: ' cédula profesional XXXXXX '
        },
        {
          icon: 'mdi-briefcase-check',
          title: 'Colegio Ingles 2017-2018',
          description: `Coordinar, supervisar y monitorear el buen funcionamiento y operación normal de los sistemas.
                                  Detectar y evaluar los cambios necesarios para asegurar una operación normal de los sistemas.
                                  Participar activamente de la implantación en producción de nuevos sistemas o cambios a los existentes.
                                  Configuración de los sistemas en implantación de manera de asegurar una buena operación.
                                  Mantención y soporte de los sistemas que están en operación`,
          subtitle: 'Sistemas',
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
