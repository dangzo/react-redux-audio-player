
import React, { Component } 	from 'react';
import { playNext } 					from '../actions/audioPlayer.actions.js';
import { setActive } 					from '../actions/playlist.actions.js';
import { connect } 						from 'react-redux';

import Playlist 							from './Playlist.js';
import tracklist 							from '../tracklist.js';


class AudioPlayer extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount () {
		const player = document.getElementsByClassName('player')[0];
		player.addEventListener("ended", () => this.props.playNext());

	}

	componentDidUpdate (prevProps, prevState, snapshot) {
		const player = document.getElementsByClassName('player')[0];

		player.load(tracklist[this.props.index].file);
		if (this.props.playing) {			
			player.play();
		} 
	}
	
	render () {
		return (
			<div className="player-container">
		    <audio className="player" preload="true" controls="controls">
		    	<source src={`tracks/${tracklist[this.props.index].file}`} type="audio/mpeg"  />
		    	Your browser does not support HTML5 Audio! 
		  	</audio>
		  	<Playlist />
		  </div>
		);
	}
	
} 

const mapStateToProps = state => (
	state.tracklist,
	state.playing
);

const mapDispatchToProps = dispatch => ({
	playNext: () => dispatch(playNext()),
	setActive: index => dispatch(setActive(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);