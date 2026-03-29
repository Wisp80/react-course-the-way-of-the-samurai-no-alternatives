import {TrackList} from './ui/TrackList.tsx';
import {TrackDetail} from './ui/TrackDetail.tsx';
import {useState} from 'react';

export function MainPage() {
    const [trackId, setTrackId] = useState<string | null>(null);

    const handleTrackSelect = (id: string | null): void => {
        setTrackId(id);
    };

    return <div>

        <div style={{display: 'flex'}}>
            <TrackList
                selectedTrackId={trackId}
                onTrackSelect={handleTrackSelect}/>
            <TrackDetail trackId={trackId}/>
        </div>

    </div>;
}
