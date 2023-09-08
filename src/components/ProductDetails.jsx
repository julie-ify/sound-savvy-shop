import React from 'react';
import Navigation from './layouts/Navigation';
import Menu from './layouts/Menu';
import { useParams, useNavigate } from 'react-router-dom';
import {
	filterCategory,
	currencyConverter,
	productGallery,
} from '../utils/selectors';
import Notice from './Notice';
import CartButton from './CartButton';
import '../styles/ProductDetails.scss';
import SimilarProduct from './SimilarProduct';

function ProductDetails({ toggleMenu, toggleMenuState, categoryState, thumbnail }) {
	const history = useNavigate();
	const param = useParams();
	const { product, category } = param;
	// console.log(thumbnail)

	const selectedProduct = categoryState.find(
		(category) => category.slug.toLowerCase() === product.toLowerCase()
	);
	const checkCategory = filterCategory(categoryState, thumbnail);
	console.log(checkCategory)
	const isCategoryExist = checkCategory.filter(
		(categoryItem) =>
			categoryItem.category.toLowerCase() === category.toLowerCase()
	);

	// conditionally calculate height of pages
	let heightOfPages;
	if (category === 'headphones') {
		heightOfPages = 'headphones';
	} else if (category === 'speakers') {
		heightOfPages = 'speakers';
	} else if (category === 'earphones') {
		heightOfPages = 'earphones';
	}

	if (isCategoryExist.length > 0) {
		return (
			<section className={`${heightOfPages}-Category`}>
				<Navigation toggleMenu={toggleMenu} />
				<div className="Category-container">
					<div className="Category-wrapper">
						<div>
							<div>
								<button className="Back-btn" onClick={() => history(-1)}>
									Go back
								</button>
							</div>
							<div className={`Image-card id-${selectedProduct.id}`}></div>
							<div className="Category-product-details">
								<div className="Category-product-grid text-left">
									<h2 className="Md-text">New product</h2>
									<h1 className="Xlg-text">{selectedProduct.name}</h1>
									<p className="Sm-text">{selectedProduct.description}</p>
									<h4>{currencyConverter(selectedProduct)}</h4>
									<CartButton
										label={'Add to cart'}
										color={'colored'}
										route={`categories/${param}/${category.slug}`}
									/>
								</div>
								<div className="Category-product-grid text-left">
									<h1 className="Lg-text">Feature</h1>
									<p className="Sm-text">{selectedProduct.features}</p>
								</div>

								<div className="Category-product-grid text-left">
									<h1 className="Lg-text">In the box</h1>
									<ul>
										{selectedProduct.includes.length > 0 &&
											selectedProduct.includes.map((itemInTheBox, index) => {
												return (
													<li key={index} className="Product-in-the-box">
														<span>{`${itemInTheBox.quantity}x`}</span>
														<p className="Sm-text">{`${itemInTheBox.item}`}</p>
													</li>
												);
											})}
									</ul>
								</div>
								<div className="Category-product-grid">
									{productGallery(selectedProduct).map((item, index) => {
										return (
											<div key={index}>
												<div className={`${item}-${selectedProduct.id}`}></div>
											</div>
										);
									})}
								</div>
								<div className='Lg-text text-center'>you may also like</div>
								<div className='text-center'>
									<SimilarProduct selectedProduct={selectedProduct}/>
								</div>
							</div>
						</div>
						<Menu
							toggleMenuState={toggleMenuState}
							categoryState={categoryState}
							toggleMenu={toggleMenu}
							thumbnail={thumbnail}
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
