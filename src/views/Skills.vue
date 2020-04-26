<template>
	<v-container>
		<v-row dense>
			<v-col
					v-for="(item, i) in state.skills"
					:key="i"
					cols="12" sm="6" md="6" xl="6" lg="6"
			>
				<v-card class="mx-auto"
				        max-width="400"
				>
					<v-toolbar color="transparent" elevation="0">
						<v-list-item-avatar
								style="left: -20px">
							<v-img
									class="elevation-0"
									:src="item.src"
							></v-img>
						</v-list-item-avatar>
						<span class="title font-weight-light">{{item.title}}</span>
					</v-toolbar>
					
					<v-card-text class=" font-weight-bold">
						<v-progress-linear
								value="33"
								reactive
								height="7"
								color="pink"
						>
						</v-progress-linear>
						"Turns out semicolon-less style is
					</v-card-text>
					
					<v-card-actions>
						<v-list-item class="grow">
							
							
							<v-list-item-content>
								<v-list-item-title>Evan You</v-list-item-title>
							</v-list-item-content>
							
							<v-row
									align="center"
									justify="end"
							>
								<v-icon class="mr-1">mdi-heart</v-icon>
								<span class="subheading mr-2">256</span>
								<span class="mr-1">·</span>
								<v-icon class="mr-1">mdi-share-variant</v-icon>
								<span class="subheading">45</span>
							</v-row>
						</v-list-item>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api';

const Skills = defineComponent({
    components: {},
    props: {},
    setup() {
        const state = reactive({
            skills: [
                {
                    color: '#1F7087',
                    src: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
                    title: 'Nest Js',
                    artist: 'Foster the People',
                },
                {
                    color: '#952175',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
                    title: 'Vue js',
                    artist: 'Ellie Goulding',
                },
                {
                    color: '#952175',
                    src: 'https://cdn.freebiesupply.com/logos/large/2x/laravel-logo-png-transparent.png',
	                title: 'Laravel',
                    artist: 'Ellie Goulding',
                },
                {
                    color: '#952175',
                    src: 'https://gojs.net/latest/assets/images/react-icon.svg',
                    title: 'React js',
                    artist: 'Ellie Goulding',
                },
                {
                    color: '#952175',
                    src: 'https://pngimg.com/uploads/mysql/mysql_PNG10.png',
                    title: 'Mysql',
                    artist: 'Ellie Goulding',
                },
                {
                    color: '#952175',
                    src: 'https://www.php.net/images/logos/new-php-logo.svg',
                    title: 'PHP',
                    artist: 'Ellie Goulding',
                },
                {
                    color: '#952175',
                    src: 'https://graphql.org/img/logo.svg',
                    title: 'GraphQl',
                    artist: 'Ellie Goulding',
                },
                {
                    color: '#952175',
                    src: 'https://www.postgresql.org/media/img/about/press/elephant.png',
                    title: 'PostgreSQL',
                    artist: 'Ellie Goulding',
                },
                {
                    color: '#952175',
                    src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/324/landscape/ioniclogo.png',
                    title: 'Ionic',
                    artist: 'Ellie Goulding',
                },
                {
                    color: '#952175',
                    src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/123/landscape/electronlogo.png',
                    title: 'Electron JS',
                    artist: 'Ellie Goulding',
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
