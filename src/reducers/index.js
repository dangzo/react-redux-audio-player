
import { ADD_SONG, REMOVE_SONG, SET_FAVORITE } from '../constants/action-types.js';


const initialState = {
	songs: [
		/*{
			title: "",
			author: "",
			URL: "",
			duration: "2:45",
			favorite: false
		}*/
	]
};


const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_SONG: 
			return Object.assign({}, state, {
				songs: [
					...state.songs,
					{
						title: action.song.title,
						author: action.song.author,
						URL: action.song.URL,
						favorite: false
					}
				]
			});
		case REMOVE_SONG: 
			return Object.assign({}, state, {
				songs: state.songs.slice(0, action.index).concat(state.songs.slice(action.index+1))
			});
		case SET_FAVORITE: 
			return Object.assign({}, state, {
				songs: state.songs.map((song, index) => {
					if (index===action.index) {
						return Object.assign({}, song, {
							favorite: true
						});
					}
					return song;
				})
			});
		default:
			return state;
	}
};

export default rootReducer;