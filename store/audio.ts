import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { Context } from '@nuxt/types'
import * as player from '~/plugins/player'
import { MutationType } from '~/store/index'
import { Track, EventListener } from '~/types/Track'

export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const START_PLAY = 'START_PLAY'
export const AUDIO_STOP = 'AUDIO_STOP'
export const UPDATE = 'UPDATE'
export const SET_VOLUME = 'SET_VOLUME'
export const TOGGLE_VOLUME = 'TOGGLE_VOLUME'
export const SET_ACTIVE_TRACK = 'SET_ACTIVE_TRACK'
export const SET_PROCESSING = 'SET_PROCESSING'
export const TOGGLE_REPEAT_MODE = 'TOGGLE_REPEAT_MODE'
export const TOGGLE_SHUFFLE_MODE = 'TOGGLE_SHUFFLE_MODE'
export const SET_AUDIO_LOADING = 'SET_AUDIO_LOADING'
export const EXTEND_ACTIVE_TRACK_DATA = 'EXTEND_ACTIVE_TRACK_DATA'
export const SET_PLAYER_TYPE = 'SET_PLAYER_TYPE'
export const SET_AUDIO_READY_STATE = 'SET_AUDIO_READY_STATE'
const playService = player

export interface RootState {
    activeTrack: Track,
    currentTrackList: any[],
    isPlaying: boolean;
    isLoading: boolean;
    currentTime: number;
    duration: number;
    progress: number;
    volume: number;
    oldVolume: number;
    repeatMode: boolean;
    shuffleMode: boolean;
    isReady: boolean;
    playerType: string;
    isAudioReady: any;
}

export const state = (): RootState => ({
  activeTrack: {
    id: 0,
    link: '',
    preview: '',
    rank: '',
    readable: '',
    title: ''
  },
  currentTrackList: [],
  isPlaying: false,
  isLoading: false,
  currentTime: 0,
  duration: 0,
  progress: 0,
  volume: 0.7,
  oldVolume: 0.7,
  repeatMode: false,
  shuffleMode: false,
  isReady: false,
  playerType: 'native', // native or deeze,
  isAudioReady: {}
})

export const getters: GetterTree<RootState, RootState> = {
  TimeProgress: (state: RootState): { TimeProgress: number; Progress: number; Time: number } => {
    return {
      TimeProgress: state.currentTime,
      Time: state.duration,
      Progress: state.progress
    }
  },
  Track: state => state.activeTrack,
  isPLaying: (state: RootState) => state.isPlaying,
  Volume: (state: RootState) => Math.round(state.volume * 100)
}

export const mutations: MutationTree<RootState> = {
  PLAY: (state, payload: { track: Track, event: EventListener }) => {
    playService.play(payload.track, payload.event)
    state.activeTrack = payload.track
    state.isPlaying = true
  },
  PAUSE: (state) => {
    playService.pause()
    state.isPlaying = false
  },
  START_PLAY: (state) => {
    state.progress = 0
    state.currentTime = 0
  },
  SET_ACTIVE_TRACK: (state, payload: any) => {
    state.activeTrack = payload
  },
  AUDIO_STOP: (state) => {
    state.isPlaying = false
    state.progress = 0
    state.currentTime = 0
  },
  SET_VOLUME: (state, payload: any) => {
    state.volume = payload
  },
  UPDATE: (state, payload: any) => {
    const { currentTime, duration, progress } = payload
    state.currentTime = currentTime
    state.duration = duration
    state.progress = progress
  },
  TOGGLE_VOLUME: (state) => {
    state.oldVolume = state.volume
  },
  TOGGLE_REPEAT_MODE: (state, payload: any) => {
    state.repeatMode = payload
  },
  TOGGLE_SHUFFLE_MODE: (state, payload: any) => {
    state.shuffleMode = payload
  },
  RESET_TRACKS_STATE: (state) => {
    state.activeTrack = {
      id: 0,
      link: '',
      preview: '',
      rank: '',
      readable: '',
      title: ''
    }

    state.currentTrackList = []
  },
  SET_AUDIO_LOADING: (state, payload: any) => {
    state.isLoading = payload
  },
  EXTEND_ACTIVE_TRACK_DATA: (state, payload: any) => {
    state.activeTrack = { ...state.activeTrack, ...payload }
  },
  SET_PLAYER_TYPE: (state, payload: any) => {
    state.playerType = payload
  },
  SET_AUDIO_READY_state: (state, payload: any) => {
    state.isAudioReady = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit ({ commit }, _context: Context) {
    commit(MutationType.CHANGE_DESCRIPTION, "I'm defined by server side")
  },
  audioUpdate ({ commit }, payload) {
    commit(UPDATE, payload)
  },
  play ({ commit }, track) {
    commit(START_PLAY)
    // const trackToPlay = track
    // const artist = track.artist
    // if (!trackToPlay.artist.picture) {
    //   fetchArtistById(trackToPlay.artist.id).then((artist) => {
    //     commit(EXTEND_ACTIVE_TRACK_DATA, { artist })
    //   })
    // }
    // playService.play(trackToPlay)
    // commit(PLAY, { ...trackToPlay, artist })
  },
  pause ({ commit }) {
    playService.pause()
    commit(PAUSE)
  },
  audioEnd ({ commit }) {
    commit(AUDIO_STOP)
    // store.dispatch('playNext')
  },
  audioError ({ commit, state }) {
    // store.dispatch('setTrackError', state.activeTrack)
    // eventBus.$emit(
    //   'showSnackbar',
    //      `Error on loading ${state.activeTrack.title} track`
    // )
    // store.dispatch('playNext')
  },
  setVolume ({ commit }, volume) {
    playService.setVolume(volume)
    commit(SET_VOLUME, volume)
  },
  toggleVolume ({ commit, state }) {
    const newVolume = state.volume > 0 ? 0 : state.oldVolume
    playService.setVolume(newVolume)
    commit(TOGGLE_VOLUME)
    commit(SET_VOLUME, newVolume)
  },
  seek ({ commit, state }, progress) {
    playService.seek(progress)
  },
  toggleRepeatMode ({ commit, state }, payload) {
    commit(TOGGLE_REPEAT_MODE, Boolean(payload))
  },
  toggleShuffleMode ({ commit }, payload) {
    commit(TOGGLE_SHUFFLE_MODE, Boolean(payload))
  },
  setActiveTrack ({ commit, state }, payload) {
    if (payload.skipIfExists && state.activeTrack) {
      return
    }
    commit(SET_ACTIVE_TRACK, payload)
  },
  setAudioLoading ({ commit }, payload) {
    commit(SET_AUDIO_LOADING, payload)
  },
  setPlayerType ({ commit }, playerType) {
    playService && playService.pause()
    // if (playService.destroy) {
    // playService.destroy()
    // }
    // playService = playerType === 'deezer' ? player : deezer
    commit(SET_AUDIO_READY_STATE, true)
  },
  setAudioReadyState (value) {
    // commit(SET_AUDIO_READY_STATE, value)
  }
}
