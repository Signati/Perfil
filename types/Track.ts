export interface Track {
    // album:any
    // artist:any
    // duration:any
    // explicit_content_cover:any
    // explicit_content_lyrics:any
    // explicit_lyrics:any
    id:any
    link:any
    preview:any
    rank:any
    readable:any
    title:any
    // title_short:any
    // title_version:any
    // type:any
}

export interface EventListener {
    loadStartListener: () => void
    canplayListener: () => void
    endedListener: () => void
    timeupdateListener: () => void
    errorListener: (err: any) => void
}
