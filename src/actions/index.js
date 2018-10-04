

const AUDIOPLAYER = '[AudioPlayer]';

export const PLAY_SONG 	= `${AUDIOPLAYER} PLAY_SONG`;
export const PLAY_NEXT	= `${AUDIOPLAYER} PLAY_NEXT`;


export const playSong = (song) => (
	{
		type: PLAY_SONG,
		song: {
			file: song.file,
			index: song.index
		}
	}
);

export const playNext = () => (
	{
		type: PLAY_NEXT
	}
);
