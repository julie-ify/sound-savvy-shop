import React from 'react';
import Navigation from '../layouts/Navigation';
import '../../styles/Category.scss';
import CategorySlice from '../CategorySlice';
import List from '../List';
import Menu from '../layouts/Menu';
import { useParams } from 'react-router-dom';
import MiddleFooter from '../layouts/MiddleFooter';
import Footer from '../layouts/Footer';
import Notice from '../Notice';

function Category({ categoryState, toggleMenu, toggleMenuState, thumbnail }) {
	const param = useParams();
	let { category } = param;

	const categories = categoryState.filter((categoryItem) => {
		return categoryItem.category.toLowerCase() === category.toLocaleLowerCase();
	});

	// conditionally calculate height of pages
	let heightOfPages;
	if (category === 'headphones') {
		heightOfPages = 'headphones';
	} else if (category === 'speakers') {
		heightOfPages = 'speakers';
	} else if (category === 'earphones') {
		heightOfPages = 'earphones';
	}

	if (categories.length > 0) {
		return (
			<div className={`${heightOfPages}-Category`}>
				<Navigation toggleMenu={toggleMenu} />
				<div className="Category-header">
					<h1>{category}</h1>
				</div>
				<CategorySlice categories={categories} param={category} />
				<div className="Category-container">
					<div className="Category-wrapper">
						<List categoryState={categoryState} thumbnail={thumbnail} />
						<Menu
							toggleMenuState={toggleMenuState}
							categoryState={categoryState}
							toggleMenu={toggleMenu}
							thumbnail={thumbnail}
						/>
						<MiddleFooter />
					</div>
					<Footer />
				</div>
			</div>
		);
	} else {
		return <Notice />;
	}
}

export default Category;
