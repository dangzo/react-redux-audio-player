import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { playNext } from '../actions/audioPlayer.actions';

import Playlist from './Playlist';
import tracklist from '../tracklist';

class AudioPlayer extends Component {
  componentDidMount() {
    const player = document.getElementsByClassName('player')[0];
    // eslint-disable-next-line  no-shadow
    const { playNextSong } = this.props;
    console.log(this.props);
    player.addEventListener('ended', () => playNextSong());
  }

  componentDidUpdate() {
    const player = document.getElementsByClassName('player')[0];
    const { index, playing } = this.props;

    player.load(tracklist[index].file);
    if (playing) {
      player.play();
    }
  }

  render() {
    const { index } = this.props;
    return (
      <div className="player-container">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio className="player" preload="true" controls="controls">
          <source src={`tracks/${tracklist[index].file}`} type="audio/mpeg" />
          Your browser does not support HTML5 Audio!
        </audio>
        <Playlist />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracklist: state.playlist.tracklist,
  playing: state.audioPlayer.playing,
  index: state.audioPlayer.index,
});

const mapDispatchToProps = dispatch => ({
  playNextSong: () => dispatch(playNext()),
});

AudioPlayer.propTypes = {
  playNextSong: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
