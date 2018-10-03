
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/index.js';


const currentPlaying = (isCurrentPlaying) => (
	isCurrentPlaying ? "isPlaying" : ""
);

class SongItem extends Component {
	constructor (props) {
		super(props);
	}
	componentDidUpdate () {
		if (this.props.playing) {
			this.props.playSong(this.props.file, this.props.index);
		}
	}
	render () {
		return (
			<li className={`${currentPlaying(this.props.playing)}`} onClick={() => this.props.playSong(this.props.file, this.props.index)}>
				<div className="song-item">
					<span className="song-num">{(this.props.index<10 ? '0' : null)+(this.props.index+1)}.</span>
					<span className="song-title">{this.props.title} - {this.props.author}</span> 
					<span className="song-length">{this.props.length}</span></div>
			</li>
		);
	}
} 

const mapDisaptchToProps = dispatch => ({
	playSong: (file, index) => dispatch(playSong({file: file, index: index}))
});


export default connect(null, mapDisaptchToProps)(SongItem);