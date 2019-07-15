import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setActive } from '../actions/playlist.actions';
import SongItem from './SongItem';

class Playlist extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { setActive } = this.props;
    setActive(0);
  }

  render() {
    const { tracks } = this.props;
    return (
      <ul className="playlist">
        {tracks.map((songItem, index) => (
          <SongItem
            key={`song-item-${songItem.title}`}
            index={index}
            isActive={!!songItem.active}
            {...songItem}
          />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.playlist.tracks,
});

const mapDispatchToProps = dispatch => ({
  setActive: index => dispatch(setActive(index)),
});

Playlist.propTypes = {
  setActive: PropTypes.func.isRequired,
  tracks: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
