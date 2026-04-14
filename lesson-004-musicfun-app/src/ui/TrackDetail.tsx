import {useTrackDetail} from "../bll/useTrackDetail.tsx";
import styles from './TrackDetail.module.css'

type Props = {
    trackId: string | null
}

export function TrackDetail({trackId}: Props) {
    const {trackDetails} = useTrackDetail(trackId);

    return <div className={styles.track}>
        <h2>Details</h2>
        {!trackDetails && !trackId && 'Track is not selected'}
        {!trackDetails && trackId && 'loading...'}
        {trackDetails && trackId && trackDetails.id !== trackId && "Loading..."}
        {trackDetails && <div>
            <h3>{trackDetails.attributes.title}</h3>
            <h4>Lyrics</h4>
            <p>
                {trackDetails.attributes.lyrics ?? 'No lyrics'}
            </p>
        </div>}
    </div>
}