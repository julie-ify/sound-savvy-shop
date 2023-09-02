import React from 'react';
import '../../styles/Home.scss';
import Navigation from '../layouts/Navigation';
import Header from '../layouts/Header';
import Middle from '../layouts/Middle';
import Footer from '../layouts/Footer';
import Menu from '../layouts/Menu';

function Home({ toggleMenu, toggleMenuState, categoryState }) {
	return (
		<div className="Home-container">
			<Navigation toggleMenu={toggleMenu} />
			<Header />
			<Middle />
			<Footer />
			<Menu toggleMenuState={toggleMenuState} />
		</div>
	);
}

export default Home;
