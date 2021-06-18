<template>
  <v-bottom-sheet
      v-model="playig"
      hide-overlay
      readonly
      persistent
      no-click-animation
  >
    <v-card tile>
      <v-row dense no-gutters>
        <v-col cols="3">
          <v-list>
            <v-list-item class="pt-0 pb-0">
              <v-list-item-avatar rounded="lg">
                <v-img
                    src="https://images-na.ssl-images-amazon.com/images/I/413zgTzMTLL.jpg"
                    height="125px"
                    contain
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ track.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ track.title }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="6">
          <v-row no-gutters align="center" justify="center" dense>
            <v-col cols="12" lg="12" md="12" class="d-flex flex-column justify-center align-center">
              <v-sheet flat tile class="mt-2">
                <v-btn icon>
                  <v-icon>{{ mdiRewind }}</v-icon>
                </v-btn>
                <v-btn outlined icon @click="play()">
                  <v-icon>{{ isPLaying ? mdiPause : mdiPlay }}</v-icon>
                </v-btn>
                <v-btn icon @click="seek()">
                  <v-icon>{{ mdiFastForward }}</v-icon>
                </v-btn>
              </v-sheet>
            </v-col>
            <v-col cols="12">
              <div style="display: flex">
                {{ TimeProgress.TimeProgress }}
                <v-progress-linear
                    :value="TimeProgress.Progress"
                    :buffer-value="hoverProgress"
                    style="margin-top:8px; background-color: #333;"
                    height="5"
                    class="mt-2 ml-1 mr-1"
                    @mousemove="onProgressMousemove"
                    @mouseleave="onProgressMouseLeave"
                    @click="setSeek"
                />
                {{ TimeProgress.Time }}
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">

          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-menu
                    top
                    offset-y
                    open-on-hover
                    :nudge-left="57"
                    origin="top center"
                    content-class="remove-overflow"
                    rounded="lg"
                    :min-width="150"
                    max-height="34"
                    :offset-overflow="false"
                >
                  <template #activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        icon
                        v-bind="attrs"
                        v-on="on"
                        @click="toggleVolume"
                    >
                      <v-icon>
                        {{ isMute ? mdiVolumeMute : mdiVolumeHigh }}
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>
              <v-card rounded="lg" height="28">
                <v-slider
                    v-model="volume"
                    @input="changeVolume"
                    style="max-height: 20px; height:10px; z-index: 10"
                />
              </v-card>
              <div class="data-popper-arrow"></div>
            </span>

                </v-menu>
              </v-list-item-icon>
            </v-list-item>
          </v-list>


        </v-col>
      </v-row>
    </v-card>
  </v-bottom-sheet>
</template>

<script lang="ts">
import {computed, defineComponent, ref, useStore} from '@nuxtjs/composition-api'
import {mdiFastForward, mdiPause, mdiPlay, mdiRewind, mdiVolumeHigh, mdiVolumeMute} from '@mdi/js'
import * as player from '~/plugins/player'
import useAudio from '~/common/composition/audio.composition'

export default defineComponent({
  name: 'PlayMusicBottom',
  setup() {
    const playig = ref<boolean>(true)
    const dvolume = ref<boolean>(false)
    const hoverProgress = ref<number>(0)
    const hoverVolume = ref<number>(0)
    const media = ref<number>(0)
    const {
      loadStartListener,
      canplayListener,
      endedListener,
      timeupdateListener,
      errorListener,
      toggleVolume,
      TimeProgress,
      volume,
      setVolume,
      seek,
      isMute,
      track
    } = useAudio()
    const store = useStore()
    const onProgressMousemove = (event: MouseEvent): void => {
      const {currentTarget, pageX} = event
      const target = currentTarget as HTMLElement
      const progress = (pageX - target.getBoundingClientRect().left) / target.offsetWidth
      hoverProgress.value = Math.round(progress * 100)
    }

    const onVolumeMousemove = (event: MouseEvent): void => {
      const {currentTarget, pageX} = event
      const target = currentTarget as HTMLElement
      const progress = (pageX - target.getBoundingClientRect().left) / target.offsetWidth
      hoverVolume.value = Math.round(progress * 100)
    }

    const onProgressMouseLeave = (): void => {
      hoverProgress.value = 0
    }

    const onVolumeMouseLeave = (): void => {
      hoverVolume.value = 0
    }

    const setSeek = (): void => {
      seek(hoverProgress.value)
    }

    const changeVolume = (e: number): void => {
      console.log(e)
      setVolume(e / 100)
    }
    const isPLaying = computed<boolean>(() => {
      return store.getters['audio/isPLaying']
    })
    const pause = (): void => {
      store.commit('audio/PAUSE')
    }
    const playStart = (): void => {
      store.commit('audio/PLAY', {
        track: {
          id: 1,
          preview: 'http://localhost:3000/panda.mp3',
          title: 'Los Malaventurados no lloran'
        },
        event: {
          loadStartListener,
          canplayListener,
          endedListener,
          timeupdateListener,
          errorListener
        }
      })
    }
    const play = (): void => {
      isPLaying.value ? pause() : playStart()
    }

    const playPrevious = (): void => {
      store.dispatch('playPrev')
    }

    const playNext = (): void => {
      store.dispatch('playNext')
    }

    const toggleRepeatMode = (): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store.dispatch('toggleRepeatMode', !store.state.repeatMode)
    }

    const toggleShuffleMode = (): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store.dispatch('toggleShuffleMode', !store.state.shuffleMode)
    }
    return {
      playig,
      media,
      hoverVolume,
      hoverProgress,
      toggleShuffleMode,
      toggleRepeatMode,
      toggleVolume,
      playNext,
      playPrevious,
      isMute,
      play,
      setVolume,
      setSeek,
      onVolumeMouseLeave,
      onProgressMouseLeave,
      onVolumeMousemove,
      onProgressMousemove,
      changeVolume,
      volume,
      mdiPause,
      mdiFastForward,
      mdiRewind,
      mdiPlay,
      mdiVolumeHigh,
      mdiVolumeMute,
      isPLaying,
      track,
      TimeProgress,
      dvolume
    }
  }
})
</script>

<style scoped>
.remove-overflow {
  overflow-y: unset !important;
  overflow-x: unset !important;
  contain: none !important;
  box-shadow: none;
  background-color: var(--background-secondary);
}

.remove-overflow::-webkit-scrollbar {
  display: none !important;
}

.data-popper-arrow {
  top: -1px;
  left: 44%;
  position: relative;
  width: 0px;
  height: 0px;
  content: "";
  margin-left: -0.5em;
  bottom: -2em;
  box-sizing: border-box;
  border: 10px solid;
  border-color: transparent transparent #FFFFFF #FFFFFF;
  transform-origin: 0 0;
  transform: rotate(-45deg);
  box-shadow: -1px 1px 1px 0 rgba(0, 0, 0, 0.4);
}

::v-deep .v-slider__thumb:before {
  content: "";
  color: inherit;
  width: 0px;
  height: 0px;
  background: currentColor;
  opacity: .3;
  left: -12px;
  top: -12px;
  transform: scale(.1);
  pointer-events: none;
}
</style>
