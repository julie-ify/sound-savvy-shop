import React from 'react';
import ListItem from './ListItem';
import '../styles/List.scss';
import { filterCategory } from '../utils/selectors';

function List({ categoryState, toggleMenu }) {
	const category = filterCategory(categoryState);

	const categoryLists =
		category.length > 0 ? (
			category.map((category, index) => {
				return (
					<div key={category.id}>
						<ListItem
							category={category}
							toggleMenu={toggleMenu && toggleMenu}
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
