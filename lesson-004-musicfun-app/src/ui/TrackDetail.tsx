import {useEffect, useState} from 'react';
import {getTrack, type TrackDetailsResourceData} from "../dal/api.ts";

type Props = {
    trackId: string | null
}

export function TrackDetail({trackId}: Props) {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResourceData | null>(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null);
            return;
        }

        getTrack(trackId).then(json => setSelectedTrack(json.data));
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