import {useState} from 'react';

const tracks = [
    {
        id: 1,
        title: 'Musicfun soundtrack',
        url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'
    },

    {
        id: 2,
        title: 'Musicfun soundtrack instrumental',
        url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'
    },
];

export function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(1);

    if (tracks === null) {
        return <div>
            <h1>Musicfun Player</h1>
            <span>loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <h1>Musicfun Player</h1>
            <span>No tracks</span>
        </div>
    };

    return (
        <div>
            <h1>Musicfun Player</h1>
            <button onClick={ () => {
                setSelectedTrackId(null)
            } }>reset selection</button>

            <ul>
                {
                    tracks.map(
                        (track) => {
                            return (
                                <li key={track.id} style={ {
                                    border: track.id === selectedTrackId ? '1px solid darkorange' : 'none'
                                } }>
                                    <div onClick={ () => {
                                        setSelectedTrackId(track.id);
                                    } }>
                                        {track.title}
                                    </div>
                                    <audio src={track.url} controls></audio>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    );
};

export function Homework004() {
    const tasks = [
        {id: 1, title: "Купить продукты на неделю", isDone: false},
        {id: 2, title: "Полить цветы", isDone: true},
        {id: 3, title: "Сходить на тренировку", isDone: false},
    ]

    return (
        <div>
            <h1>Список дел</h1>

            <ul>
                {
                    tasks.map((track) => {
                        return (
                            <li key={track.id}>
                                <div>{track.title}</div>
                                <input type="checkbox"/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};