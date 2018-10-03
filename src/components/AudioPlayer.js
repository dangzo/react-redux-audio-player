
import React, { Component } from 'react';
import { connect } from 'react-redux';


class AudioPlayer extends Component {
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
		    <audio className="player" preload="true" controls="controls" onEnded={console.log("ended")}>
		    	<source src={`../../public/tracks/${this.props.file}`} type="audio/mpeg"  />
		    	Your browser does not support HTML5 Audio! 
		  	</audio>
		  </div>
		);
	}
} 

const mapStateToProps = state => (
	state.playing
);

export default connect(mapStateToProps)(AudioPlayer);