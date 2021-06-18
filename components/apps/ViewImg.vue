<template>
	<v-row style="height: 400px;  overflow-y: scroll;">
		<v-col cols="12"
		       sm="4"
		       md="4"
		       v-for="(picture,i) of gallery"
		       :key="i"
		>
			<v-card style="border-radius: 10px">
				<img width="100%"
				     height="200px"
				     :src="'/'+picture.img"/>
			</v-card>
		</v-col>
	</v-row>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';
import { Gallery } from '~/types/project';

const ViewImg = defineComponent({
    components: {},
    props: {
        pictures: Array
    },
    setup({pictures}) {
        const gallery: Gallery[] = pictures as Gallery[]
        return {
            gallery
        };
    }
});
export default ViewImg
</script>

<style scoped>

</style>
