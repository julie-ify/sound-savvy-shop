import React from 'react';
import Button from './Button';
import '../styles/CategorySlice.scss';

function CategorySlice({ categories, param }) {
	const reversedCategories = [...categories].reverse();
	const categoriesList = reversedCategories.map((category) => {
		return (
			<div key={category.id}>
				<div className={`Image-card id-${category.id}`}></div>
				<div className="Category-grid text-center">
					<h2 className="Md-text">New product</h2>
					<h1 className="Lg-text">{category.name}</h1>
					<p className="Sm-text">{category.description}</p>
					<Button
						label={'See Product'}
						color={'colored'}
						route={`categories/${param}/${category.slug}`}
					/>
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
