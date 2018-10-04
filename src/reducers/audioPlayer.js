
import { PLAY_SONG } 	from '../constants/action-types.js';
import tracklist 			from '../constants/tracklist.js';


// playing file:
const initialState = (tracklist && tracklist.length) ? { 
	file: tracklist[0].file, 
	toPlay: false
} : {};

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