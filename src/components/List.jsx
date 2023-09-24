import React from 'react';
import ListItem from './ListItem';
import '../styles/List.scss';
import { filterCategory } from '../utils/selectors';

function List({ categoryState }) {
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
	return <div className="List-lists">{categoryLists}</div>;
}

export default List;
