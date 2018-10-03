
import React from 'react';
import store from '../store.js';
import { playSong } from '../actions/index.js';


const playThis = (index) => {
	store.dispatch(playSong(index));
}

const currentPlaying = (isCurrentPlaying) => (
	isCurrentPlaying ? "isPlaying" : ""
);

const SongItem = (props) => (
	<li className={`${currentPlaying(props.playing)}`} onClick={() => (playThis(props.index))}>
		<div className="song-item">
			<span className="song-num">{(props.index<10 ? '0' : null)+(props.index+1)}.</span>
			<span className="song-title">{props.title} - {props.author}</span> 
			<span className="song-length">{props.length}</span></div>
	</li>
);

export default SongItem;