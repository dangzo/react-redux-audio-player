
// AudioPlayer actions
import { PLAY_SONG } from '../constants/action-types.js';


export const playSong = (song) => (
	{
		type: PLAY_SONG,
		song: {
			file: song.file,
			index: song.index
		}
	}
);
