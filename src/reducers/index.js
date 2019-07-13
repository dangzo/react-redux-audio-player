import { combineReducers } from 'redux';

import playlistReducer from './playlist.reducer';
import audioPlayerReducer from './audioPlayer.reducer';

export default combineReducers({
  playlist: playlistReducer,
  audioPlayer: audioPlayerReducer,
});
