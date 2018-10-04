
import { PLAY_SONG, PLAY_NEXT } 	from '../constants/action-types.js';
import tracklist 									from '../constants/tracklist.js';


const initialState = tracklist;

const playlistReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAY_SONG:
			if (action.song.index < state.length) {
				return Object.assign([], state, state.map((song, index) => {
					if (index===action.song.index) {
						return Object.assign({}, song, { playing: true });
					}
					// Set all other elements to playing: false
					return Object.assign({}, song, { playing: false });
				}));
			}
			return state;
		case PLAY_NEXT:
			let nextPlayingIndex = -1;
			return Object.assign([], state, state.map((song, index) => {		
					if (song.playing) {
						nextPlayingIndex = index+1;
						return Object.assign({}, song, { playing: false });
					}
					// Set all other elements to playing: false
					return Object.assign({}, song, { playing: (nextPlayingIndex===index ? true : false) });
				}));
		default:
			return state;
	}
};

export default playlistReducer;