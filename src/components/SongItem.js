import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { playSong } from '../actions/audioPlayer.actions';

const currentPlaying = isCurrentPlaying =>
  isCurrentPlaying ? 'isPlaying' : '';

class SongItem extends Component {
  constructor(props) {
    super(props);
    this.clickSong = this.clickSong.bind(this);
  }

  clickSong() {
    // This is currently a namin/implementation mistake
    // eslint-disable-next-line no-shadow
    const { index, playSong } = this.props;
    playSong(index);
  }

  render() {
    const { author, isActive, index, title, length } = this.props;
    return (
      <li className={`${currentPlaying(isActive)}`} onClick={this.clickSong}>
        <div className="song-item">
          <span className="song-num">
            {`${(index < 10 ? '0' : null) + (index + 1)}.`}
          </span>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <span className="song-title">{`${title} - ${author}`}</span>
          <span className="song-length">{length}</span>
        </div>
      </li>
    );
  }
}

const mapDisaptchToProps = dispatch => ({
  playSong: index => dispatch(playSong(index)),
});

SongItem.propTypes = {
  author: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  // file: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.string.isRequired,
  playSong: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(
  null,
  mapDisaptchToProps
)(SongItem);
