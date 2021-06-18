<template>
  <v-app-bar
    :clipped-left="clipped"
    clipped-right
    fixed
    app
    color="white"
    outlined
    style="border-bottom-color: rgba(0,0,0,.12)!important;"
    height="57"
    elevation="0"
  >
    <!--    <v-app-bar-nav-icon v-if="hide" class="d-lg-none d-xl-flex" @click.stop="drawerTouch"/>-->
    <!--    <v-spacer/>-->
    <Search />
    <!--    <v-spacer/>-->
  </v-app-bar>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from '@nuxtjs/composition-api'
import { mdiGithub, mdiMenu, mdiLanguagePhp, mdiNodejs, mdiLanguagePython } from '@mdi/js'
import { useRoute, useRouter } from '@nuxtjs/composition-api'
import Search from '~/components/Search.vue'

interface PropsToolbar {
  value: boolean;
  hiddenMenu: boolean;
}

const Toolbar = defineComponent<PropsToolbar>({
  components: {
    Search
  },
  props: {
    value: {
      type: Boolean,
      required: false // Accepts null and undefined as well
    },
    hiddenMenu: {
      required: false,
      default: false
    }
  },
  setup (props: { value: boolean, hiddenMenu: boolean }, { emit, root }) {
    const title = 'Signati'
    const clipped = ref(false)
    const open = computed(() => {
      return props.value
    })

    const hide = computed(() => {
      return props.hiddenMenu
    })

    const drawerTouch = () => {
      console.log('value ' + props.value)
      console.log('value emit' + !props.value)
      emit('input', !open.value)
    }

    return {
      drawerTouch,
      clipped,
      mdiGithub,
      mdiMenu,
      open,
      title,
      hide
    }
  }
})
export default Toolbar
</script>
