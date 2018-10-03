
import { PLAY_SONG, STOP_SONG } from '../constants/action-types.js';

// playing:
const initialState = {
	URL: "track-1.mp3",
	index: 0
};

const audioPlayerReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default audioPlayerReducer;