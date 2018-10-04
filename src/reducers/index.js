
import { combineReducers } 	from 'redux';

import songsReducer 				from './playlist.reducer.js';
import playingReducer 			from './audioPlayer.reducer.js';


export default combineReducers({
	songs: songsReducer, 
	playing: playingReducer
});