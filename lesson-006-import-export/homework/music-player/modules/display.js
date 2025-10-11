export function showSong(songName) {
    console.log(`🎵 Сейчас играет: ${songName}`);
}

export function showPlaylist(songs) {
    console.log("📝 Плейлист:");
    songs.forEach((song, index) => {
        console.log(index + ". " + song);
    });
}