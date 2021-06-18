import { computed, useStore } from '@nuxtjs/composition-api'
import { getTime } from '~/plugins/player'
import { Track } from '~/types/Track'

export default function useAudio () {
  const { commit, dispatch, state, getters } = useStore()

  const loadStartListener = (): void => {
    commit('audio/SET_AUDIO_LOADING', true)
  }
  const canplayListener = (): void => {
    commit('audio/SET_AUDIO_LOADING', false)
  }
  const endedListener = (): void => {
    dispatch('audio/audioEnd')
  }
  const timeupdateListener = (): void => {
    dispatch('audio/audioUpdate', getTime(event))
  }
  const errorListener = (err: any): void => {
    console.warn('Error on playing audio', err)
    dispatch('audio/audioError', err)
  }
  const TimeProgress = computed<{ TimeProgress: number; Progress: number; Time: number }>(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return getters['audio/TimeProgress']
  })

  const track = computed<Track>(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return getters['audio/Track']
  })
  const setVolume = (volumen: number): void => {
    dispatch('audio/setVolume', volumen)
  }

  const seek = (timeProgress: number): void => {
    dispatch('audio/seek', timeProgress)
  }

  const volume = computed<number>({
    get: () => {
      return getters['audio/Volume']
    },
    set: (v: number) => {}
  })

  const isMute = computed(() => {
    return volume.value <= 0
  })

  const toggleVolume = () : void => {
    dispatch('audio/toggleVolume')
  }

  return {
    loadStartListener,
    canplayListener,
    endedListener,
    timeupdateListener,
    errorListener,
    TimeProgress,
    volume,
    setVolume,
    toggleVolume,
    seek,
    track,
    isMute
  }
}
