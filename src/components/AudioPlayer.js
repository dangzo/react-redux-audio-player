
import React from 'react';
import { connect } from 'react-redux';


const AudioPlayer = ({ playing }) => (
	<div className="player-container">
    <audio className="player" preload="true" controls="controls">
    	<source src={`../../public/tracks/${playing.URL}`} type="audio/mpeg" />
    	Your browser does not support HTML5 Audio! 
  	</audio>
  </div>
);

const mapStateToProps = state => (
	{ playing: state.playing }
);

export default connect(mapStateToProps)(AudioPlayer);