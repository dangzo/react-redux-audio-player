
// AudioPlayer actions
import { LOAD_SONG } from '../constants/action-types.js';

// Playlisy actions
import { PLAY_SONG } from '../constants/action-types.js';


export const loadSong = (song) => (
	{
		type: DISPLAY_PLAYING_SONG,
		song: song
	}
);

export const playSong = (index) => (
	{
		type: PLAY_SONG,
		index: index
	}
);
