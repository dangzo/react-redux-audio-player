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
    const { playNext } = this.props;
    player.addEventListener('ended', () => playNext());
  }

  componentDidUpdate() {
    const player = document.getElementsByClassName('player')[0];
    const { index, playing } = this.props;

    console.log(playing);

    player.load(tracklist[index].file);
    if (playing) {
      player.play();
    }
  }

  render() {
    const { index } = this.props;
    console.log(this.props);
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

const mapStateToProps = state => (
  {
    tracklist: state.tracklist,
    playing: state.playing,
  }
);

const mapDispatchToProps = dispatch => ({
  playNext: () => dispatch(playNext()),
});

AudioPlayer.propTypes = {
  playNext: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
