import React, { useState } from 'react';
import '../styles/CartButton.scss';

function CartQuantity({ lineItem, setCart }) {
	const [quantity, setQuantity] = useState(lineItem.quantity);

	const cartStorage = JSON.parse(localStorage.getItem('soundSavvyCart')) || [];

	const updateCartStorage = (existingCart, existingQuantity) => {
		const updateStorage = cartStorage.map((item) => {
			if (item.id === existingCart.id) {
				const totalAmount = item.price * existingQuantity;
				return {
					...item,
					quantity: existingQuantity,
					total: totalAmount,
				};
			} else {
				return item;
			}
		});

		localStorage.setItem('soundSavvyCart', JSON.stringify(updateStorage));
		const updatedCart = JSON.parse(localStorage.getItem('soundSavvyCart'));
		setCart([...updatedCart]);
	};

	const handleIncrement = () => {
		setQuantity((prev) => prev + 1);
		updateCartStorage(lineItem, quantity + 1);
	};

	const handleDecrement = () => {
		setQuantity((prev) => prev - 1);
		updateCartStorage(lineItem, quantity - 1);
	};

	return (
		<div className="CartButton-main-grid">
			<div className="CartButton-btn-grid smaller">
				<button onClick={handleDecrement}>-</button>
				<span className="Currency-text">{quantity}</span>
				<button onClick={handleIncrement}>+</button>
			</div>
		</div>
	);
}

export default CartQuantity;
