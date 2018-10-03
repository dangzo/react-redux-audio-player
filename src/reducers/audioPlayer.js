
import { PLAY_SONG } from '../constants/action-types.js';

// playing file:
const initialState = { 
	file: 'track-1.mp3', 
	toPlay: false
};

const audioPlayerReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAY_SONG:
			return Object.assign({}, state, {file: action.song.file, toPlay: true, index: action.index});
			return state;
		default:
			return state;
	}
};

export default audioPlayerReducer;