<template>
	<v-container fluid>
		<v-row >
			<v-col v-for="(project,i) of projects"  :key="i" cols="12"  sm="6" md="4" lg="3" xl="2">
				<v-card style="border-radius: 10px">
					<v-img   :src="require('../assets/'+ project.picture)" height="200px"></v-img>
					<v-card-title>
						{{project.title}}
					</v-card-title>
					
					<v-card-subtitle>
						{{project.subtitle}}
					</v-card-subtitle>
					
					<v-card-actions>
						<v-chip outlined label small color="orange">Private</v-chip>
						
						<v-btn
								color="purple"
								text
								:to="project.to"
						>
							Explore
						</v-btn>
						
						<v-spacer></v-spacer>
						
						<v-btn
								icon
								@click="project.open = !project.open"
						>
							<v-icon>{{ project.open  ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
						</v-btn>
					</v-card-actions>
					
					<v-expand-transition>
						<div v-show=" project.open">
							<v-divider></v-divider>
							
							<v-card-text>
								I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
							</v-card-text>
						</div>
					</v-expand-transition>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from '@vue/composition-api';
import { projects } from '@/utils/projects';

const Projects = defineComponent({
    components: {},
    props: {},
    setup() {
        const show = ref(false);
        return {
            show,
            projects
        };
    }
});
export default Projects
</script>

<style scoped>

</style>
