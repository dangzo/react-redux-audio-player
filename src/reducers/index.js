
import { combineReducers } from 'redux';

import { } from '../constants/action-types.js';
import songs from './playlist.reducer.js';
import inPlay from './audioPlayer.reducer.js';


export default combineReducers({
	songs, 
	inPlay
});