
import { combineReducers } from 'redux';

import tracklist from './playlist.reducer';
import playing from './audioPlayer.reducer';

export default combineReducers({
  tracklist,
  playing,
});
