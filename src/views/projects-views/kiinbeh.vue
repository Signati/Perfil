<template>
	<v-container
			id="about"
			tag="section"
	>
		<span class="display-3	">About Us</span>
		<v-row dense>
			<v-col cols="8">
				<v-img aspect-ratio="1"
				       max-height="800"
				       :src="require('../../assets/kiinbeh/login.png')" height="450px"></v-img>
			</v-col>
			<v-col cols="4">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec maximus curs us pulvinar.
					Proin vehicula eros mauris, sit amet rutrum libero vestibulum ac. Morbi ullamcorper eu lacus vulputate consect.
					Etur vivamus sagittis accumsan quam eu malesuada. Proin et ante vel libero ultrices cursus. Donec felis leo, cu
					rsus eget hendrerit at, congue nec enim.
				</p>
			</v-col>
			<v-col cols="12">
				Image Gallery
			</v-col>
			<v-col cols="12">
				<v-row dense>
					<v-col cols="12" sm="4" md="4" >
						<v-img aspect-ratio="1"
						       max-width="300"
						       :src="require('../../assets/kiinbeh/conceptos.png')" height="200px"></v-img>
					</v-col>
					<v-col cols="12" sm="4" md="4" >
						<v-img aspect-ratio="1"
						       max-height="800"
						       :src="require('../../assets/kiinbeh/login.png')" height="200px"></v-img>
					</v-col>
					<v-col cols="12" sm="4" md="4" >
						<v-img aspect-ratio="1"
						       max-height="800"
						       :src="require('../../assets/kiinbeh/login.png')" height="200px"></v-img>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="12">
				Description
				<p>
					A beautiful blog built using Vue, Vuetify, powered by the Cosmic JS Headless CMS. Read about how it's built.
				</p>
				
				Features
				
				<ul>
					<li>Built with Vuetify component framework</li>
					<li>  Settings configured within Cosmic JS</li>
					<li>  Moderated commenting system (Un-moderated by default)</li>
					<li>  Social share buttons</li>
					<li>  Social profile icons</li>
					<li>  SEO Ready</li>
					<li>  Integrated content management system (Cosmic JS)</li>
					<li>  Single Page App	</li>
				</ul>
				
			</v-col>
		</v-row>
		
		
		
	</v-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api';

const kiinbeh = defineComponent({
    components: {},
    props: {},
    setup() {
        return {};
    }
});
export default kiinbeh
</script>

<style scoped>

</style>
