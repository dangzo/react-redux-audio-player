
import { PLAY_SONG } 	from '../actions/index.js';
import tracklist 			from '../constants/tracklist.js';


// playing file:
const initialState = (tracklist && tracklist.length) ? { 
	file: tracklist[0].file, 
	toPlay: false
} : {};


const audioPlayerReducer = (state = initialState, action) => {
	
	switch (action.type) {
		
		case PLAY_SONG:
			return Object.assign({}, state, action.song, {
				toPlay: true
			});

		default:
			return state;

	}

};

export default audioPlayerReducer;