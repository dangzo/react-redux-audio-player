import { PLAY_SONG, PAUSE_SONG } from '../actions/audioPlayer.actions';

const initialState = { playing: false, index: 0 };

const audioPlayerReducer = (state = initialState, action) => {
  // Play current song
  switch (action.type) {
    case PLAY_SONG:
      // playing set to true when playing a new song
      return Object.assign({}, state, {
        playing: action.payload.playing,
        index: action.payload.index,
      });
    // Pause current song
    case PAUSE_SONG:
      return { playing: false };
    // Default case
    default:
      return state;
  }
};

export default audioPlayerReducer;
