const AUDIOPLAYER = '[AudioPlayer]';

export const PLAY_SONG = `${AUDIOPLAYER} PLAY_SONG`;
export const PAUSE_SONG = `${AUDIOPLAYER} PAUSE_SONG`;
export const PLAY_NEXT = `${AUDIOPLAYER} PLAY_NEXT`;

export const playSong = (index, playing = true) => (
  {
    type: PLAY_SONG,
    payload: {
      index,
      playing,
    },
  }
);

export const playNext = () => (
  {
    type: PLAY_NEXT,
  }
);
