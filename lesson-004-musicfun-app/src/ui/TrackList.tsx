import {TrackItem} from './TrackItem.tsx';
import {useTracks} from "../bll/useTracks.tsx";
import styles from './TrackList.module.css'

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (id: string | null) => void
}

export function TrackList({selectedTrackId, onTrackSelect}: Props) {
    const {tracks} = useTracks()

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
        <ul className={styles.tracks}>
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