import React from 'react';
import CategoryItem from './CategoryItem';
import categories from '../database/category.json';
import '../styles/Category.scss'

function Category() {
	// console.log(categories)
	const categoryLists = categories.map((category) => {
		return (
			<div key={category.id}>
				<CategoryItem category={category}/>
			</div>
		);
	});
	return <div className='Category-lists'>{categoryLists}</div>;
}

export default Category;
