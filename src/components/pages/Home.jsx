import React from 'react';
import '../../styles/Home.scss';
import Navigation from '../layouts/Navigation';
import Header from '../layouts/Header';
import Middle from '../layouts/Middle';


function Home() {
	return (
		<div className="Home-page">
			<Navigation />
			<Header />
			<Middle />
		</div>
	);
}

export default Home;
