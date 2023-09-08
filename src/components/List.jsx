import React from 'react';
import ListItem from './ListItem';
import '../styles/List.scss';
import { filterCategory } from '../utils/selectors';

function List({ categoryState, toggleMenu, thumbnail }) {
	const category = filterCategory(categoryState, thumbnail);

	const categoryLists =
		category.length > 0 ? (
			category.map((category, index) => {
				return (
					<div key={category.id}>
						<ListItem
							category={category}
							toggleMenu={toggleMenu && toggleMenu}
							thumbnailImg={category.thumbnailImg[index]}
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
