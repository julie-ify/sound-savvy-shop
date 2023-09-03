import React from 'react';
import Button from './Button';
import '../styles/CategorySlice.scss';

function CategorySlice({ categories}) {

	const categoriesList = categories.reverse().map((category) => {
		return (
			<div key={category.id}>
				<div className={`Image-card id-${category.id}`}></div>
				<div className="Category-grid">
					<h2>New product</h2>
					<h1>{category.name}</h1>
					<p>{category.description}</p>
					<Button label={'See Product'} color={'colored'} />
				</div>
			</div>
		);
	});
	return (
		<section className="Category-container">
			<div className="Category-wrapper">{categoriesList}</div>
		</section>
	);
}

export default CategorySlice;
