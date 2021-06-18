<template>
  <v-container >
    <div class="text-h4 font-weight-bold blue--text">
      Aprendizaje
    </div>

    <h2 class="">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${state.tasks.length}`">
          {{ state.tasks.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"></v-divider>

    <v-row
        class="my-1"
        align="center"
    >
      <strong class="mx-4 info--text text--darken-2">
        Remaining: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 success--text text--darken-2">
        Completed: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
          :value="progress"
          class="mr-2"
      ></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="state.tasks.length > 0">
      <v-slide-y-transition
          class="py-0"
          group
      >
        <template v-for="(task, i) in state.tasks">
          <v-divider
              v-if="i !== 0"
              :key="`${i}-divider`"
          ></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                  v-model="task.done"
                  :color="task.done && 'grey' || 'primary'"
              >
                <template v-slot:label>
                  <div
                      :class="task.done && 'grey--text' || 'primary--text'"
                      class="ml-4"
                      v-text="task.title"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon
                  v-if="state.task && state.task.done"
                  color="success"
              >
                check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>

</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';

const ToDo = defineComponent({
  components: {},
  props: {},
  setup() {
    const state = reactive({
      tasks: [
        {
          color: '#E0234E',
          src: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
          title: 'Nest Js',
          artist: 'Foster the People',
          percentage: 90,
          done: true
        },
        {
          color: '#3FBA84',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
          title: 'Vue js',
          artist: 'Ellie Goulding',
          percentage: 95,
          done: true
        },
        {
          color: '#F35045',
          src: 'https://cdn.freebiesupply.com/logos/large/2x/laravel-logo-png-transparent.png',
          title: 'Laravel',
          artist: 'Ellie Goulding',
          percentage: 90,
          done: true
        },
        {
          color: '#53C1DE',
          src: 'https://gojs.net/latest/assets/images/react-icon.svg',
          title: 'React js',
          artist: 'Ellie Goulding',
          percentage: 40,
          done: true
        },
        {
          color: '#71B9FB',
          src: 'https://pngimg.com/uploads/mysql/mysql_PNG10.png',
          title: 'Mysql',
          artist: 'Ellie Goulding',
          percentage: 80,
          done: true
        },
        {
          color: '#777BB3',
          src: 'https://www.php.net/images/logos/new-php-logo.svg',
          title: 'PHP',
          artist: 'Ellie Goulding',
          percentage: 95,
          done: true
        },
        {
          color: '#E10098',
          src: 'https://graphql.org/img/logo.svg',
          title: 'GraphQl',
          artist: 'Ellie Goulding',
          percentage: 70,
          done: true

        },
        {
          color: '#326690',
          src: 'https://www.postgresql.org/media/img/about/press/elephant.png',
          title: 'PostgreSQL',
          artist: 'Ellie Goulding',
          percentage: 30,
          done: true
        },
        {
          color: '#5998F7',
          src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/324/landscape/ioniclogo.png',
          title: 'Ionic',
          artist: 'Ellie Goulding',
          percentage: 70,
          done: true
        },
        {
          color: '#6BDEFB',
          src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png',
          title: 'Electron JS',
          artist: 'Ellie Goulding',
          percentage: 90,
          done: true
        },
        {
          color: '#6BDEFB',
          src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png',
          title: 'React Native',
          artist: '',
          percentage: 90,
          done: false
        },
        {
          color: '#6BDEFB',
          src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png',
          title: 'QT C++',
          artist: '',
          percentage: 90,
          done: false
        },
        {
          color: '#6BDEFB',
          src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png',
          title: 'Flutter',
          artist: '',
          percentage: 90,
          done: false
        },
      ],
      task: null,
    })

    const completedTasks = computed(() => {
      return state.tasks.filter(task => task.done).length
    })
    const progress = computed(() => {
      return completedTasks.value / state.tasks.length * 100
    })
    const remainingTasks = computed(() => {
      return state.tasks.length - completedTasks.value
    })
    return {
      completedTasks,
      progress,
      remainingTasks,
      state
    };
  }
});
export default ToDo
</script>

<style scoped>

</style>
