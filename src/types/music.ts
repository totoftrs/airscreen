type Track = {
    id: number
    title: string
    duration : string
}

export type Album = {
    id: number
    title: string
    artist: string
    genre: string
    year: number
    cover: string
    tracks: Track[]
}