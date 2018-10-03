
import { PLAY_SONG } from '../constants/action-types.js';


const initialState = [
	{
		title: "You Need Me, I Don't Need You",
		author: "Ed Sheeran",
		URL: "track-1.mp3",
		length: "3:40",
		playing: false
	},
	{
		title: "Drive Me",
		author: "Najwajean",
		URL: "track-2.mp3",
		length: "5:41",
		playing: false
	},
	{
		title: "Smalltown Boy",
		author: "Bronski Beat",
		URL: "track-3.mp3",
		length: "5:00",
		playing: false
	},
	{
		title: "Waves (Robin Shultz Radio Edit)",
		author: "Mr. Probtz",
		URL: "track-4.mp3",
		length: "3:27",
		playing: false
	},
	{
		title: "Natural Blues",
		author: "Moby",
		URL: "track-5.mp3",
		length: "3:02",
		playing: false
	},
	{
		title: "Diamond in the Night",
		author: "Bedrockk",
		URL: "track-6.mp3",
		length: "4:04",
		playing: false
	}
];


const playlistReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAY_SONG:
			if (action.index < state.length) {
				return Object.assign([], state, state.map((song, index) => {
					if (index===action.index) {
						return Object.assign({}, song, { playing: true });
					}
					// Set all other elements to playing: false
					return Object.assign({}, song, { playing: false });
				}));
			}
			return state;
		default:
			return state;
	}
};

export default playlistReducer;