import { SET_ACTIVE } from '../actions/playlist.actions';
import tracks from '../tracks';

const initialState = {
  tracks,
};

const playlistReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    // Taking care of setting current song item as "active",
    // which means displaying it with a darker blue background.
    case SET_ACTIVE:
      if (payload.index < state.tracks.length) {
        return Object.assign({}, state, {
          tracks: state.tracks.map((song, index) => {
            // The song we did the click on
            if (index === payload.index) {
              return {
                ...song,
                active: true,
              };
            }
            // All other elements need to have { active: false }
            return {
              ...song,
              active: false,
            };
          }),
        });
      }
      return state;
    // Default case
    default:
      return state;
  }
};

export default playlistReducer;
