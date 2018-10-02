
import React from 'react';
import { Provider } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import store from '../store.js';

// App components
import Playlist from './Playlist.js';
import AudioPlayer from './AudioPlayer.js';

// Debugging
// 
import { addSong, removeSong, setFavorite } from '../actions/index.js';

window.store = store;
window.addSong = addSong;
window.setFavorite = setFavorite;
window.removeSong = removeSong;
//
// Debugging


const App = () => (
	<Provider store={store}>
		<Grid>
			<Row className="showGrid">
				<Col md={6} mdOffset={3}>
					<AudioPlayer />
					<Playlist />
				</Col>
			</Row>
		</Grid>
	</Provider>
);

export default App;