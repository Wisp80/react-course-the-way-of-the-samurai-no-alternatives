import {useEffect, useState} from 'react';

export function TrackDetail({trackId}) {
    const [selectedTrack, setSelectedTrack] = useState(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null);
            return;
        }

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: {
                'api-key': '9eed344f-5a69-4e3b-92dc-6f0f7f443157'
            }
        }).then(res => res.json())
            .then(json => setSelectedTrack(json.data));
    }, [trackId]);

    return <div>
        <h2>Details</h2>
        {!selectedTrack && !trackId && 'Track is not selected'}
        {!selectedTrack && trackId && 'loading...'}
        {selectedTrack && trackId && selectedTrack.id !== trackId && "Loading..."}
        {selectedTrack && <div>
            <h3>{selectedTrack.attributes.title}</h3>
            <h4>Lyrics</h4>
            <p>
                {selectedTrack.attributes.lyrics ?? 'No lyrics'}
            </p>
        </div>}
    </div>
}