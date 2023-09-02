import React from 'react';
import Navigation from '../layouts/Navigation';
import '../../styles/Category.scss';
import CategorySlice from '../CategorySlice';
import List from '../List';
import Menu from '../layouts/Menu';
import { useNavigate, useParams } from 'react-router-dom';
import MiddleFooter from '../layouts/MiddleFooter';
import Footer from '../layouts/Footer';

function Category({
	categoryState,
	toggleMenu,
	toggleMenuState,
	setToggleMenuState,
}) {
	const navigate = useNavigate();
	const param = useParams();
	let { category } = param;

	// console.log(category);
	return (
		<div className="Category">
			<Navigation toggleMenu={toggleMenu} />
			<div className="Category-header">
				<h1>Headphones</h1>
			</div>
			<CategorySlice categoryState={categoryState} param={category} />
			<div className="Category-container">
				<div className="Category-wrapper">
					<List categoryState={categoryState} toggleMenu={toggleMenu} />
					<Menu
						toggleMenuState={toggleMenuState}
						categoryState={categoryState}
					/>
					<MiddleFooter />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Category;
