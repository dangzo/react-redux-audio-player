
import React from 'react';
import { Provider } from 'react-redux';
import { Grid, Row, Col, PageHeader} from 'react-bootstrap';
import store from '../store.js';

// App components
import Playlist from './Playlist.js';
import AudioPlayer from './AudioPlayer.js';


const App = () => (
	<Provider store={store}>
		<Grid>
			<Row>
				<Col md={6} mdOffset={3}>
					<PageHeader className="align-center">
						React-Redux Audio Player
					</PageHeader>
				</Col>
			</Row>
			<Row className="showGrid">
				<Col md={6} mdOffset={3}>
					<AudioPlayer />
					<Playlist />
				</Col>
			</Row>
			<footer>
				<Row className="showGrid">
					<Col md={6} mdOffset={3}>
						<div className="align-center">
							<p>Coded by dangzo</p>
							<p><a href="https://github.com/dangzo/react-redux-audio-player" target="_new">https://github.com/dangzo/react-redux-audio-player</a></p>
						</div>
					</Col>
				</Row>
			</footer>
		</Grid>
	</Provider>
);

export default App;