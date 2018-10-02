
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

// Debugging
// 
import store from '../store.js';
import { addSong, removeSong, setFavorite } from '../actions/index.js';

window.store = store;
window.addSong = addSong;
window.setFavorite = setFavorite;
window.removeSong = removeSong;
//
// Debugging


const App = () => (
	<React.Fragment>
		<CssBaseline />
		App component.
 	</React.Fragment>
);

export default App;