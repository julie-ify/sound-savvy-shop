import React from 'react';
import '../../styles/Menu.scss';
import List from '../List';

function Menu({ toggleMenuState, categoryState, toggleMenu }) {
	return (
		<section
			className={`Menu-container ${
				!toggleMenuState ? 'Menu-container-toggle' : ''
			}`}
		>
			<div className="Menu-wrapper">
				<div className="Menu-lists">
					<List categoryState={categoryState} toggleMenu={toggleMenu} />
				</div>
			</div>
		</section>
	);
}

export default Menu;
