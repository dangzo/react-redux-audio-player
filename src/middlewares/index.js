import { playSong, PLAY_SONG, PLAY_NEXT } from '../actions/audioPlayer.actions';
import { setActive } from '../actions/playlist.actions';
import tracklist from '../tracklist';

// eslint-disable-next-line import/prefer-default-export
export const playerMiddleware = store => next => action => {
  next(action);

  switch (action.type) {
    case PLAY_SONG:
      store.dispatch(setActive(action.payload.index));
      break;

    case PLAY_NEXT: {
      const nextIndex = 1 + store.getState().playing.index;
      if (nextIndex < tracklist.length) {
        // Play next song
        store.dispatch(playSong(nextIndex, true));
      } else {
        // Load first song and set playing to false
        store.dispatch(playSong(0, false));
      }
      break;
    }
    default:
      break;
  }
};
