
import { PLAY_SONG, PLAY_NEXT } from '../constants/action-types.js';


const initialState = [
	{
		title: "You Need Me, I Don't Need You",
		author: "Ed Sheeran",
		file: "track-1.mp3",
		length: "3:40",
		playing: true
	},
	{
		title: "Drive Me",
		author: "Najwajean",
		file: "track-2.mp3",
		length: "5:41",
		playing: false
	},
	{
		title: "Smalltown Boy",
		author: "Bronski Beat",
		file: "track-3.mp3",
		length: "5:00",
		playing: false
	},
	{
		title: "Waves (Robin Shultz Radio Edit)",
		author: "Mr. Probtz",
		file: "track-4.mp3",
		length: "3:27",
		playing: false
	},
	{
		title: "Natural Blues",
		author: "Moby",
		file: "track-5.mp3",
		length: "3:02",
		playing: false
	},
	{
		title: "Diamond in the Night",
		author: "Bedrockk",
		file: "track-6.mp3",
		length: "4:04",
		playing: false
	}
];


const playlistReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAY_SONG:
			if (action.song.index < state.length) {
				return Object.assign([], state, state.map((song, index) => {
					if (index===action.song.index) {
						return Object.assign({}, song, { playing: true });
					}
					// Set all other elements to playing: false
					return Object.assign({}, song, { playing: false });
				}));
			}
			return state;
		case PLAY_NEXT:
			let nextPlaying = -1;
			return Object.assign([], state, state.map((song, index) => {		
					if (song.playing) {
						nextPlaying = index+1;
						return Object.assign({}, song, { playing: false });
					}
					// Set all other elements to playing: false
					return Object.assign({}, song, { playing: (nextPlaying===index ? true : false) });
				}));
		default:
			return state;
	}
};

export default playlistReducer;