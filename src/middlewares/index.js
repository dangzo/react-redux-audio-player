
import { PLAY_SONG } from '../actions/audioPlayer.actions.js';
import { setActive } from '../actions/playlist.actions.js';


export const playerMiddleware = store => next => action => {

	next(action);

	switch (action.type) {
		case PLAY_SONG:
			store.dispatch( setActive(action.payload.index) );
			break;

		default:
			break;
	}

};
