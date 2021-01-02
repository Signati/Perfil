<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <div class="text-h4 font-weight-bold blue--text">
          Habilidades
        </div>
      </v-col>
      <v-col cols="12">
        Programming Languages
      </v-col>
      <v-col
          v-for="(item, i) in state.languages"
          :key="i"
          cols="12" sm="6" md="2" xl="2" lg="2"
      >
        <v-card class="mx-auto"
                max-width="400"
                style="border-radius: 10px; text-align: center"
        >
          <v-card-text>

            <v-progress-circular
                :value="item.percentage"
                size="100"
                :color="item.color"
            >

              <v-avatar style="margin-top: -30px;">
                <v-img
                    class="elevation-0"
                    :src="item.src"
                    contain
                    aspect-ratio="1"
                >


                </v-img>
              </v-avatar>
              <div style="position: absolute" class="pt-12">
                {{ item.percentage + ' %' }}
              </div>
            </v-progress-circular>
            <p class="title font-weight-light">{{ item.title }}</p>

          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        Framework
      </v-col>
      <v-col
          v-for="item in state.skills"
          :key="item.title"
          cols="12" sm="6" md="2" xl="2" lg="2"
      >
        <v-card class="mx-auto"
                max-width="400"
                style="border-radius: 10px; text-align: center"
        >
          <v-card-text>

            <v-progress-circular
                :value="item.percentage"
                size="100"
                :color="item.color"
            >

              <v-avatar style="margin-top: -30px;">
                <v-img
                    class="elevation-0"
                    :src="item.src"
                    contain
                    aspect-ratio="1"
                >


                </v-img>
              </v-avatar>
              <div style="position: absolute" class="pt-12">
                {{ item.percentage + ' %' }}
              </div>
            </v-progress-circular>
            <p class="title font-weight-light">{{ item.title }}</p>

          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        Database
      </v-col>
      <v-col
          v-for="item in state.database"
          :key="item.title"
          cols="12" sm="6" md="2" xl="2" lg="2"
      >
        <v-card class="mx-auto"
                max-width="400"
                style="border-radius: 10px; text-align: center"
        >
          <v-card-text>

            <v-progress-circular
                :value="item.percentage"
                size="100"
                :color="item.color"
            >

              <v-avatar style="margin-top: -30px;">
                <v-img
                    class="elevation-0"
                    :src="item.src"
                    contain
                    aspect-ratio="1"
                >


                </v-img>
              </v-avatar>
              <div style="position: absolute" class="pt-12">
                {{ item.percentage + ' %' }}
              </div>
            </v-progress-circular>
            <p class="title font-weight-light">{{ item.title }}</p>

          </v-card-text>
        </v-card>
      </v-col>


    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

const Skills = defineComponent({
  components: {},
  props: {},
  setup() {
    const state = reactive({
      skills: [
        {
          color: '#3FBA84',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
          title: 'Vue Js',
          percentage: 100,
        },
        {
          color: '#53C1DE',
          src: 'https://gojs.net/latest/assets/images/react-icon.svg',
          title: 'React Js',
          percentage: 80,
        },
        {
          color: '#C3002F',
          src: 'https://angular.io/assets/images/logos/angular/angular.svg',
          title: 'Angular',
          percentage: 70,
        },
        {
          color: '#E0234E',
          src: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
          title: 'Nest Js',
          percentage: 90,
        },
        {
          color: '#F35045',
          src: 'https://cdn.freebiesupply.com/logos/large/2x/laravel-logo-png-transparent.png',
          title: 'Laravel',
          percentage: 90,
        },
        {
          color: '#E10098',
          src: 'https://graphql.org/img/logo.svg',
          title: 'GraphQl',
          percentage: 70,
        },
        {
          color: '#5998F7',
          src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/324/landscape/ioniclogo.png',
          title: 'Ionic',
          percentage: 70,
        },
        {
          color: '#6BDEFB',
          src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png',
          title: 'Electron JS',
          percentage: 90,
        },
        {
          color: '#41CD52',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1200px-Qt_logo_2016.svg.png',
          title: 'QT',
          percentage: 30,
        },
      ],
      languages: [
        {
          color: '#777BB3',
          src: 'https://www.php.net/images/logos/new-php-logo.svg',
          title: 'PHP',
          percentage: 95,
        },
        {
          color: '#F7DF1E',
          src: 'https://cdn.worldvectorlogo.com/logos/javascript.svg',
          title: 'JavaScript',
          percentage: 100,
        },
        {
          color: '#4C8E48',
          src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
          title: 'Node Js',
          percentage: 100,
        },
        {
          color: '#004482',
          src: 'https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png',
          title: 'C++',
          percentage: 30,
        },
      ],
      database: [
        {
          color: '#326690',
          src: 'https://www.postgresql.org/media/img/about/press/elephant.png',
          title: 'PostgreSQL',
          percentage: 30,
        },
        {
          color: '#71B9FB',
          src: 'https://pngimg.com/uploads/mysql/mysql_PNG10.png',
          title: 'Mysql',
          percentage: 80,
        },
      ]
    })
    return {
      state
    };
  }
});
export default Skills
</script>

<style scoped>

</style>
