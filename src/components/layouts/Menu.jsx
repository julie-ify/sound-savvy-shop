import React from 'react';
import '../../styles/Menu.scss';
import ListItem from '../ListItem';
import { filterCategory } from '../../utils/selectors';

function Menu({ toggleMenuState, categoryState }) {
	const category = filterCategory(categoryState);
	const categoryLists =
		category.length > 0 ? (
			category.map((category) => {
				return <ListItem key={category.id} category={category} />;
			})
		) : (
			<section className="ListItem-container">
				<div className="ListItem-wrapper"></div>
				<p>Loading ....</p>
			</section>
		);
	return (
		<section
			className={`Menu-container ${
				!toggleMenuState ? 'Menu-container-toggle' : ''
			}`}
		>
			<div className="Menu-wrapper">
				<div className="Menu-lists">{categoryLists}</div>
			</div>
		</section>
	);
}

export default Menu;
