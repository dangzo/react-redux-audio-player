
import { combineReducers } from 'redux';

import { } from '../constants/action-types.js';
import songs from './playlist.js';
import playing from './audioPlayer.js';


export default combineReducers({
	songs, 
	playing
});