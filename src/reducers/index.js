import { combineReducers } from 'redux';

import playlistReducer from './playlist.reducer';
import audioPlayerReducer from './audioPlayer.reducer';

const rootReducer = combineReducers({
  playlist: playlistReducer,
  audioPlayer: audioPlayerReducer,
});

export default rootReducer;
