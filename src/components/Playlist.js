
import React from 'react';

import SongItem from './SongItem.js';

const songList = [
	{
		title: "Song 1",
		author: "Author 1",
		URL: "https://test-url.com",
		length: "4:08",
		favorite: false
	},
	{
		title: "Song 2",
		author: "Author 2",
		URL: "https://test-url.com",
		length: "3:55",
		favorite: false
	},
	{
		title: "Song 3",
		author: "Author 3",
		URL: "https://test-url.com",
		length: "3:41",
		favorite: true
	},
	{
		title: "Song 4",
		author: "Author 4",
		URL: "https://test-url.com",
		length: "2:45",
		favorite: false
	},
	{
		title: "Song 5",
		author: "Author 5",
		URL: "https://test-url.com",
		length: "5:24",
		favorite: true
	}
];


const _Playlist = () => (
	<ul className="playlist">
		{songList.map((songItem, index) => (
			<SongItem key={index} {...songItem} index={index} />
		))}
	</ul>
);

export default _Playlist;