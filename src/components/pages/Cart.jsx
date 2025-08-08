import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Cart.scss';
import CartQuantity from '../CartQuantity';
import { currencyConverter, totalCartAmount } from '../../utils/selectors';
import Button from '../Button';

function Cart({
	cart,
	clearStorage,
	setAlert,
	isCartOpen,
	toggleCartDisplay,
	updateCart,
	setCart,
}) {
	const [updatedCartTotalAmount, setUpdatedCartTotalAmount] = useState([]);

	useEffect(() => {
		setUpdatedCartTotalAmount(totalCartAmount(cart));
	}, [cart]);

	const removeStorage = () => {
		clearStorage();
		setAlert(true);
	};

	const handleClose = () => {
		toggleCartDisplay();
	};

	return (
		<AnimatePresence>
			{isCartOpen && (
				<motion.section
					className="Cart-container Cart-visibility"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={{
						hidden: { x: '100%', opacity: 0 },
						visible: { x: 0, opacity: 1 },
						exit: { x: '100%', opacity: 0 },
					}}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<div className="Cart-section">
						<div className="Cart-cover">
							<div className="Cart-wrapper">
								<span onClick={handleClose} className="Cart-close-btn">
									X
								</span>
								<div className="Cart-outer-grid">
									<h1>CART {`(${cart.length})`}</h1>
									{!!cart.length && (
										<span onClick={removeStorage}>Remove all</span>
									)}
								</div>
								<div className="Cart-inner-grid-wrapper">
									{cart.length > 0 ? (
										cart.map((lineItem, index) => (
											<motion.div
												key={lineItem.id}
												className="Cart-inner-grid"
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.9, delay: index * 0.1 }}
											>
												<img
													src={`${lineItem.cartImage}`}
													className="Cart-product-img"
													alt="Product"
												/>
												<div className="Cart-price-tag">
													<h1>
														{lineItem.name.split(' ').slice(0, 1).join(' ')}
													</h1>
													<p>{currencyConverter(lineItem.price)}</p>
												</div>
												<CartQuantity
													lineItem={lineItem}
													updateCart={updateCart}
													setCart={setCart}
												/>
											</motion.div>
										))
									) : (
										<div className="Sm-text">No item(s) in the cart</div>
									)}
								</div>
								{cart.length > 0 && (
									<>
										<div className="Cart-last-grid">
											<p>Total</p>
											<motion.h1
												key={updatedCartTotalAmount}
												initial={{ scale: 0.95, opacity: 0 }}
												animate={{ scale: 1.1, opacity: 1 }}
												transition={{
													type: 'spring',
													stiffness: 300,
													damping: 15,
												}}
											>
												{updatedCartTotalAmount}
											</motion.h1>
										</div>
										<div className="Checkout-btn" onClick={handleClose}>
											<Button
												label={'checkout'}
												color={'colored'}
												route={`checkout`}
												fromCart={true}
											/>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default Cart;
