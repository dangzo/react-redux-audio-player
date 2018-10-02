
import React from 'react';


const _SongItem = (props) => (
	<li>
		<div className="song-item">
			<span className="song-num">{(props.index<10 ? '0' : null)+(props.index+1)}.</span>
			<span className="song-title">{props.title} - {props.author}</span> 
			<span className="song-length">{props.length}</span></div>
	</li>
);

export default _SongItem;