
import React from 'react';


const _AudioPlayer = () => (
	<div className="player-container">
    <audio className="player" preload="true" controls="controls">
    	{/*<source src="../../public/test-track.mp3" type="audio/mpeg" />*/}
    	Your browser does not support HTML5 Audio! 
  	</audio>
  </div>
);

export default _AudioPlayer;