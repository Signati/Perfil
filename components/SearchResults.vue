<template>
  <v-list dense nav>
    <template v-for="(group, i) in groups">
      <v-divider
        v-if="i !== 0"
        :key="i"
        class="mb-2 mt-2 ml-2 mr-n2"
      />

      <v-subheader
        class="text--primary font-weight-black text-uppercase"
        v-text="group.name"
      />

      <template v-for="(child, ci) in group.items">
        <v-list-item
          v-if="child.matchLevel === 'full'"
          :key="`search-${i}-${ci}`"
          :to="child.url"
        >
          <v-list-item-content>
            <v-list-item-title>
              <div class="d-inline-block" v-html="child.value" />

              <v-list-item-subtitle class="d-inline-flex pl-1">
                &rsaquo; Home
              </v-list-item-subtitle>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <template v-else>
          <v-list-item class="mb-0">
            <v-list-item-content class="pb-1">
              <v-list-item-title
                v-html="child.name"
              />
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-for="(item,k) in child.items"
            :key="k"
            :to="item.url"
            class="pl-4 mb-0"
          >
            <v-list-item-content>
              <v-list-item-subtitle
                class="text-wrap font-weight-medium"
                v-html="item.title"
              />

              <v-list-item-subtitle
                v-if="item.content"
                class="text-caption text-wrap text--primary font-weight-regular pl-2"
                v-html="item.content"
              />
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>
    </template>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SearchResults',
  setup () {
    const groups = ref([
      {
        name: 'CFDI',
        items: [
          {
            matchLevel: 'full',
            url: '/es/v33/getting-started/installation',
            value: '<div>installation</div>',
            items: [
              {
                url: 'signati',
                content: '<div>ejemplo</div>',
                title: '&rsaquo;'
              }
            ]
          }
        ]
      },
      {
        name: 'Complementos',
        items: [
          {
            matchLevel: '',
            url: 'test',
            value: '<div>ejemplo</div>',
            items: [
              {
                url: '/es/v33/complementos/#ine',
                content: '<div>Ine</div>',
                title: 'INE'
              }
            ]
          }
        ]
      }
    ])
    return {
      groups
    }
  }
})

</script>

<style lang="sass" scoped>
.v-list-item
  min-height: 0

::v-deep mark
  background: rgb(33, 150, 243, 30%)
  color: inherit
</style>
