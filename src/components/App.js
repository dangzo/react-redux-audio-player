
import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

// Components
import Playlist from './Playlist.js';

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
	<Grid>
		<Row className="showGrid">
			<Col md={4} mdOffset={4}>
				<Playlist />
			</Col>
		</Row>
	</Grid>
);

export default App;