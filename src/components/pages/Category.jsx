import React from 'react';
import Navigation from '../layouts/Navigation';
import '../../styles/Category.scss';
import CategorySlice from '../CategorySlice';
import List from '../List';
import Menu from '../layouts/Menu';
import { useParams } from 'react-router-dom';
import MiddleFooter from '../layouts/MiddleFooter';
import Footer from '../layouts/Footer';

function Category({ categoryState, toggleMenu, toggleMenuState }) {
	const param = useParams();
	let { category } = param;

	return (
		<div className="Category">
			<Navigation toggleMenu={toggleMenu} />
			<div className="Category-header">
				<h1>Headphones</h1>
			</div>
			<CategorySlice categoryState={categoryState} param={category} />
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
}

export default Category;
