<template>
	<v-bottom-navigation
			v-model="state.bottomNav"
			app
			fixed
			color="primary"
			grow
			shift
	>
		<v-btn v-for="(route,i) of routes"
		       style="height: 60px;"
		       :key="i"
		       :to="route.path"
		       :value="route.name">
			<span>{{route.name}}</span>
			<v-icon>{{route.icon}}</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

interface Paths {
    name: string;
    path: string;
    icon: string;
}

const MenuNav = defineComponent({
    components: {},
    props: {},
    setup() {
        const state = reactive({
            bottomNav: 1
        })
        const routes: Paths[] = [
            {
                name: 'Profile',
                path: '/', // '/profile'
                icon: 'mdi-face-profile'
            },
            {
                name: 'Projects',
                path: '/projects',
                icon: 'mdi-newspaper-variant-outline'
            },
            {
                name: 'Skills',
                path: '/skills',
                icon: 'mdi-code-json'
            },
            {
                name: 'Post',
                path: '/ideas',
                icon: 'mdi-post-outline'
            },
            {
                name: 'To Do',
                path: '/todo',
                icon: 'mdi-format-list-checks'
            },
            
        ]
        return {
            routes,
            state
        };
    }
});
export default MenuNav
</script>

<style scoped>

</style>
