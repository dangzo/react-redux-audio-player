import { playSong, PLAY_SONG, PLAY_NEXT } from '../actions/audioPlayer.actions';
import { setActive } from '../actions/playlist.actions';
import tracks from '../tracks';

// eslint-disable-next-line import/prefer-default-export
export const playerMiddleware = store => next => action => {
  next(action);

  switch (action.type) {
    case PLAY_SONG:
      store.dispatch(setActive(action.payload.index));
      break;

    // Playing next song when a song ends. It may be the next song
    // or the first one (simulating cycling through the playlist).
    case PLAY_NEXT: {
      const { audioPlayer } = store.getState();
      const nextIndex = 1 + audioPlayer.index;
      if (nextIndex < tracks.length) {
        // Play next song
        store.dispatch(playSong(nextIndex, true));
      } else {
        // Load first song and set playing to false
        store.dispatch(playSong(0, false));
      }
      break;
    }

    // Default case
    default:
      break;
  }
};
