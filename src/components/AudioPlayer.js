
import React, { Component } from 'react';
import { playNext } 				from '../actions/index.js';
import { connect } 					from 'react-redux';
import Playlist 						from './Playlist.js';


class AudioPlayer extends Component {
	componentDidMount () {
		const player = document.getElementsByClassName('player')[0];
		player.addEventListener("ended", () => this.props.playNext());
	}
	componentDidUpdate (prevProps, prevState, snapshot) {
		const player = document.getElementsByClassName('player')[0];
		if (this.props.toPlay) {
			player.load(this.props.file);
			player.play();
		}
	}
	render () {
		return (
			<div className="player-container">
		    <audio className="player" preload="true" controls="controls">
		    	<source src={`tracks/${this.props.file}`} type="audio/mpeg"  />
		    	Your browser does not support HTML5 Audio! 
		  	</audio>
		  	<Playlist />
		  </div>
		);
	}
} 

const mapStateToProps = state => (
	state.playing
);

const mapDispatchToProps = dispatch => ({
	playNext: () => dispatch(playNext())
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);