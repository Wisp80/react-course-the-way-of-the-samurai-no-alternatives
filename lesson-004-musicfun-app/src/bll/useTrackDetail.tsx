import {getTrack, type TrackDetailsResourceData} from "../dal/api.tsx";
import {useEffect, useState} from "react";

export function useTrackDetail(trackId: string | null) {
    const [trackDetails, setTrackDetails] = useState<TrackDetailsResourceData | null>(null);

    useEffect(() => {
        if (!trackId) {
            setTrackDetails(null);
            return;
        }

        getTrack(trackId).then(json => setTrackDetails(json.data));
    }, [trackId]);

    return {trackDetails};
}