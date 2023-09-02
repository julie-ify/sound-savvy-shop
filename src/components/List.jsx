import React from 'react';
import ListItem from './ListItem';
import categories from '../database/category.json';
import '../styles/List.scss';

function List() {
	// console.log(categories)
	const categoryLists = categories.map((category) => {
		return (
			<div key={category.id}>
				<ListItem category={category} />
			</div>
		);
	});
	return <div className="List-lists">{categoryLists}</div>;
}

export default List;
