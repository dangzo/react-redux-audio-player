
import React, { Component } from 'react';
import { connect } 					from 'react-redux';
import PropTypes						from 'prop-types';

import { playSong } 				from '../actions/audioPlayer.actions.js';


const currentPlaying = (isCurrentPlaying) => (
	isCurrentPlaying ? "isPlaying" : ""
);

class SongItem extends Component {
	
	constructor (props) {
		super(props);
		this.clickSong = this.clickSong.bind(this);
	}

	clickSong () {
		this.props.playSong(this.props.index);
	}

	render () {
		return (
			<li className={`${currentPlaying(this.props.isActive)}`} onClick={this.clickSong}>
				<div className="song-item">
					<span className="song-num">{(this.props.index<10 ? '0' : null)+(this.props.index+1)}.</span>
					<span className="song-title">{this.props.title} - {this.props.author}</span> 
					<span className="song-length">{this.props.length}</span></div>
			</li>
		);
	}
	
} 

const mapDisaptchToProps = dispatch => (
	{ playSong : (index) => dispatch( playSong(index) ) }
);


SongItem.propTypes = {
	playSong: PropTypes.func.isRequired,
	isActive: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	file: PropTypes.string.isRequired,
	length: PropTypes.string.isRequired
};


export default connect(null, mapDisaptchToProps)(SongItem);