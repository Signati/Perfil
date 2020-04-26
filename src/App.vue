<template>
	<v-app>
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
