import React from 'react';
import Button from './Button';
import '../styles/CategorySlice.scss';

function CategorySlice({ categories, param }) {
	const reversedCategories = [...categories].reverse();
	// let categoryFirstNameBreak = b.split(' ').slice(-1).join('');
	// let categorySecondNameBreak = b.split(' ').slice(0, -1).join(' ');

	const categoriesList = reversedCategories.map((category, index) => {
		return (
			<div key={category.id} className={`Category-item-grid ${(index + 1) % 2 !== 0 ? '' : 'Order'}`}>
				<div className={`Image-card id-${category.id}`}></div>
				<div className="Category-grid">
					{reversedCategories[0].name === category.name ? (
						<h2 className="Md-text">New product</h2>
					) : (
						''
					)}
					<h1 className="Lg-text">
						{category.name.split(' ').slice(0, -1).join(' ')}
						<br />
						<span>{category.name.split(' ').slice(-1).join('')}</span>
					</h1>
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
