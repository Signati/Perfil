import { Track, EventListener } from '~/types/Track'
// import store from '../store/index'
let audio: HTMLAudioElement | null = process.client ? new Audio('./panda.mp3') : null
let currentVol = 0.7
let lastTrackID: any = null
export const play = (track: Track, eventListener:EventListener): void => {
  if (audio) {
    audio.pause()
  }
  const resumeOldTrack = lastTrackID && track.id === lastTrackID
  if (resumeOldTrack) {
    audio!.play()
    return
  }
  audio = new Audio()
  audio.src = track.preview

  audio.volume = currentVol
  const promise = audio.play()
  console.log(audio)
  if (promise && promise.catch) {
    promise.catch((e) => {
      console.log(e)
    })
  }
  lastTrackID = track.id
  if (!resumeOldTrack) {
    setAudioListeners(eventListener)
  }
}

export const pause = ():void => {
  audio && audio.pause()
}

export const setVolume = (volume: any):void => {
  if (!isAudioReady()) {
    return
  }
  currentVol = volume
  audio!.volume = volume
}

export const seek = (progress: any):void => {
  if (!isAudioReady()) {
    return
  }
  audio!.currentTime = audio!.duration * progress / 100
}

function isAudioReady ():any {
  return audio && audio.readyState !== 0
}

// function loadStartListener ():void {
//   store.dispatch('setAudioLoading', true)
// }
// function canplayListener ():void {
//   store.dispatch('setAudioLoading', false)
// }
// function endedListener ():void {
//   store.dispatch('audioEnd')
// }
// function timeupdateListener ():void {
//   store.dispatch('audioUpdate', getTime(event))
// }
// function errorListener (err: any):void {
//   console.warn('Error on playing audio', err)
//   store.dispatch('audioError', err)
// }

function setAudioListeners (event:EventListener):void {
  if (!audio) {
    return
  }
  audio.addEventListener('loadstart', event.loadStartListener)
  audio.addEventListener('canplay', event.canplayListener)
  audio.addEventListener('ended', event.endedListener)
  audio.addEventListener('timeupdate', event.timeupdateListener)
  audio.addEventListener('error', event.errorListener)
}

export function removeAudioListeners (event:EventListener):void {
  if (!audio) {
    return
  }
  audio.removeEventListener('loadstart', event.loadStartListener)
  audio.removeEventListener('canplay', event.canplayListener)
  audio.removeEventListener('ended', event.endedListener)
  audio.removeEventListener('timeupdate', event.timeupdateListener)
  audio.removeEventListener('error', event.errorListener)

  // audio.addEventListener('loadeddata', this._handleLoaded);
  // audio.addEventListener('pause', this._handlePlayPause);
  // audio.addEventListener('play', this._handlePlayPause);
}

export function destroy (event:EventListener):void {
  audio && audio.pause()
  removeAudioListeners(event)
  audio = null
}

export function getTime (audioEvent:any): any {
  const { currentTime, duration } = audioEvent.target
  return {
    currentTime: formatTime(currentTime),
    duration: formatTime(duration),
    progress: currentTime / duration * 100 || 0
  }
}
function formatTime (seconds: number | string) {
  let minutes: number | string = Math.floor(+seconds / 60)
  minutes = (minutes >= 10) ? minutes : '0' + minutes
  seconds = Math.floor(+seconds % 60)
  seconds = (seconds >= 10) ? seconds : '0' + seconds
  return minutes + ':' + seconds
}
