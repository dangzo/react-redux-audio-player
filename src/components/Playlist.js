
import React, { Component }	from 'react';
import { connect } 					from 'react-redux';
import PropTypes						from 'prop-types';
import { setActive } 				from '../actions/playlist.actions.js';

import SongItem 						from './SongItem.js';


class Playlist extends Component {
	
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		this.props.setActive(0);
	}

	render () {	
		return (
			<ul className="playlist">
				{this.props.tracklist.map((songItem, index) => (
					<SongItem key={index} {...songItem} index={index} isActive={!!songItem.active} />
				))}
			</ul>
		);
	}

}

const mapStateToProps = state => (
	state.tracklist
);

const mapDispatchToProps = dispatch => (
	{ setActive: (index) => dispatch( setActive(index) ) }
)


Playlist.propTypes = {
	setActive: PropTypes.func.isRequired,
	tracklist: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);