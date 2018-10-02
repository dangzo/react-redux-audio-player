
import { ADD_SONG, REMOVE_SONG, SET_FAVORITE } from '../constants/action-types.js';


export const addSong = (song) => (
	{
		type: ADD_SONG,
		song: song
	}
);

export const removeSong = (index) => (
	{
		type: REMOVE_SONG,
		index: index
	}
);

export const setFavorite = (index) => (
	{
		type: SET_FAVORITE,
		index: index
	}
);
