<template>
	<v-app-bar
			color="blue accent-4"
			dense
			dark
			elevation="0"
			fixed
			app
	>
		<v-toolbar-title>{{currentRoute}}</v-toolbar-title>
		
		<v-spacer></v-spacer>
	</v-app-bar>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from '@vue/composition-api';

const ToolAppBar = defineComponent({
    components: {},
    props: {},
    setup(props, context) {
        const currentRoute = computed(() => {
            return context.root.$route.name
        })
        onMounted(() => {
			console.log('0')
        })
        return {
            currentRoute
        };
    }
});
export default ToolAppBar
</script>

<style scoped>

</style>
