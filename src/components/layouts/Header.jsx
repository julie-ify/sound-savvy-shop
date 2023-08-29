import React from 'react';
import '../../styles/Header.scss';

function Header() {
	return (
		<section className="Header-background">
			<div className="Header-overlay">
				<h1 className="Header-paragraph">NEW PRODUCT</h1>
				<h1 className="Header-main-text">XX99 Mark II HeadphoneS</h1>
				<h3 className="Header-sub-text">
					Experience natural, lifelike audio and exceptional build quality made
					for the passionate music enthusiast.
				</h3>
			</div>
		</section>
	);
}

export default Header;
