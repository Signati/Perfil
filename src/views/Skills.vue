<template>
	<v-container>
		<v-row dense >
			<v-col
					v-for="(item, i) in state.skills"
					:key="i"
					cols="12" sm="6" md="3" xl="3" lg="3"
			>
				<v-card class="mx-auto"
				        max-width="400"
				        style="border-radius: 10px"
				>
					<v-toolbar color="transparent" elevation="0">
						<v-avatar>
							<v-img
									class="elevation-0"
									:src="item.src"
							></v-img>
						</v-avatar>
						<span class="title font-weight-light">{{item.title}}</span>
						<v-spacer/>
						<v-btn icon color="black"
						       href="https://github.com/MisaelMa"
						       target="_blank"
						>
							<v-icon>mdi-github</v-icon>
						</v-btn>					</v-toolbar>
					
					<v-card-text class="pt-0">
						<v-list dense class="pl-0 ml-0 pt-0">
							<v-list-item style="height: 10px !important; min-height: 0px" class="pl-0 pt-0">
								<v-list-item-content class="pb-0 pt-0">Experiencia:</v-list-item-content>
								<v-list-item-content class="pb-0 pt-0 align-end">2 years</v-list-item-content>
							</v-list-item>
							<v-list-item class="pl-0 pt-0">
								<v-list-item-content class="pt-0">Projects:</v-list-item-content>
								<v-list-item-content class="pt-0 align-end">2 years</v-list-item-content>
							</v-list-item>
						</v-list>
						<v-progress-linear
								:value="item.percentage"
								reactive
								height="7"
								:color="item.color"
						>
						</v-progress-linear>
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
                    color: '#E0234E',
                    src: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
                    title: 'Nest Js',
                    artist: 'Foster the People',
                    percentage: 90,
                },
                {
                    color: '#3FBA84',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
                    title: 'Vue js',
                    artist: 'Ellie Goulding',
                    percentage: 95,
                },
                {
                    color: '#F35045',
                    src: 'https://cdn.freebiesupply.com/logos/large/2x/laravel-logo-png-transparent.png',
	                title: 'Laravel',
                    artist: 'Ellie Goulding',
                    percentage: 90,
                },
                {
                    color: '#53C1DE',
                    src: 'https://gojs.net/latest/assets/images/react-icon.svg',
                    title: 'React js',
                    artist: 'Ellie Goulding',
                    percentage: 40,
                },
                {
                    color: '#71B9FB',
                    src: 'https://pngimg.com/uploads/mysql/mysql_PNG10.png',
                    title: 'Mysql',
                    artist: 'Ellie Goulding',
                    percentage: 80,
                },
                {
                    color: '#777BB3',
                    src: 'https://www.php.net/images/logos/new-php-logo.svg',
                    title: 'PHP',
                    artist: 'Ellie Goulding',
                    percentage: 95,
                },
                {
                    color: '#E10098',
                    src: 'https://graphql.org/img/logo.svg',
                    title: 'GraphQl',
                    artist: 'Ellie Goulding',
                    percentage: 70,
                },
                {
                    color: '#326690',
                    src: 'https://www.postgresql.org/media/img/about/press/elephant.png',
                    title: 'PostgreSQL',
                    artist: 'Ellie Goulding',
                    percentage: 30,
                },
                {
                    color: '#5998F7',
                    src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/324/landscape/ioniclogo.png',
                    title: 'Ionic',
                    artist: 'Ellie Goulding',
                    percentage: 70,
                },
                {
                    color: '#6BDEFB',
                    src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png',
                    title: 'Electron JS',
                    artist: 'Ellie Goulding',
                    percentage: 90,
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
