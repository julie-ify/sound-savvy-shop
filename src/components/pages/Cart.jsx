import React from 'react';
import '../../styles/Cart.scss';
import CartButton from '../CartButton';

function Cart({ cart, clearStorage, setAlert, isCartOpen, toggleCartDisplay }) {
	const removeStorage = () => {
		clearStorage();
		setAlert(true);
	};

	const handleClose = () => {
		toggleCartDisplay();
	};
	console.log(cart);

	return (
		<section
			className={`Cart-container ${isCartOpen ? 'Cart-visibility' : ''}`}
		>
			<div className="Cart-wrapper">
				<span onClick={handleClose}>X</span>
				<div className="Cart-outer-grid">
					<h1>
						CART <span>{`(${cart.length})`}</span>
					</h1>
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
									<div>{lineItem.name.split(' ').slice(0, -1).join(' ')}</div>
									<CartButton isBtn={false}/>
								</div>
							);
						})
					) : (
						<div>No items in the cart</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default Cart;
