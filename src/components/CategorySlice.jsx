import React from 'react';
import Button from './Button';
import '../styles/CategorySlice.scss';
import XX991 from '../images/home/mobile/image-product.jpg';

function CategorySlice({ categoryState, param }) {
	const headphoneCategory = categoryState.filter((category) => {
		return category.category === param;
	});

	console.log(headphoneCategory);

	const categories = headphoneCategory.map((category) => {
		// console.log(category.id);
		return (
			<div key={category.id}>
				<div className={`Image-card`}>
					<img src={XX991} />
				</div>
				<div className="Category-grid">
					<h2>New product</h2>
					<h1>XX99 Mark II Headphones</h1>
					<p>
						The new XX99 Mark II headphones is the pinnacle of pristine audio.
						It redefines your premium headphone experience by reproducing the
						balanced depth and precision of studio-quality sound.
					</p>
					<Button label={'See Product'} color={'colored'} />
				</div>
			</div>
		);
	});
	return (
		<section className="Category-container">
			<div className="Category-wrapper">{categories}</div>
		</section>
	);
}

export default CategorySlice;
