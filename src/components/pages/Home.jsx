import React from 'react';
import '../../styles/Home.scss';
import Navigation from '../layouts/Navigation';
import Header from '../layouts/Header';
import Middle from '../layouts/Middle';
import Footer from '../layouts/Footer';

function Home() {
	return (
		<div className="Home-container">
			<Navigation />
			<Header />
			<Middle />
			<Footer />
		</div>
	);
}

export default Home;
