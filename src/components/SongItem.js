
import React from 'react';


const _SongItem = (props) => (
	<li>
		<div className="song-title">
			{(props.index<10 ? '0' : null)+(props.index+1)}. {props.title} - {props.author} 
			<span className="song-duration">{props.duration}</span></div>
	</li>
);

export default _SongItem;