import { Rings } from 'react-loader-spinner';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../layouts/Navigation';
import Menu from '../layouts/Menu';
import {
	filterCategory,
	currencyConverter,
} from '../../utils/selectors';
import CartButton from '../CartButton';
import '../../styles/ProductDetails.scss';
import '../../styles/Notification.scss';
import SimilarProduct from '../SimilarProduct';
import List from '../List';
import MiddleFooter from '../layouts/MiddleFooter';
import Footer from '../layouts/Footer';
import Alert from '../Alert';

function ProductDetails({
	toggleMenu,
	toggleMenuState,
	categoryState,
	handleCart,
	alert,
	isCartOpen,
	toggleCartDisplay,
	cart,
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

	const firstProductName =
		selectedProduct && selectedProduct.name.split(' ').slice(0, -1).join(' ');
	const lastProductName =
		selectedProduct && selectedProduct.name.split(' ').slice(-1).join(' ');

	if (isCategoryExist.length > 0) {
		return (
			<section>
				<Navigation
					toggleMenuState={toggleMenuState}
					toggleMenu={toggleMenu}
					isCartOpen={isCartOpen}
					toggleCartDisplay={toggleCartDisplay}
					cart={cart}
				/>
				<Alert alert={alert} message={'Cart cleared successfully!'} />
				<div className="Product-container">
					<div className="Product-wrapper">
						<div>
							<div className="Back-btn-wrapper">
								<button className="Back-btn" onClick={() => history(-1)}>
									Go Back
								</button>
							</div>

							<div className="Category-product-grid text-left">
								<motion.div
									className={`product-image-card`}
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.5,
										ease: 'easeOut',
									}}
									viewport={{ once: true, amount: 0.1 }}
								>
									<img
										src={`${selectedProduct.image}`}
										loading="lazy"
										alt={selectedProduct.name}
										className="Product-image"
									/>
								</motion.div>
								<motion.div
									className="Product-card-grid"
									initial={{ opacity: 0, x: 100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, ease: 'easeOut' }}
									viewport={{ once: true, amount: 0.1 }}
								>
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
										{currencyConverter(selectedProduct.price)}
									</h4>
									<CartButton
										label={'Add to cart'}
										color={'colored'}
										addToCart={handleCart}
										item={selectedProduct}
									/>
								</motion.div>
							</div>
							<motion.div
								className="Category-feature-grid text-left"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, ease: 'easeOut' }}
								viewport={{ once: true, amount: 0.1 }}
							>
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
							</motion.div>
							<motion.div
								className="Gallery"
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, ease: 'easeOut' }}
								viewport={{ once: true }}
							>
								{Object.values(selectedProduct.gallery).map((item, index) => {
									return (
										<img
											key={index}
											src={`${item}`}
											className={`Gallery-card image-grow-${index}`
											}
											alt='Product Gallery'
										/>
									);
								})}
							</motion.div>
							<div className="text-center">
								<SimilarProduct selectedProduct={selectedProduct} />
							</div>
							<div>
								<List categoryState={categoryState} toggleMenu={toggleMenu} />
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
