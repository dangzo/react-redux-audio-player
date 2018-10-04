
import React 				from 'react';
import { connect } 	from 'react-redux';

// App component
import SongItem 		from './SongItem.js';


const Playlist = ({ songList }) => (
	<ul className="playlist">
		{songList.map((songItem, index) => (
			<SongItem key={index} {...songItem} index={index} />
		))}
	</ul>
);

const mapStateToProps = state => (
	{ songList: state.songs }
);

export default connect(mapStateToProps)(Playlist);