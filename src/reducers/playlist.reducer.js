
import { SET_ACTIVE } 	from '../actions/playlist.actions.js';
import tracklist 				from '../tracklist.js';


const initialState = {
	tracklist: (tracklist ? tracklist : [])
};

const playlistReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_ACTIVE:
			if (action.payload.index < state.tracklist.length) {
				return Object.assign({}, state, { tracklist: state.tracklist.map((song, index) => {
					if (index===action.payload.index) {
						return Object.assign({}, song, { active: true });
					}
					// All other elements need to have { active: false }
					return Object.assign({}, song, { active: false });
				})});
			}
			return state;

		/*case SONG_ENDED:
			let nextPlayingIndex = -1;
			return Object.assign([], state, state.map((song, index) => {		
					if (song.active) {
						nextActiveIndex = index+1;
						return Object.assign({}, song, { active: false });
					}
					// Set all other elements to active: false
					return Object.assign({}, song, { active: (nextPlayingIndex===index ? true : false) });
				}));*/
			
		default:
			return state;
	}
};

export default playlistReducer;