import { SET_ACTIVE } from '../actions/playlist.actions';
import tracklist from '../tracklist';

const initialState = {
  tracklist,
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      if (action.payload.index < state.tracklist.length) {
        return Object.assign({}, state, {
          tracklist: state.tracklist.map((song, index) => {
            if (index === action.payload.index) {
              return Object.assign({}, song, { active: true });
            }
            // All other elements need to have { active: false }
            return Object.assign({}, song, { active: false });
          }),
        });
      }
      return state;
    default:
      return state;
  }
};

export default playlistReducer;
