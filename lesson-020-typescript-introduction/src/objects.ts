type AuthorType = {
    name: string
    age: number
}

export type TrackType = {
    title: string
    author: AuthorType
}

const author: AuthorType = {
    name: 'Dmitry',
    age: 35,
}

const track: TrackType = {
    title: 'Track title',
    author: {
        name: 'Skrillex',
        age: 37
    }
}

console.log(track.author.name)