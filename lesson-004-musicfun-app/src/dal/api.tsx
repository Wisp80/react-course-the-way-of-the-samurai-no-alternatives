type TrackAttachment = {
    url: string
}

type TrackListItemAttributes = {
    title: string
    attachments: Array<TrackAttachment>
}

type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

type GetTrackDetailsOutput = {
    data: TrackDetailsResourceData
}

export type TrackListItemOutput = {
    id: string
    attributes: TrackListItemAttributes
}

export type TrackDetailsResourceData = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            'api-key': '7724c31c-9843-4420-9447-43807b8c8883'
        }
    }).then(res => res.json())

    return promise
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': '7724c31c-9843-4420-9447-43807b8c8883'
        }
    }).then(res => res.json())

    return promise
}