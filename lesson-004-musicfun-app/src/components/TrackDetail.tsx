import {useEffect, useState} from 'react';

export function TrackDetail() {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const selectedTrackId = null;

    useEffect(() => {
        if (!selectedTrackId) {
            return;
        }

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrackId, {
            headers: {
                'api-key': '9eed344f-5a69-4e3b-92dc-6f0f7f443157'
            }
        }).then(res => res.json())
            .then(json => setSelectedTrack(json.data));
    }, [selectedTrackId]);

    return <div>
        <h2>Details</h2>
        {!selectedTrack && !selectedTrackId && 'Track is not selected'}
        {!selectedTrack && selectedTrackId && 'loading...'}
        {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && "Loading..."}
        {selectedTrack && <div>
            <h3>{selectedTrack.attributes.title}</h3>
            <h4>Lyrics</h4>
            <p>
                {selectedTrack.attributes.lyrics ?? 'No lyrics'}
            </p>
        </div>}
    </div>
}