import {useEffect, useState} from 'react';
import {TrackItem, type TrackListItemOutput} from './TrackItem.tsx';

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (id: string | null) => void
}

export function TrackList({selectedTrackId, onTrackSelect}: Props) {
    const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '9eed344f-5a69-4e3b-92dc-6f0f7f443157'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data));
    }, []);

    if (tracks === null) {
        return <div>
            <span>loading...</span>
        </div>;
    }

    if (tracks.length === 0) {
        return <div>
            <span>No tracks</span>
        </div>;
    }

    const handleReset = function () {
        onTrackSelect?.(null);
    };

    const handleClick = function (trackId: string) {
        onTrackSelect?.(trackId);
    };

    return <div>
        <button onClick={handleReset}>Reset</button>
        <hr/>
        <ul>
            {
                tracks.map(
                    (track) => {
                        return (
                            <TrackItem key={track.id}
                                       track={track}
                                       isSelected={track.id === selectedTrackId}
                                       onSelect={handleClick}/>
                        );
                    })
            }
        </ul>
    </div>;
}