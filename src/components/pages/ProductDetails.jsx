import React from 'react';
import Navigation from '../layouts/Navigation';
import Menu from '../layouts/Menu';
import { useParams, useNavigate } from 'react-router-dom';
import {
	filterCategory,
	currencyConverter,
	productGallery,
} from '../../utils/selectors';
import CartButton from '../CartButton';
import '../../styles/ProductDetails.scss';
import '../../styles/Notification.scss';
import SimilarProduct from '../SimilarProduct';
import List from '../List';
import MiddleFooter from '../layouts/MiddleFooter';
import Footer from '../layouts/Footer';
import { Rings } from 'react-loader-spinner';
// import Cart from './Cart';
import Alert from '../Alert';

function ProductDetails({
	toggleMenu,
	toggleMenuState,
	categoryState,
	cart,
	handleCart,
	clearStorage,
	alert,
	setAlert,
	isCartOpen,
	toggleCartDisplay,
}) {
	const history = useNavigate();
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
	// conditionally calculate height of pages
	let heightOfPages;
	if (category === 'headphones') {
		heightOfPages = 'headphones';
	} else if (category === 'speakers') {
		heightOfPages = 'speakers';
	} else if (category === 'earphones') {
		heightOfPages = 'earphones';
	}

	const firstProductName =
		selectedProduct && selectedProduct.name.split(' ').slice(0, -1).join(' ');
	const lastProductName =
		selectedProduct && selectedProduct.name.split(' ').slice(-1).join(' ');

	if (isCategoryExist.length > 0) {
		return (
			<section className={`${heightOfPages}-Category`}>
				<Navigation
					toggleMenu={toggleMenu}
					isCartOpen={isCartOpen}
					toggleCartDisplay={toggleCartDisplay}
				/>
				{/* <Cart
					cart={cart}
					clearStorage={clearStorage}
					setAlert={setAlert}
					isCartOpen={isCartOpen}
					toggleCartDisplay={toggleCartDisplay}
				/> */}
				<Alert alert={alert} message={'Cart was successfully cleared'} />
				<div className="Product-container">
					<div className="Product-wrapper">
						<div>
							<div>
								<button className="Back-btn" onClick={() => history(-1)}>
									Go Back
								</button>
							</div>
							<div className="Category-product-grid text-left">
								<div
									className={`product-image-card id-${selectedProduct.id}-${selectedProduct.id}`}
								></div>
								<div className="Product-card-grid">
									{selectedProduct.new ? (
										<h2 className="Md-text">New product</h2>
									) : (
										''
									)}
									<div>
										<h1 className="Xlg-text">{firstProductName}</h1>
										<h1 className="Xlg-text">{lastProductName}</h1>
									</div>
									<p className="Sm-text">{selectedProduct.description}</p>
									<h4 className="Currency-text">
										{currencyConverter(selectedProduct)}
									</h4>
									<CartButton
										label={'Add to cart'}
										color={'colored'}
										addToCart={handleCart}
										isBtn={true}
										item={selectedProduct}
										// cart={cart}
									/>
								</div>
							</div>
							<div className="Category-feature-grid text-left">
								<div className="Category-feature">
									<h1 className="Lg-font-product">Features</h1>
									<p className="Sm-text">
										{selectedProduct.features.split('\n\n')[0]}
										<br />
										<br />
										{selectedProduct.features.split('\n\n')[1]}
									</p>
								</div>
								<div className="text-left Product-box">
									<h1 className="Lg-font-product">In the box</h1>
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
							</div>

							<div className="Gallery">
								{productGallery(selectedProduct).map((item, index) => {
									return (
										<div
											key={index}
											className={`Gallery-card ${item}-${selectedProduct.id}`}
										></div>
									);
								})}
							</div>

							<div className="text-center">
								<SimilarProduct selectedProduct={selectedProduct} />
							</div>
							<div>
								<List categoryState={categoryState} />
							</div>
							<div>
								<MiddleFooter />
							</div>
						</div>
						<Menu
							toggleMenuState={toggleMenuState}
							categoryState={categoryState}
							toggleMenu={toggleMenu}
						/>
					</div>
				</div>
				<div>
					<Footer />
				</div>
			</section>
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

export default ProductDetails;
