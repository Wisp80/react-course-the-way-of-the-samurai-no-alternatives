import {useEffect, useState} from 'react';

export function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(1);
    const [tracks, setTracks] = useState(null)

    useEffect(() => {
        console.log('effect');
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '9eed344f-5a69-4e3b-92dc-6f0f7f443157'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))
    }, [])

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
                                        {track.attributes.title}
                                    </div>
                                    <audio src={track.attributes.attachments[0].url} controls></audio>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    );
};