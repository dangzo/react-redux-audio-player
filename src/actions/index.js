
import { PLAY_SONG } from '../constants/action-types.js';
import { PLAY_NEXT } from '../constants/action-types.js';

export const playSong = (song) => (
	{
		type: PLAY_SONG,
		song: {
			file: song.file,
			index: song.index
		}
	}
);

export const playNext = () => (
	{
		type: PLAY_NEXT
	}
);
