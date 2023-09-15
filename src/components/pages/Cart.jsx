import React, { useEffect, useState } from 'react';
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
		<section
			className={`Cart-container ${isCartOpen ? 'Cart-visibility' : ''}`}
		>
			<div className="Cart-wrapper">
				<span onClick={handleClose} className="Cart-close-btn">
					X
				</span>
				<div className="Cart-outer-grid">
					<h1>CART {`(${cart.length})`}</h1>
					<span onClick={removeStorage}>Remove all</span>
				</div>
				<div className="Cart-inner-grid-wrapper">
					{cart.length > 0 ? (
						cart.map((lineItem) => {
							return (
								<div key={lineItem.id} className="Cart-inner-grid">
									<div
										className={`Cart-product-img Product-id-${lineItem.id}`}
									></div>
									<div className="Cart-price-tag">
										<h1>{lineItem.name.split(' ').slice(0, 1).join(' ')}</h1>
										<p>{currencyConverter(lineItem.price)}</p>
									</div>
									<CartQuantity
										lineItem={lineItem}
										updateCart={updateCart}
										setCart={setCart}
									/>
								</div>
							);
						})
					) : (
						<div>No items in the cart</div>
					)}
				</div>
				{cart.length > 0 && (
					<>
						<div className="Cart-last-grid">
							<p>Total</p>
							<h1>{updatedCartTotalAmount}</h1>
						</div>
						<div className="Checkout-btn">
							<Button
								label={'checkout'}
								color={'colored'}
								route={`categories/earphones/yx1-earphones`}
							/>
						</div>
					</>
				)}
			</div>
		</section>
	);
}

export default Cart;
