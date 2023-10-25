import React from 'react';
import Navigation from '../layouts/Navigation';
import '../../styles/Category.scss';
import CategorySlice from '../CategorySlice';
import List from '../List';
import Menu from '../layouts/Menu';
import { useParams } from 'react-router-dom';
import MiddleFooter from '../layouts/MiddleFooter';
import Footer from '../layouts/Footer';
import { Rings } from 'react-loader-spinner';

function Category({
	categoryState,
	toggleMenu,
	toggleMenuState,
	isCartOpen,
	toggleCartDisplay,
}) {
	const param = useParams();
	let { category } = param;

	const categories = categoryState.filter((categoryItem) => {
		return categoryItem.category.toLowerCase() === category.toLocaleLowerCase();
	});

	if (categories.length > 0) {
		return (
			<div>
				<Navigation
					toggleMenu={toggleMenu}
					toggleMenuState={toggleMenuState}
					isCartOpen={isCartOpen}
					toggleCartDisplay={toggleCartDisplay}
				/>
				<div className="Category-header">
					<h1>{category}</h1>
				</div>
				<CategorySlice categories={categories} param={category} />
				<div className="Category-container">
					<div className="Category-wrapper">
						<List categoryState={categoryState} />
						<Menu
							toggleMenuState={toggleMenuState}
							categoryState={categoryState}
							toggleMenu={toggleMenu}
						/>
						<MiddleFooter />
					</div>
					<Footer />
				</div>
			</div>
		);
	} else {
		return (
			<div className="Loader">
				<Rings
					height="100vh"
					width="80"
					color="#d87d4a"
					radius="6"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
					ariaLabel="rings-loading"
				/>
			</div>
		);
	}
}

export default Category;
