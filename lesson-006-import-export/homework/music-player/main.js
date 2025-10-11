import songs from "./modules/songs.js";
import * as player from "./modules/player.js";
import {showSong, showPlaylist} from "./modules/display.js";
import "./styles/theme.js"

console.log("🎶 Добро пожаловать в музыкальный плеер!");

// Показываем весь плейлист
showPlaylist(songs);

// Включаем первую песню
showSong(songs[0]);
player.showSong(songs[0]);
player.play();

// Пауза
player.pause();

// Включаем вторую песню
showSong(songs[1]);
player.showSong(songs[1]);
player.play();

// Останавливаем
player.stop();