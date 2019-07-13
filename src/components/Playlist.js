
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
    const { tracklist } = this.props;
    return (
      <ul className="playlist">
        {tracklist.map((songItem, index) => (
          <SongItem key={`song-item-${songItem.index}`} {...songItem} index={index} isActive={!!songItem.active} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => (
  state.tracklist
);

const mapDispatchToProps = dispatch => (
  {
    setActive: index => dispatch(setActive(index)),
  }
);


Playlist.propTypes = {
  setActive: PropTypes.func.isRequired,
  tracklist: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
