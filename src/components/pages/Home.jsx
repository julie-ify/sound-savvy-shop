import React from 'react';
import '../../styles/Home.scss';
import Header from '../layouts/Header';
import Middle from '../layouts/Middle';
import Footer from '../layouts/Footer';
import Menu from '../layouts/Menu';

function Home({ toggleMenu, toggleMenuState, categoryState, thumbnail }) {
	return (
		<div className="Home-container">
			<Header toggleMenu={toggleMenu} toggleMenuState={toggleMenuState} />
			<Middle categoryState={categoryState} toggleMenu={toggleMenu} thumbnail={thumbnail}/>
			<Footer />
			<Menu
				toggleMenuState={toggleMenuState}
				categoryState={categoryState}
				toggleMenu={toggleMenu}
				thumbnail={thumbnail}
			/>
		</div>
	);
}

export default Home;
