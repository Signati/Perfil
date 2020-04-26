<template>
	<v-container>
		<v-row dense>
			<v-col cols="12">
				<v-card class="mt-5">
					<v-toolbar elevation="0">
						<v-avatar size="100">
							<v-img src="https://avatars3.githubusercontent.com/u/19777772?s=460&u=87fc35b3653f982164b57ec2e5aa97a58a5deef6&v=4"></v-img>
						</v-avatar>
						<v-toolbar-title class="ml-3">
							Amir Misael Marin Coh
						</v-toolbar-title>
					</v-toolbar>
					<v-list>
						<v-list-item>
							<v-list-item-content>
								<v-list-item-subtitle>Lic. en Ingeniería en Tecnologías de la
								                      Información
								</v-list-item-subtitle>
								<v-list-item-subtitle>TSU en Tecnologías de la Información</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-list>
					
					
					<v-card-text>
						Visit ten places on our planet that are undergoing the biggest changes today.
					</v-card-text>
					
					<v-card-actions>
						<v-btn
								text
								color="deep-purple accent-4"
						>
							Read
						</v-btn>
						<v-spacer></v-spacer>
						
						
						<v-btn icon color="red">
							<v-icon>mdi-gmail</v-icon>
						</v-btn>
						<v-btn icon color="green">
							<v-icon>mdi-whatsapp</v-icon>
						</v-btn>
						<v-btn icon color="blue">
							<v-icon>mdi-facebook</v-icon>
						</v-btn>
						<v-btn icon color="blue darken-4">
							<v-icon>mdi-linkedin</v-icon>
						</v-btn>
						<v-btn icon color="black">
							<v-icon>mdi-github</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

const Profile = defineComponent({
    components: {},
    props: {},
    setup() {
        return {};
    }
});
export default Profile
</script>

<style scoped>

</style>
