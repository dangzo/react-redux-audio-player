
import { PLAY_SONG, PLAY_NEXT } from '../actions/audioPlayer.actions.js';
import { playSong } 						from '../actions/audioPlayer.actions.js';
import { setActive } 						from '../actions/playlist.actions.js';
import tracklist 								from '../tracklist.js';


export const playerMiddleware = store => next => action => {

	next(action);

	switch (action.type) {
		case PLAY_SONG:
			store.dispatch( setActive(action.payload.index) );
			break;

		case PLAY_NEXT:
			const nextIndex = 1+ store.getState().playing.index;
			if (nextIndex < tracklist.length) {
				// Play next song
				store.dispatch( playSong(nextIndex, true)) ;
			} else {
				// Load first song and set playing to false
				store.dispatch( playSong(0, false ) );
			}
			break;

		default:
			break;
	}

};
