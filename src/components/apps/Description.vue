<template>
	<div>
		<span class="display-1">{{state.title}}</span>
		<v-row dense>
			<v-col cols="8">
				<v-img aspect-ratio="1"
				       max-height="800"
				       :src="require('../../assets/'+state.img)" height="450px"></v-img>
			</v-col>
			<v-col cols="4">
				<span class="title">{{state.business}}</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec maximus curs us pulvinar.
					Proin vehicula eros mauris, sit amet rutrum libero vestibulum ac. Morbi ullamcorper eu lacus vulputate consect.
					Etur vivamus sagittis accumsan quam eu malesuada. Proin et ante vel libero ultrices cursus. Donec felis leo, cu
					rsus eget hendrerit at, congue nec enim.
				</p>
			</v-col>
			<v-col cols="12">
				Gallery
			</v-col>
			<v-col cols="12">
				<ViewImg :pictures="state.gallery"></ViewImg>
			</v-col>
			<v-col cols="12">
				Description
				<p>
					{{state.description}}
				</p>
				
				Features
				
				<ul>
					<li v-for="(feature,i) of state.features" v-bind:key="i">
						{{feature.text}}
					</li>
				</ul>
			
			</v-col>
		</v-row>
	</div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Project } from '@/type/project';
import ViewImg from '@/components/apps/ViewImg.vue'

const Description = defineComponent({
    components: {
        ViewImg
    },
    props: {
        data: Object,
    },
    setup({data}) {
        const state: Project = data as Project
	    return {
            state
        };
    }
});
export default Description
</script>

<style scoped>

</style>
