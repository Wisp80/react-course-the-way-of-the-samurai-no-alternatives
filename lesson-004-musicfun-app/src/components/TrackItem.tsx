type TrackAttachment = {
    url: string
}

type TrackListItemAttributes = {
    title: string
    attachments: Array<TrackAttachment>
}

export type TrackListItemOutput = {
    id: string
    attributes: TrackListItemAttributes
}

type Props = {
    isSelected: boolean
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
}

export function TrackItem({onSelect, track, isSelected}: Props) {
    const handleClick = () => onSelect?.(track.id)

    return <li key={track.id} style={{
        border: isSelected ? '1px solid darkorange' : 'none'
    }}>
        <div onClick={handleClick}>
            {track.attributes.title}
        </div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>;
}