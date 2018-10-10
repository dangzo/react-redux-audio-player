

const PLAYLIST = '[Playlist]';

export const SET_ACTIVE 	= `${PLAYLIST} SET_ACTIVE`;
export const SONG_ENDED		= `${PLAYLIST} SONG_ENDED`;


export const setActive = (index) => (
	{
		type: SET_ACTIVE,
		payload: {
			index: index
		}
	}
);

export const songEnded = () => (
	{
		type: SONG_ENDED
	}
);
