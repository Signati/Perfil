<template>
  <!-- eslint-disable vue/attribute-hyphenation  -->
  <v-menu
    v-model="menuModel"
    max-height="75vh"
    offset-y
    readonly
    @input="resetSearch"
  >
    <template #activator="{ attrs }">
      <v-text-field
        ref="searchInput"
        v-model="searchString"
        v-bind="attrs"
        :background-color="(!isDark && !isFocused) ? 'grey lighten-3' : undefined"
        :class="[isSearching ? 'rounded-b-0' : ' rounded-lg','d-sm-none d-md-flex']"
        :flat="!isFocused && !isSearching"
        :placeholder="placeholder"
        autocomplete="off"
        dense
        hide-details
        solo
        @focus="onFocus"
        @click="menuModel=true"
        @focusout="onFocus"
      >
        <template #prepend-inner>
          <v-icon
            :color="!isFocused ? 'grey' : undefined"
            class="ml-1 mr-2"
          >
            mdi-magnify
          </v-icon>
        </template>
      </v-text-field>
    </template>

    <v-card>
      <SearchResults />
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SearchResults from '~/components/SearchResults.vue'
// This behavior should be easier to do with solo fields
// TODO: Review this for v3
export default defineComponent({
  name: 'Search',
  components: {
    SearchResults
  },
  setup () {
    const isFocused = ref<boolean>(false)
    const menuModel = ref<boolean>(false)
    const isSearching = ref<boolean>(false)
    const searchString = ''
    const placeholder = 'buscar'
    const isDark = ref<boolean>(false)
    const resetSearch = () => {
      // menuModel.value = true
    }
    const onFocus = () => {
      console.log('focus')
      // menuModel.value = true
      isFocused.value = !isFocused.value
    }
    return {
      resetSearch,
      isDark,
      isFocused,
      menuModel,
      searchString,
      placeholder,
      isSearching,
      onFocus
    }
  }
})
</script>

<style lang="sass" scoped>
.v-menu__content
  width: 0

  &, & > *
    display: flex
    flex-direction: column
    overflow: hidden

.ais-InstantSearch
  flex: 1
  min-height: 0
  overflow-y: auto

.ais-PoweredBy
  display: flex
  justify-content: flex-end
  padding: 8px 8px 0
</style>
