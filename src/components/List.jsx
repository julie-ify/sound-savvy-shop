import React from 'react';
import ListItem from './ListItem';
import '../styles/List.scss';
import { filterCategory } from '../utils/selectors';

function List({ categoryState, toggleMenu, thumbnail }) {
	const category = filterCategory(categoryState, thumbnail);
	console.log(category)
	const categoryLists =
		category.length > 0 ? (
			category.map((category) => {
				return (
					<div key={category.id}>
						<ListItem
							category={category}
							toggleMenu={toggleMenu && toggleMenu}
							// thumbnail={thumbnail}
						/>
					</div>
				);
			})
		) : (
			<section className="ListItem-container">
				<div className="ListItem-wrapper"></div>
				<p>Loading ....</p>
			</section>
		);
	return <div className="List-lists">{categoryLists}</div>;
}

export default List;
