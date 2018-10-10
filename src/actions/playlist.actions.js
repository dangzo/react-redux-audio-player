

const PLAYLIST = '[Playlist]';

export const SET_ACTIVE 	= `${PLAYLIST} SET_ACTIVE`;


export const setActive = (index) => (
	{
		type: SET_ACTIVE,
		payload: {
			index: index
		}
	}
);