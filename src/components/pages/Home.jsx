import React from 'react';
import '../../styles/Home.scss';
import Navigation from '../layouts/Navigation';
import Header from '../layouts/Header';

function Home() {
	return (
		<div className="Home-page">
			<Navigation />
			<Header/>
		</div>
	);
}

export default Home;
