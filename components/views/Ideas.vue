<template>
  <v-container>
    <div class="text-h4 font-weight-bold blue--text">
      Comunidad
    </div>
    <v-card rounded="lg">
      <div class="text-h2 pa-5">Signati</div>
      <v-card-text>

        <p align="center">
          <a target="blank" rel="nofollow"><img
              src="https://avatars1.githubusercontent.com/u/52678977?s=400&amp;u=040aa07fa564985892d0fd115a2764579845502d&amp;v=4"
              width="320" alt="Nest Logo"></a>
        </p>
        <div class="mx-auto"
             style="text-align: center;max-width: 500px">
          <code>

            Este módulo genera un CFDI a partir de clases lo que facilita la creacion de XMl y sellarlo sin nigun
            problema
            de
            compatibilidad de las versiones 2.0 del xml de complementos.
          </code>
        </div>
        <v-btn text color="red" link href="https://signati.github.io/core" rel="nofollow">Documentacion</v-btn>
        <br>
        <v-btn text color="blue" link href="https://github.com/Signati">
          Github
        </v-btn>
        <br>
        <v-btn text color="red" link href="https://www.npmjs.com/package/@signati/core">
          NPM
        </v-btn>
        <br>
        <v-btn text color="#F28D1A" link href="https://packagist.org/packages/signati/core">
          COMPOSER
        </v-btn>
      </v-card-text>
    </v-card>

    <br>
    <v-card
        color="red"
        dark
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
              class="headline"
          >Signati dev
          </v-card-title>

          <v-card-subtitle>Canal de youtube</v-card-subtitle>

          <v-card-actions>
            <v-btn
                class="ml-2 mt-5"
                outlined
                small
                href="https://www.youtube.com/channel/UCMogtMwXDEmYXu2bYdJWI5g"
                target="_blank"

            >
              IR AL CANAL
            </v-btn>
          </v-card-actions>
        </div>

        <v-avatar
            class="ma-3"
            size="125"
        >
          <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png"></v-img>
        </v-avatar>
      </div>
    </v-card>
    <br>

    <v-card
        color="red"
        dark
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
              class="headline"
          >Amir Misael Marin Coh
          </v-card-title>

          <v-card-subtitle>Canal de youtube</v-card-subtitle>

          <v-card-actions>
            <v-btn
                class="ml-2 mt-5"
                outlined
                small
                href="https://www.youtube.com/channel/UCvGIXFtaVmQyeoE2hfOvdug"
                target="_blank"
            >
              IR AL CANAL
            </v-btn>
          </v-card-actions>
        </div>

        <v-avatar
            class="ma-3"
            size="125"
        >
          <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png"></v-img>
        </v-avatar>
      </div>
    </v-card>

  </v-container>

</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';

const Ideas = defineComponent({
  components: {},
  props: {},
  setup() {
    return {};
  }
});
export default Ideas
</script>

<style scoped>

</style>
