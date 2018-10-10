
import { combineReducers } 	from 'redux';

import tracklist 		from './playlist.reducer.js';
import playing 			from './audioPlayer.reducer.js';


export default combineReducers({
	tracklist, 
	playing
});