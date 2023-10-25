import React from 'react';
import '../../styles/Header.scss';
import Button from '../Button';
import Navigation from './Navigation';

function Header({
	toggleMenu,
	toggleMenuState,
	isCartOpen,
	toggleCartDisplay,
}) {
	const route = `categories/headphones/xx99-mark-two-headphones`;
	return (
		<section className="Header-background">
			<Navigation
				toggleMenu={toggleMenu}
				toggleMenuState={toggleMenuState}
				isCartOpen={isCartOpen}
				toggleCartDisplay={toggleCartDisplay}
			/>
			<div className="Header-wrapper">
				<div className="Header-content">
					<h1 className="Header-paragraph">NEW PRODUCT</h1>
					<h1 className="Header-main-text">XX99 Mark II HeadphoneS</h1>
					<h3 className="Header-sub-text">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</h3>
					<Button label={'See Product'} color={'colored'} route={route} />
				</div>
			</div>
		</section>
	);
}

export default Header;
