<template>
	<v-app id="app">
		<tool-app-bar/>
		<v-content>
			<router-view></router-view>
		</v-content>
		<menu-nav/>
	</v-app>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api';
import MenuNav from '@/components/core/MenuNav.vue'
import ToolAppBar from '@/components/core/ToolAppBar.vue'

const App = defineComponent({
    components: {
        MenuNav,
        ToolAppBar
    },
    props: {},
    setup() {
        return {};
    }
});
export default App
</script>
<style>
	#app {
		font-family: ‘Quicksand’, sans-serif;
		color: #2c3e50;
		background-color: hsla(0, 0%, 94.1%, .8) !important;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: 50%;
		background-size: cover;
	}
	
	::-webkit-scrollbar {
		width: 5px;
	}
	
	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	
	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}
	
	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

</style>
