
import { combineReducers } 	from 'redux';
import songs 								from './playlist.js';
import playing 							from './audioPlayer.js';


export default combineReducers({
	songs: songs, 
	playing: playing
});