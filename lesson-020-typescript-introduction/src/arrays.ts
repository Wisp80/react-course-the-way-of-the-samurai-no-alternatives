import {TrackType} from "./objects";

const numbers: Array<number> = [1, 2, 3, 4]

numbers.forEach(number => {
})

numbers.push(5)

numbers[0].toFixed()

const tracks: Array<TrackType | null> = [{title: '', author: {name: '', age: 32}}, null]

tracks.push({
    title: '',
    author: {
        name: '',
        age: 32,
    }
})