
import React from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/index.js';


const currentPlaying = (isCurrentPlaying) => (
	isCurrentPlaying ? "isPlaying" : ""
);

const SongItem = (props) => (
	<li className={`${currentPlaying(props.playing)}`} onClick={() => props.playSong(props.file, props.index)}>
		<div className="song-item">
			<span className="song-num">{(props.index<10 ? '0' : null)+(props.index+1)}.</span>
			<span className="song-title">{props.title} - {props.author}</span> 
			<span className="song-length">{props.length}</span></div>
	</li>
);

const mapDisaptchToProps = dispatch => ({
	playSong: (file, index) => dispatch(playSong({file: file, index: index}))
});


export default connect(null, mapDisaptchToProps)(SongItem);