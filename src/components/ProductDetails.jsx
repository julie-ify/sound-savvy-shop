import React from 'react';
import Navigation from './layouts/Navigation';
import Menu from './layouts/Menu';
import { useParams } from 'react-router-dom';
import { filterCategory, currencyConverter } from '../utils/selectors';
import Notice from './Notice';
import CartButton from './CartButton';
import '../styles/ProductDetails.scss';

function ProductDetails({ toggleMenu, toggleMenuState, categoryState }) {
	const param = useParams();
	const { product, category } = param;

	const selectedProduct = categoryState.find(
		(category) => category.slug.toLowerCase() === product.toLowerCase()
	);
	const checkCategory = filterCategory(categoryState);
	const isCategoryExist = checkCategory.filter(
		(categoryItem) =>
			categoryItem.category.toLowerCase() === category.toLowerCase()
	);

	if (isCategoryExist.length > 0) {
		return (
			<section className="Category">
				<Navigation toggleMenu={toggleMenu} />
				<div className="Category-container">
					<div className="Category-wrapper">
						<div>
							<div className={`Image-card id-${selectedProduct.id}`}></div>
							<div className="Category-product-details">
								<div className="Category-product-grid text-left">
									<h2 className="Md-text">New product</h2>
									<h1 className="Lg-text">{selectedProduct.name}</h1>
									<p className="Sm-text">{selectedProduct.description}</p>
									<h4>{currencyConverter(selectedProduct)}</h4>
									<CartButton
										label={'Add to cart'}
										color={'colored'}
										route={`categories/${param}/${category.slug}`}
									/>
								</div>
							</div>
						</div>
						<Menu
							toggleMenuState={toggleMenuState}
							categoryState={categoryState}
							toggleMenu={toggleMenu}
						/>
					</div>
				</div>
			</section>
		);
	} else {
		return <Notice />;
	}
}

export default ProductDetails;
